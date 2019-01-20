$(document).ready(function () {
    $('.icon').click(function () {
        $('.icon').toggleClass('active');
        $('#top').toggleClass('hidden');
    });

    $('.js-anchor').click(function () {
        $('.navigation_menu').toggleClass('nav_menu_active')
        $('.icon').toggleClass('active');
        $('#top').toggleClass('hidden');
    });
});
