$(window).scroll(function() {
    var nav = $('.navbar');
    var top = 1;
    if ($(window).scrollTop() >= top) {

        nav.addClass('scrolled');

    } else {
        nav.removeClass('scrolled');
    }
});
