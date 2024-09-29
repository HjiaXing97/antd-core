import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.prod.json",
      outDir: "build/types", // 统一生成声明文件
    }),
  ],
  build: {
    outDir: "build",
    cssCodeSplit: true,
    lib: {
      entry: "src/index.ts",
      name: "components",
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          name: "components",
          preserveModules: true, // 保留模块结构
          preserveModulesRoot: "src", // 保留的根目录为 src
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
          preserveModules: true, // 保留模块结构
          preserveModulesRoot: "src", // 保留的根目录为 src
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
          preserveModules: true, // 保留模块结构
          preserveModulesRoot: "src", // 保留的根目录为 src
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
