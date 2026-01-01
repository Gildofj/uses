import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import addClasses from "rehype-add-classes";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gildofj.github.io",
  base: "/uses/",
  output: "static",

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "pt-br",
        locales: {
          en: "en",
          "pt-br": "pt-BR",
        },
      },
    }),
    react({
      experimentalReactChildren: true,
    }),
  ],

  i18n: {
    defaultLocale: "pt-br",
    locales: ["en", "pt-br"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: "pt-br",
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
          h1: "text-4xl font-bold font-mono mb-4",
          h2: "text-2xl font-bold font-mono mb-3 mt-8",
          h3: "text-xl font-bold font-mono mb-2 mt-6",
          h4: "text-lg font-bold font-mono mb-2 mt-4",
          h5: "font-bold font-mono mb-2",
          h6: "font-bold font-mono mb-2",
          img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
          p: "mb-6 leading-relaxed",
          a: "text-purple-500 hover:text-purple-600 hover:underline transition-all duration-300",
          ul: "list-disc list-inside mb-6 space-y-2",
          ol: "list-decimal list-inside mb-6 space-y-2",
          blockquote: "border-l-4 border-purple-500 pl-4 italic my-6",
          code: "bg-slate-100 dark:bg-zinc-800 rounded px-1 py-0.5 text-sm font-mono",
          pre: "bg-slate-100 dark:bg-zinc-800 rounded-lg p-4 mb-6 overflow-x-auto",
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
});
