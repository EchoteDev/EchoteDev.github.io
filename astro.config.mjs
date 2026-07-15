import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const [githubOwner] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const deployedSite = process.env.GITHUB_ACTIONS && githubOwner
  ? `https://${githubOwner.toLowerCase()}.github.io`
  : "https://duodigusto.de";

export default defineConfig({
  site: deployedSite,
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: "directory",
  },
  server: {
    host: "0.0.0.0",
  },
});
