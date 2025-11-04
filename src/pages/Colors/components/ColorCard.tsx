import { ColorFormat, formatColor } from "@/src/utils";
import { useState } from "react";

const ColorCard: React.FC<{
  color: string;
  format: ColorFormat;
}> = ({ color, format }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const formattedColor = formatColor(color, format);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedColor);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy color:", err);
    }
  };

  const getBestTextColor = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

  const textColor = getBestTextColor(color);

  return (
    <div className="flex flex-col gap-2 flex-1">
      <div
        className="cursor-pointer p-0 hover:scale-105 relative overflow-hidden group"
        onClick={copyToClipboard}
      >
        <div
          className="w-full h-48 border-dashed border-2 relative flex items-center justify-center group-hover:border-foreground/30 transition-colors"
          style={{ backgroundColor: color }}
        >
          {/* Copy indicator overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
              copied ? "opacity-100" : "opacity-0 group-hover:opacity-80"
            }`}
            style={{ color: textColor }}
          >
            <span className="text-xs bg-black/20 backdrop-blur-sm px-2 py-1 rounded pixel-font">
              {copied ? "Copied!" : "Copy"}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-1 pixel-font">
        <p
          className={`text-xs transition-colors ${
            copied ? "text-success font-semibold" : "text-muted-foreground"
          }`}
        >
          {formattedColor}
        </p>
      </div>
    </div>
  );
};

export default ColorCard;
