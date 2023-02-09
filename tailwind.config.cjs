/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
		'./index.html'
	],
	theme: {
		extend: {
			fontFamily: {
				'DMSans': ['DM Sans', 'sans-serif']
			},
			screens: {
				'tablet': '900px'
			}
		},
	},
	plugins: [],
}
