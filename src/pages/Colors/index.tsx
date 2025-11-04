import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/pixelact-ui/select";
import { cn } from "@/lib/utils";
import { colorPalettes } from "./constants";
import { ColorFormat } from "@/src/utils";
import ColorCard from "./components/ColorCard";

const Colors: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<ColorFormat>("hex");

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl pixel-font">Color Palettes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore curated collection of color palettes perfect for pixel art,
            retro gaming, and modern digital interfaces. Click any color to copy
            its value.
          </p>
        </div>

        {/* Format Selector */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            <label className="text-sm pixel-font">Format:</label>
            <Select
              value={selectedFormat}
              onValueChange={(value: ColorFormat) => setSelectedFormat(value)}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hex">HEX</SelectItem>
                <SelectItem value="rgb">RGB</SelectItem>
                <SelectItem value="hsl">HSL</SelectItem>
                <SelectItem value="oklch">OKLCH</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Color Palettes */}
        <div className="space-y-12">
          {colorPalettes.map((palette, paletteIndex) => (
            <div key={paletteIndex} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl pixel-font">{palette.name}</h2>
                <p className="text-muted-foreground">{palette.description}</p>
              </div>

              <div
                className={cn(
                  "grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                )}
              >
                {palette.colors.map((color, colorIndex) => (
                  <ColorCard
                    key={colorIndex}
                    color={color}
                    format={selectedFormat}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
