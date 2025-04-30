import { Button as ShadButton } from "@/components/ui/button";
import "./styles.css";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("pixel__button rounded-none cursor-pointer", {
  variants: {
    variant: {
      default: "pixel-default__button bg-white hover:bg-white/70",
      warning: "pixel-warning__button bg-warning hover:bg-warning/70",
      success: "pixel-success__button bg-success hover:bg-success/70",
      destructive:
        "pixel-destructive__button bg-destructive hover:bg-destructive/70",
      outline: "pixel-default__button bg-white hover:bg-white/70",
      secondary: "pixel-secondary__button bg-secondary hover:bg-secondary/70",
      ghost: "pixel-ghost__button",
      link: "pixel-link__button bg-transparent text-primary underline-offset-4 hover:underline hover:bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function PixelButton({
  children,
  className,
  asChild = false,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ShadButton> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
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
}
