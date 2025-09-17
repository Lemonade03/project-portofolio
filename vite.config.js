/*  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [react(),tailwindcss() ],
    root: './',
    build: {
    outDir: 'dist'},
    base: '/project-portofolio/',
    resolve: {
    alias: {
      // agar import react-native dibaca sebagai react-native-web
      'react-native': 'react-native-web',
      'react-native-web/dist/apis/StyleSheet/registry': '/src/emptyStyleRegistry.js',
    },
  },
  optimizeDeps: {
    exclude: [
      // tandai sebagai external supaya Vite tidak mem-bundle path internal
      'react-native-web',
      'react-native-web/dist/apis/StyleSheet/registry',
    ],
  },

  }); */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  root: './',
  base: '/project-portofolio/',
  build: {
    outDir: 'dist',
  },  
});
