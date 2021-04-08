$(document).ready(function () {
   
	// header menu
	
	let menu_item = $('.menu ul li a'),
		menu_wrap = $('.menu-panel');

	menu_item.on('click', function(e) {
		if($(this).next(menu_wrap).length) {

			$(this).parent().siblings().removeClass('active');

			$(this).parent().toggleClass('active');
		}	
	});

	let menu_item_smart = $('.menu_smart-nav ul li a'),
		menu_wrap_smart = $('.menu-panel_smart');

	menu_item_smart.on('click', function(e) {
		if($(this).next(menu_wrap_smart).length) {

			$(this).parent().siblings().removeClass('active');

			$(this).parent().toggleClass('active');
		}	
	});

	let smart_menu = $('#smart_menu');

	$('#active_smart_menu').on('click', function() {
		smart_menu.addClass('active');
		$('body').addClass('scroll_hidden');
	});

	$('#smart_menu_close').on('click', function() {
		smart_menu.removeClass('active');

		$('body').removeClass('scroll_hidden');
	});



	let swiper_header = new Swiper('#slider_header', {
		slidesPerView: 1,
		// effect: 'fade',
		// init: false,
        loop: true,
  		// spaceBetween: 20,

		pagination: {
			el: '#slider_header .count_slider',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '">0</span> ' +
						' / ' +
						' <span class="' + totalClass + '">0</span>';
			}
		},

		navigation: {
			nextEl: '#slider_header_next',
			prevEl: '#slider_header_prev',
		},

		breakpoints: {
			'320': {
				slidesPerView: 1,
				spaceBetween: 20,

				pagination: {
					el: '.start_left-smart .count_slider',
					type: 'fraction'
				},
			},
			'768': {
				// slidesPerView: 1,
				// spaceBetween: 0,

				pagination: {
					el: '#slider_header .count_slider',
					type: 'fraction'
				},
			}
      	}
	});

	swiper_header.on('slideChange', function () {

		 var currentSlide = this.realIndex;

		if(currentSlide == 0) {
			$('.header_slider-1').fadeIn();
		} else {
			$('.header_slider-1').fadeOut();
		}

		if(currentSlide == 1) {
			$('.header_slider-2').fadeIn();
		} else {
			$('.header_slider-2').fadeOut();
		}
		if(currentSlide == 2) {
			$('.header_slider-3').fadeIn();
		} else {
			$('.header_slider-3').fadeOut();
		}		
    });


	const swiper_work = new Swiper('#slider-work', {
		slidesPerView: 3,
        // spaceBetween: 100,
		// effect: 'fade',
        loop: true,
        centeredSlides: true,
  		centeredSlidesBounds: true,
		//   freeMode: true,
		// autoHeight: true,
  		spaceBetween: 20,

		navigation: {
			nextEl: '.section_work .swiper-button-next',
			prevEl: '.section_work .swiper-button-prev',
		}
	});

	swiper_work.on('slideNextTransitionStart', function () {

		// $('#slider-work').find('.swiper-slide-active').css('width', '50%');

		
    });

	const swiper_review = new Swiper('#slider-reviews', {
		slidesPerView: 2,
		// effect: 'fade',
        loop: true,
  		spaceBetween: 20,

		navigation: {
			nextEl: '.section_reviews .swiper-button-next',
			prevEl: '.section_reviews .swiper-button-prev',
		},

		breakpoints: {
			'320': {
				slidesPerView: 1,
				spaceBetween: 0,
			},

			'640': {
				slidesPerView: 2,
				spaceBetween: 20,
			},
      	}
	});
	
	
	let swiper_calc_settings = {
		// slidesPerView: 1,
		effect: 'fade',
		// init: false,
        // loop: true,
  		// spaceBetween: 20,

		pagination: {
			el: '.section_calc-wrap_slider .nav_control',
			type: 'fraction'
		},

		navigation: {
			nextEl: '.section_calc-wrap_slider .calc-button-next, #page_slide_next',
			prevEl: '.section_calc-wrap_slider .calc-button-prev, #page_slide_prev',
		}
	}
	let swiper_calc = new Swiper('#slider-calc', swiper_calc_settings);

	$('#reset_calc').on('click', function() {
		swiper_calc.slideTo(0, 0);
		currentSlide = 1;
	});

	swiper_calc.on('slideChange', function () {

		 var currentSlide = this.realIndex;
		
		if(currentSlide == 5) {
			$('.section_calc-wrap .nav').addClass('hide');
			$('.section_calc-wrap .slide_button').addClass('hide');
		} else {
			$('.section_calc-wrap .nav').removeClass('hide');
			$('.section_calc-wrap .slide_button').removeClass('hide');
		}

		
    });

	var swiper_advantages = null;
	var slider_section3 = null;


	function advSliderInit() {
		swiper_advantages = new Swiper('#slider_advantages', {
			slidesPerView: 1,
			// effect: 'fade',
			loop: true,
			spaceBetween: 0,

			navigation: {
				nextEl: '.advantages-wrap .swiper-button-next',
				prevEl: '.advantages-wrap .swiper-button-prev',
			}
		});
	}

	function advSliderDestroy() {
		if(swiper_advantages) {
			swiper_advantages.destroy();
			swiper_advantages = null;
		}
	}

	function section3SliderInit() {
		slider_section3 = new Swiper('#slider_section3', {
			slidesPerView: 2,
			// effect: 'fade',
			loop: true,
			spaceBetween: 20,

			navigation: {
				nextEl: '#slider_section3 .swiper-button-next',
				prevEl: '#slider_section3 .swiper-button-prev',
			}
		});
	}

	function section3SliderDestroy() {
		if(slider_section3) {
			slider_section3.destroy();
			slider_section3 = null;
		}
	}

	if($(window).width() <= 768) {
		advSliderInit();
		section3SliderInit();
	} else {
		advSliderDestroy();
		section3SliderDestroy();
	}

	$(window).on('resize', function() {
		if($(window).width() <= 768) {
			advSliderInit();
			section3SliderInit();
		} else {
			advSliderDestroy();
			section3SliderDestroy();
		}
	});
	
});