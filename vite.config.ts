// vite.config.js 或 vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssPresetEnv from 'postcss-preset-env';
import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin';
import less from 'less';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 在这里添加 Less 配置
        javascriptEnabled: true, // 允许 JavaScript 控制Less
      },
    },
    postcss: {
      plugins: [
        postcssPresetEnv({
          // 在这里添加 postcss-preset-env 配置
          stage: 3,
          features: {
            'custom-properties': true,
            'nesting-rules': true,
          },
        }),
        postcssPxToViewport({
          viewportWidth: 750, // 设计稿的视口宽度
          viewportHeight: 1334, // 设计稿的视口高度
          unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
          selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加，建议定义一至两个全局类
          minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
          mediaQuery: false, // 允许在媒体查询中转换`px`
          exclude: undefined, // 默认不处理 less/sass 文件中的 `px` 转换
        }),
      ],
    },
  },
});


