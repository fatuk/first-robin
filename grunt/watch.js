module.exports = {
    options: {
        livereload: true
    },
    stylus: {
        files: 'styl/*.styl',
        tasks: ['stylus'],
        options: {
            interrupt: true,
            livereload: false
        }
    },
    css: {
        files: 'css/*.css'
    },
    html: {
        files: '*.html'
    },
    js: {
        files: ['js/*.js'],
        tasks: ['concat']
    },
    plugins: {
        files: 'bower_components/**',
        tasks: ['concat']
    },
    bower: {
        files: 'bower.json',
        tasks: ['shell:bower_update'],
        options: {
            livereload: false
        }
    }
};