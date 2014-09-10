$(function () {
    app = {
        //переменные
        var: {
            $btn: $('.main-btn'), //кнопка которую будем менять

            //настройки по умолчанию
            default: {
                'btn-class': 'my-class',
                'btn-text': 'Stylize me completely :(',
                'padding': '0px',
                'border-width': '1px',
                'border-style': 'none',
                'border-color': '#000',
                'border-radius': '0px',
                'background-color': 'inherit',
                'background-image': 'none',
                'color': '#000',
                'font-style': 'normal',
                'font-weight': 'normal',
                'font-size': '25',
                'font-family': 'Comic Sans MS',
                'text-transform': 'none',
                'text-shadow': 'none',
                //'text-shadow': app.var.default.textShadow-posx
            },

            cur_data: {}, //текущие параметры

            //все текстовые инпуты с которыми работаем
            $input_text: $('.input-text'),
            $shadowText_color: $('#shadowText-color'),
            $boxShadow_color: $('#boxShadow-color'),
            $background_color: $('#background-color'),

            // набор бегунки (jquery ui slider)
            $sliders: $('.slider'),
            $font_size: $('#font-size'),
            $shadowTextOffset_x: $('#shadowTextOffset-x'),
            $shadowTextOffset_y: $('#shadowTextOffset-y'),
            $shadowText_blur: $('#shadowText-blur'),
            $boxShadowOffset_x: $('#boxShadowOffset-x'),
            $boxShadowOffset_y: $('#boxShadowOffset-y'),
            $boxShadow_blur: $('#boxShadow-blur'),
            $backgroundColor_start: $('#backgroundColor-start'),
            $backgroundColor_end: $('#backgroundColor-end'),
            $backgroundColor_dest: $('#backgroundColor-dest'),
            $border_width: $('#border-width'),
            $borderRadius: $('#border-radius'),
            $borderRadius_tr: $('#borderRadius-tr'),
            $borderRadius_tl: $('#borderRadius-tl'),
            $borderRadius_bl: $('#borderRadius-bl'),
            $borderRadius_br: $('#borderRadius-br'),
            $padding: $('#padding'),
            $paddingTop: $('#padding-top'),
            $paddingRight: $('#padding-right'),
            $paddingBottom: $('#padding-bottom'),
            $paddingLeft: $('#padding-left'),

            // checkbox расширенного режима
            $textShadow_adv: $('#textShadow-adv'),
            $boxShadow_adv: $('#boxShadow-adv'),
            $background_adv: $('#background-adv'),
            $border_adv: $('#border-adv'),
            $borderRadius_adv: $('#borderRadius-adv'),
            $padding_adv: $('#padding-adv'),

            // блоки расширенных настроек
            $textShadow_adv__block: $('.textShadow-adv__block'),
            $boxShadow_adv__block: $('.boxShadow-adv__block'),
            $background_adv__block: $('.background-adv__block'),
            $border_adv__block: $('.border-adv__block'),
            $borderRadius_adv__block: $('.borderRadius-adv__block'),
            $padding_adv__block: $('.padding-adv__block')
        },


        init: function () {
            //console.log(app.var.$input_text);
            // инициализируем бегунки
            app.var.$font_size.slider({
                range: "min", min: 6, max: 60, step: 1,
                value: app.var.default['font-size'],
                create: function (event, ui) {
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$shadowTextOffset_x.slider({
                disabled: true,
                range: "min", min: -60, max: 60, step: 1,
                value: app.var.default['textShadow-posx'],
                create: function (event, ui) {
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$shadowTextOffset_y.slider({
                disabled: true,
                range: "min", min: -60, max: 60, step: 1,
                value: app.var.default['textShadow-posy'],
                create: function (event, ui) {
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$shadowText_blur.slider({
                disabled: true,
                range: "min", min: 0, max: 10, step: 1,
                value: 2,
                create: function (event, ui) {
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$boxShadowOffset_x.slider({
                disabled: true,
                range: "min", min: -60, max: 60, step: 1,
                value: 0,
                create: function (event, ui) {
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$boxShadowOffset_y.slider({
                disabled: true,
                range: "min", min: -60, max: 60, step: 1,
                value: 0,
                create: function (event, ui) {
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$boxShadow_blur.slider({
                disabled: true,
                range: "min", min: 0, max: 10, step: 1,
                value: 2,
                create: function (event, ui) {
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$border_width.slider({
                disabled: false,
                range: "min", min: 1, max: 30, step: 1,
                //value: app.var.default['border-weight'],
                create: function (event, ui) {
                    //console.log(ui.value)
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$borderRadius.slider({
                disabled: false,
                range: "min", min: 0, max: 60, step: 1,
                //value: app.var.default['border-weight'],
                create: function (event, ui) {
                    //console.log(ui.value)
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            $('.slider--adv',app.var.$borderRadius_adv__block).slider({
                disabled: true,
                range: "min", min: 0, max: 60, step: 1,
                //value: app.var.default['border-weight'],
                create: function (event, ui) {
                    //console.log(ui.value)
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$padding.slider({
                disabled: false,
                range: "min", min: 0, max: 60, step: 1,
                //value: app.var.default['border-weight'],
                create: function (event, ui) {
                    //console.log(ui.value)
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            $('.slider--adv',app.var.$padding_adv__block).slider({
                disabled: true,
                range: "min", min: 0, max: 60, step: 1,
                //value: app.var.default['border-weight'],
                create: function (event, ui) {
                    //console.log(ui.value)
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.cur_data = app.cloneObj(app.var.default);
            app.get_html();
            app.get_css();
            app.var.$btn.css(app.var.default)
            app.listeners();
        },

        listeners: function () {
            app.var.$input_text.on('keyup change', this.set_input_text_data);
            app.var.$sliders.on('slide', this.set_slider_text_data);
            app.var.$sliders.on('slide slidestop', this.sliderHandle_update);
            app.var.$textShadow_adv.on('change', this.switch_textShadow_adv);
            app.var.$boxShadow_adv.on('change', this.switch_boxShadow_adv);
            app.var.$background_adv.on('change', this.switch_background_adv);
            app.var.$borderRadius_adv.on('change', this.switch_borderRadius_adv);
            app.var.$padding_adv.on('change', this.switch_padding_adv);
            app.var.$shadowText_color.on('change', this.set_textShadow);
            app.var.$boxShadow_color.on('change', this.set_boxShadow);
            $(".input-text--adv", app.var.$background_adv__block).on('change', this.set_backgroundGradient)
            $(".slider--adv", app.var.$textShadow_adv__block).on('slide slidestop', this.set_textShadow);
            $(".slider--adv", app.var.$textShadow_adv__block).on('slide slidestop', this.sliderHandle_update);
            $(".slider--adv", app.var.$boxShadow_adv__block).on('slide slidestop', this.set_boxShadow);
            $(".slider--adv", app.var.$boxShadow_adv__block).on('slide slidestop', this.sliderHandle_update);
            $(".slider--adv", app.var.$borderRadius_adv__block).on('slide slidestop', this.set_borderRadius);
            $(".slider--adv", app.var.$borderRadius_adv__block).on('slide slidestop', this.sliderHandle_update);
            $(".slider--adv", app.var.$padding_adv__block).on('slide slidestop', this.set_padding);
            $(".slider--adv", app.var.$padding_adv__block).on('slide slidestop', this.sliderHandle_update);

        },

        sliderHandle_update: function(e, ui, postfix) {

            $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
        },

        set_input_text_data: function (e) {
            var attr = $(this).attr('data-attr');
            if ($(this).val() == '') {
                app.var.cur_data[attr] = app.var.default[attr];
            }
            else {
                app.var.cur_data[attr] = $(this).val();
            }
            app.get_html();
            console.log(app.var.cur_data[attr])
            app.get_css();
            app.var.$btn.css(app.var.cur_data)
        },

        set_slider_text_data: function (e, ui) {
            var attr = $(this).attr('data-attr');
            //$(".ui-slider-handle", $(this)).html(ui.value + 'px');
            console.log(ui.value)
            app.var.cur_data[attr] = ui.value;
            app.get_css();
            app.var.$btn.css(app.var.cur_data)
        },

        set_textShadow: function (ui) {
                data = {
                    color: app.var.$shadowText_color.val(),
                    posx: app.var.$shadowTextOffset_x.slider('value') + 'px ',
                    posy: app.var.$shadowTextOffset_y.slider('value') + 'px ',
                    blur: app.var.$shadowText_blur.slider('value') + 'px '
                }
            app.var.cur_data['text-shadow'] = data.posx + data.posy + data.blur+ data.color;
            //console.log(css);
            //console.log(app.var.cur_data)
            app.var.$btn.css(app.var.cur_data);
            app.get_css();
        },

        set_boxShadow: function (ui) {
            var data = {
                color: app.var.$boxShadow_color.val(),
                posx: app.var.$boxShadowOffset_x.slider('value') + 'px ',
                posy: app.var.$boxShadowOffset_y.slider('value') + 'px ',
                blur: app.var.$boxShadow_blur.slider('value') + 'px '
            }
            app.var.cur_data['box-shadow'] = data.posx + data.posy + data.blur+ data.color;
            app.var.$btn.css(app.var.cur_data);
            app.get_css();
        },

        set_backgroundGradient: function () {
                data = {
                    dest: app.var.$backgroundColor_dest.val(),
                    colorStart: app.var.$backgroundColor_start.val(),
                    colorEnd: app.var.$backgroundColor_end.val(),

                }
            app.var.cur_data['background-image'] = '-webkit-linear-gradient('+ data.dest +', '+ data.colorStart +', '+ data.colorEnd +')';
            app.var.$btn.css(app.var.cur_data);
            app.var.cur_data['background-image'] = '-moz-linear-gradient('+ data.dest +', '+ data.colorStart +', '+ data.colorEnd +')';
            app.var.$btn.css(app.var.cur_data);
            app.var.cur_data['background-image'] = '-0-linear-gradient(to '+ data.dest +', '+ data.colorStart +', '+ data.colorEnd +')';
            app.var.$btn.css(app.var.cur_data);
            app.var.cur_data['background-image'] = '-ms-linear-gradient('+ data.dest +', '+ data.colorStart +', '+ data.colorEnd +')';
            app.var.$btn.css(app.var.cur_data);
            app.var.cur_data['background-image'] = 'linear-gradient(to '+ data.dest +', '+ data.colorStart +', '+ data.colorEnd +')';
            app.var.$btn.css(app.var.cur_data);
            app.get_css();
        },

        set_borderRadius: function (ui) {
            data = {
                topLeft: app.var.$borderRadius_tl.slider('value') + 'px ',
                topRight: app.var.$borderRadius_tr.slider('value') + 'px ',
                bottomLeft: app.var.$borderRadius_bl.slider('value') + 'px ',
                bottomRight: app.var.$borderRadius_br.slider('value') + 'px '
            }
            app.var.cur_data['-webkit-border-radius'] = data.topLeft + data.topRight + data.bottomLeft+ data.bottomRight;
            app.var.cur_data['-moz-border-radius'] = data.topLeft + data.topRight + data.bottomLeft+ data.bottomRight;
            app.var.cur_data['-khtml-border-radius'] = data.topLeft + data.topRight + data.bottomLeft+ data.bottomRight;
            app.var.cur_data['border-radius'] = data.topLeft + data.topRight + data.bottomLeft+ data.bottomRight;
            app.var.$btn.css(app.var.cur_data);
            app.get_css();
        },

        set_padding: function (ui) {
            var data = {
                topLeft: app.var.$paddingTop.slider('value') + 'px ',
                topRight: app.var.$paddingRight.slider('value') + 'px ',
                bottomLeft: app.var.$paddingBottom.slider('value') + 'px ',
                bottomRight: app.var.$paddingLeft.slider('value') + 'px'
            }
            app.var.cur_data['padding'] = data.topLeft + data.topRight + data.bottomLeft+ data.bottomRight;
            //console.log(css);
            //console.log(app.var.cur_data)
            app.var.$btn.css(app.var.cur_data);
            app.get_css();
        },

        switch_textShadow_adv: function (e) {
            if ($(this).prop('checked')) {
                $("input", app.var.$textShadow_adv__block).prop('disabled', false);
                $(".slider--adv", app.var.$textShadow_adv__block).slider('enable');
                app.set_textShadow();
            }
            else {
                $("input", app.var.$textShadow_adv__block).prop('disabled', true);
                $(".slider--adv", app.var.$textShadow_adv__block).slider('disable');
                app.var.cur_data['text-shadow'] = 'none'
                app.var.$btn.css(app.var.cur_data);
                app.get_css();
            }
        },

        switch_boxShadow_adv: function (e) {
            if ($(this).prop('checked')) {
                $("input", app.var.$boxShadow_adv__block).prop('disabled', false);
                $(".slider--adv", app.var.$boxShadow_adv__block).slider('enable');
                app.set_boxShadow();
            }
            else {
                $("input", app.var.$boxShadow_adv__block).prop('disabled', true);
                $(".slider--adv", app.var.$boxShadow_adv__block).slider('disable');
                app.var.cur_data['box-shadow'] = 'none'
                app.var.$btn.css(app.var.cur_data);
                app.get_css();
            }
        },

        switch_background_adv: function (e) {
            if ($(this).prop('checked')) {
                app.var.$background_color.prop('disabled', true)
                $(".input-text--adv", app.var.$background_adv__block).prop('disabled', false).trigger('change');
                //$(".slider--adv", app.var.$background_adv__block).slider('enable');
                app.set_backgroundGradient();
            }
            else {
                app.var.$background_color.prop('disabled', false).trigger('change')
                $(".input-text--adv", app.var.$background_adv__block).prop('disabled', true);
                //$(".slider--adv", app.var.$background_adv__block).slider('disable');
                app.var.cur_data['background-image'] = 'none'
                app.var.$btn.css(app.var.cur_data);
                app.get_css();
            }
        },

        switch_borderRadius_adv: function(e) {
            if ($(this).prop('checked')) {
                app.var.$borderRadius.slider('disable')
                $(".slider--adv", app.var.$borderRadius_adv__block).slider('enable');
                app.set_borderRadius();
            }
            else {
                app.var.cur_data['border-radius'] = app.var.$borderRadius.slider('enable')
                $(".slider--adv", app.var.$borderRadius_adv__block).slider('disable');
                app.var.cur_data['-webkit-border-radius'] = app.var.$borderRadius.slider('value')+'px'
                app.var.cur_data['-moz-border-radius'] = app.var.$borderRadius.slider('value')+'px'
                app.var.cur_data['-khtml-border-radius'] = app.var.$borderRadius.slider('value')+'px'
                app.var.cur_data['border-radius'] = app.var.$borderRadius.slider('value')+'px'
                app.var.$btn.css(app.var.cur_data);
                app.get_css();
            }
        },

        switch_padding_adv: function(e) {
            if ($(this).prop('checked')) {
                app.var.$padding.slider('disable')
                $(".slider--adv", app.var.$padding_adv__block).slider('enable');
                app.set_padding();
            }
            else {
                app.var.cur_data['padding'] = app.var.$padding.slider('enable')
                $(".slider--adv", app.var.$padding_adv__block).slider('disable');
                app.var.cur_data['padding'] = app.var.$padding.slider('value')+'px'
                app.var.$btn.css(app.var.cur_data);
                app.get_css();
            }
        },
        get_html: function () {
            var val = app.var.cur_data['btn-text'];
            app.var.$btn.text(val);
            $('#html-code').text('<button class="' + app.var.cur_data['btn-class'] + '">' + app.var.cur_data['btn-text'] + '</button>');
            Prism.highlightAll();
        },

        //получить готовый css
        get_css: function () {
            var data = app.var.cur_data;
            var str = '.' + data['btn-class'] + "{\n";
            if (data['padding'] !== '0px') {
                str += "\t" + 'padding: ' + data['padding']+";\n";
            };
            if (data['border-style'] !== 'none') {
                str += "\t" + 'border: ' + data['border-width']+", "+data['border-style']+", "+data['border-color'] + ";\n";
            };
            if (data['border-radius'] !== '0px') {
                console.log(data['-webkit-border-radius']);
                str += "\t" + '-webkit-border-radius: ' + data['-webkit-border-radius'] + ";\n";
                str += "\t" + '-moz-border-radius: ' + data['-moz-border-radius'] + ";\n";
                str += "\t" + '-khtml-border-radius: ' + data['-khtml-border-radius'] + ";\n";
                str += "\t" + 'border-radius: ' + data['border-radius'] + "px;\n";
            };
            if (data['background-color'] !== 'inherit') {
                str += "\t" + 'background-color: ' + data['background-color'] + ";\n";
            };
            if (data['background-image'] !== 'none') {
                str += "\t" + 'background-image: -webkit-' + data['background-image'] + ";\n";
                str += "\t" + 'background-image: -moz-' + data['background-image'] + ";\n";
                str += "\t" + 'background-image: -o-' + data['background-image'] + ";\n";
                str += "\t" + 'background-image: -ms-' + data['background-image'] + ";\n";
                str += "\t" + 'background-image: ' + data['background-image'] + ";\n";
            }
            str += "\t" + 'color: ' + data['color'] + ";\n";
            if (data['font-style'] !== 'normal') {
                str += "\t" + 'font-style: ' + data['font-style'] + ";\n";
            }
            if (data['font-weight'] !== 'normal') {
                str += "\t" + 'font-weight: ' + data['font-weight'] + ";\n";
            }
            str += "\t" + 'font-size: ' + data['font-size'] + "px;\n";
            str += "\t" + 'font-family: ' + data['font-family'] + ";\n";
            if (data['text-transform'] !== 'none') {
                str += "\t" + 'text-transform: ' + data['text-transform'] + ";\n";
            }
            if (data['text-shadow'] !== 'none') {
                str += "\t" + 'text-shadow: ' + data['text-shadow'] + "; /*not support ie8-9*/\n";
            }

            str += '}';
            $('#css-code').text(str);
            Prism.highlightAll();
        },
        cloneObj: function (obj) {
            if (obj == null || typeof(obj) != 'object')
                return obj;
            var newObj = {};
            for (var k in obj) {
                newObj[k] = obj[k];
            }
            return newObj
        }
    }
    app.init()
}())