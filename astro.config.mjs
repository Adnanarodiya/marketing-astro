import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig, fontProviders, sharpImageService } from "astro/config";
import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: { service: sharpImageService() },
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Satoshi",
      cssVariable: "--font-primary",
      options: {
        variants: [
          {
            src: ["./public/fonts/Satoshi-Regular.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./public/fonts/Satoshi-Medium.woff2"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./public/fonts/Satoshi-Bold.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Clash Grotesk",
      cssVariable: "--font-secondary",
      options: {
        variants: [
          {
            src: ["./public/fonts/ClashGrotesk-Medium.woff2"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./public/fonts/ClashGrotesk-Bold.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
  ],
  integrations: [
    react(),
    sitemap(),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
});
