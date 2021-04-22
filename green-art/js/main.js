'use strict';
$(document).ready(function() {
    // scroll to anchor start
    $('._anchor-link').click(function(e) {
        e.preventDefault();
        var _href = $(this).attr('href');
        var selector = '._anchor[data-anchor=' + _href + ']';
        var toElem = $(selector);
        var toTop = toElem.offset().top;
        $("html, body").animate({ scrollTop: toTop });
        return false;
    });
    // scroll to anchor end

    // sliders start
    var sliders = $('.slider-js');
    var categotySlider = $('.category__slider');
    var slidersCards = $('.slider-cards');

    sliders.each(function() {
        var swiper = new Swiper(this, {
            speed: 500,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            autoplay: true,
            loop: true,
            pagination: {
                el: $(this).find('.slider__pagination')[0],
                type: 'bullets',
                clickable: true
            }
        });
    });

    categotySlider.each(function() {
        var slides = this.querySelectorAll('.swiper-slide');
        if (slides.length > 1) {
            var swiper = new Swiper(this, {
                speed: 500,
                effect: 'fade',
                grabCursor: true,
                pagination: {
                    el: $(this).find('.category__pagination')[0],
                    type: 'bullets',
                    clickable: true
                }
            });
        }
    });

    slidersCards.each(function() {
        var swiper = new Swiper($(this).find('.slider-cards__container')[0], {
            slidesPerView: 3,
            slidesPerGroup: 3,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            pagination: {
                el: $(this).find('.slider-cards__pagination')[0],
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: $(this).find('.slider-cards__btn--next')[0],
                prevEl: $(this).find('.slider-cards__btn--prev')[0],
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
                991: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                1199: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
            }
        });
    });
    // sliders end

    ScrollReveal().reveal('.section-header, .category__item, .about, .advantages__item', {
        scale: 1,
        duration: 1200,
        interval: 50,
        mobile: true,
        origin: 'bottom',
        distance: '30px',
    });


    ScrollReveal
    ScrollReveal().reveal(' .category__bg, .reviews, .slider-cards', {
        scale: 1,
        duration: 1200,
        interval: 80,
        mobile: true
    });

    //lazy load images
    var lazyLoadInstance = new LazyLoad();

});