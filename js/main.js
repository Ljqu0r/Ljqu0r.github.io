$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top -80
        }, 1000);
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.header_wrapper').addClass('black');
        }
        else {
            $('.header_wrapper').removeClass('black');
        }
    })

});