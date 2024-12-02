import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        emerald: {
          '550': '#239573',
          '750': '#1D7C5F'
        },
      },
      inset: {
        'minus120': '-120px'
      },
      height: (() => {
        const heights: any = {};
        for (let i = 0; i <= 600; i++) {
          heights[`${i}px`] = `${i}px`;
        }
        for (let i = 0; i <= 100; i++) {
          heights[`${i}vh`] = `${i}vh`;
        }
        return heights;
      })(),
      width: (() => {
        const widths: any = {};
        for (let i = 0; i <= 200; i++) {
          widths[`${i}px`] = `${i}px`;
        }
        for (let i = 0; i <= 100; i++) {
          widths[`${i}vh`] = `${i}vh`;
        }
        return widths;
      })(),
    },
  },
  plugins: [],
};
export default config;
