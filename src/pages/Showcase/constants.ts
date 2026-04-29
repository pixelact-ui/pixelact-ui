export interface ShowcaseProject {
  name: string;
  url: string;
  description: string;
  image: string;
}

export const projects: ShowcaseProject[] = [
  {
    name: "GitGarden",
    url: "https://www.trygitgarden.com/",
    description:
      "Your GitHub activity, as a pixel art character. Customize every detail — hair, outfit, accessories, colors. Your sprite stats evolve based on your GitHub activity. Drop a single line into your README and your sprite lives there, always up to date.",
    image:
      "https://www.trygitgarden.com/assets/pixel-art-cartoon-rubber-duck-with-straw-hat-icon-png.png",
  },
];
