import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["@tanstack/react-router"],
          "vendor-ui": ["lucide-react", "class-variance-authority", "clsx", "tailwind-merge"],
          "vendor-radix": [
            "@radix-ui/react-slot",
            "@radix-ui/react-label",
            "@radix-ui/react-select",
            "@radix-ui/react-dialog",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-router", "lucide-react"],
  },
});
