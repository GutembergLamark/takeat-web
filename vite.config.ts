import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
const viteConfig = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});

export default viteConfig;
