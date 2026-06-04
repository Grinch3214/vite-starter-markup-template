import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import path from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
import glob from 'fast-glob'
import { fileURLToPath } from 'url'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import handlebars from 'vite-plugin-handlebars'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// you can use your path for your project
const rootPath = '/'
// example: const rootPath = '/my-path/'

export default defineConfig({
	plugins: [
		handlebars({
			partialDirectory: path.resolve(__dirname, 'src/partials'),
			context(pagePath) {
				const dataFile = path.resolve(
					__dirname,
					'src/data',
					pagePath.replace(/^\//, '').replace('.html', '.json')
				)
				try {
					return JSON.parse(fs.readFileSync(dataFile, 'utf-8'))
				} catch {
					return {}
				}
			},
		}),
		ViteImageOptimizer({
			svg: {
				plugins: [
					'removeDoctype',
					'removeXMLProcInst',
					'minifyStyles',
					'sortAttrs',
					'sortDefsChildren',
				],
			},
			png: {
				quality: 70,
			},
			jpeg: {
				quality: 70,
			},
			jpg: {
				quality: 70,
			}
		}),
		{
			name: 'webp-converter',
			apply: 'serve',
			async buildStart() {
				await imagemin(['./src/img/**/*.{jpg,png,jpeg}'], {
					destination: './src/img/webp/',
					plugins: [imageminWebp({ quality: 70 })]
				})
			}
		},
		{
			name: 'handlebars-hmr',
			configureServer(server) {
				const watchDirs = [
					path.resolve(__dirname, 'src/data'),
					path.resolve(__dirname, 'src/partials'),
				]
				watchDirs.forEach(dir => server.watcher.add(dir))
				server.watcher.on('change', filePath => {
					if (watchDirs.some(dir => filePath.startsWith(dir))) {
						server.ws.send({ type: 'full-reload' })
					}
				})
			}
		}
	],
	build: {
		rollupOptions: {
			input: Object.fromEntries(
				glob.sync(['./*.html', './pages/**/*.html']).map(file => [
					path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)),
					fileURLToPath(new URL(file, import.meta.url))
				])
			)
		},
	},
	base: rootPath,
})