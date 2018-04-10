YUI.add("aui-io-request-deprecated",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isFunction,s=n.isString,o=e.namespace("config.io"),u=function(e){return function(){return o[e]}},a="active",f="arguments",l="autoLoad",c="cache",h="cfg",p="complete",d="content-type",v="context",m="data",g="dataType",y="",b="end",w="failure",E="form",S="get",x="headers",T="IORequest",N="json",C="method",k="responseData",L="start",A="success",O="sync",M="timeout",_="transaction",D="uri",P="xdr",H="xml",B="Parser error: IO dataType is not correctly parsing",j={all:"*/*",html:"text/html",json:"application/json, text/javascript",text:"text/plain",xml:"application/xml, text/xml"},F=e.Component.create({NAME:T,ATTRS:{autoLoad:{value:!0,validator:r},cache:{value:!0,validator:r},dataType:{setter:function(e){return(e||y).toLowerCase()},value:null,validator:s},responseData:{setter:function(e){return this._setResponseData(e)},value:null},uri:{setter:function(e){return this._parseURL(e)},value:null,validator:s},active:{value:!1,validator:r},cfg:{getter:function(){var t=this;return{arguments:t.get(f),context:t.get(v),data:t.getFormattedData(),form:t.get(E),headers:t.get(x),method:t.get(C),on:{complete:e.bind(t.fire,t,p),end:e.bind(t._end,t),failure:e.bind(t.fire,t,w),start:e.bind(t.fire,t,L),success:e.bind(t._success,t)},sync:t.get(O),timeout:t.get(M),xdr:t.get(P)}},readOnly:!0},transaction:{value:null},arguments:{valueFn:u(f)},context:{valueFn:u(v)},data:{valueFn:u(m)},form:{valueFn:u(E)},headers:{getter:function(t){var n=[],r=this,i=r.get(g);return i&&n.push(j[i]),n.push(j.all),e.merge(t,{Accept:n.join(", ")})},valueFn:u(x)},method:{valueFn:u(C)},selector:{value:null},sync:{valueFn:u(O)},timeout:{valueFn:u(M)},xdr:{valueFn:u(P)}},EXTENDS:e.Plugin.Base,prototype:{init:function(e){var t=this;F.superclass.init.apply(this,arguments),t._autoStart()},destructor:function(){var e=this;e.stop(),e.set(_,null)},getFormattedData:function(){var e=this,t=e.get(m),n=o.dataFormatter;return i(n)&&(t=n.call(e,t)),t},start:function(){var t=this;t.destructor(),t.set(a,!0);var n=t._yuiIOObj;n||(n=new e.IO,t._yuiIOObj=n);var r=n.send(t.get(D),t.get(h));t.set(_,r)},stop:function(){var e=this,t=e.get(_);t&&t.abort()},_autoStart:function(){var e=this;e.get(l)&&e.start()},_parseURL:function(e){var t=this,n=t.get(c),r=t.get(C);if(n===!1&&r==S){var s=+(new Date),u=e.replace(/(\?|&)_=.*?(&|$)/,"$1_="+s+"$2");e=u+(u==e?(e.match(/\?/)?"&":"?")+"_="+s:"")}var a=o.uriFormatter;return i(a)&&(e=a.apply(t,[e])),e},_end:function(e,t){var n=this;n.set(a,!1),n.set(_,null),n.fire(b,e,t)},_success:function(e,t,n){var r=this;r.set(k,t),r.fire(A,e,t,n)},_setResponseData:function(t){var n=null,r=this;if(t){var i=r.get(g),s=t.getResponseHeader(d)||"";if(i==H||!i&&s.indexOf(H)>=0){n=t.responseXML;if(n.documentElement.tagName=="parsererror")throw B}else n=t.responseText;n===y&&(n=null);if(i==N)try{n=e.JSON.parse(n)}catch(o){}else{var u=r.get("selector");if(n&&u){var a;n.documentElement?a=e.one(n):a=e.Node.create(n),n=a.all(u)}}}return n}}});e.IORequest=F,e.io.request=function(t,n){return new e.IORequest(e.merge(n,{uri:t}))}},"3.1.0-deprecated.40-test",{requires:["io-base","json","plugin","querystring-stringify","aui-base-deprecated"]});
