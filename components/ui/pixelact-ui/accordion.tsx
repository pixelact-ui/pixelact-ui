import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent as ShadcnAccordionContent,
  AccordionItem as ShadcnAccordionItem,
} from "@/components/ui/accordion";

import "@/components/ui/pixelact-ui/styles/styles.css";

export interface PixelAccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  asChild?: boolean;
}

function AccordionItem({
  className,
  children,
  ...props
}: PixelAccordionItemProps) {
  return (
    <ShadcnAccordionItem
      className={cn(
        "border-dashed text-foreground border-b-4 border-foreground dark:border-ring relative",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnAccordionItem>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "pixel-font focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-foreground"
            d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7z"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  font?: "normal" | "pixel";
}

function AccordionContent({
  className,
  children,
  font,
  ...props
}: AccordionContentProps) {
  return (
    <div className="relative">
      <ShadcnAccordionContent
        className={cn(
          "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          font === "pixel" && "pixel-font",
          className
        )}
        {...props}
      >
        <div className="pb-4 pt-0 relative z-10 p-1">{children}</div>
      </ShadcnAccordionContent>

      <AccordionPrimitive.Content asChild forceMount />
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
