import React from "react";
import { Label as ShadLabel } from "../ui/label";

export const PixelLabel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadLabel>) => {
  return (
    <ShadLabel
      className={`pixel__label mb-2 mt-4 box-shadow-margin ${className}`}
      {...props}
    />
  );
};
