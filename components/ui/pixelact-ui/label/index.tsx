import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";
import { Label as ShadcnLabel } from "@/components/ui/label";

import "@/components/ui/pixelact-ui/styles/styles.css";

interface PixelLabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root> {
  asChild?: boolean;
}

function Label({ className, ...props }: PixelLabelProps) {
  return (
    <ShadcnLabel
      className={cn("pixel-font text-foreground", className)}
      {...props}
    />
  );
}

export { Label };
