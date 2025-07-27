import React from "react";
import { Button as ShadButton } from "@/components/ui/button";
import "./styles.css";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "pixel__button pixel-font outline-none rounded-none cursor-pointer box-shadow-margin ",
  {
    variants: {
      variant: {
        default: "pixel-default__button box-shadow-margin",
        warning: "pixel-warning__button box-shadow-margin",
        success: "pixel-success__button box-shadow-margin",
        destructive: "pixel-destructive__button box-shadow-margin",
        link: "pixel-link__button bg-transparent text-link underline-offset-4 underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const PixelButton = ({
  children,
  className,
  asChild = false,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    size?: "default" | "sm" | "lg";
    asChild?: boolean;
  }) => {
  return (
    <ShadButton
      className={cn(buttonVariants({ variant, className }))}
      data-text={children}
      size={size}
      asChild={asChild}
      {...props}
    >
      {children}
    </ShadButton>
  );
};
