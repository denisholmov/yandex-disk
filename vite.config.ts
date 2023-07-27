import react from "@vitejs/plugin-react-swc";
import type { UserConfig } from "vite";
import { defineConfig, ModuleNode } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";

const DEV_PORT = 9000;

const config: UserConfig = {
  plugins: [
    react(),
    tsconfigPaths(),
    createHtmlPlugin({
      minify: true,
      template: "/src/index.html",
      entry: "/src/main.tsx",
    }),
    eslintPlugin({
      cache: false,
      include: "./src/**/*.+(js|jsx|ts|tsx)",
    }),
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    port: DEV_PORT,
    open: true,
  },
  preview: {
    port: DEV_PORT,
    open: true,
  },
  logLevel: "error",
};

export default defineConfig(config);
