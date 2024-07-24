import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        open: './src/index.html',
        port: 3000,
    },
    preview: {
        port: 3001
    },
    build: {
        rollupOptions: {
            input: './src/index.html'
        }
    }
})