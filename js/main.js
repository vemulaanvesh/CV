/* =================================
------------------------------------
	Anvesh Vemula - CV Resume
	Updated: December 2024
 ------------------------------------
 ====================================*/

'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");
});

(function($) {

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	/*------------------
		Review Slider
	--------------------*/
	$('.review-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplay: true
	});

	/*------------------
		Progress Bars
	--------------------*/
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});

	/*------------------
		Language Progress
	--------------------*/
	$('.lan-prog').each(function() {
		var progress = $(this).data("lanprogesss");
		var ele      = '<span></span>';
		var ele_fade = '<span class="fade-ele"></span>';

		for (var i = 1; i <= 5; i++) {
			if(i <= progress){
				$(this).append(ele);
			} else {
				$(this).append(ele_fade);
			}
		}
	});

	/*------------------
		Popup - Only for image links
	--------------------*/
	$('.portfolio-item .port-pic[href$=".jpg"], .portfolio-item .port-pic[href$=".png"]').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
	});

	/*------------------
		Circle Progress - Updated Skills
	--------------------*/
	if($().circleProgress){
		
		// Modern gradient color for progress circles
		var gradientFill = {
			gradient: ['#06b6d4', '#3b82f6', '#8b5cf6'],
			gradientAngle: Math.PI / 4
		};

		// Kubernetes & Helm - 95%
		$("#progress1").circleProgress({
			value: 0.95,
			size: 175,
			thickness: 3,
			fill: gradientFill,
			emptyFill: "rgba(0, 0, 0, 0.05)"
		});

		// Terraform & IaC - 92%
		$("#progress2").circleProgress({
			value: 0.92,
			size: 175,
			thickness: 3,
			fill: gradientFill,
			emptyFill: "rgba(0, 0, 0, 0.05)"
		});

		// CI/CD Pipelines - 90%
		$("#progress3").circleProgress({
			value: 0.90,
			size: 175,
			thickness: 3,
			fill: gradientFill,
			emptyFill: "rgba(0, 0, 0, 0.05)"
		});

		// GCP & Azure - 93%
		$("#progress4").circleProgress({
			value: 0.93,
			size: 175,
			thickness: 3,
			fill: gradientFill,
			emptyFill: "rgba(0, 0, 0, 0.05)"
		});

		// Security & Vault - 88%
		$("#progress5").circleProgress({
			value: 0.88,
			size: 175,
			thickness: 3,
			fill: gradientFill,
			emptyFill: "rgba(0, 0, 0, 0.05)"
		});

		// Monitoring - 90%
		$("#progress6").circleProgress({
			value: 0.90,
			size: 175,
			thickness: 3,
			fill: gradientFill,
			emptyFill: "rgba(0, 0, 0, 0.05)"
		});

		// Shell & Scripting - 85%
		$("#progress7").circleProgress({
			value: 0.85,
			size: 175,
			thickness: 3,
			fill: gradientFill,
			emptyFill: "rgba(0, 0, 0, 0.05)"
		});

		// Google Anthos - 87%
		$("#progress8").circleProgress({
			value: 0.87,
			size: 175,
			thickness: 3,
			fill: gradientFill,
			emptyFill: "rgba(0, 0, 0, 0.05)"
		});
	}

	/*------------------
		Smooth Scroll for Navigation Links
	--------------------*/
	$('a[href^="#"]').on('click', function(e) {
		var target = $(this.getAttribute('href'));
		if(target.length) {
			e.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 80
			}, 800);
		}
	});

	/*------------------
		Scroll Animation for Elements
	--------------------*/
	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		
		// Add animation class to elements in viewport
		$('.tool-category, .expertise-card, .portfolio-item').each(function() {
			var elementTop = $(this).offset().top;
			var windowHeight = $(window).height();
			
			if (scrollPos > elementTop - windowHeight + 100) {
				$(this).addClass('animate-fade-in-up');
			}
		});
	});

})(jQuery);
