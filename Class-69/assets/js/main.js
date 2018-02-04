(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".sticky-area").sticky();

        var footerHeight = $(".footer-area").height();
        $(".totle-area").css('margin-bottom', footerHeight + 'px');



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	