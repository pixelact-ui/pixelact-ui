import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Badge as ShadcnBadge } from "@/components/ui/badge";

const badgeVariants = cva("border-none", {
  variants: {
    font: {
      normal: "",
      pixel: "pixel-font",
    },
    variant: {
      default: "bg-primary",
      destructive: "bg-destructive",
      outline: "bg-background",
      secondary: "bg-secondary",
    },
  },
  defaultVariants: {
    font: "pixel",
    variant: "default",
  },
});

export interface BadgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({ children, font, variant, ...props }: BadgeProps) {
  return (
    <div className={cn("relative inline-flex")}>
      <ShadcnBadge
        {...props}
        className={cn(
          "rounded-none shadow-(--pixel-box-shadow) box-shadow-margin",
          badgeVariants({ variant, font })
        )}
        variant={variant}
      >
        {children}
      </ShadcnBadge>
    </div>
  );
}

export { Badge };
