import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.js'], // 入口文件
  bundle: true,                 // 打包所有依赖
  outfile: 'dist/index.js',     // 输出文件
  platform: 'neutral',          // Cloudflare Worker 平台
  format: 'esm',                // 使用 ES 模块格式
  external: ['alipay-sdk'],     // 将 alipay-sdk 标记为外部依赖
}).catch(() => process.exit(1));