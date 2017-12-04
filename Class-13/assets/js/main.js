(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".client-testimonial-carousel").owlCarousel({
            items: 3,
            margin: 30,
            nav: false,
            dots: true,
            loop: true,
            
        });
        
        $(".product-list").masonry();
        
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	