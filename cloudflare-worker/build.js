import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.js'], // 入口文件
  bundle: true,                 // 打包所有依赖
  outfile: 'dist/index.js',     // 输出文件
  platform: 'neutral',          // Cloudflare Worker 平台
  format: 'esm',                // 使用 ES 模块格式
  external: ['__STATIC_CONTENT_MANIFEST'], // 忽略 Cloudflare 特定的全局变量
}).catch(() => process.exit(1));