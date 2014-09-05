$(function () {
    app = {
        //переменные
        var: {
            $btn: $('.main-btn'), //кнопка которую будем менять

            //настройки по умолчанию
            default: {
                'btn-class': 'my-class',
                'btn-text': 'Try me',
                'color': '#ffffff',
                'font-style': 'normal',
                'font-weight': 'normal',
                'font-size': '16',
                'font-family': 'Arial',
                'text-transform': 'none',
                'text-shadow': 'none',
                //'text-shadow': app.var.default.textShadow-posx
            },

            cur_data: {}, //текущие параметры

            //все текстовые инпуты с которыми работаем
            $input_text: $('.input-text'),
            $shodowText_color: $('#shadowText-color'),
            // набор бегунки (jquery ui slider)
            $sliders: $('.slider'),
            $font_size: $('#font-size'),
            $shadowTextOffset_x: $('#shadowTextOffset-x'),
            $shadowTextOffset_y: $('#shadowTextOffset-y'),
            $shadowText_blur: $('#shadowText-blur'),

            // checkbox расширенного режима
            $textShadow_adv: $('#textShadow-adv'),

            // блоки расширенных настроек
            $textShadow_adv__block: $('.textShadow-adv__block'),
        },


        init: function () {
            //console.log(app.var.$input_text);
            // инициализируем бегунки
            app.var.$font_size.slider({
                range: "min", min: 6, max: 60, step: 1,
                value: app.var.default['font-size'],
                create: function (event, ui) {
                    console.log(ui.value)
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$shadowTextOffset_x.slider({
                disabled: true,
                range: "min", min: -60, max: 60, step: 1,
                value: app.var.default['textShadow-posx'],
                create: function (event, ui) {
                    console.log(ui.value)
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$shadowTextOffset_y.slider({
                disabled: true,
                range: "min", min: -60, max: 60, step: 1,
                value: app.var.default['textShadow-posy'],
                create: function (event, ui) {
                    console.log(ui.value)
                    $(".ui-slider-handle", $(this)).html($(this).slider('value') + 'px');
                }
            });
            app.var.$shadowText_blur.slider({
                disabled: true,
                range: "min", min: 0, max: 10, step: 1,
                value: app.var.default['textShadow-blur'],
                create: function (event, ui) {
                    console.log(ui.value)
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
            app.var.$textShadow_adv.on('change', this.set_textShadow_adv);
            app.var.$shodowText_color.on('change', this.set_textShadow);
            $(".slider--adv", app.var.$textShadow_adv__block).on('slide', this.set_textShadow);
            $(".slider--adv", app.var.$textShadow_adv__block).on('slide slidestop', this.sliderHandle_update);
        },
        sliderHandle_update: function(e, ui) {
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
            app.get_css();
            app.var.$btn.css(app.var.cur_data)
        },

        set_slider_text_data: function (e, ui) {
            var attr = $(this).attr('data-attr');
            //$(".ui-slider-handle", $(this)).html(ui.value + 'px');
            app.var.cur_data[attr] = ui.value;
            app.get_css();
            app.var.$btn.css(app.var.cur_data)
        },

        set_textShadow_adv: function (e) {
            var css = { 'text-shadow': '' }
            if ($(this).prop('checked')) {
                $("input", app.var.$textShadow_adv__block).prop('disabled', false);
                $(".slider--adv", app.var.$textShadow_adv__block).slider('enable');
                app.set_textShadow();
            }
            else {
                $("input", app.var.$textShadow_adv__block).prop('disabled', true);
                $(".slider--adv", app.var.$textShadow_adv__block).slider('disable');
                //css['text-shadow'] = 'none';
                app.var.cur_data['text-shadow'] = 'none'
                app.var.$btn.css(app.var.cur_data);
                app.get_css();
            }

        },

        set_textShadow: function (ui) {
            var css = { 'text-shadow': '' },
                data = {
                    color: app.var.$shodowText_color.val(),
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
                str += "\t" + 'text-shadow: ' + data['text-shadow'] + ";\n";
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