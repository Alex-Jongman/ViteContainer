import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// got the above code from https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
// this will resolve eslint errors for __dirname

import { resolve } from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0'
  }
});