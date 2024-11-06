import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
  },
  server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
