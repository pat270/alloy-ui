if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-combobox-deprecated/aui-form-combobox-deprecated.js']) {
   __coverage__['build/aui-form-combobox-deprecated/aui-form-combobox-deprecated.js'] = {"path":"build/aui-form-combobox-deprecated/aui-form-combobox-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":59}}},"2":{"name":"(anonymous_2)","line":27,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":31}}},"3":{"name":"(anonymous_3)","line":43,"loc":{"start":{"line":43,"column":18},"end":{"line":43,"column":29}}},"4":{"name":"(anonymous_4)","line":52,"loc":{"start":{"line":52,"column":22},"end":{"line":52,"column":33}}},"5":{"name":"(anonymous_5)","line":65,"loc":{"start":{"line":65,"column":22},"end":{"line":65,"column":33}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":84,"column":113}},"2":{"start":{"line":3,"column":0},"end":{"line":14,"column":73}},"3":{"start":{"line":16,"column":0},"end":{"line":79,"column":3}},"4":{"start":{"line":28,"column":16},"end":{"line":28,"column":36}},"5":{"start":{"line":30,"column":16},"end":{"line":32,"column":17}},"6":{"start":{"line":31,"column":20},"end":{"line":31,"column":55}},"7":{"start":{"line":44,"column":12},"end":{"line":44,"column":32}},"8":{"start":{"line":46,"column":12},"end":{"line":46,"column":56}},"9":{"start":{"line":48,"column":12},"end":{"line":48,"column":36}},"10":{"start":{"line":49,"column":12},"end":{"line":49,"column":36}},"11":{"start":{"line":53,"column":12},"end":{"line":53,"column":32}},"12":{"start":{"line":55,"column":12},"end":{"line":55,"column":56}},"13":{"start":{"line":57,"column":12},"end":{"line":57,"column":46}},"14":{"start":{"line":58,"column":12},"end":{"line":58,"column":58}},"15":{"start":{"line":60,"column":12},"end":{"line":60,"column":62}},"16":{"start":{"line":62,"column":12},"end":{"line":62,"column":71}},"17":{"start":{"line":66,"column":12},"end":{"line":66,"column":32}},"18":{"start":{"line":68,"column":12},"end":{"line":68,"column":46}},"19":{"start":{"line":70,"column":12},"end":{"line":76,"column":13}},"20":{"start":{"line":71,"column":16},"end":{"line":73,"column":54}},"21":{"start":{"line":75,"column":16},"end":{"line":75,"column":41}},"22":{"start":{"line":81,"column":0},"end":{"line":81,"column":22}}},"branchMap":{"1":{"line":30,"type":"if","locations":[{"start":{"line":30,"column":16},"end":{"line":30,"column":16}},{"start":{"line":30,"column":16},"end":{"line":30,"column":16}}]},"2":{"line":70,"type":"if","locations":[{"start":{"line":70,"column":12},"end":{"line":70,"column":12}},{"start":{"line":70,"column":12},"end":{"line":70,"column":12}}]}},"code":["(function () { YUI.add('aui-form-combobox-deprecated', function (A, NAME) {","","var Lang = A.Lang,","","    getClassName = A.getClassName,","","    ARROW = 'arrow',","    CIRCLE = 'circle',","    DOWN = 'down',","    ICON = 'icon',","    NAME = 'combobox',","","    CSS_COMBOBOX = getClassName(NAME),","    CSS_ICON_CIRCLE_ARROW_DOWN = getClassName(ICON, CIRCLE, ARROW, DOWN);","","var Combobox = A.Component.create({","    NAME: NAME,","","    ATTRS: {","        field: {},","","        fieldWidget: {","            value: A.Textfield","        },","","        node: {","            getter: function() {","                var instance = this;","","                if (instance._field) {","                    return instance._field.get('node');","                }","            }","        },","","        icons: {","            value: [CSS_ICON_CIRCLE_ARROW_DOWN],","            validator: Lang.isArray","        }","    },","","    prototype: {","        renderUI: function() {","            var instance = this;","","            Combobox.superclass.renderUI.call(instance);","","            instance._renderField();","            instance._renderIcons();","        },","","        _renderField: function() {","            var instance = this;","","            var contentBox = instance.get('contentBox');","","            var field = instance.get('field');","            var fieldWidget = instance.get('fieldWidget');","","            instance._field = new fieldWidget(field).render();","","            contentBox.appendChild(instance._field.get('boundingBox'));","        },","","        _renderIcons: function() {","            var instance = this;","","            var icons = instance.get('icons');","","            if (icons.length) {","                var toolbar = new A.Toolbar({","                    children: [icons]","                }).render(instance.get('contentBox'));","","                instance.icons = toolbar;","            }","        }","    }","});","","A.Combobox = Combobox;","","","}, '3.1.0-deprecated.40-test', {\"requires\": [\"aui-form-textarea-deprecated\", \"aui-toolbar\"], \"skinnable\": true});","","}());"]};
}
var __cov_ePmh5inSX1wx6_tZoFvMNg = __coverage__['build/aui-form-combobox-deprecated/aui-form-combobox-deprecated.js'];
__cov_ePmh5inSX1wx6_tZoFvMNg.s['1']++;YUI.add('aui-form-combobox-deprecated',function(A,NAME){__cov_ePmh5inSX1wx6_tZoFvMNg.f['1']++;__cov_ePmh5inSX1wx6_tZoFvMNg.s['2']++;var Lang=A.Lang,getClassName=A.getClassName,ARROW='arrow',CIRCLE='circle',DOWN='down',ICON='icon',NAME='combobox',CSS_COMBOBOX=getClassName(NAME),CSS_ICON_CIRCLE_ARROW_DOWN=getClassName(ICON,CIRCLE,ARROW,DOWN);__cov_ePmh5inSX1wx6_tZoFvMNg.s['3']++;var Combobox=A.Component.create({NAME:NAME,ATTRS:{field:{},fieldWidget:{value:A.Textfield},node:{getter:function(){__cov_ePmh5inSX1wx6_tZoFvMNg.f['2']++;__cov_ePmh5inSX1wx6_tZoFvMNg.s['4']++;var instance=this;__cov_ePmh5inSX1wx6_tZoFvMNg.s['5']++;if(instance._field){__cov_ePmh5inSX1wx6_tZoFvMNg.b['1'][0]++;__cov_ePmh5inSX1wx6_tZoFvMNg.s['6']++;return instance._field.get('node');}else{__cov_ePmh5inSX1wx6_tZoFvMNg.b['1'][1]++;}}},icons:{value:[CSS_ICON_CIRCLE_ARROW_DOWN],validator:Lang.isArray}},prototype:{renderUI:function(){__cov_ePmh5inSX1wx6_tZoFvMNg.f['3']++;__cov_ePmh5inSX1wx6_tZoFvMNg.s['7']++;var instance=this;__cov_ePmh5inSX1wx6_tZoFvMNg.s['8']++;Combobox.superclass.renderUI.call(instance);__cov_ePmh5inSX1wx6_tZoFvMNg.s['9']++;instance._renderField();__cov_ePmh5inSX1wx6_tZoFvMNg.s['10']++;instance._renderIcons();},_renderField:function(){__cov_ePmh5inSX1wx6_tZoFvMNg.f['4']++;__cov_ePmh5inSX1wx6_tZoFvMNg.s['11']++;var instance=this;__cov_ePmh5inSX1wx6_tZoFvMNg.s['12']++;var contentBox=instance.get('contentBox');__cov_ePmh5inSX1wx6_tZoFvMNg.s['13']++;var field=instance.get('field');__cov_ePmh5inSX1wx6_tZoFvMNg.s['14']++;var fieldWidget=instance.get('fieldWidget');__cov_ePmh5inSX1wx6_tZoFvMNg.s['15']++;instance._field=new fieldWidget(field).render();__cov_ePmh5inSX1wx6_tZoFvMNg.s['16']++;contentBox.appendChild(instance._field.get('boundingBox'));},_renderIcons:function(){__cov_ePmh5inSX1wx6_tZoFvMNg.f['5']++;__cov_ePmh5inSX1wx6_tZoFvMNg.s['17']++;var instance=this;__cov_ePmh5inSX1wx6_tZoFvMNg.s['18']++;var icons=instance.get('icons');__cov_ePmh5inSX1wx6_tZoFvMNg.s['19']++;if(icons.length){__cov_ePmh5inSX1wx6_tZoFvMNg.b['2'][0]++;__cov_ePmh5inSX1wx6_tZoFvMNg.s['20']++;var toolbar=new A.Toolbar({children:[icons]}).render(instance.get('contentBox'));__cov_ePmh5inSX1wx6_tZoFvMNg.s['21']++;instance.icons=toolbar;}else{__cov_ePmh5inSX1wx6_tZoFvMNg.b['2'][1]++;}}}});__cov_ePmh5inSX1wx6_tZoFvMNg.s['22']++;A.Combobox=Combobox;},'3.1.0-deprecated.40-test',{'requires':['aui-form-textarea-deprecated','aui-toolbar'],'skinnable':true});
