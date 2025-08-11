"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog as ShadcnDialog,
  DialogContent as ShadcnDialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import "@/components/ui/pixelact-ui/styles/styles.css";
import "./dialog.css";

export interface PixelDialogContentProps
  extends React.ComponentProps<typeof ShadcnDialogContent> {
  trigger?: React.ReactNode;
}

const Dialog = ({ ...props }: React.ComponentProps<typeof ShadcnDialog>) => {
  return <ShadcnDialog {...props} />;
};

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof ShadcnDialogContent>,
  PixelDialogContentProps
>(({ className, ...props }, ref) => {
  return (
    <ShadcnDialogContent
      className={cn("pixel__dialog rounded-none", className)}
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
