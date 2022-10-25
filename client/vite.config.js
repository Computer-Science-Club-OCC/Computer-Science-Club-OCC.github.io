/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	build: {
		outDir: "build",
		assetsDir: "assets",
		emptyOutDir: true,
		polyfillModulePreload: true,
		commonjsOptions: {
			include: [/node_modules/],
		},
		minify: "terser",
		terserOptions: {
			compress: {
				keep_infinity: true,
				passes: 10,
			},
			mangle: {
				properties: {
					regex: /^_/,
				},
			},
			format: {
				comments: false,
			},
			module: true,
		},
	},
	plugins: [
		react(),
		visualizer({
			filename: "build/stats.html",
			title: `Bundle Stats - Build ${new Date().toLocaleString()}`,
			gzipSize: true,
		}),
	],
});
