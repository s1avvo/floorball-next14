import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			background: "rgb(var(--color-background) / <alpha-value>)",
			primary: "rgb(var(--color-primary) / <alpha-value>)",
			secondary: "rgb(var(--color-secondary) / <alpha-value>)",
			accent: "rgb(var(--color-accent) / <alpha-value>)",
			heading: "rgb(var(--color-heading) / <alpha-value>)",
			paragraph: "rgb(var(--color-paragraph) / <alpha-value>)",
			black: "rgb(var(--color-black) / <alpha-value>)",
		},
		lineHeight: {
			none: "1",
			tight: "1.25",
			snug: "1.375",
			normal: "1.8",
			relaxed: "1.925",
			loose: "2",
		},
		fontSize: {
			sm: [
				"0.75rem",
				{
					lineHeight: "1.25rem",
					letterSpacing: "0.015em",
					fontWeight: "300",
				},
			],
			base: [
				"1rem",
				{
					lineHeight: "1.8rem",
					letterSpacing: "0.01em",
					fontWeight: "300",
				},
			],
			lg: [
				"1.33rem",
				{
					lineHeight: "1.8rem",
					letterSpacing: "0em",
					fontWeight: "300",
				},
			],
			xl: [
				"1.77rem",
				{
					lineHeight: "2.08rem",
					letterSpacing: "0em",
					fontWeight: "400",
				},
			],
			"2xl": [
				"2.33rem",
				{
					lineHeight: "2.78rem",
					letterSpacing: "0em",
					fontWeight: "400",
				},
			],
			"3xl": [
				"2.91rem",
				{
					lineHeight: "3.64rem",
					letterSpacing: "-0.015em",
					fontWeight: "400",
				},
			],
			"4xl": [
				"4.15rem",
				{
					lineHeight: "4.88rem",
					letterSpacing: "0.015em",
					fontWeight: "500",
				},
			],
			"5xl": [
				"5.33rem",
				{
					lineHeight: "6rem",
					letterSpacing: "0.015em",
					fontWeight: "600",
				},
			],
		},
		extend: {
			screens: {
				xs: "390px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
