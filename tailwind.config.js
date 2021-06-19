module.exports = {
    purge: ['/app/**/*.html'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                japan: "url('/app/assets/bg-japan.jpg')",
                glass: "url('/app/assets/bg-glass@2x.jpg')",
            }),
        },
        container: {
            center: true,
        },
    },
    variants: {
    },
    plugins: [],
}
