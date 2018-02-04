(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".sticky-area").sticky();

        var footerHeight = $(".footer-area").height();
        $(".totle-area").css('margin-bottom', footerHeight + 'px');

        $('.counter-number span').counterUp({
            delay: 10,
            time: 1000
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	