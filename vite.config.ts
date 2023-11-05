import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@Assets": path.resolve(__dirname, "./src/assets"),
      "@Chapters": path.resolve(__dirname, "./src/chapters"),
      "@Components": path.resolve(__dirname, "./src/components"),
      "@Foundations": path.resolve(__dirname, "./src/foundations"),
      "@Slides": path.resolve(__dirname, "./src/slides"),
      "@Templates": path.resolve(__dirname, "./src/templates"),
      "@Utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
