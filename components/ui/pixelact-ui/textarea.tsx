import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";

const pixelTextAreaVariants = cva(
  "pixel__textarea pixel-font rounded-none shadow-(--pixel-box-shadow) box-shadow-margin transition-colors",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
      },
      size: {
        default: "min-h-16 px-3 py-2 text-sm",
        sm: "min-h-12 px-2 py-1 text-xs",
        lg: "min-h-20 px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        pixelTextAreaVariants(),
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
