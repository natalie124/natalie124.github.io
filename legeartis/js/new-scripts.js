$(document).ready(function () {
    $('.header__city-toggle').on('click', function (e) {
        e.preventDefault();
        $('#city-modal').addClass('open')
    })
    $('.city-modal--close, .city-modal__bg').on('click', function (e) {
        e.preventDefault();
        $('#city-modal').removeClass('open')
    })
    $('.city-modal__list li a').on('click', function (e) {
        e.preventDefault()
        $('.header__city-toggle').text($(this).text())
        $('#city-modal').removeClass('open')
        location.href = $(this).attr('href')
    })

    if($(window).width() < 992) {
        $('.header__top-row').append($('.header__search-box'))
    }
})


!function($){
    $(function(){

        $('.js_city_choose').on('click', function(){
            Cookies.set('city_choose', $(this).data('id'), { expires: 999 });
            location.href = window.location.pathname;
            return false;
        });

    });
}(jQuery);