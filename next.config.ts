import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 开启静态导出，生成纯HTML/CSS/JS，适配GitHub Pages等静态托管平台
  trailingSlash: true, // 生成的URL末尾添加斜杠
  distDir: "dist", // 输出目录，默认为.next

};

export default nextConfig;
