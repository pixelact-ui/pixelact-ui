import { cn } from "@/lib/utils";
import "./styles.css";

export function PixelOrderedList({ children }: React.ComponentProps<"ol">) {
  return <ol className={cn("pixel__ordered-list")}>{children}</ol>;
}
