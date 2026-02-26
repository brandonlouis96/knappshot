import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/api/gemini-batch-poll': {
                target: 'https://generativelanguage.googleapis.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/gemini-batch-poll/, '/v1beta'),
            },
            '/api/gemini-batch-download': {
                target: 'https://generativelanguage.googleapis.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/gemini-batch-download/, '/download/v1beta'),
            },
            '/api/gemini-batch': {
                target: 'https://generativelanguage.googleapis.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/gemini-batch/, '/v1beta'),
            },
        },
    },
});
