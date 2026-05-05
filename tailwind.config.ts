import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: {
        bdp: {
          bg: '#0A0A0A',
          card: '#141414',
          red: '#E8272A',
          white: '#FFFFFF',
          border: '#2A2A2A'
        },
        tremor: {
          brand: {
            faint: colors.red[50],
            muted: colors.red[200],
            subtle: colors.red[400],
            DEFAULT: '#E8272A',
            emphasis: colors.red[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        "dark-tremor": {
          brand: {
            faint: '#141414',
            muted: '#2A2A2A',
            subtle: '#E8272A',
            DEFAULT: '#E8272A',
            emphasis: '#ff4d4f',
            inverted: '#FFFFFF',
          },
          background: {
            muted: '#0A0A0A',
            subtle: '#141414',
            DEFAULT: '#0A0A0A',
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: '#2A2A2A',
          },
          ring: {
            DEFAULT: '#2A2A2A',
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
