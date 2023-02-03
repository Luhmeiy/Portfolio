/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
		'./index.html'
	],
	theme: {
		extend: {
			colors: {
				'primary': '#edf2f8',
				'secondary': '#7209b7',
				'black-color': '#030303',
				'light-gray-color': '#e4e4e4',
				'gray-color': '#6b7688',
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
