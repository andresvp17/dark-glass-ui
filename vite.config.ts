import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components/index.tsx'),
      name: 'DarkGlassUI',
      fileName: 'dark-glass-ui'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [react(), dts({ rollupTypes: true })],
})
