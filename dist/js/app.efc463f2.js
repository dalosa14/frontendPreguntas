(function(e){function t(t){for(var n,c,o=t[0],l=t[1],i=t[2],p=0,d=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},u=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("bc3a"),a=r.n(n),u=r("2106"),c=r.n(u),o=r("7a23");function l(e,t,r,n,a,u){var c=Object(o["g"])("addPregunta");return Object(o["e"])(),Object(o["c"])(c)}var i={class:"container"},s={class:"row"},p={class:"col"},d={class:"form-group"},f=Object(o["d"])("label",{for:"Tema"},"Tema",-1),b=Object(o["d"])("label",{for:"Tema"},"Temas ya creados",-1),m={class:"form-group"},g=Object(o["d"])("label",{for:"Pregunta"},"Pregunta",-1);function j(e,t,r,n,a,u){return Object(o["e"])(),Object(o["c"])("div",i,[Object(o["d"])("div",s,[Object(o["d"])("div",p,[Object(o["d"])("form",null,[Object(o["d"])("div",d,[f,Object(o["k"])(Object(o["d"])("input",{type:"text",class:"form-control",id:"Tema",placeholder:"Introduce el tema","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.pregunta.Tema=e})},null,512),[[o["j"],a.pregunta.Tema]])]),Object(o["d"])("div",null,[b,Object(o["k"])(Object(o["d"])("select",{class:"custom-select","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.pregunta.tema=e})},[(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["f"])(a.temas,(function(e,t){return Object(o["e"])(),Object(o["c"])("option",{value:e,key:t},Object(o["h"])(e),9,["value"])})),128))],512),[[o["i"],a.pregunta.tema]])]),Object(o["d"])("div",m,[g,Object(o["k"])(Object(o["d"])("input",{type:"text",class:"form-control",id:"Pregunta","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.pregunta.Pregunta=e}),placeholder:"Pregunta"},null,512),[[o["j"],a.pregunta.Pregunta]])]),Object(o["d"])("button",{onClick:t[4]||(t[4]=function(e){return u.sendPregunta()}),class:"btn btn-primary"},"Enviar")])])])])}r("96cf");var O=r("1da1"),v={name:"addpregunta",data:function(){return{temas:[],url:"http://127.0.0.1:3000/preguntas",pregunta:{Tema:"",Pregunta:""}}},methods:{sendPregunta:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post("".concat(e.url,"/add"),e.pregunta);case 2:if(r=t.sent,!r.data){t.next=5;break}return t.abrupt("return",alert("pregunta enviada"));case 5:return t.abrupt("return",alert("error"));case 6:case"end":return t.stop()}}),t)})))()},getTemas:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("".concat(e.url,"/topics"));case 2:if(r=t.sent,!r.data){t.next=5;break}return t.abrupt("return",e.temas=r.data.msg);case 5:return t.abrupt("return",alert("error"));case 6:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getTemas()}};v.render=j;var h=v,y={name:"App",components:{addPregunta:h}};y.render=l;var P=y,w=Object(o["b"])(P);w.use(c.a,a.a),w.mount("#app")}});
//# sourceMappingURL=app.efc463f2.js.map