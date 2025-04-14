import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const proxyTarget = 'https://polys';
const serverName = 'obi-wan-v';
const themeDir = path.resolve(__dirname);

function compileSCSS() {
  try {
    const scssFile = path.join(themeDir, 'app/scss/style.scss');
    const cssFile = path.join(themeDir, 'style.css');
    const minCssFile = path.join(themeDir, 'style.min.css');

    console.log('Compiling SCSS...');
    execSync(`npx sass ${scssFile} ${cssFile} --source-map`, { stdio: 'inherit' });
    execSync(`npx sass ${scssFile} ${minCssFile} --style=compressed --source-map`, { stdio: 'inherit' });
    console.log('SCSS compilation completed.');
  } catch (error) {
    console.error(`Error compiling SCSS: ${error.message}`);
  }
}

function processJS() {
  try {
    const inputDir = path.join(themeDir, 'app/js/custom');
    const outputFile = path.join(themeDir, 'main.js');
    const outputFileMin = path.join(themeDir, 'main.min.js');

    console.log('Processing JavaScript...');
    const jsFiles = fs.readdirSync(inputDir).filter((file) => file.endsWith('.js'));
    const concatenatedContent = jsFiles.map((file) => fs.readFileSync(path.join(inputDir, file), 'utf8')).join('\n');
    fs.writeFileSync(outputFile, concatenatedContent, 'utf8');
    execSync(`npx terser ${outputFile} -o ${outputFileMin} --compress --mangle --source-map "root='${themeDir}',url='main.min.js.map'"`, { stdio: 'inherit' });
    console.log('JavaScript processing completed.');
  } catch (error) {
    console.error(`Error processing JavaScript: ${error.message}`);
  }
}

export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
    outDir: 'build',
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    cors: true,
    https: {
      key: fs.readFileSync('./localhost.key'),
      cert: fs.readFileSync('./localhost.crt'),
    },
    proxy: {
      '/': {
        target: proxyTarget,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(`/${serverName}`, ''),
      },
    },
    hmr: {
      protocol: 'wss',
      host: 'localhost',
    },
  },
  plugins: [
    {
      name: 'watch-and-compile',
      configureServer(server) {
        console.log('Vite server started. Watching files...');
        const phpGlob = path.join(themeDir, '**/*.php');
        const scssGlob = path.join(themeDir, 'app/scss/**/*.scss');
        const jsGlob = path.join(themeDir, 'app/js/**/*.js');

        console.log(`Watching SCSS files at: ${scssGlob}`);
        console.log(`Watching JS files at: ${jsGlob}`);
        console.log(`Watching PHP files at: ${phpGlob}`);

        server.watcher.on('change', (filePath) => {
          console.log(`Detected change in file: ${filePath}`);

          if (filePath.endsWith('.php')) {
            console.log('PHP file changed. Reloading browser...');
            server.ws.send({ type: 'full-reload' });
          } else if (filePath.endsWith('.scss')) {
            console.log('SCSS file changed. Recompiling style.scss...');
            compileSCSS();
            server.ws.send({ type: 'style-update', path: '/style.css' });
          } else if (filePath.endsWith('.js') && filePath.includes('app/js/custom')) {
            console.log('JavaScript file changed. Reprocessing...');
            processJS();
            server.ws.send({ type: 'full-reload' });
          }
        });

        server.watcher.on('error', (error) => {
          console.error('Watcher error:', error);
        });
      },
    },
  ],
});
