import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { readdirSync, existsSync } from 'fs'

function discoverPages() {
	const pages = {
		main: resolve(__dirname, 'app/index.html'),
	}

	const blogDir = resolve(__dirname, 'app/blog')
	if (existsSync(blogDir)) {
		const blogIndex = resolve(blogDir, 'index.html')
		if (existsSync(blogIndex)) pages.blog = blogIndex

		for (const entry of readdirSync(blogDir, { withFileTypes: true })) {
			if (entry.isDirectory()) {
				const postIndex = resolve(blogDir, entry.name, 'index.html')
				if (existsSync(postIndex)) {
					pages[`blog-${entry.name}`] = postIndex
				}
			}
		}
	}

	return pages
}

export default defineConfig({
	root: 'app',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		rollupOptions: {
			input: discoverPages(),
		},
	},
	plugins: [
		tailwindcss(),
	],
})
