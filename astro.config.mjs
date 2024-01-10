import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  site: "https://gildofj.github.io/uses/",
  integrations: [
    sitemap(),
    react({
      experimentalReactChildren: true,
    }),
    tailwind(),
  ],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold font-fira-code",
          h2: "text-2xl font-bold font-fira-code",
          h3: "text-xl font-bold font-fira-code",
          h4: "text-lg font-bold font-fira-code",
          h5: "font-bold font-fira-code",
          h6: "font-bold font-fira-code",
          img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
          p: "mb-6",
          a: "underline underline-offset-2 hover:text-purple-500 decoration-purple-500",
        },
      ],
    ],
  },
});
