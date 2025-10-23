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
        "fixed pixel-font rounded-none shadow-(--pixel-box-shadow) box-shadow-margin bg-background left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="cursor-pointer"
        >
          <path
            className="fill-foreground"
            d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"
          />
        </svg>
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
