import React from "react";
import { Input as ShadInput } from "@/components/ui/input";
import "./styles.css";
import { cn } from "@/lib/utils";

export const PixelInput = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof ShadInput>) => {
  const disabledClass = disabled ? "disabled" : "";
  return (
    <input
      className={cn("pixel__input", disabledClass, className)}
      disabled={disabled}
      {...props}
    />
  );
};
