import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@fortawesome/react-fontawesome"], // Exclude FontAwesome from being bundled
    },
  },
});
