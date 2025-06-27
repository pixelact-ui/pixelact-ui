import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import "./styles.css";
import { cn } from "@/lib/utils";

interface PixelDialogProps extends React.ComponentProps<typeof Dialog> {
  trigger?: React.ReactNode;
  contentProps?: React.ComponentProps<typeof DialogContent>;
}

export const PixelDialog = ({
  trigger,
  children,
  contentProps,
  ...dialogProps
}: PixelDialogProps) => {
  return (
    <Dialog {...dialogProps}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        {...contentProps}
        className={cn("pixel-dialog", contentProps?.className)}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
