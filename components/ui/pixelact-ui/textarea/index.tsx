import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import "@/components/ui/pixelact-ui/styles/styles.css";

const pixelTextAreaVariants = cva(
  "pixel__textarea pixel-font rounded-none shadow-(--pixel-box-shadow) m-(--box-shadow-width) transition-colors",
  {
    variants: {
      variant: {
        default: "bg-white text-black ",
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

export interface PixelTextAreaProps
  extends React.ComponentProps<typeof ShadcnTextarea>,
    VariantProps<typeof pixelTextAreaVariants> {}

const Textarea = React.forwardRef<
  React.ComponentRef<typeof ShadcnTextarea>,
  PixelTextAreaProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <ShadcnTextarea
      data-slot="textarea"
      className={cn(pixelTextAreaVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "PixelTextarea";

export { Textarea };
