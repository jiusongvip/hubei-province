import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.hubei-province.com",
  trailingSlash: "always",
  server: { port: 4330 },
  integrations: [sitemap({ lastmod: new Date("2026-08-20") })],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["images.unsplash.com", "source.unsplash.com", "picsum.photos"],
  },
});
