import React from "react";
import { Input as ShadInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import "./styles.css";

export const PixelInput = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof ShadInput>) => {
  const disabledClass = disabled ? "disabled" : "";
  return (
    <input
      className={cn(
        "pixel__input pixel-font shadow-pixel-box-shadow disabled:opacity-40",
        disabledClass,
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
};
