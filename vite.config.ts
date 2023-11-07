import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs',
  },
  base: '/betweenthehammerandanvil/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    eslint(),
  ],
  resolve: {
    alias: {
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Chapters': path.resolve(__dirname, './src/chapters'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Foundations': path.resolve(__dirname, './src/foundations'),
      '@Slides': path.resolve(__dirname, './src/slides'),
      '@Templates': path.resolve(__dirname, './src/templates'),
      '@Utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
