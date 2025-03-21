import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.js'], // 入口文件
  bundle: true,                 // 打包所有依赖
  outfile: 'dist/index.js',     // 输出文件
  platform: 'browser',          // 指定为浏览器环境
  format: 'esm',                // 使用 ES 模块格式
  external: [],                 // 不需要额外的外部依赖
}).catch(() => process.exit(1));