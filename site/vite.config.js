import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tDocPlugin from './plugin-doc'
import apiTDocPlugin from './plugin-api-doc'
import pwaConfig from './pwaConfig'
import { resolveConfig, basePlugin } from '../script/vite.base.config'

const publicPathMap = {
  preview: '/',
  intranet: '/omi/',
  production: './',
}

export default ({ mode }) => {
  return defineConfig({
    base: publicPathMap[mode],
    resolve: resolveConfig,
    server: {
      hmr: { overlay: false },
      host: '0.0.0.0',
      port: 17000,
      open: '/',
      https: false,
      fs: {
        allow: ['..'],
      },
    },
    build: {
      outDir: '../tdesign',
      chunkSizeWarningLimit: 10000,
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'h.f',
    },
    plugins: [...basePlugin, apiTDocPlugin()], // VitePWA(pwaConfig)
    optimizeDeps: {
      include: ['prismjs', 'prismjs/components/prism-bash.js'],
    },
  })
}
