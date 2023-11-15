import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontSize: {
				"10xl": ["10.6rem", { lineHeight: ".9" }],
				"11xl": ["14rem", { lineHeight: ".9" }],
				"12xl": ["16.5rem", { lineHeight: ".9" }],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
