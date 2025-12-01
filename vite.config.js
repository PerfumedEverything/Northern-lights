import { defineConfig } from 'vite'
import path from 'path'

// Абсолютный путь к папке с svg-иконками
const iconsPath = path.resolve('src/icons')

export default defineConfig({
  root: '.',                // корень
  base: '/',                // путь на проде
  publicDir: 'public',      // публичные файлы
  build: {
    outDir: 'dist',         // папка сборки
    assetsDir: 'assets',    // папка ассетов
    rollupOptions: {
      output: {
        assetFileNames(assetInfo) {
          const ext = assetInfo.name.split('.').pop()

          // шрифты
          if (/woff2?|ttf|otf/.test(ext)) {
            return 'assets/fonts/[name][extname]'
          }
          // картинки
          if (/png|jpe?g|svg|webp|gif/.test(ext)) {
            return 'assets/images/[name][extname]'
          }

          return 'assets/[name][extname]'
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
})
