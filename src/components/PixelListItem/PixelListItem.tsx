import { cn } from "@/lib/utils";
import "./styles.css";

interface PixelListItemProps extends React.ComponentProps<"li"> {
  bulletType?: "disc" | "circle" | "square" | "arrow" | "none";
}

export function PixelListItem({ children, bulletType }: PixelListItemProps) {
  const bulletClass = bulletType
    ? `pixel__list-item--${bulletType}`
    : "pixel__list-item--disc";

  return <li className={cn("pixel__list-item", bulletClass)}>{children}</li>;
}
