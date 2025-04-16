import { defineConfig } from "vite";
import tailwindcss from "npm:@tailwindcss/vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import utwm from "unplugin-tailwindcss-mangle/vite";
import mdx from "@mdx-js/rollup";
import { babel } from "@rollup/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    deno(),
    react(),
    babel({
      extensions: [".js", ".jsx", ".cjs", ".mjs", ".md", ".mdx", ".ts", ".tsx"],
    }),
    tailwindcss(),
    svgr(),
    utwm(),
    { enforce: "pre", ...mdx() },
  ],
  build: {
    outDir: "dist",
  },
});
