'use strict';
$(document).ready(function() {
    // scroll to anchor start
    $('._anchor-link').click(function(e) {
        e.preventDefault();
        var _href = $(this).attr('href');
        var selector = '._anchor[data-anchor=' + _href.substr(1) + ']';
        var toElem = $(selector);
        var toTop = toElem.offset().top;
        $("html, body").animate({ scrollTop: toTop });
        return false;
    });

    // sliders start
    var slidersCards = $('.category__goods');
    slidersCards.each(function() {
        var swiper = new Swiper($(this).find('.category__slider')[0], {
            slidesPerView: 3,
            slidesPerGroup: 3,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            lazy: true,
            preloadImages: true,
            navigation: {
                nextEl: $(this).find('.category__nav--next')[0],
                prevEl: $(this).find('.category__nav--prev')[0],
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                569: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                1400: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
            }
        });
    });
    // sliders end
    // submenu start
    $('.menu__item--submenu').on('click', function(e) {
        e.preventDefault();
        if (window.innerWidth < 991) {
            $('.submenu').slideToggle(200);
        }
    });

    $(document).click(function (e){
        var el = $(".menu__item--submenu");
        if (!el.is(e.target)
            && el.has(e.target).length === 0) {
            $('.submenu').slideUp(200);
        }
    });

    if (window.innerWidth >= 991) {
        $('.menu__item--submenu').hover(function() {
            clearTimeout($.data(this, 'timer'));
            $('.submenu', this).stop(true, true).slideDown(200);
        }, function() {
            $.data(this, 'timer', setTimeout($.proxy(function() {
                $('.submenu', this).stop(true, true).slideUp(200);
            }, this), 100));
        });
    }
    // submenu end

    ScrollReveal().reveal('.about__description h2, .about__description p, .category__name, .category__header p, .category__header h2, .category__title', {
        scale: 1,
        duration: 1200,
        interval: 50,
        mobile: true,
        origin: 'bottom',
        distance: '30px',
    });


    ScrollReveal
    ScrollReveal().reveal('.about__description p, .feedback form', {
        scale: 1,
        duration: 1200,
        interval: 80,
        mobile: true
    });

    //lazy load images
    var lazyLoadInstance = new LazyLoad();
});