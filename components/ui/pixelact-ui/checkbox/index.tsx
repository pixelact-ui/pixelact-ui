import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

import "@/components/ui/pixelact-ui/styles/styles.css";

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  asChild?: boolean;
}

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    // <ShadcnCheckbox
    //   className={cn(
    //     "rounded-none size-4 ring-0 border-none shadow-(--pixel-box-shadow) box-shadow-margin",
    //     className
    //   )}
    //   {...props}
    // />

    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "rounded-none size-4 ring-0 border-none shadow-(--pixel-box-shadow) box-shadow-margin peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 border  transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="size-3.5"
        >
          <path
            className="text-foreground"
            d="M18 6h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm-2 2h2v-2h-2zm-2 2h2v-2h-2zm-2 0v2h2v-2zm-2-2h2v2H6zm0 0H4v-2h2z"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
