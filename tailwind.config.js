module.exports = {
    purge: ['app/*.html', '/app/assets/*.svg'],
    darkMode: false, // or 'media' or 'class'
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
            }),
        },
        fontFamily: {
            sans: ['Lexend Deca', 'ui-sans-serif', 'system-ui'],
            body: ['Lexend Deca'],
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
