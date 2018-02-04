(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $('#clock').countdown('2020/10/10', function(event) {

          $(this).html(event.strftime('<span class="countdown-wrap"><span class="single-countdown-wrap">%w <br/><span>Weeks</span></span> <span class="single-countdown-wrap">%D <br/><span>Days</span></span> <span class="single-countdown-wrap">%H <br/><span>Hours</span></span> <span class="single-countdown-wrap">%m <br/><span>Minutes</span></span> <span class="single-countdown-wrap">%S <br/><span>Seconds</span></span></span>'));
          
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	