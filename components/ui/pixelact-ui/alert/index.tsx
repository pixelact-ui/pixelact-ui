import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Alert as ShadcnAlert,
  AlertDescription as ShadcnAlertDescription,
  AlertTitle as ShadcnAlertTitle,
} from "@/components/ui/alert";
import "@/components/ui/pixelact-ui/styles/styles.css";

const alertVariants = cva("", {
  variants: {
    font: {
      normal: "",
      pixel: "pixel-font",
    },
    variant: {
      default: "bg-card text-card-foreground",
      destructive:
        "text-destructive shadow-(--pixel-box-shadow-destructive) bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
    },
  },
  defaultVariants: {
    variant: "default",
    font: "pixel",
  },
});

export interface AlertProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {}

function Alert({ children, ...props }: AlertProps) {
  const { variant, className, font } = props;

  return (
    <ShadcnAlert
      {...props}
      className={cn(
        "relative shadow-(--pixel-box-shadow) box-shadow-margin rounded-none border-none bg-background",
        alertVariants({ variant, font }),
        className
      )}
    >
      {children}
    </ShadcnAlert>
  );
}

function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ShadcnAlertTitle
      className={cn(
        "line-clamp-1 text-base underline mb-2 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ShadcnAlertDescription
      className={cn(
        "grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
