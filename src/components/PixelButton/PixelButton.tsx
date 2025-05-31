import React from "react";
import { Button as ShadButton } from "@/components/ui/button";
import "./styles.css";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "pixel__button pixel-font rounded-none cursor-pointer box-shadow-margin",
  {
    variants: {
      variant: {
        default: "pixel-default__button box-shadow-margin bg-white text-black",
        warning:
          "pixel-warning__button box-shadow-margin bg-warning text-warning-foreground hover:bg-warning/70",
        success:
          "pixel-success__button box-shadow-margin bg-success text-success-foreground hover:bg-success/70",
        destructive:
          "pixel-destructive__button box-shadow-margin bg-destructive text-destructive-foreground hover:bg-destructive/70",
        outline: "pixel-outline__button box-shadow-margin bg-white text-black",
        secondary:
          "pixel-secondary__button box-shadow-margin bg-secondary text-secondary-foreground hover:bg-secondary/70",
        ghost: "pixel-ghost__button text-white",
        link: "pixel-link__button bg-transparent text-link underline-offset-4 underline hover:bg-transparent hover:text-link/70",
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
      className={cn(buttonVariants({ variant, className }), className)}
      data-text={children}
      size={size}
      asChild={asChild}
      {...props}
    >
      {children}
    </ShadButton>
  );
};
