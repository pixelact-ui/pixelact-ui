import * as PopoverPrimitive from "@radix-ui/react-popover";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  Popover as ShadcnPopover,
  PopoverAnchor as ShadcnPopoverAnchor,
  PopoverContent as ShadcnPopoverContent,
  PopoverTrigger as ShadcnPopoverTrigger,
} from "@/components/ui/popover";

import "@/components/ui/pixelact-ui/styles/styles.css";

const Popover = ShadcnPopover;

const PopoverTrigger = ShadcnPopoverTrigger;

const PopoverAnchor = ShadcnPopoverAnchor;

export const popOverVariants = cva("", {
  variants: {
    font: {
      normal: "",
      pixel: "pixel-font",
    },
  },
  defaultVariants: {
    font: "pixel",
  },
});

export interface PopoverProps
  extends React.ComponentProps<typeof PopoverPrimitive.Content>,
    VariantProps<typeof popOverVariants> {}

function PopoverContent({ children, font, className, ...props }: PopoverProps) {
  return (
    <ShadcnPopoverContent
      className={cn(
        "relative bg-card text-foreground border-none rounded-none mt-1 shadow-(--pixel-box-shadow)",
        popOverVariants({ font }),
        className
      )}
      {...props}
    >
      {children}
    </ShadcnPopoverContent>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
