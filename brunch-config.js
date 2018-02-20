module.exports = {
    files: {
        javascripts: {
            joinTo: 'js/app.js'
        },
        stylesheets: {
            joinTo: 'style.css'
        },
        templates: {
            joinTo: {
                'app/jade.js': /.+\.jade$/
            },
        }
    },
    plugins: {
        jaded: {
            staticPatterns: /^app(\/|\\)static_jade(\/|\\)(.+)\.jade$/
        },
        sass: {
            includeCss: true,
            debug: 'comments',
            plugins: ['sass-autoprefixer']
        },
        uglify: {
            mangle: true
        },
        jshint: {
            pattern: /^app(\/|\\)js(\/|\\)[^\/\\]*\.js$/,
            warnOnly: true
        },
    },
    npm: {
        compilers: ['babel-brunch']
    },
    sourceMaps: 'absoluteUrl'
}
