'use strict';
$(document).ready(function() {
    // scroll to anchor start
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
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
                    spaceBetween: 5,
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

    $(document).click(function(e) {
        var el = $(".menu__item--submenu");
        if (!el.is(e.target) &&
            el.has(e.target).length === 0) {
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

    //masks
    function phoneMask(input) {
        var mask = IMask(input, {
            mask: '+{7}(000)000-00-00',
            minLength: 11
        });
    }

    function addInputMask() {
        var inputsTel = document.querySelectorAll('input[type=tel]');
        if (inputsTel) {
            inputsTel.forEach(function(inputTel) {
                phoneMask(inputTel);
            });
        }
    }

    addInputMask();

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