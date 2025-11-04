interface ColorPalette {
    name: string;
    description: string;
    colors: string[];
}

export const colorPalettes: ColorPalette[] = [
    {
        name: "Gameboy Classic",
        description: "Monochromatic palette inspired by the original Game Boy.",
        colors: ["#9bbc0f", "#8bac0f", "#306230", "#0f380f"],
    },
    {
        name: "NES Palette",
        description: "Palette used in the Nintendo Entertainment System (NES).",
        colors: [
            "#000000",
            "#FFFFFF",
            "#FF0000",
            "#00FF00",
            "#0000FF",
            "#FFFF00",
            "#FF00FF",
            "#00FFFF",
            "#C0C0C0",
            "#808080",
            "#800000",
            "#008000",
            "#000080",
            "#808000",
            "#800080",
            "#008080",
        ],
    },
    {
        name: "8-Bit Arcade",
        description: "Vibrant colors inspired by classic 8-bit arcade games.",
        colors: ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"],
    },
    {
        name: "Vintage Computer",
        description: "Muted tones reflecting early computer graphics.",
        colors: ["#7F7F7F", "#BFBFBF", "#FF7F50", "#87CEEB", "#32CD32"],
    },
    {
        name: "Pastel Retro",
        description: "Soft pastel colors reminiscent of vintage aesthetics.",
        colors: ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF"],
    },
    {
        name: "Neon Retro",
        description:
            "Colors reflecting the iconic neon signage and bold fashion of the late 20th century.",
        colors: ["#5ED9F2", "#6839EB", "#F5E612", "#EC13A4", "#341B5F"],
    },
    {
        name: "Summer Retro",
        description: "Evoking the relaxed vibe of vintage summer holidays.",
        colors: ["#B3E9BB", "#FFF9EB", "#52C8E2", "#F5D820", "#FA355C"],
    },
    {
        name: "SLSO8 Palette",
        description: "Beautiful palette created by @solosalsero.",
        colors: [
            "#ffecd6",
            "#ffd4a3",
            "#ffaa5e",
            "#d08159",
            "#8d697a",
            "#544e68",
            "#203c56",
            "#0d2b45",
        ],
    },
    {
        name: "Cyberpunk Neon",
        description: "Reflects the cyberpunk genre's vision of high-tech, neon-lit urban landscapes.",
        colors: [
            "#EC00F0",
            "#54EFEA",
            "#51CCDC",
            "#600DB5",
            "#1F004B",
        ],
    },
];