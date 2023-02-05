/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
		'./index.html'
	],
	theme: {
		extend: {
			colors: {
				'secondary': '#7209b7',
				'black-color': '#030303',
				'brown-color': '#46364a'
			},
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
