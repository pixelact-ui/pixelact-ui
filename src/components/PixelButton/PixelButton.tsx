import React from "react";
import { Button as ShadButton } from "@/components/ui/button";
import "./styles.css";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("pixel__button rounded-none cursor-pointer", {
  variants: {
    variant: {
      default:
        "pixel-default__button box-shadow-margin bg-white hover:bg-black/10",
      warning:
        "pixel-warning__button box-shadow-margin bg-warning hover:bg-warning/70",
      success:
        "pixel-success__button box-shadow-margin bg-success hover:bg-success/70",
      destructive:
        "pixel-destructive__button box-shadow-margin bg-destructive hover:bg-destructive/70",
      outline:
        "pixel-default__button box-shadow-margin bg-white hover:bg-black/10",
      secondary:
        "pixel-secondary__button box-shadow-margin bg-secondary hover:bg-secondary/70",
      ghost: "pixel-ghost__button",
      link: "pixel-link__button bg-transparent text-primary underline-offset-4 hover:underline hover:bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const PixelButton = ({
  children,
  className,
  asChild = false,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ShadButton> &
  VariantProps<typeof buttonVariants> & {
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
