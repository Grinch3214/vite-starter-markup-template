// module.exports = ({ env }) => ({ plugins: [ require('autoprefixer')() ] })

module.exports = {
  plugins: [
		require('postcss-sort-media-queries')({
			sort: 'mobile-first', // default value
		}),
    require('autoprefixer')
  ]
}