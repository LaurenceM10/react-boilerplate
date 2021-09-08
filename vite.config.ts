import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      { find: 'app', replacement: '/src/app' },
      { find: 'features', replacement: '/src/features' },
    ]
  }
});
