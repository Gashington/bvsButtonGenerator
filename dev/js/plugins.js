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
            defaultValue: '#000000',
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
    $('input.minicolors').minicolors();
})