import React from "react";
import { cn } from "@/lib/utils";
import "./styles.css";

export const PixelInput = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<"input">) => {
  const disabledClass = disabled ? "disabled" : "";
  return (
    <input
      className={cn(
        "pixel__input pixel-font max-w-full outline-none p-2 bg-background text-foreground placeholder:text-sm md:placeholder:text-base box-shadow-margin disabled:opacity-40",
        disabledClass,
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
};
