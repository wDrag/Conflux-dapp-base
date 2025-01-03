import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      sourcemap: false,
      sourcemapExcludeSources: true,
      target: 'esnext',
    },
    resolve: {
      alias: {
        '@': '/src',
        '@/public': '/public',
      },
    },
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          ref: true,
        },
      }),
      nodePolyfills(),
      tsconfigPaths(),
    ],
    envDir: '.env',
    envPrefix: 'ENV_',
    server: {
      port: 3000,
    },
  };
});
