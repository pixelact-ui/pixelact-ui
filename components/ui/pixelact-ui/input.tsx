import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";

export interface PixelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, PixelInputProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <input
        className={cn(
          "pixel__input pixel-font max-w-full outline-none p-2 bg-background text-foreground shadow-(--pixel-box-shadow) placeholder:text-sm md:placeholder:text-base box-shadow-margin disabled:opacity-40",
          disabled && "disabled:opacity-40 disabled:cursor-not-allowed",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "PixelInput";

export { Input };
