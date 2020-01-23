

//Flexslider

$(document).ready(function () {

    $('#flexslider__one').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: false,
    });

    $('#flexslider__two').flexslider({
        animation: "fade",
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 2500,
        pauseOnHover: true,
    });

});

// Burger menu

$(function () {

    $('.nav__menuToggle').on('click', function () {

        $('.nav__menu').slideToggle(300, function () {

            // console.log($(this).css('display')); - проверка действий js в консоле
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
            // убирает артифакты срабатывания js в html (в нашем случае display:none)
        });

    })

});

// Fixed header

$(function () {

    var header = $("#mainmenuSlider"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("mainmenuSlider_fixed");

        } else {
            header.removeClass("mainmenuSlider_fixed");

        }

    }
});