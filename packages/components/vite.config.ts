import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.prod.json",
      outDir: "build/lib",
    }),
    dts({
      tsconfigPath: "./tsconfig.prod.json",
      outDir: "build/es",
    }),
  ],
  build: {
    outDir: "build",
    cssCodeSplit: true,
    lib: {
      entry: "src/index.ts",
      name: "components",
      fileName: (format) => `components.${format}/index.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          name: "components",
          dir: "./build/dist",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "src",
          dir: "./build/es",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "src",
          dir: "./build/lib",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      ],
    },
  },
});
