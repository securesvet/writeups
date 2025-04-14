import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import svgr from "npm:vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), react(), tailwindcss(), svgr()],
  build: {
    outDir: "dist",
  },
});
