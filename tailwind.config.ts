import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'beam-sweep': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        'beam-sweep': 'beam-sweep 1.5s ease-in-out infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
