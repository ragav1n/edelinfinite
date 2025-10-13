import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    hmr: false,           // disables HMR
    allowedHosts: [
      'unentertaining-transitionary-jonathon.ngrok-free.dev', // your ngrok URL
      'localhost',       // always include localhost
    ],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
