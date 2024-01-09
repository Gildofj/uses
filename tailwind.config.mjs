/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Verdana", "sans-serif"],
        "fira-code": ["Fira Code", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
