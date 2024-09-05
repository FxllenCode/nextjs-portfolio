import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  safelist: [
    'bg-black'
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        // Add any other colors you use regularly
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
export default config;
