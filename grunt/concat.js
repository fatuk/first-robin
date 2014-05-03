module.exports = {
    options: {
        separator: ';',
    },
    dist: {
        src: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/jQuery-Open-Carousel/jquery.openCarousel.js',
            'bower_components/fancybox/source/jquery.fancybox.pack.js',
            'js/main.js'
        ],
        dest: 'js.concat/scripts.js'
    }
};