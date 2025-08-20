import type React from "react";
import { forwardRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";

const avatarVariants = cva("", {
  variants: {
    font: {
      normal: "",
      pixel: "pixel-font",
    },
    variant: {
      default: "",
      square: "shadow-(--pixel-box-shadow) box-shadow-margin",
      round: "rounded-full",
    },
    size: {
      small: "h-8 w-8",
      medium: "h-12 w-12",
      large: "h-16 w-16",
    },
  },
  defaultVariants: {
    font: "pixel",
    variant: "square",
    size: "medium",
  },
});

const Avatar = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    font?: "normal" | "pixel";
    variant?: "default" | "round" | "square";
    size?: "small" | "medium" | "large";
  }
>(({ className = "", font, variant, size = "medium", ...props }, ref) => {
  const isRound = variant === "round";

  return (
    <div className={cn("relative size-max", className)}>
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 10 }}
      >
        {isRound && (
          <>
            {size === "large" && (
              <>
                <div
                  className={
                    "absolute top-[-1px] left-[19px] right-[19px] h-[5px] bg-foreground dark:bg-ring"
                  }
                ></div>
                <div className="absolute top-[3px] left-[9px] h-[5px] bg-foreground dark:bg-ring w-[10px]"></div>
                <div className="absolute top-[3px] right-[9px] h-[5px] bg-foreground dark:bg-ring w-[10px]"></div>

                <div className="absolute top-[8px] left-[5px] h-[5px] bg-foreground dark:bg-ring w-[5px]"></div>
                <div className="absolute top-[8px] right-[5px] h-[5px] bg-foreground dark:bg-ring w-[5px]"></div>

                <div className="absolute top-[13px] left-0 h-[38px] bg-foreground dark:bg-ring w-[5px]"></div>
                <div className="absolute top-[13px] right-0 h-[38px] bg-foreground dark:bg-ring w-[5px]"></div>

                <div className="absolute bottom-[8px] left-[5px] h-[5px] bg-foreground dark:bg-ring w-[5px]"></div>
                <div className="absolute bottom-[8px] right-[5px] h-[5px] bg-foreground dark:bg-ring w-[5px]"></div>

                <div className="absolute bottom-[3px] left-[9px] h-[5px] bg-foreground dark:bg-ring w-[10px]"></div>
                <div className="absolute bottom-[3px] right-[9px] h-[5px] bg-foreground dark:bg-ring w-[10px]"></div>
                <div
                  className={
                    "absolute bottom-[-1px] left-[19px] right-[19px] h-[5px] bg-foreground dark:bg-ring"
                  }
                ></div>
              </>
            )}
            {size === "medium" && (
              <>
                <div
                  className={
                    "absolute top-0 left-[10px] right-[10px] h-[5px] bg-foreground dark:bg-ring"
                  }
                ></div>

                <div className="absolute top-[5px] left-[5px] h-[5px] bg-foreground dark:bg-ring w-[5px]"></div>
                <div className="absolute top-[5px] right-[5px] h-[5px] bg-foreground dark:bg-ring w-[5px]"></div>

                <div className="absolute top-[10px] left-0 h-[28px] bg-foreground dark:bg-ring w-[5px]"></div>
                <div className="absolute top-[10px] right-0 h-[28px] bg-foreground dark:bg-ring w-[5px]"></div>

                <div className="absolute bottom-[5px] left-[5px] h-[5px] bg-foreground dark:bg-ring w-[5px]"></div>
                <div className="absolute bottom-[5px] right-[5px] h-[5px] bg-foreground dark:bg-ring w-[5px]"></div>

                <div
                  className={
                    "absolute bottom-0 left-[10px] right-[10px] h-[5px] bg-foreground dark:bg-ring"
                  }
                ></div>
              </>
            )}
            {size === "small" && (
              <>
                <div
                  className={
                    "absolute top-0 left-[7px] right-[7px] h-[3px] bg-foreground dark:bg-ring"
                  }
                ></div>

                <div className="absolute top-[3px] left-[2px] h-[3px] bg-foreground dark:bg-ring w-[5px]"></div>
                <div className="absolute top-[3px] right-[2px] h-[3px] bg-foreground dark:bg-ring w-[5px]"></div>

                <div className="absolute top-[6px] left-[0px] h-[3px] bg-foreground dark:bg-ring w-[3px]"></div>
                <div className="absolute top-[6px] right-[0px] h-[3px] bg-foreground dark:bg-ring w-[3px]"></div>

                <div className="absolute top-[9px] left-[-2px] h-[14px] bg-foreground dark:bg-ring w-[3px]"></div>
                <div className="absolute top-[9px] right-[-2px] h-[14px] bg-foreground dark:bg-ring w-[3px]"></div>

                <div className="absolute bottom-[6px] left-[0px] h-[3px] bg-foreground dark:bg-ring w-[3px]"></div>
                <div className="absolute bottom-[6px] right-[0px] h-[3px] bg-foreground dark:bg-ring w-[3px]"></div>

                <div className="absolute bottom-[3px] left-[2px] h-[3px] bg-foreground dark:bg-ring w-[5px]"></div>
                <div className="absolute bottom-[3px] right-[2px] h-[3px] bg-foreground dark:bg-ring w-[5px]"></div>

                <div
                  className={
                    "absolute bottom-0 left-[7px] right-[7px] h-[3px] bg-foreground dark:bg-ring"
                  }
                ></div>
              </>
            )}
          </>
        )}
      </div>

      <AvatarPrimitive.Root
        ref={ref}
        data-slot="avatar"
        className={cn(
          "relative  flex size-10 shrink-0 overflow-hidden text-xs",
          avatarVariants({ font, variant, size })
        )}
        {...props}
      />
    </div>
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  font?: "normal" | "retro";
  variant?: "default" | "retro" | "pixel";
}

const AvatarImage = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, font, ...props }, ref) => {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      data-slot="avatar-image"
      className={cn(
        "aspect-square h-full w-full",
        font === "retro" && "retro",
        className
      )}
      {...props}
    />
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    data-slot="avatar-fallback"
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-foreground",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
