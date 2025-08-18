import * as React from "react";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Dialog as ShadcnDialog,
  DialogContent as ShadcnDialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogTitle as ShadcnDialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import "@/components/ui/pixelact-ui/styles/styles.css";
import { XIcon } from "lucide-react";

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
      className={cn("pixel-font text-foreground", className)}
      ref={ref}
      {...props}
    />
  );
});

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed pixel-font rounded-none shadow-(--pixel-box-shadow) bg-background left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <XIcon className="text-foreground cursor-pointer" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));

export {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
};
