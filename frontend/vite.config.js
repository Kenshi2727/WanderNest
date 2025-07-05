import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr({
    svgrOptions: {
      replaceAttrValues: {
        "#000": "currentColor",
        "#000000": "currentColor"
      }
    }
  }), VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.js',
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: ' Travel Safari',
      short_name: ' Travel Safari',
      description: 'An AI Travel Planner',
      theme_color: '#ffffff',
      icons: [
        {
          "src": "/maskable_icon.png",
          "sizes": "196x196",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/pwa-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/pwa-256x256.png",
          "sizes": "256x256",
          "type": "image/png"
        },
        {
          "src": "/pwa-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "/pwa-384x384.png",
          "sizes": "384X384",
          "type": "image/png"
        }
      ]
    },

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
    optimizeDeps: {
      include: ['lenis'],
    },
  }),
  ViteImageOptimizer({
    // Include all common image formats
    test: /\.(jpe?g|png|gif|tiff|webp|avif|svg)$/i,

    // Optimize images in /public as well
    includePublic: true,

    // Show stats in console (can disable if noisy)
    logStats: true,

    // Raster images with Sharp
    png: { quality: 80 },
    jpeg: { quality: 75 },
    jpg: { quality: 75 },
    webp: { quality: 80, lossless: false },
    avif: { quality: 70, lossless: false },
    tiff: { quality: 80 },
    gif: {},

    // SVG optimization with SVGO
    svg: {
      multipass: true,
      plugins: [
        { name: 'removeViewBox', active: false },  // preserve viewBox
        'sortAttrs',                                 // sort SVG attributes
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupNumericValues: false,
              convertPathData: false
            }
          }
        }
      ]
    },

    // Optional caching to speed up repeated builds
    cache: true,
    cacheLocation: 'node_modules/.cache/image-optimizer',
  }),
  ],
})