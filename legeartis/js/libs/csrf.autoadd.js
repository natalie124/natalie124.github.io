/**
* Чтобы не возитьcя с CSRF в каждом ajax запросе.
*/
!function($){
    var csrf_param = $('meta[name=csrf-param]').attr('content');
    var csrf_token = $('meta[name=csrf-token]').attr('content');

    $.ajaxPrefilter(function (options, originalOptions, xhr) {
        if (!options.crossDomain && csrf_param) {
            xhr.setRequestHeader('X-CSRF-Token', csrf_token);
        }
    });
}(jQuery);
