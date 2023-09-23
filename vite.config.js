import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
			...imagemin(['./src/img/*.{jpg,png,jpeg}'], {
				destination: './src/img/webp/',
				plugins: [
					imageminWebp({ quality: 50 })
				]
			}),
			apply: 'serve',
		}
  ],
})
