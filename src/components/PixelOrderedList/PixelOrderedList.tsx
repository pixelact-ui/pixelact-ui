import React from "react";
import { cn } from "@/lib/utils";
import "./styles.css";

export const PixelOrderedList = ({ children }: React.ComponentProps<"ol">) => {
  return <ol className={cn("pixel__ordered-list")}>{children}</ol>;
};
