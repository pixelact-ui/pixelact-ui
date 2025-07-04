import React from "react";
import { Textarea as ShadTextArea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import "./styles.css";

export const PixelTextArea = ({
  className,
  ...props
}: React.ComponentProps<"textarea">) => {
  return (
    <ShadTextArea
      data-slot="textarea"
      className={cn("pixel__textarea pixel-font rounded-none", className)}
      {...props}
    />
  );
};
