import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
export default defineConfig({
	plugins: [checker({ typescript: true }), react()],
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
});
