"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import {
  Collapsible as ShadcnCollapsible,
  CollapsibleContent as ShadcnCollapsibleContent,
  CollapsibleTrigger as ShadcnCollapsibleTrigger,
} from "@radix-ui/react-collapsible";

import { cn } from "@/lib/utils";

import "@/components/ui/pixelact-ui/styles/styles.css";

export interface CollapsibleProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {
  asChild?: boolean;
}

function Collapsible({ children, ...props }: CollapsibleProps) {
  const { className } = props;

  return (
    <div className={cn("relative", className)}>
      <ShadcnCollapsible
        {...props}
        className={cn("pixel-font font-normal text-foreground", className)}
      >
        {children}
      </ShadcnCollapsible>
    </div>
  );
}

function CollapsibleTrigger({
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  const { className } = props;
  return (
    <ShadcnCollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn("pixel-font", className)}
      {...props}
    >
      {children}
    </ShadcnCollapsibleTrigger>
  );
}

function CollapsibleContent({
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  const { className } = props;
  return (
    <ShadcnCollapsibleContent
      data-slot="collapsible-content"
      className={cn("pixel-font", className)}
      {...props}
    >
      {children}
    </ShadcnCollapsibleContent>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
