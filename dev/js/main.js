$(function () {
    app = {
        //переменные
        var: {
            $btn: $('.main-btn'), //кнопка которую будем менять

            //настройки по умолчанию
            default: {
                'btn-class': 'my-class',
                'btn-text': 'Try me'
            },
            cur_data: {}, //текущие параметры



            //элементы с которыми будем работаь (бегунки и пр.)
            $btn_class: $('#btn-class')
        },



        init: function() {

            app.var.cur_data = app.cloneObj(app.var.default);
            app.var.cur_data['btn-class'] = 'class';
            app.get_html();
            app.get_css();
            app.listeners();

            //app.var.$btn.css(app.var.default);
        },
        listeners: function(){
            app.var.$btn_class.on('keyup', this.set_btn_class)
        },
        set_btn_class: function(e) {
            if ($(this).val() == '') {
                console.log(app.var.default['btn-class']);
                app.var.cur_data['btn-class'] = 'my-class'
            }
            else {
                console.log(app.var.default['btn-class']);
                app.var.cur_data['btn-class'] = $(this).val();
            }
            app.get_html();
            app.get_css();
        },
        get_html: function(){
            var val = app.var.cur_data['btn-text'];
            app.var.$btn.text(val);
            $('#html-code').text('<button class="'+ app.var.cur_data['btn-class'] +'">' + app.var.cur_data['btn-text'] + '</button>');
            Prism.highlightAll();
        },
        //получить готовый css
        get_css: function(){
            var data = app.var.cur_data;
            var str = '.' + data['btn-class'] + "{\n";

            str += '}';
            $('#css-code').text(str);
            Prism.highlightAll();
        },
        cloneObj: function (obj){
            if(obj == null || typeof(obj) != 'object')
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
