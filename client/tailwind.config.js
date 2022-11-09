/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				occ_color: "#b26910",
			},
			animation: {
				bounce200: "bounce 1s infinite 200ms",
				bounce400: "bounce 1s infinite 400ms",
			},
			transitionProperty: {
				'width' : 'width'
			}
		},
		screens: {
			'md': {'max': '933px'},
			'sm': {'max': '619px'}
		}
	},
	plugins: [],
};
