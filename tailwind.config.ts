import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontSize: {
				"10xl": ["12rem", { lineHeight: ".9" }],
				"11xl": ["14rem", { lineHeight: ".9" }],
				"12xl": ["17.5rem", { lineHeight: ".9" }],
			},
		},
	},
	plugins: [],
};
export default config;
