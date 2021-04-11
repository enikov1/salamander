


$(document).ready(function () {

	const headerHeight = document.querySelector('header').offsetHeight + 20;
	const paretq = $('body');
	console.log(headerHeight);
	function scrollToElement(element, parent, cord = 0) {
		$(parent)[0].scrollIntoView(true);
			$(parent).animate({
			scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top - cord
			}, {
			duration: 'slow',
			easing: 'swing'
		});
	}

	// function gotoWork(elem) {
	// 	scrollToElement(elem, paretq, headerHeight);
	// }

	// setTimeout(function() {
		if (/#link_section_advantages/.test(location.href)) {
			let elemq = $('#link_section_advantages');
			scrollToElement(elemq, paretq, headerHeight);
		}


		if (/#link_section_work/.test(location.href)) {
			let elemq = $('#link_section_work');
			scrollToElement(elemq, paretq, headerHeight);
		}
		

		if (/#link_section_reviews/.test(location.href)) {
			let elemq = $('#link_section_reviews');
			scrollToElement(elemq, paretq, headerHeight);
		}

	$('.scrollTo1').on('click', function(e) {
		let elemq = $('#link_section_advantages');
		scrollToElement(elemq, paretq, headerHeight);

		smart_menu.removeClass('active');

		$('body').removeClass('scroll_hidden');

		e.preventDefault();
	});

	

	$('.scrollTo2').on('click', function(e) {
		let elemq = $('#link_section_work');
		scrollToElement(elemq, paretq, headerHeight);

		smart_menu.removeClass('active');

		$('body').removeClass('scroll_hidden');

		e.preventDefault();
	});

	$('.scrollTo3').on('click', function(e) {
		let elemq = $('#link_section_reviews');
		scrollToElement(elemq, paretq, headerHeight);

		smart_menu.removeClass('active');

		$('body').removeClass('scroll_hidden');

		e.preventDefault();
	});
   
	// header menu
	
	let menu_item = $('.menu ul li a'),
		menu_wrap = $('.menu-panel');

	menu_item.on('click', function(e) {

		let _this = $(this);

		if(_this.next(menu_wrap).length) {

			_this.parent().siblings().removeClass('active');

			_this.parent().toggleClass('active');
		}

		
	});

	$(document).mouseup(function (e) {
			let container = $(".menu-panel, .menu ul li");
			if (container.has(e.target).length === 0){
				$('.menu ul li.active').removeClass('active');
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
			loop: true,

			pagination: {
				el: '#slider_header .count_slider',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '">0</span> ' +
							' / ' +
							' <span class="' + totalClass + '">0</span>';
				}
			},

			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: '.slider_header_next',
				prevEl: '.slider_header_prev',
			},

			breakpoints: {
				'320': {
					slidesPerView: 1,
					spaceBetween: 20,

					pagination: {
						el: '.start_left-smart .count_slider',
						type: 'fraction'
					},

					navigation: {
						nextEl: '.slider_header_next2',
						prevEl: '.slider_header_prev2',
					},
				},
				'768': {

					pagination: {
						el: '#slider_header .count_slider',
						type: 'fraction'
					},
					navigation: {
						nextEl: '.slider_header_next',
						prevEl: '.slider_header_prev',
					},
				}
			}
		});

		swiper_header.on('slideChange', function () {

			var currentSlide = this.realIndex;

			if(currentSlide == 0) {
				$('.header_slider-1').show();
			} else {
				$('.header_slider-1').hide();
			}

			if(currentSlide == 1) {
				$('.header_slider-2').show();
			} else {
				$('.header_slider-2').hide();
			}
			if(currentSlide == 2) {
				$('.header_slider-3').show();
			} else {
				$('.header_slider-3').hide();
			}		
		});


	// setTimeout(function() {

		

		const swiper_work = new Swiper('#slider-work', {
			slidesPerView: 2.5,
			loop: true,
			centeredSlides: true,
			centeredSlidesBounds: true,
			spaceBetween: 20,

			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: '.swiper-nav_1 .swiper-button-next',
				prevEl: '.swiper-nav_1 .swiper-button-prev',
			},

			breakpoints: {
				'320': {
					slidesPerView: 1.5,
				},
				'768': {
					slidesPerView: 2.5,
				}
			}
		});

		const swiper_work2 = new Swiper('#slider-work2', {
			slidesPerView: 2.5,
			loop: true,
			centeredSlides: true,
			centeredSlidesBounds: true,
			spaceBetween: 20,

			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: '.swiper-nav_2 .swiper-button-next',
				prevEl: '.swiper-nav_2 .swiper-button-prev',
			},
			breakpoints: {
				'320': {
					slidesPerView: 1.5,
				},
				'768': {
					slidesPerView: 2.5,
				}
			}
		});

		const swiper_work3 = new Swiper('#slider-work3', {
			slidesPerView: 2.5,
			loop: true,
			centeredSlides: true,
			centeredSlidesBounds: true,
			spaceBetween: 20,

			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: '.swiper-nav_3 .swiper-button-next',
				prevEl: '.swiper-nav_3 .swiper-button-prev',
			},
			breakpoints: {
				'320': {
					slidesPerView: 1.5,
				},
				'768': {
					slidesPerView: 2.5,
				}
			}
		});

		const swiper_work4 = new Swiper('#slider-work4', {
			slidesPerView: 2.5,
			loop: true,
			centeredSlides: true,
			centeredSlidesBounds: true,
			spaceBetween: 20,

			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: '.swiper-nav_4 .swiper-button-next',
				prevEl: '.swiper-nav_4 .swiper-button-prev',
			},
			breakpoints: {
				'320': {
					slidesPerView: 1.5,
				},
				'768': {
					slidesPerView: 2.5,
				}
			}
		});

		const swiper_work5 = new Swiper('#slider-work5', {
			slidesPerView: 2.5,
			loop: true,
			centeredSlides: true,
			centeredSlidesBounds: true,
			spaceBetween: 20,

			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: '.swiper-nav_5 .swiper-button-next',
				prevEl: '.swiper-nav_5 .swiper-button-prev',
			},
			breakpoints: {
				'320': {
					slidesPerView: 1.5,
				},
				'768': {
					slidesPerView: 2.5,
				}
			}
		});

		// swiper_work2.on('updateSlidesSize', function () {

		// 	// $('#slider-work').find('.swiper-slide-active').css('width', '50%');
		// 	sliderDecoratorUpdateSlidesSize();
			
		// });

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
		
	// }, 2000);

	

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


	// setTimeout(function() {
		if($(window).width() < 768) {
			advSliderInit();
			section3SliderInit();
		} else {
			advSliderDestroy();
			section3SliderDestroy();
		}

		$(window).on('resize', function() {
			if($(window).width() < 768) {
				advSliderInit();
				section3SliderInit();
			} else {
				advSliderDestroy();
				section3SliderDestroy();
			}
		});

		
	// }, 2000);

	const swiper_work_inner = new Swiper('#slider-word_page1', {
			slidesPerView: 1,
			watchOverflow: true,
			// direction: 'vertical',
			// spaceBetween: 100,
			// effect: 'fade',
			// loop: true,
		});

	$('.slide-1').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(0);

		$(this).siblings().removeClass('active');
		  $(this).addClass('active');
		$('.section_work .swiper-nav').addClass('hidden');

		$('.swiper-nav_1').removeClass('hidden');
	});
	$('.slide-2').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(1);
		// swiper_work2.update
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		$('.section_work .swiper-nav').addClass('hidden');

		$('.swiper-nav_2').removeClass('hidden');
	});
	$('.slide-3').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(2);
		  
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');

		$('.section_work .swiper-nav').addClass('hidden');

		$('.swiper-nav_3').removeClass('hidden');
	});
	$('.slide-4').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(3);
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');

		$('.section_work .swiper-nav').addClass('hidden');

		$('.swiper-nav_4').removeClass('hidden');
	});
	$('.slide-5').on('click', function(e) {
		e.preventDefault();
      	swiper_work_inner.slideTo(4);
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active');

		$('.section_work .swiper-nav').addClass('hidden');

		$('.swiper-nav_5').removeClass('hidden');
	});

	$('.action_popup_first').on('click', function(e) {
		e.preventDefault();
		$('#popup_first').addClass('active');

		$('body').addClass('scroll_hidden');
	});

	$('.action_popup_last').on('click', function(e) {
		e.preventDefault();
		$('#popup_last').addClass('active');

		$('body').addClass('scroll_hidden');
	});

	$('.popup_wrap-close').on('click', function() {
		$('.popup').removeClass('active');

		$('body').removeClass('scroll_hidden');
	});

	// product

	const galleryThumbs = new Swiper('.slider_product-bottom', {
      spaceBetween: 14,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

	  breakpoints: {
			'320': {
				spaceBetween: 7,
			},

			'768': {
				spaceBetween: 14,
			}
      	}
    });
    const galleryTop = new Swiper('.slider_product-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.slider_product-next',
        prevEl: '.slider_product-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });

	let slider_blog_set = {};

	if($('.slider_blog .swiper-slide').length > 1) {
		slider_blog_set = {
			spaceBetween: 10,
			watchOverflow: false
		}
	} else {
		slider_blog_set = {
			spaceBetween: 10,
			watchOverflow: true
		}
	}

	

	

	$('#form_message1').on('submit', function(e) {
		let _this = $(this);

		e.preventDefault();

		_this.empty();

		$('#popup_first').find('.popup_wrap-header').addClass('small');
		$('#popup_first').find('.popup_wrap-header span').text("Спасибо за Ваше обращение!");

		setTimeout(function() {
			

			$('#popup_first').find('.popup_wrap-form').append("<p class='text'>Наш менеджер свяжется с Вами в течении 15 минут!</p>");
		}, 500);

		setTimeout(function() {

			$('.popup').removeClass('active');

			$('body').removeClass('scroll_hidden');

		}, 5000);

	});

	$('#form_message2').on('submit', function(e) {
		let _this = $(this);

		e.preventDefault();

		_this.empty();
		$('#popup_last').find('.popup_wrap-header').addClass('small');
		$('#popup_last').find('.popup_wrap-header span').text("Спасибо за Ваше обращение!");

		setTimeout(function() {
			
			

			$('#popup_last').find('.popup_wrap-form').append("<p class='text'>Наш менеджер свяжется с Вами в течении 15 минут!</p>");
		}, 500);

		setTimeout(function() {

			$('.popup').removeClass('active');

			$('body').removeClass('scroll_hidden');

		}, 5000);

	});

	$('#form_contact').on('submit', function(e) {
		let _this = $(this);
		e.preventDefault();

		_this.find('.field-control').addClass('success');

		_this.find('.field-control').append('<p>Сообщение успешно отправлено!</p>');
	

		setTimeout(function() {
			_this.find('.field-control p').remove();
			_this.find('.field-control').removeClass('success');
		}, 5000);
	});
});