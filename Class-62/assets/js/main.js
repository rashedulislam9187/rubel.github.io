(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".portfolio-filter li").on('click', function(){

            $(".portfolio-filter li").removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');

            $(".portfolio-list").isotope({
                filter: selector,
            });
        });

        
        $(".portfolio-list").isotope();



    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	