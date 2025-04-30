import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'home': "url('/src/assets/images/home-bg.jpg')",
            },
        },

    },
    plugins: [],
};

export default config;