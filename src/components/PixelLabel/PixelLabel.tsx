import { Label as ShadLabel } from "../ui/label";

export function PixelLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadLabel>) {
  return <ShadLabel className={`pixel__label mb-2 ${className}`} {...props} />;
}
