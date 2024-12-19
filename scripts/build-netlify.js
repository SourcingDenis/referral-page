const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

async function buildNetlifyFunctions() {
  try {
    await build({
      entryPoints: ['netlify/functions/api.ts'],
      bundle: true,
      platform: 'node',
      target: 'node18',
      outdir: '.netlify/functions',
      plugins: [nodeExternalsPlugin()],
      define: {
        'process.env.NODE_ENV': '"production"'
      },
      external: [
        '@nestjs/common',
        '@nestjs/core',
        '@nestjs/platform-express',
        '@nestjs/microservices',
        '@nestjs/websockets',
        '@nestjs/platform-socket.io',
        'class-transformer',
        'class-validator',
        'reflect-metadata',
        'rxjs'
      ]
    });
    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildNetlifyFunctions();
