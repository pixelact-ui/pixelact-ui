import React from "react";
import { Label as ShadLabel } from "../ui/label";
import * as LabelPrimitive from "@radix-ui/react-label";

export const PixelLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) => {
  return (
    <ShadLabel
      className={`pixel__label pixel-font mb-2 mt-4 box-shadow-margin leading-normal ${className}`}
      {...props}
    />
  );
};
