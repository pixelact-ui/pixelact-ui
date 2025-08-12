import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog as ShadcnDialog,
  DialogContent as ShadcnDialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTitle as ShadcnDialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import "@/components/ui/pixelact-ui/styles/styles.css";

export interface PixelDialogContentProps
  extends React.ComponentProps<typeof ShadcnDialogContent> {
  trigger?: React.ReactNode;
}

const Dialog = ({ ...props }: React.ComponentProps<typeof ShadcnDialog>) => {
  return <ShadcnDialog {...props} />;
};

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof ShadcnDialogTitle>,
  React.ComponentPropsWithoutRef<typeof ShadcnDialogTitle>
>(({ className, ...props }, ref) => {
  return (
    <ShadcnDialogTitle
      className={cn("pixel__dialog-title pixel-font font-normal", className)}
      ref={ref}
      {...props}
    />
  );
});

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof ShadcnDialogContent>,
  PixelDialogContentProps
>(({ className, ...props }, ref) => {
  return (
    <ShadcnDialogContent
      className={cn(
        "pixel__dialog rounded-none shadow-(--pixel-box-shadow) pixel-font bg-background",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
};
