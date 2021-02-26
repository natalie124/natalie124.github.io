'use strict';
$(document).ready(function() {
  // открыть / закрыть мобильное меню
  $('.js-mobile-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.js-mobile-menu').toggleClass('active');
  });
});

'use strict';
$(document).ready(function() {
  // слайдер баннер
  var bannerSlider = $('.banner-slider');

  bannerSlider.each(function() {
    var swiper = new Swiper(this, {
      speed: 700,
      loop: true,
      navigation: {
        nextEl: $(this).find('.banner-slider__btn--next')[0],
        prevEl: $(this).find('.banner-slider__btn--prev')[0]
      }
    });
  });
});
$(document).ready(function() {
  // слайдер с карточками
  var cardsSlider = $('.cards-slider');

  cardsSlider.each(function() {
    var swiper = new Swiper($(this).find('.cards-slider__container')[0], {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: $(this).find('.cards-slider__btn--next')[0],
        prevEl: $(this).find('.cards-slider__btn--prev')[0]
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        569: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        737: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        991: {
          spaceBetween: 30,
        },
      }
    });
  });
});

