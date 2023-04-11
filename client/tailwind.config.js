/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				occ_color: "#b26910",
				projectCardBg: "#2a2c2e",
				projectCardDescription: "#f5f5f5",
				onGoing: "#4CDC4C",
				completed: "#3498db",
				inActive: "#f1c40f",
				canceled: "#ff2d55",
				projectCardLinkHover: "#ff9617",
			},
			animation: {
				bounce200: "bounce 1s infinite 200ms",
				bounce400: "bounce 1s infinite 400ms",
			},
		},
	},
	plugins: [],
};
