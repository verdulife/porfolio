import defaultTheme from "tailwindcss/defaultTheme";
import textFillStroke from "tailwindcss-text-fill-stroke";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Geist Sans",
					...defaultTheme.fontFamily.sans,
				],
			}
		},
	},
	plugins: [textFillStroke()],
}
