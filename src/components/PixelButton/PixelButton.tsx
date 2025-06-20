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
        default: "pixel-default__button box-shadow-margin",
        warning:
          "pixel-warning__button box-shadow-margin  text-p-warning-foreground ",
        success:
          "pixel-success__button box-shadow-margin  text-success-foreground ",
        destructive:
          "pixel-destructive__button box-shadow-margin bg-destructive text-destructive-foreground",
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
