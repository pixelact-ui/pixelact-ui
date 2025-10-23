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
        dropdown_root: cn("relative"),
        months_dropdown: cn("text-foreground p-2"),
        years_dropdown: cn("text-foreground p-2"),
        ...classNames,
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className={cn("size-6", className)}
                {...props}
              >
                <path
                  className="fill-foreground"
                  d="M16 5v2h-2V5zm-4 4V7h2v2zm-2 2V9h2v2zm0 2H8v-2h2zm2 2v-2h-2v2zm0 0h2v2h-2zm4 4v-2h-2v2z"
                />
              </svg>
            );
          }

          if (orientation === "right") {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className={cn("size-5", className)}
                {...props}
              >
                <path
                  className="fill-foreground"
                  d="M8 5v2h2V5zm4 4V7h-2v2zm2 2V9h-2v2zm0 2h2v-2h-2zm-2 2v-2h2v2zm0 0h-2v2h2zm-4 4v-2h2v2z"
                />
              </svg>
            );
          }

          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className={cn("size-6", className)}
              {...props}
            >
              <path
                className="fill-foreground"
                d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7z"
              />
            </svg>
          );
        },
      }}
      {...props}
    />
  );
}

export { Calendar };
