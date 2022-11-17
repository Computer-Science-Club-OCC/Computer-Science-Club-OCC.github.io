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
				cardSlidingRight: "slidingRight 1s both",
				cardSlidingLeft: "slidingLeft 1s both",
				cardSlidingRightSm: "slidingRightSm 1s both",
				cardSlidingLeftSm: "slidingLeftSm 1s both",
			},
			keyframes: {
				slidingRight: {
					"0%": { left: "0" },
					"100%": { left: "290px" },
				},
				slidingLeft: {
					"0%": { right: "0" },
					"100%": { right: "293px" },
				},
				slidingRightSm: {
					"0%": { left: "0" },
					"100%": { left: "290px" },
				},
				slidingLeftSm: {
					"0%": { right: "0" },
					"100%": { right: "293px" },
				},
			},
			screens: {
				"news-sm": { max: "660px" },
				"carousel-lg": { max: "1139px" },
				"carousel-sm": { max: "660px" },
				"news-md": { max: "960px" },
				"news-sec-sm": { max: "760px" },
			},
		},
	},
	plugins: [],
};
