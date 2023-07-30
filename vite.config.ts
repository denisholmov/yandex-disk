import react from '@vitejs/plugin-react-swc'
import type { UserConfig } from 'vite'
import { defineConfig, ModuleNode } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

const DEV_PORT = 9000

const config: UserConfig = {
  base: process.env.VITE_BASE_PATH,
  plugins: [
    react(),
    tsconfigPaths(),
    eslintPlugin({
      cache: false,
      include: './src/**/*.+(js|jsx|ts|tsx)',
    }),
    svgr({
      svgrOptions: {
        svgoConfig: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
          ],
        },
      },
    }),
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: 'build',
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
  logLevel: 'error',
}

export default defineConfig(config)
