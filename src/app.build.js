({
    mainConfigFile: "main.js",
    optimize: "none",
    baseUrl: '.',
    name: './almond',
    include: ['main'],
    insertRequire: ['main'],
    out: "../dist/mathjax-lazyload.js",
    wrap: true
})