(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        
        $("#web-design-progressbar").circleProgress({
            value: 0.9,
            size: 200,
            fill: '#1ABCC2',
            thickness: 5,
            emptyFill: '#fff',
            startAngle: -1.50,
  
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-pecentage').html(Math.round(90 * progress) + '<i>%</i>');
        });
        
        $("#graphic-design-progressbar").circleProgress({
            value: 0.7,
            size: 200,
            fill: '#B20000',
            thickness: 5,
            emptyFill: '#fff',
            startAngle: -1.50,
  
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-pecentage').html(Math.round(70 * progress) + '<i>%</i>');
        });
        
        $("#digital-marketing-progressbar").circleProgress({
            value: 0.8,
            size: 200,
            fill: '#100C56',
            thickness: 5,
            emptyFill: '#fff',
            startAngle: -1.50,
  
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-pecentage').html(Math.round(80 * progress) + '<i>%</i>');
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	