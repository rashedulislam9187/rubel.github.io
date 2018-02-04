 jQuery(document).ready(function($){

    $(".slider-area").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autopaly: false,
    });

    $(".logo-carousel").owlCarousel({
        items: 5,
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autopaly: false,
    });



});
