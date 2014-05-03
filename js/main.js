$(function() {
    var getUrlParameter = function(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    };

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

    // Order form
    $('.js-tieId').text(getUrlParameter('tie-id'));
});