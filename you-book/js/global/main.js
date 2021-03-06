'use strict';
$(document).on('ready', function() {
    //lazy load images
    var lazyLoadInstance = new LazyLoad();

    //mini-cart start
    $('.js-mini-cart').on('mouseenter', function() {
        $('.mini-cart').addClass('active');
    });
    
    $('.js-mini-cart').on('click', function(e) {
        if ($(window).width() < 768) {
            e.preventDefault();
            $('.mini-cart').addClass('active');
        }
    });

    $(document).on('click', '.js-close', function(e) {
        $(this).parent().removeClass('active');
    });

    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            $('.mini-cart').removeClass('active');
        }
    });
    //mini-cart end

    // TAB start
    $('.js-tab-wrapper').each(function() {
        let ths = $(this);
        ths.find('.js-tab').not(':first').removeClass('active');
        ths.find('.js-tab-content').not(':first').hide().removeClass('active');
        ths.find('.js-tab').click(function() {
            ths.find('.js-tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.js-tab-content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
        }).eq(0).addClass('active');
    });
    // TAB end

    // accordion start
    $('.js-accordion-toggle a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().siblings('.active').find('.js-accordion-content').slideUp(200, 'linear');
        $(this).parent().siblings('.active').removeClass('active');

        $(this).parent().toggleClass('active');
        $(this).siblings('.js-accordion-content').slideToggle(200, 'linear');
    });
    // accordion end

    // header menu start
    $('.dropdown').each(function() {
    	var menu = $(this);
        var container = $(this).parent();
        container.on('mouseenter', function() {
        	menu.removeClass('active')
        	menu.fadeIn(200).addClass('active');
        });
        container.on('mouseleave', function() {
        	menu.fadeOut();
        });
    });
    $('.dropdown-menu').each(function() {
    	var menu = $(this);
        var container = $(this).parent();
        container.on('mouseenter', function() {
        	menu.removeClass('active')
        	menu.fadeIn(200).addClass('active');
        });
        container.on('mouseleave', function() {
        	menu.fadeOut();
        });
    });
    // header menu end

    // sliders start
    var promoSliders = $('.promo-slider');
    promoSliders.each(function() {
        var swiper = new Swiper($(this).find('.promo-slider__container')[0], {
            speed: 500,
            autoplay: {
                delay: 7000,
            },
            loop: true,
            lazy: true,
            pagination: {
                el: $(this).find('.swiper-pagination')[0],
                type: 'bullets',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: $(this).find('.slider-nav-btn--next')[0],
                prevEl: $(this).find('.slider-nav-btn--prev')[0], 
            },
            breakpoints: {
                768: {
                    dynamicBullets: false,
                },
            },
        });
    });
    var goodsSliders = $('.goods-slider');
    goodsSliders.each(function() {
        var swiper = new Swiper($(this).find('.goods-slider__container')[0], {
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            lazy: true,
            preloadImages: true,
            loop: true,
            navigation: {
                nextEl: $(this).find('.slider-nav-btn--next')[0],
                prevEl: $(this).find('.slider-nav-btn--prev')[0],
            },
            pagination: {
                el: $(this).find('.swiper-pagination')[0],
                type: 'bullets',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    dynamicBullets: false,
                },
                992: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    dynamicBullets: false,
                },
                1480: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    dynamicBullets: false,
                },
            }

        });
    });
    var discountedSliders = $('.discounted-slider');
    discountedSliders.each(function() {
        var swiper = new Swiper($(this).find('.discounted-slider__container')[0], {
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            lazy: true,
            preloadImages: true,
            navigation: {
                nextEl: $(this).find('.slider-nav-btn--next')[0],
                prevEl: $(this).find('.slider-nav-btn--prev')[0],
            },
            pagination: {
                el: $(this).find('.swiper-pagination')[0],
                type: 'bullets',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                768: {
                    dynamicBullets: false,
                },
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    dynamicBullets: false,
                }
            }

        });
    });
    var categorySliders = $('.category-slider');
    categorySliders.each(function() {
        var swiper = new Swiper($(this).find('.category-slider__container')[0], {
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            lazy: true,
            preloadImages: true,
            navigation: {
                nextEl: $(this).find('.slider-nav-btn--next')[0],
                prevEl: $(this).find('.slider-nav-btn--prev')[0],
            },
            pagination: {
                el: $(this).find('.swiper-pagination')[0],
                type: 'bullets',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    dynamicBullets: false,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    dynamicBullets: false,
                }
            }

        });
    });

    var authorsSliders = $('.authors-slider');
    authorsSliders.each(function() {
        var swiper = new Swiper($(this).find('.authors-slider__container')[0], {
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            lazy: true,
            preloadImages: true,
            navigation: {
                nextEl: $(this).find('.slider-nav-btn--next')[0],
                prevEl: $(this).find('.slider-nav-btn--prev')[0],
            },
            pagination: {
                el: $(this).find('.swiper-pagination')[0],
                type: 'bullets',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    dynamicBullets: false,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    dynamicBullets: false,
                },
                992: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    dynamicBullets: false,
                }
            }

        });
    });
    // sliders end

    // select start
    $('select').niceSelect();
    // select end
});

(function() {
  function quantityProducts() {
    // для полей с количеством товара
    var items = document.querySelectorAll('.quantity-block');

    if (!items) {
      return;
    }

    Array.prototype.forEach.call(items, function(item) {
      var minus = item.querySelector('.quantity-block__btn--minus');
      var plus = item.querySelector('.quantity-block__btn--plus');
      var input = item.querySelector('input');

      var defaultMin = 2;
      var defaultMax = 100;
      var dataMin = input.getAttribute('data-min');
      var dataMax = input.getAttribute('data-max');

      var min = dataMin && parseInt(dataMin) ? dataMin : defaultMin;
      var max = dataMin && parseInt(dataMin) ? dataMax : defaultMax;

      var quantityFieldMask = new IMask(input, {
        mask: Number,
        min: min,
        max: max
      });

      function quantityMinus() {
        if (input.value > min) {
          input.value = +input.value - 1;
        }
      }

      function quantityPlus() {
        if (input.value < max) {
          input.value = +input.value + 1;
        }
      }

      minus.addEventListener('click', quantityMinus);
      plus.addEventListener('click', quantityPlus);
    });
  }

  quantityProducts();


  // для range slider

  const rangeSlider = document.getElementById('range-slider');

    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
        start: [500, 999999],
            connect: true,
            step: 1,
        range: {
                'min': [500],
                'max': [999999]
        }
        });

        const input0 = document.getElementById('input-0');
        const input1 = document.getElementById('input-1');
        const inputs = [input0, input1];

        rangeSlider.noUiSlider.on('update', function(values, handle){
            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            console.log(arr);

            rangeSlider.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                console.log(index);
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }
})();
