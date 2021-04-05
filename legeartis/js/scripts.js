/**
 * Created by Stasy on 30.10.2017.
 */
$(window).on('load', function() {
    var cn = $('.tabs-schedule li.current').text();
    $('.clinic-name').text(cn);

});

if (window.location.href.indexOf("temirov-nikolay-nikolaevich") > -1) {
    $('.doctor-inner__form .tabs li:nth-child(2)').hide();
    $('.doctor-inner__form .tabs li:first-child').addClass('current').css({
        'width': '100%',
        'color': '#ffffff'
    });
    $('.doctor-inner__form .tabs li:first-child a').css('color', '#ffffff');
}

$('document').ready(function() {


    if ($(window).width() > 992) {
        $(".footer-top").css({ "min-height": $(".footer-akcii").height() })
    }


    $(".tab-panels").each(function(index) {
        $(this).find('.simple_tabs_nav li:eq(0)').addClass('current')
        $(this).find('.simple_tabs_container div.tab-block:not(:first)').hide();
    });
    $('.tab-panels .simple_tabs_nav li').click(function(event) {
        event.preventDefault();
        var $panel = $(this).closest('.tab-panels');

        $panel.find('.simple_tabs_container div.tab-block').hide();
        $panel.find('.simple_tabs_nav .current').removeClass("current");
        $(this).addClass('current');

        var clicked = $(this).find('a:first').attr('href');
        $('.simple_tabs_container div.tab-block' + clicked).fadeIn('slow');
        return false;
    });



    if ($(window).width() < 767) {
        $('.doctor-inner__function').after($('.doctor-inner__desc'));
        $('.doctor-gallery').after($('.doctor-inner__other'));
        if (window.location.pathname == '/contacts/record/') {
            $('.header__form-btn').css('display', 'none');
        }
    }

    $('.js-main-slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true
    });

    $('.js-testimontial-carousel').slick({
        prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
        dots: true
    });
    $('.landing-testimontial-carousel').slick({
        prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
        dots: false,
        adaptiveHeight: true
    });
    $('.js-doctor-carousel').slick({
        prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
        slidesToShow: 4,
        responsive: [{
                breakpoint: 900,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.js-doctor-carousel-for-page').slick({
        prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 900,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });



    $('.js-inner-gallery').slick({
        prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
        infinite: true,
        slidesToShow: 5,
        centerMode: true,
        variableWidth: true,
        centerPadding: '5px'
    });

    $('.js-inner-gallery-small').slick({
        prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
        infinite: true,
        slidesToShow: 4,
        centerMode: true,
        variableWidth: true,
        centerPadding: '5px'
    });

    $('.js-sidebar-slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
        dots: true,
        slidesToShow: 1

    });




    $('select').each(function() {
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        var currentOption = $this.children('option[value="' + $this.val() + '"]').eq(0);
        if (currentOption.length) {
            $styledSelect.text(currentOption.text());
        } else {
            $styledSelect.text($this.children('option').eq(0).text());
        }

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function() {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    // Форма поиска в шапке

    $('.js-header-search').click(function() {
        $(this).toggleClass('open');
        $('.header-form-search').toggleClass('open');
    });

    $('.dropdown').mouseenter(function() {
            $(this).addClass('open active');
        })
        .mouseleave(function() {
            $(this).removeClass('open active');

        });




    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').click(function(g) {
        var tab = $(this).closest('.tab'),
            cn = $(this).closest('li a').text(),
            index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        $('.clinic-name').text(cn);


        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        g.preventDefault();
    });

    function processLongTestimonials() {
        $('.js-testimontial__text').each(function(i) {
            if ($(this).text().length < 1000) {
                $(this).addClass("shot");
                $(this).parent().parent().find('.testimontial-inner__readmore').remove();
            } else {
                $(this).parents('.testimontial-single').addClass('long-testimontial');
            }

        });
    }
    processLongTestimonials();
    $(document).ajaxComplete(function() {
        processLongTestimonials();
    });


    $(document).on('click', '.js-collapse-testimonial', function() {
        $(this).parent().parent().find('.hide-part').slideToggle();
        $(this).toggleClass('open');
        $(this).parent().toggleClass('open')
        if ($(this).hasClass('open')) {
            $(this).text('Свернуть');
        } else {
            $(this).text('Читать полностью');
        }
        return false;
    });


    $('.st-accordion > li:eq(0) > a').addClass('active').next().slideDown();

    $('.st-accordion li > a').click(function(j) {
        var dropDown = $(this).closest('li').find('.st-content');

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.st-accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    $('.js-promo-carousel').slick({
        prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
        slidesToShow: 1
    });


    if ($(window).width() < 900) {
        $('.js-mobile-carousel').slick({
            prevArrow: '<button type="button" class="slick-prev slick-prev--arrow slick-prev--light"></button>',
            nextArrow: '<button type="button" class="slick-next slick-next--arrow slick-next--light"></button>',
            slidesToShow: 1
        });

        $('.js-mobile-toogle').click(function() {
            $('.js-mobile-menu').toggleClass('open');
            $(this).toggleClass('open');
        });


        $('.mobile-tabs-btn a').click(function() {
            $('.tabs').slideToggle();
            return false;
        });
        $('.tab ul.tabs li a').click(function() {
            $('.tabs').slideUp();
        });

    }

    // big text
    $(document).ready(function() {
        var spbody = $('body');
        $('.remove-sp a').on('click', function(e) {
            e.preventDefault();
            spbody.removeClass('special-ver color1 color2 color3 fontsize-small fontsize-normal fontsize-big no-image');
            Cookies.set('special_version', '0');
            Cookies.set('white_version', '0');
            Cookies.set('black_version', '0');
            Cookies.set('blue_version', '0');
            Cookies.set('font-big', '0');
            Cookies.set('font-middle', '0');
            Cookies.set('font-small', '0');
            Cookies.set('noimage_version', '0');
        });
        $('.js-special-ver').on('click', function(e) {
            e.preventDefault();
            spbody.addClass('special-ver color1 no-image fontsize-normal ');
            Cookies.set('special_version', '1');
            Cookies.set('white_version', '1');
            Cookies.set('font-middle', '1');
            Cookies.set('no-image', '1');
        });

        if (Cookies.get('special_version') == 1) {
            spbody.addClass('special-ver');
        }

        $('.a-color1').on('click', function(e) {
            e.preventDefault();
            spbody.removeClass('color2 color3');
            Cookies.set('black_version', '0');
            Cookies.set('blue_version', '0');
            spbody.toggleClass('color1');
            if (spbody.hasClass('color1')) {
                Cookies.set('white_version', '1');
            } else {
                Cookies.set('white_version', '0');
            }
        });

        $('.a-color2').on('click', function(e) {
            e.preventDefault();
            spbody.removeClass('color1 color3');
            Cookies.set('white_version', '0');
            Cookies.set('blue_version', '0');
            spbody.toggleClass('color2');
            if (spbody.hasClass('color2')) {
                Cookies.set('black_version', '1');
            } else {
                Cookies.set('black_version', '0');
            }
        });

        $('.a-color3').on('click', function(e) {
            e.preventDefault();
            spbody.removeClass('color1 color2');
            Cookies.set('white_version', '0');
            Cookies.set('black_version', '0');
            spbody.toggleClass('color3');
            if (spbody.hasClass('color3')) {
                Cookies.set('blue_version', '1');
            } else {
                Cookies.set('blue_version', '0');
            }
        });
        $('.a-fontsize-small').on('click', function(e) {
            e.preventDefault();
            spbody.removeClass('fontsize-normal fontsize-big');
            Cookies.set('font-big', '0');
            Cookies.set('font-middle', '0');
            spbody.toggleClass('fontsize-small');
            if (spbody.hasClass('fontsize-small')) {
                Cookies.set('font-small', '1');
            } else {
                Cookies.set('font-small', '0');
            }
        });
        $('.a-fontsize-normal').on('click', function(e) {
            e.preventDefault();
            spbody.removeClass('fontsize-big fontsize-small');
            Cookies.set('font-big', '0');
            Cookies.set('font-small', '0');
            spbody.toggleClass('fontsize-normal');
            if (spbody.hasClass('fontsize-normal')) {
                Cookies.set('font-middle', '1');
            } else {
                Cookies.set('font-middle', '0');
            }
        });
        $('.a-fontsize-big').on('click', function(e) {
            e.preventDefault();
            spbody.removeClass('fontsize-small fontsize-normal');
            Cookies.set('font-middle', '0');
            Cookies.set('font-small', '0');
            spbody.toggleClass('fontsize-big');
            if (spbody.hasClass('fontsize-big')) {
                Cookies.set('font-big', '1');
            } else {
                Cookies.set('font-big', '0');
            }
        });

        $(".form-group__switcher-img button[data-value='4']").on('click', function() {
            spbody.addClass('no-image');
            Cookies.set('noimage_version', '1');
        });

        $(".form-group__switcher-img button[data-value='3']").on('click', function() {
            $(this).siblings().removeClass('is-active');
            spbody.removeClass('no-image');
            Cookies.set('noimage_version', '0');
        });

        if (Cookies.get('white_version') == 1) {
            spbody.addClass('color1');
        }

        if (Cookies.get('black_version') == 1) {
            spbody.addClass('color2');
        }

        if (Cookies.get('blue_version') == 1) {
            spbody.addClass('color3');
        }

        if (Cookies.get('font-big') == 1) {
            spbody.addClass('fontsize-big');
        }
        if (Cookies.get('font-middle') == 1) {
            spbody.addClass('fontsize-normal');
        }
        if (Cookies.get('font-small') == 1) {
            spbody.addClass('fontsize-small');
        }

        // if(Cookies.set('noimage_version', '1')) {
        //     spbody.addClass('no-image');
        // }

        if (Cookies.get('noimage_version') == 1) {
            spbody.addClass('no-image');
            $(".form-group__switcher-img button[data-value='4']").addClass('is-active');
            $(".form-group__switcher-img button[data-value='3']").removeClass('is-active');
        }

    });


    $('.js_price_table [data-tooltip]').closest('td').hover(function() {
        var texttooltip = $(this).find('[data-tooltip]').data('tooltip');
        $(this).find('[data-tooltip]').after("<div class='tooltip-inner'>" + texttooltip + "</div>");
    });

    $('.js_price_table [data-tooltip]').closest('td').mouseleave(function() {
        $('.tooltip-inner').remove();
    });


    $('[data-fancybox]').fancybox({
        loop: true
    });

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();

    $(function() {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: "<i class='arrow-top'></i>", // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    });


    $('.input-phone').mask('+7(999)999-99-99');

    // Switch

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Switch = function() {
        function Switch(selector) {
            var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var _ref$highlightClass = _ref.highlightClass;
            var highlightClass = _ref$highlightClass === undefined ? "form-group__switcher--highlight" : _ref$highlightClass;
            var _ref$activeClass = _ref.activeClass;
            var activeClass = _ref$activeClass === undefined ? "is-active" : _ref$activeClass;

            _classCallCheck(this, Switch);

            this.activeClass = activeClass;
            this.element = document.querySelector(selector);
            // this.buttons = this.element.querySelectorAll("button");
            this.highlight = this.element.querySelector("." + highlightClass);
            this.activeBtn = this.element.querySelector("button." + this.activeClass);

            if (!this.activeBtn) {
                this.activeBtn = this.buttons[0];
                this.activeBtn.classList.add(this.activeClass);
            }

            this._highlight();
            this._addEvents();
        }

        Switch.prototype._highlight = function _highlight() {
            var w = this.activeBtn.offsetWidth;
            var x = this.activeBtn.offsetLeft;

            this.highlight.style.width = w + "px";
            this.highlight.style.transform = "translateX(" + x + "px)";
        };

        Switch.prototype._dispatchEvent = function _dispatchEvent() {
            this.element.dispatchEvent(new CustomEvent("change", { detail: this.activeBtn.dataset.value }));
        };

        Switch.prototype._addEvents = function _addEvents() {
            var _this = this;

            [].forEach.call(this.buttons, function(btn) {
                return btn.addEventListener("click", function(e) {
                    if (_this.activeBtn === e.target) return;

                    _this.activeBtn.classList.remove(_this.activeClass);
                    _this.activeBtn = e.target;
                    _this.activeBtn.classList.add(_this.activeClass);

                    _this._highlight();
                    _this._dispatchEvent();
                });
            });
        };

        return Switch;
    }();

    var mySwitch = new Switch(".form-group__switcher-form");
    var imgSwitch = new Switch(".form-group__switcher-img");
    mySwitch.element.addEventListener("change", function(e) {
        return console.log(e.detail);
    });

    imgSwitch.element.addEventListener("change", function(e) {
        return console.log(e.detail);
    });



});