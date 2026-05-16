import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import addClasses from "rehype-add-classes";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://uses.gildofj.dev",
  base: "/",
  output: "static",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "pt",
        locales: {
          en: "en",
          pt: "pt",
        },
      },
    }),
    react({
      experimentalReactChildren: true,
    }),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  i18n: {
    defaultLocale: "pt",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold tracking-tight text-primary mb-4",
          h2: "text-2xl font-bold tracking-tight text-primary mb-3 mt-8",
          h3: "text-xl font-bold tracking-tight mb-2 mt-6",
          h4: "text-lg font-bold tracking-tight mb-2 mt-4",
          h5: "font-bold mb-2",
          h6: "font-bold mb-2",
          img: "rounded-3xl shadow-soft-flat mb-10",
          p: "mb-6 leading-relaxed opacity-90",
          a: "text-primary font-bold hover:underline transition-all duration-300",
          ul: "list-disc list-inside mb-6 space-y-2 opacity-90",
          ol: "list-decimal list-inside mb-6 space-y-2 opacity-90",
          blockquote: "border-l-4 border-primary pl-4 italic my-8 opacity-80",
          code: "bg-white/50 dark:bg-zinc-800/50 rounded px-1.5 py-0.5 text-sm font-mono shadow-soft-pressed",
          pre: "bg-white/50 dark:bg-zinc-800/50 rounded-3xl p-6 mb-8 overflow-x-auto shadow-soft-flat",
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
  // Performance optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  devToolbar: {
    enabled: true,
  },
  adapter: vercel(),
});
