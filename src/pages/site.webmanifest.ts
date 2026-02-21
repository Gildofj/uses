import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const manifest = {
    name: "gildofj.dev uses",
    short_name: "uses",
    description: "A list of tools and technologies used by Gildo FJ.",
    start_url: "/",
    display: "standalone",
    background_color: "#a855f7",
    theme_color: "#a855f7",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/manifest+json",
    },
  });
};
