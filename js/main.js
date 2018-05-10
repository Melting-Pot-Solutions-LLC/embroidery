(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		//this code is for sticky_navbar		
		$("#stickMenu").sticky({topSpacing:0});
        //this code is for mobile-menu
        $("ul.nav.navbar-nav li a").on('click', function(){
            $(".navbar-collapse").removeClass("in");
        });		
		//this code is for smooth menu
		$('.nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
		});
		
		// wow js
		new WOW().init();
		
		//this code is for venobox
		$('.lightbox').venobox({
			titleattr: 'data-title',
			border:'2px',
		});
		// color change function
        $(".demo-panel-close").click(function(){
            $(".demo-panel").css('left', '-175px');
            $(this).hide();
            $(".demo-panel-open").show();
        });
        
        $(".demo-panel-open").click(function(){
            $(".demo-panel").css('left', '0px');
            $(this).hide();
            $(".demo-panel-close").show();
        });
        
        
        $("#lite_green-color").click(function(){
            $("body").removeClass("green-color sky-color purple-color dark-color yellow-color pink-color pink-color");
            $("body").addClass("lite_green-color");
            color.barfiller({
				barColor : '#ff7800'
			});
        });
        $("#green-color").click(function(){
            $("body").removeClass("lite_green-color sky-color purple-color dark-color yellow-color pink-color");
            $("body").addClass("green-color");
        });
        $("#sky-color").click(function(){
            $("body").removeClass("green-color lite_green-color purple-color dark-color yellow-color pink-color");
            $("body").addClass("sky-color");
           
        });
        $("#purple-color").click(function(){
            $("body").removeClass("green-color sky-color lite_green-color dark-color yellow-color pink-color");
            $("body").addClass("purple-color");
        });
        $("#dark-color").click(function(){
            $("body").removeClass("green-color sky-color purple-color lite_green-color yellow-color pink-color");
            $("body").addClass("dark-color");			
        });
        $("#yellow-color").click(function(){
            $("body").removeClass("green-color sky-color purple-color dark-color lite_green-color pink-color");
            $("body").addClass("yellow-color");
        });
        $("#pink-color").click(function(){
            $("body").removeClass("green-color sky-color purple-color dark-color yellow-color lite_green-color");
            $("body").addClass("pink-color");
        });
        $("#default-color").click(function(){
            $("body").removeClass("green-color sky-color purple-color dark-color yellow-color pink-color lite_green-color");
        });


    });

    jQuery(window).load(function(){
		// Hide preloader slowly
        $('#preloader').delay(350).fadeOut('slow'); 
		
        // Show body slowly
        $('body').delay(350);
		
    });


}(jQuery));	