import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80, // Указываете желаемый порт
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': '/src',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@icons': '/src/assets/icons',
      '@styles': '/src/assets/styles',
    },
  },
});
