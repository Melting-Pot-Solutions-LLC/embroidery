(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		//this code is for sticky_navbar		
		$("#stickMenu").sticky({topSpacing:0});
        //this code is for mobile-menu
        $("ul.nav.navbar-nav li a").on('click', function(){
            $(".navbar-collapse").removeClass("in");
        });		
        
        $(document).on('click', 'a[href^="#"]', function(e) {
            // target element id
            var id = $(this).attr('href');

            // target element
            var $id = $(id);
            if ($id.length === 0) {
                return;
            }

            // prevent standard hash navigation (avoid blinking in IE)
            e.preventDefault();

            // top position relative to the document
            var pos = $id.offset().top-100;

            // animated top scrolling
            $('body, html').animate({scrollTop: pos});
        });

		
		// wow js
		new WOW().init();

        var video = $("#video-bg");
        if ($(window).width() < 960) {
            $(".banner_overlay").click(function(){ (video.get(0).paused) ?  video.get(0).play() : video.get(0).pause() });
        };
        
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
    
    
    //this code is for scroll menu
    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $(window).on('resize scroll', function() {
        $("#home").each(function() {
            if ($(this).isInViewport()) {
                $("a[href='#home']").parent().addClass("current");
            }
        });
        
        $("#services-section").each(function() {
            if ($(this).isInViewport()) {
                $(".mainmenu ul li").removeClass("current");
                $("a[href='#services-section']").parent().addClass("current");
            } else {
              $("a[href='#services-section']").parent().removeClass("current");
            }
        });
        
        $("#about-us").each(function() {
            if ($(this).isInViewport()) {
                $(".mainmenu ul li").removeClass("current");
                $("a[href='#about-us']").parent().addClass("current");
            } else {
              $("a[href='#about-us']").parent().removeClass("current");
            }
        });
    });

//    $(function(){
//       $("#printavo-contact-form").printavoInquiryForm("5097ddf700200282fa80bd0483c677bb");
//        
//        // Form styles
//        $("#pcf input[name='c_name']").attr("placeholder", "Name*");
//        $("#pcf input[name='c_email']").attr("placeholder", "Email*");
//        $("#pcf input[name='c_phone']").attr("placeholder", "Phone*");
//        $("#pcf textarea[name='c_inquiry']").attr("placeholder", "What do you need?*");
//
//     });

    
    
    function isScrolledIntoView (elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    let brands = [
        ["./img/partners/maxresdefault.jpg","https://www.adidas.com/us"],
        ["./img/partners/Comfort_Colors_logo_black.png","http://www.comfortcolors.com/us/"],
        ["./img/partners/next-level-logo.jpg","https://www.nextlevelapparel.com/"],
        ["./img/clients/logo-5-1.png","https://www.nike.com/us/en_us/"],
        ["./img/clients/logo-1-1.png","#"],
        ["./img/clients/logo-2-1.png","#"],
        ["./img/clients/logo-3-1.png","#"],
        ["./img/clients/logo-4-1.png","#"],
        ["./img/clients/logo-17-1.png","#"],
        ["./img/clients/logo-6-1.png","#"],
        ["./img/clients/logo-7-1.png","#"],
        ["./img/clients/logo-8-1.png","#"],
        ["./img/clients/logo-10-1.png","#"],
        ["./img/clients/logo-11-1.png","#"],
        ["./img/clients/logo-12-1.png","#"],
        ["./img/clients/logo-13-1.png","#"],
        ["./img/clients/logo-14-1.png","#"],
        ["./img/clients/logo-15-1.png","#"],
        ["./img/clients/logo-16-1.png","#"],
        ["./img/clients/logo-17-1.png","#"],
        ["./img/clients/logo-18-1.png","#"],
        ["./img/clients/logo-19-1.png","#"],
        ["./img/clients/logo-20-1.png","#"]
    ];
    
    let counter = 4;
    
     $(window).on('resize scroll', function() {
        if (isScrolledIntoView($('#support-logo'))) {
            var galleryTimer = setInterval(function() {
              if (isScrolledIntoView($('#support-logo'))) {
                    let slowerChange = setTimeout(function(){
                        $(".brands-img-1").attr("src",brands[counter][0]);
                        $(".brands-site-1").attr("href",brands[counter][1]);

                        $(".brands-img-2").attr("src",brands[counter+1][0]);
                        $(".brands-site-2").attr("href",brands[counter+1][1]);

                        $(".brands-img-3").attr("src",brands[counter+2][0]);
                        $(".brands-site-3").attr("href",brands[counter+2][1]);

                        $(".brands-img-4").attr("src",brands[counter+3][0]);
                        $(".brands-site-4").attr("href",brands[counter+3][1]);
                    }, 4000)
                    
                    counter += 4;
                    if (counter >= 19) counter = 0;
              }
              else if (!isScrolledIntoView($('#support-logo'))) {
                  clearInterval(galleryTimer);
                  counter = 0;
              }
            }, 3000);
        }
         
         if (!isScrolledIntoView($('#support-logo'))) {
              counter = 0;
          }
    });
    
    
	var formMessages = $('.form-alert-message');
	document.getElementById('feedback-form').addEventListener('submit', function(evt){
	  /*var http = new XMLHttpRequest();
      var f = this;
      evt.preventDefault();
      http.open("POST", "./mail.php", true);
      http.open("POST", "https://cors.io/?https://steveeecsrubin.github.io/embroidery/mail.php");
	  http.withCredentials = true;
      http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
            $(formMessages).removeClass('hidden');
            $(formMessages).removeClass('alert-danger');
            $(formMessages).addClass('alert-success');
            $(formMessages).text(http.responseText);
            $(".contact-form input").val("");
            $(".contact-form input.submit-btn").val("Submit");
        }
      }
      http.onerror = function() {
          $(formMessages).removeClass('hidden');
          $(formMessages).addClass('alert-danger');
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
      http.send(new FormData(f));*/
		  /*$.ajax({
			  url: "https://cors.io/?https://steveeecsrubin.github.io/embroidery/mail.php",
			  type: "POST",
			  dataType: 'jsonp',
			  success: function(response) {
				$(formMessages).removeClass('hidden');
				$(formMessages).removeClass('alert-danger');
				$(formMessages).addClass('alert-success');
				$(formMessages).text(http.responseText);
				$(".contact-form input").val("");
				$(".contact-form input.submit-btn").val("Submit");
			  },
			  error: function(response) {
				  $(formMessages).removeClass('hidden');
				  $(formMessages).addClass('alert-danger');
				  $(formMessages).text('Oops! An error occured and your message could not be sent.');
			  }
			});*/
			
			var xhr = new XMLHttpRequest();

			xhr.open('POST', 'https://cors.io/?https://steveeecsrubin.github.io/embroidery/mail.php', false);
			xhr.send();

			if (xhr.status != 200) {

				  $(formMessages).removeClass('hidden');
				  $(formMessages).addClass('alert-danger');
				  $(formMessages).text('Oops! An error occured and your message could not be sent.');

			} else {

				$(formMessages).removeClass('hidden');
				$(formMessages).removeClass('alert-danger');
				$(formMessages).addClass('alert-success');
				$(formMessages).text(http.responseText);
				$(".contact-form input").val("");
				$(".contact-form input.submit-btn").val("Submit");

			}
    }, false);
    
}(jQuery));	
