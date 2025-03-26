import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@components": path.resolve(__dirname, "src/components"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
    },
  },
  server: {
    open: true, // 브라우저 자동 열기
  },
});
