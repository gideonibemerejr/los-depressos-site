/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primaryGreen: "#072400",
				primaryBrown: "#3b2306",
				primaryOrange: "#935000",
				primaryCream: "#fae2c1",
			},
		},
	},
	plugins: [],
};
