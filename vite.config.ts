import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@store': '/src/store',
      '@constants': '/src/constants',
      '@assets': '/src/assets',
      '@icons': '/src/assets/icons',
      '@styles': '/src/assets/styles',
    },
  },
});
