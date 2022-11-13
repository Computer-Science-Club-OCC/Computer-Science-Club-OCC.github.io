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
				cardSlidingR: "slidingRight 1s linear both",
				cardSlidingL: "slidingLeft 1s linear both",
				cardSlidingRSm: "slidingRightSm 1s linear both",
				cardSlidingLSm: "slidingLeftSm 1s linear both",
			},
			keyframes: {
				slidingRight: {
					'0%': { left: '0' },
					'100%': { left: '290px' }
				},
				slidingLeft: {
					'0%': { right: '0' },
					'100%': { right: '293px' }
				},
				slidingRightSm: {
					'0%': { left: '0' },
					'100%': { left: '288px' }
				},
				slidingLeftSm: {
					'0%': { right: '0'},
					'100%': { right: '293px' }
				}
			},
			screens: {
				'news-sm': { 'max': '660px' },
				'carousel-lg': { 'max': '1139px' },
				'carousel-sm': { 'max': '660px' }
			}
		},
	},
	plugins: [],
};
