module.exports = {
	content: ['app/*.html', '/app/assets/*.svg'],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				mamalola: "url('/app/assets/bg-mamalola.jpg')",
				waterboys: "url('/app/assets/bg-waterboys.jpg')",
				plebanlaw: "url('/app/assets/bg-plebanlaw.jpg')",
				genusmedical: "url('/app/assets/bg-genusmedical.png')",
				monsanto: "url('/app/assets/bg-monsanto.jpg')",
				capitalone: "url('/app/assets/bg-capitalone.jpg')",
				capitalone_sobe: "url('/app/assets/bg-capitalone-sobe.png')",
				utex: "url('/app/assets/bg-utex.jpg')",
				ea: "url('/app/assets/bg-ea.png')",
				next: "url('/app/assets/bg-tmobile.jpg')",
				tin: "url('/app/assets/bg-tin.jpg')",
				cloud: "url('/app/assets/bg-cloud.jpg')",
			}),
		},
		fontFamily: {
			sans: ['Lexend Deca', 'ui-sans-serif', 'system-ui'],
			body: ['Lexend Deca'],
			arial: ['Arial'],
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
