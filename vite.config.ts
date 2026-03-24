import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Resolve figma:asset/* imports to a transparent 1x1 PNG placeholder for local dev
function figmaAssetPlugin() {
  const PLACEHOLDER =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/QualzQAAAABJRU5ErkJggg=='
  return {
    name: 'figma-asset-placeholder',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) return id
    },
    load(id: string) {
      if (id.startsWith('figma:asset/')) {
        return `export default "${PLACEHOLDER}"`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Use PORT env var when set (e.g. by preview tooling)
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
