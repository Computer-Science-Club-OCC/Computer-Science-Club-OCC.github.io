/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				occ_color: "#b26910",
				"orange": "#FF9617",
				"orange-dim": "#D38830", 
				"blue": "#2196F3",
				"smoke": "#EEEEEE",
				"smoke-dark": "#CCCCCC",
				"gray": "#212224",
				"gray-dark": "#1F1F21",
				"gray-med": "#2A2C2E",
				"gray-mild": "#3D3F43",
				"gray-light": "#494c50",
			},
			animation: {
				bounce200: "bounce 1s infinite 200ms",
				bounce400: "bounce 1s infinite 400ms",
			},
		},
	},
	plugins: [],
};
