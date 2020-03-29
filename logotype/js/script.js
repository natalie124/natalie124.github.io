'use strict';
(function() {
  var favouritesBtn = document.querySelectorAll('.card__favourites');
  var activeClass = 'card__favourites--active';

  favouritesBtn.forEach(function(it){
    it.addEventListener('click', function() {
      it.classList.toggle(activeClass);
    });
  });
})();
(function() {
  'use strict';
  // для промо слайдера
  var promoSlider = new Swiper('.promo-slider', {
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
})();
(function() {
  'use strict';
  // для слайдеров с карточками
  var products = document.querySelectorAll('.products');

  products.forEach(function(it) {
    var next = it.querySelector('.products__next');
    var prev = it.querySelector('.products__prev');
    var slider = it.querySelector('.products__gallery');

    var swiper = new Swiper(slider, {
      slidesPerView: 4,
      slidesPerGroup: 4,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  }); 
})();
(function() {
  'use strict';
  // для слайдеров с новостями
  var products = document.querySelectorAll('.news');

  products.forEach(function(it) {
    var next = it.querySelector('.news__next');
    var prev = it.querySelector('.news__prev');
    var slider = it.querySelector('.news__gallery');

    var swiper = new Swiper(slider, {
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  }); 
})();
