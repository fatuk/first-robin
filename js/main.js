$(function() {
    $(".ocarousel").each(function(index, el) {
        return new Ocarousel(this);
    });

    $('.fancybox').on('click', function(event) {
        event.preventDefault();
    });

    $('.fancybox').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });
});