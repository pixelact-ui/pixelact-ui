export { default as routes } from "./routes";


// Color format conversion functions
export const hexToHsl = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                h = 0;
        }
        h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
        l * 100
    )}%)`;
};

export const hexToRgb = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
};

export const hexToOklch = (hex: string): string => {
    // More accurate OKLCH conversion
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    // Convert to linear RGB
    const toLinear = (c: number) =>
        c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    const rLin = toLinear(r);
    const gLin = toLinear(g);
    const bLin = toLinear(b);

    // Approximate OKLCH values
    const l = Math.round(
        (0.4122214708 * rLin + 0.5363325363 * gLin + 0.0514459929 * bLin) * 100
    );
    const a = 0.2104542553 * rLin + 0.793617785 * gLin - 0.0040720468 * bLin;
    const b_val = 1.9779984951 * rLin - 2.428592205 * gLin + 0.4505937099 * bLin;

    const c = Math.round(Math.sqrt(a * a + b_val * b_val) * 100) / 100;
    const h = Math.round(((Math.atan2(b_val, a) * 180) / Math.PI + 360) % 360);

    return `oklch(${l}% ${c} ${h})`;
};

export type ColorFormat = "hex" | "rgb" | "hsl" | "oklch";

export const formatColor = (hex: string, format: ColorFormat): string => {
    switch (format) {
        case "hex":
            return hex.toLowerCase();
        case "rgb":
            return hexToRgb(hex);
        case "hsl":
            return hexToHsl(hex);
        case "oklch":
            return hexToOklch(hex);
        default:
            return hex;
    }
};