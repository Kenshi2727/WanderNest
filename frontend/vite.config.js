import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
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
      name: ' WanderNest',
      short_name: ' WanderNest',
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
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024 // allow up to 10 MB
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
  ],
})