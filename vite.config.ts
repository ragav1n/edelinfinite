import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    hmr: false,
    allowedHosts: [
      'unentertaining-transitionary-jonathon.ngrok-free.dev',
      'localhost',
    ],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
