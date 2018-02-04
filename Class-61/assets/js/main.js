(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        var center = [24.0208273, 88.9872409];

        $('.map')
            .gmap3({
                center: center,
                zoom: 13,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
            })
            .marker({
                position: center,
                icon: 'http://maps.google.com/mapfiles/marker_green.png'
            });



        
        

        
        
        
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	