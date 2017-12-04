(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".client-testimonial-carousel").owlCarousel({
            items: 3,
            margin: 30,
            nav: false,
            dots: true,
            loop: true,
            
        })  
        
        $(".homepage-sliders").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            loop: true,
            autoplay: false,
            navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
            
        });  
        
        $(".product-promotions").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loop: true,
            autoplay: false,
            
        });
        
        $(".product-list").masonry();
        
        
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	