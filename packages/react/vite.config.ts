/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    cacheDir: '../../node_modules/.vite/react',

    plugins: [
        dts({
            tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
            // Faster builds by skipping tests. Set this to false to enable type checking.
            skipDiagnostics: true,
        }),
        react(),
        viteTsConfigPaths({
            root: '../../',
        }),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [
    //    viteTsConfigPaths({
    //      root: '../../',
    //    }),
    //  ],
    // },

    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points.
            entry: 'src/index.ts',
            name: 'react',
            fileName: 'index',
            // Change this to the formats you want to support.
            // Don't forgot to update your package.json as well.
            formats: ['es', 'cjs', 'umd'],
        },
        rollupOptions: {
            // External packages that should not be bundled into your library.
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                '@trrack/core',
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    d3: 'd3',
                    '@trrack/core': 'Trrack',
                },
            },
        },
    },

    test: {
        globals: true,
        cache: {
            dir: '../../node_modules/.vitest',
        },
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
});