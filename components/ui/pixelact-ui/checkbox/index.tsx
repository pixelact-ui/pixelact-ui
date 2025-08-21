import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";

import "@/components/ui/pixelact-ui/styles/styles.css";

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  asChild?: boolean;
}

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <ShadcnCheckbox
      className={cn(
        "rounded-none size-4 ring-0 border-none shadow-(--pixel-box-shadow) box-shadow-margin",
        className
      )}
      {...props}
    />
  );
}

export { Checkbox };
