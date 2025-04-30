import { cn } from "@/lib/utils";
import "./styles.css";

export function PixelUnorderedList({ children }: React.ComponentProps<"ul">) {
  return <ul className={cn("pixel__unordered-list")}>{children}</ul>;
}
