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
        
        $(".menu-trigger").on("click", function(){
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active"); return false;
        });
        
        $(".menu-close, .off-canvas-overlay").on("click", function(){
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });
        
        $(".product-list").masonry();
        
        
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	