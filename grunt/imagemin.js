module.exports = {
    options: {
        cache: false
    },

    dist: {
        files: [{
            expand: true,
            cwd: 'img.src/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'img/'
        }]
    }
};