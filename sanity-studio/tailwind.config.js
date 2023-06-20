/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-josefin)"],
				serif: ["var(--font-source-serif-pro)"],
			},
			colors: {
				primary: "#4A4870",
				fontColor: "#586171",
				uBlue: "#4A4870",
				uRed: "#FF4B60",
				uBgColor: "#F9F9FE",
				uWhite: "#FFFFFF",
        uGray: "#9A9FA9",
        github: "#24292f",
				twitter: "#1DA1F1",
        tistory: "#f54",
				facebook: "#165BEA",
				instagram: "#EF00A1",
				uYellow: "#FAC469",
				uSkyBlue: "#65EBE7",
				rss: "#f26522",
				twitterBg: "#63cdf1",
				facebookBg: "#3563c2",
				instagramBg: "#e62ba9",
				rssBg: "#f7b454",
				fontGray: "#596172",
				uBlack: "#4b4870",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
