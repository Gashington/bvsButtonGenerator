$(function(){
        fakewaffle.responsiveTabs(['xs', 'sm']);

        $('.nav-tabs a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        });

    $.minicolors = {
        defaults: {
            animationSpeed: 50,
            animationEasing: 'swing',
            change: null,
            changeDelay: 0,
            control: 'hue',
            defaultValue: '',
            hide: null,
            hideSpeed: 100,
            inline: false,
            letterCase: 'lowercase',
            opacity: false,
            position: 'bottom left',
            show: null,
            showSpeed: 100,
            theme: 'default'
        }
    };

    $('select, input[type=checkbox]').styler();

    $('input.minicolors').minicolors();

//    $( ".slider" ).slider({
//        disabled: true,
//        animate: true,
//        range: "min",
//        value: 16,
//        min: 0,
//        max: 60,
//        step: 1,
//
//        //Получаем значение и выводим его на странице
//        create: function( event, ui ) {
//            console.log(ui.value)
//            $( ".ui-slider-handle", $(this) ).html( $(this).slider('value') + 'px' );
//        },
//        slide: function( event, ui ) {
//            $( ".ui-slider-handle", $(this) ).html( ui.value + 'px' );
//        },

        //Обновляем скрытое поле формы, так что можно передать данные с помощью формы
//        change: function(event, ui) {
//            $('#hidden').attr('value', ui.value);
//        }

   // });

})