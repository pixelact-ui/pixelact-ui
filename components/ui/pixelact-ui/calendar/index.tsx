import { type VariantProps, cva } from "class-variance-authority";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";

import { buttonVariants } from "@/components/ui/button";
import "@/components/ui/pixelact-ui/styles/styles.css";
import { ComponentProps } from "react";

const calendarVariants = cva("bg-card text-card-foreground", {
  variants: {
    font: {
      normal: "",
      pixel: "pixel-font",
    },
  },
  defaultVariants: {
    font: "pixel",
  },
});

export type CalendarProps = ComponentProps<typeof DayPicker> &
  VariantProps<typeof calendarVariants>;

function Calendar({ className, classNames, font, ...props }: CalendarProps) {
  const hasDropdowns = props.captionLayout === "dropdown";
  return (
    <ShadcnCalendar
      className={cn(
        "border-none shadow-(--pixel-box-shadow) box-shadow-margin",
        calendarVariants({
          className,
          font,
        })
      )}
      classNames={{
        today: cn("bg-foreground/10"),
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 flex items-center justify-center hover:opacity-50"
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 rounded-none font-sm aria-selected:opacity-100"
        ),
        day: cn("relative rounded-none group/day select-none"),
        caption_label: `flex gap-2 p-1  ${
          hasDropdowns ? "shadow-(--pixel-box-shadow) box-shadow-margin" : ""
        }`,
        months_dropdown: cn("text-black p-2"),
        years_dropdown: cn("text-black p-2"),
        ...classNames,
      }}
      {...props}
    />
  );
}

export { Calendar };
