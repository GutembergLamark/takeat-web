import { configDefaults, defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      setupFiles: ["./vitest-setup.js"],
      include: ["**/?(*.)+(spec|test).[tj]s?(x)"],
      exclude: [...configDefaults.exclude],
      globals: true,
    },
  }),
);
