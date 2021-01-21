module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				mamalola: "url('/app/assets/bg-mamalola.jpg')",
				waterboys: "url('/app/assets/bg-waterboys.jpg')",
				plebanlaw: "url('/app/assets/bg-plebanlaw.jpg')",
				genusmedical: "url('/app/assets/bg-genusmedical.png')",
				monsanto: "url('/app/assets/bg-monsanto.jpg')",
			}),
		},
		fontFamily: {
			sans: ['Rubik', 'ui-sans-serif', 'system-ui'],
			body: ['Rubik'],
		},
		container: {
			center: true,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
