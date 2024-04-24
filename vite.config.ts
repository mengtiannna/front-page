// vite.config.js 或 vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssPresetEnv from 'postcss-preset-env';
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
      ],
    },
  },
});
