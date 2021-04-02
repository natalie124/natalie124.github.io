!function($){

    var error_class = 'form-error';

    $(document).ready(function() {
        $('body').append('' +
            '<div class="overlay-loader2">' +
            '<div class="loader2">' +
            '<div></div><div></div><div></div><div></div><div></div><div></div><div></div>' +
            '</div>' +
            '</div>');

        /*
         один ajax обработчик на множество форм. если нужно будет что-то специфичное, можно создать сколько угодно
         */
        $('body').on('submit', '.js_ajax_form', function() {
            var $this = $(this);
            if($this.data('form_loading')){
                return false;
            }
            $this.data('form_loading', 'true');

            //$('.overlay-loader2').show();

            var $cur_form = $(this);

            var data = {
                anti_spam: 'anti_spam',
                anti_spam2: Math.random().toString(36).slice(2) //это поле вообще не нужно, если честно(:
            };

            $(this).ajaxSubmit({
                complete: function(){
                    $this.data('form_loading', false);
                    $('.overlay-loader2').hide();
                },
                success: function(response, statusText, xhr, $form){
                    var form_scope;
                    var success_modal = $form.data('success_modal');
                    var is_reset = $form.data('reset_form');

                    if(!$form.data('form_scope')){
                        form_scope = $form;
                    } else {
                        form_scope = $($form.data('form_scope'));
                    }

                    $('.js_submit_errors_container', form_scope).addClass('my_hidden');
                    $('.error', form_scope).removeClass('error');
                    $('.' + error_class, form_scope).empty();
                    $('.' + error_class, form_scope).addClass('my_hidden');

                    $('.js_delivery_error_wrapper', form_scope).addClass('my_hidden');

                    if(response.status === 1){
                        $form.trigger('success_send');
                        var js_pop_modal = $cur_form.closest('.js_pop_modal');

                        //$.fancybox.close();
                        $('.mfp-close').click();

                        if(is_reset){
                            $form.resetForm();
                        }

                        if(success_modal){
                            $(success_modal).fadeIn();
                        }

                        if(response.redirect){
                            window.location.href = response.redirect;
                        }
                    } else if (response.status === 2) {
                        processErrors(response, statusText, xhr, $form, form_scope);
                        $('.return-success', form_scope).addClass('my_hidden');
                        $('.js_captcha_image').click();

                        $form.trigger('fail_send');

                    } else if (response.status == 3) {
                        alert(response.error);
                        console.log(response.error)
                    }
                }
                ,dataType:  'json'
                ,data: data
            });

            return false;
        });
    });



    /*
     Это общая для всех форм обработка и вывод вернувшихся ошибок
     */
    function processErrors(response, statusText, xhr, $form, form_scope)
    {
        $('.' + error_class, form_scope).empty();
        $('.' + error_class, form_scope).addClass('my_hidden');
        $('.js_submit_errors_container', form_scope).addClass('my_hidden');

        $('.error', form_scope).removeClass('error');

        var errors = "";

        var arr_errors = response.errors;

        for(var model_name in arr_errors){
            if(!arr_errors.hasOwnProperty(model_name)){
                continue;
            }

            var errors_form_model = arr_errors[model_name];

            for(var field_name in errors_form_model){
                if(!errors_form_model.hasOwnProperty(field_name)){
                    continue;
                }

                var field_class = model_name + '_' + field_name;
                var error_text_class = field_class + '_error';
                var first_error_text = errors_form_model[field_name][0];
                var field_selector = '[name="' + model_name + '[' + field_name + ']"]';

                var field_error = $('.'+error_text_class);

                if($form.data('auto_add_errors') === true){
                    if((field_error.length === 0)){
                        var new_div = $('<div></div>');
                        new_div.addClass(error_text_class);
                        new_div.addClass(error_class);
                        new_div.show();

                        var next = $(field_selector).next();
                        if(next.prop("tagName") === 'LABEL'){
                            $(new_div).insertAfter(next);
                        } else {
                            $(new_div).insertAfter(field_selector);
                        }

                        field_error = $('.'+error_text_class);
                    }
                }

                $(field_error, form_scope).append(first_error_text);
                $(field_error, form_scope).removeClass('my_hidden');

                $(field_selector, form_scope).addClass('error');
                $($(field_selector).closest('div'), form_scope).addClass('error');


                for(var error_index in errors_form_model[field_name]) {
                    if (!errors_form_model[field_name].hasOwnProperty(error_index)) {
                        continue;
                    }

                    errors += errors_form_model[field_name][error_index] + "<br>";
                }

                field_error = false;
            }
        }

        if ($form.data('show_all_errors') !== false) {
            $('.js_submit_errors', form_scope).html(errors);
            $('.js_submit_errors_container', form_scope).removeClass('my_hidden');

        }

    }
}(jQuery);