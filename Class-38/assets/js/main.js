(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".homepage-slides").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            nav: true,
            dots: true,
            navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            animateOut: 'fadeOut',
            
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	