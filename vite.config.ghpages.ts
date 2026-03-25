import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

/**
 * Vite config for GitHub Pages static build.
 *
 * BASE_URL controls the path prefix:
 *  - Deploy to https://username.github.io/repo-name/ → set base: "/repo-name/"
 *  - Deploy to https://username.github.io/           → set base: "/"
 *  - Deploy to a custom domain root                  → set base: "/"
 *
 * You can also override at build time:
 *   VITE_BASE=/my-repo/ npm run build:ghpages
 */
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
});
