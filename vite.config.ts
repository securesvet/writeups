import { defineConfig } from "vite";
import tailwindcss from "npm:@tailwindcss/vite";
import deno from "@deno/vite-plugin";
import react from "npm:@vitejs/plugin-react-swc";
import svgr from "npm:vite-plugin-svgr";
import utwm from "npm:unplugin-tailwindcss-mangle/vite";
// import mdx from "@mdx-js/rollup";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    deno(),
    // { enforce: "pre", ...mdx() },
    react(),
    tailwindcss(),
    svgr(),
    utwm(),
  ],
  build: {
    outDir: "dist",
  },
});
