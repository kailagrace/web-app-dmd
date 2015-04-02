(function(e){e.fn.extend({retinise:function(t){var n={suffix:"@2x",srcattr:"data-src",retattr:"data-ret",altattr:"data-alt"},r=e.extend(n,t),i=window.devicePixelRatio,s=i>1?!0:!1;e(this).each(function(){var t=e(this),n=t.css("display");t.css("display","none");if(t.attr(r.srcattr)){var o=t.attr(r.srcattr),u=t.attr(r.altattr),a=t.attr(r.retattr);if(s===!0){t.attr(r.retattr)?t.attr({src:a,alt:u}):t.attr({src:o.replace(/\.\w+$/,function(e){return r.suffix+e}),alt:u});t.load(function(){var e=t.height()/i,r=t.width()/i;t.attr({height:e,width:r}).css({display:n})})}else t.attr({src:o,alt:u}).css({display:n})}})}})})(jQuery);

/* Placeholders.js v3.0.2 */
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(P)?(t.removeAttribute(P),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(z),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(D),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(P,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(D),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(D,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):f,u=t?t.getElementsByTagName("textarea"):h,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){b&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)?K.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(P)&&A===t.getAttribute(V)&&K.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function v(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)&&K.moveCaret(t,0)}}function g(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(K.addEventListener(T,"submit",g(T)),T.setAttribute(U,"true"))),K.addEventListener(t,"focus",o(t)),K.addEventListener(t,"blur",c(t)),b&&(K.addEventListener(t,"keydown",s(t)),K.addEventListener(t,"keyup",d(t)),K.addEventListener(t,"click",v(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(b||t!==r())&&a(t)}var f,h,b,m,A,y,E,x,L,T,S,N,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",P="data-placeholder-active",D="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",Q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(f=document.getElementsByTagName("input"),h=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(q),m="false"!==H.getAttribute(Q),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),G.insertBefore(y,G.firstChild),w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x&&(x=x.nodeValue,x&&K.inArray(B,S.type)&&p(S));L=setInterval(function(){for(w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x?(x=x.nodeValue,x&&K.inArray(B,S.type)&&(S.getAttribute(j)||p(S),(x!==S.getAttribute(V)||"password"===S.type&&!S.getAttribute(D))&&("password"===S.type&&!S.getAttribute(D)&&K.changeType(S,"text")&&S.setAttribute(D,"password"),S.value===S.getAttribute(V)&&(S.value=x),S.setAttribute(V,x)))):S.getAttribute(P)&&(n(S),S.removeAttribute(V));m||clearInterval(L)},100)}K.addEventListener(t,"beforeunload",function(){J.disable()}),J.disable=J.nativeSupport?e:i,J.enable=J.nativeSupport?e:l}(this),function(t){"use strict";var e=t.fn.val,r=t.fn.prop;Placeholders.nativeSupport||(t.fn.val=function(t){var r=e.apply(this,arguments),n=this.eq(0).data("placeholder-value");return void 0===t&&this.eq(0).data("placeholder-active")&&r===n?"":r},t.fn.prop=function(t,e){return void 0===e&&this.eq(0).data("placeholder-active")&&"value"===t?"":r.apply(this,arguments)})}(jQuery);

(function(e,t,n){var r=e();e.fn.dropdownHover=function(n){r=r.add(this.parent());return this.each(function(){var i=e(this),s=i.parent(),o={delay:500,instantlyCloseOthers:!0},u={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},a=e.extend(!0,{},o,n,u),f;s.hover(function(e){if(!s.hasClass("open")&&!i.is(e.target))return!0;a.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(f);s.addClass("open")},function(){f=t.setTimeout(function(){s.removeClass("open")},a.delay)});i.hover(function(){a.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(f);s.addClass("open")});s.find(".dropdown-submenu").each(function(){var n=e(this),r;n.hover(function(){t.clearTimeout(r);n.children(".dropdown-menu").show();n.siblings().children(".dropdown-menu").hide()},function(){var e=n.children(".dropdown-menu");r=t.setTimeout(function(){e.hide()},a.delay)})})})};e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})})(jQuery,this);

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)
},c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);

(function( $ ){

  "use strict";

  jQuery.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      jQuery.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = jQuery(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = jQuery(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

(function($){"use strict";var namespace="animsition";var methods={init:function(options){options=jQuery.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:true,loadingParentElement:"body",loadingClass:"animsition-loading",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:false,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"},options);var support=methods.supportCheck.call(this,options);if(support===false){if(!("console"in window)){window.console={};window.console.log=function(str){return str}}console.log("Animsition does not support this browser.");return methods.destroy.call(this)}var overlayMode=methods.optionCheck.call(this,options);if(overlayMode===true){methods.addOverlay.call(this,options)}if(options.loading===true){methods.addLoading.call(this,options)}return this.each(function(){var _this=this;var $this=jQuery(this);var $window=jQuery(window);var data=$this.data(namespace);if(!data){options=jQuery.extend({},options);$this.data(namespace,{options:options});$window.on("load."+namespace+" pageshow."+namespace,function(){methods.pageIn.call(_this)});$window.on("unload."+namespace,function(){});jQuery(options.linkElement).on("click."+namespace,function(event){event.preventDefault();var $self=jQuery(this);methods.pageOut.call(_this,$self)})}})},addOverlay:function(options){jQuery(options.overlayParentElement).prepend('<div class="'+options.overlayClass+'"></div>')},addLoading:function(options){jQuery(options.loadingParentElement).append('<div class="'+options.loadingClass+'"></div>')},removeLoading:function(){var $this=jQuery(this);var options=$this.data(namespace).options;var $loading=jQuery(options.loadingParentElement).children("."+options.loadingClass);$loading.fadeOut().remove()},supportCheck:function(options){var $this=jQuery(this);var props=options.unSupportCss;var propsNum=props.length;var support=false;if(propsNum===0){support=true}for(var i=0;i<propsNum;i++){if(typeof $this.css(props[i])==="string"){support=true;break}}return support},optionCheck:function(options){var $this=jQuery(this);var overlayMode;if(options.overlay||$this.data("animsition-overlay")){overlayMode=true}else{overlayMode=false}return overlayMode},animationCheck:function(data,stateClass,stateIn){var $this=jQuery(this);var options=$this.data(namespace).options;var dataType=typeof data;var dataDuration=!stateClass&&dataType==="number";var dataClass=stateClass&&dataType==="string"&&data.length>0;if(dataDuration||dataClass){data=data}else if(stateClass&&stateIn){data=options.inClass}else if(!stateClass&&stateIn){data=options.inDuration}else if(stateClass&&!stateIn){data=options.outClass}else if(!stateClass&&!stateIn){data=options.outDuration}return data},pageIn:function(){var _this=this;var $this=jQuery(this);var options=$this.data(namespace).options;var thisInDuration=$this.data("animsition-in-duration");var thisInClass=$this.data("animsition-in");var inDuration=methods.animationCheck.call(_this,thisInDuration,false,true);var inClass=methods.animationCheck.call(_this,thisInClass,true,true);var overlayMode=methods.optionCheck.call(_this,options);if(options.loading){methods.removeLoading.call(_this)}if(overlayMode){methods.pageInOverlay.call(_this,inClass,inDuration)}else{methods.pageInBasic.call(_this,inClass,inDuration)}},pageInBasic:function(inClass,inDuration){var $this=jQuery(this);$this.css({"animation-duration":inDuration/1e3+"s"}).addClass(inClass).animateCallback(function(){$this.removeClass(inClass).css({opacity:1})})},pageInOverlay:function(inClass,inDuration){var $this=jQuery(this);var options=$this.data(namespace).options;$this.css({opacity:1});jQuery(options.overlayParentElement).children("."+options.overlayClass).css({"animation-duration":inDuration/1e3+"s"}).addClass(inClass)},pageOut:function($self){var _this=this;var $this=jQuery(this);var options=$this.data(namespace).options;var selfOutClass=$self.data("animsition-out");var thisOutClass=$this.data("animsition-out");var selfOutDuration=$self.data("animsition-out-duration");var thisOutDuration=$this.data("animsition-out-duration");var isOutClass=selfOutClass?selfOutClass:thisOutClass;var isOutDuration=selfOutDuration?selfOutDuration:thisOutDuration;var outClass=methods.animationCheck.call(_this,isOutClass,true,false);var outDuration=methods.animationCheck.call(_this,isOutDuration,false,false);var overlayMode=methods.optionCheck.call(_this,options);var url=$self.attr("href");if(overlayMode){methods.pageOutOverlay.call(_this,outClass,outDuration,url)}else{methods.pageOutBasic.call(_this,outClass,outDuration,url)}},pageOutBasic:function(outClass,outDuration,url){var $this=jQuery(this);$this.css({"animation-duration":outDuration/1e3+"s"}).addClass(outClass).animateCallback(function(){location.href=url})},pageOutOverlay:function(outClass,outDuration,url){var _this=this;var $this=jQuery(this);var options=$this.data(namespace).options;var thisInClass=$this.data("animsition-in");var inClass=methods.animationCheck.call(_this,thisInClass,true,true);jQuery(options.overlayParentElement).children("."+options.overlayClass).css({"animation-duration":outDuration/1e3+"s"}).removeClass(inClass).addClass(outClass).animateCallback(function(){$this.css({opacity:0});location.href=url})},destroy:function(){return this.each(function(){var $this=jQuery(this);jQuery(window).unbind("."+namespace);$this.css({opacity:1}).removeData(namespace)})}};jQuery.fn.animateCallback=function(callback){var end="animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";return this.each(function(){jQuery(this).bind(end,function(){jQuery(this).unbind(end);return callback.call(this)})})};jQuery.fn.animsition=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{jQuery.error("Method "+method+" does not exist on jQuery."+namespace)}}})(jQuery);

/*
 * jQuery EasyTabs plugin 3.2.0
 *
 * Copyright (c) 2010-2011 Steve Schwartz (JangoSteve)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Thu May 09 17:30:00 2013 -0500
 */
(function(a){a.easytabs=function(j,e){var f=this,q=a(j),i={animate:true,panelActiveClass:"active",tabActiveClass:"active",defaultTab:"li:first-child",animationSpeed:"normal",tabs:"> ul > li",updateHash:true,cycle:false,collapsible:false,collapsedClass:"collapsed",collapsedByDefault:true,uiTabs:false,transitionIn:"fadeIn",transitionOut:"fadeOut",transitionInEasing:"swing",transitionOutEasing:"swing",transitionCollapse:"slideUp",transitionUncollapse:"slideDown",transitionCollapseEasing:"swing",transitionUncollapseEasing:"swing",containerClass:"",tabsClass:"",tabClass:"",panelClass:"",cache:true,event:"click",panelContext:q},h,l,v,m,d,t={fast:200,normal:400,slow:600},r;f.init=function(){f.settings=r=a.extend({},i,e);r.bind_str=r.event+".easytabs";if(r.uiTabs){r.tabActiveClass="ui-tabs-selected";r.containerClass="ui-tabs ui-widget ui-widget-content ui-corner-all";r.tabsClass="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";r.tabClass="ui-state-default ui-corner-top";r.panelClass="ui-tabs-panel ui-widget-content ui-corner-bottom"}if(r.collapsible&&e.defaultTab!==undefined&&e.collpasedByDefault===undefined){r.collapsedByDefault=false}if(typeof(r.animationSpeed)==="string"){r.animationSpeed=t[r.animationSpeed]}a("a.anchor").remove().prependTo("body");q.data("easytabs",{});f.setTransitions();f.getTabs();b();g();w();n();c();q.attr("data-easytabs",true)};f.setTransitions=function(){v=(r.animate)?{show:r.transitionIn,hide:r.transitionOut,speed:r.animationSpeed,collapse:r.transitionCollapse,uncollapse:r.transitionUncollapse,halfSpeed:r.animationSpeed/2}:{show:"show",hide:"hide",speed:0,collapse:"hide",uncollapse:"show",halfSpeed:0}};f.getTabs=function(){var x;f.tabs=q.find(r.tabs),f.panels=a(),f.tabs.each(function(){var A=a(this),z=A.children("a"),y=A.children("a").data("target");A.data("easytabs",{});if(y!==undefined&&y!==null){A.data("easytabs").ajax=z.attr("href")}else{y=z.attr("href")}y=y.match(/#([^\?]+)/)[1];x=r.panelContext.find("#"+y);if(x.length){x.data("easytabs",{position:x.css("position"),visibility:x.css("visibility")});x.not(r.panelActiveClass).hide();f.panels=f.panels.add(x);A.data("easytabs").panel=x}else{f.tabs=f.tabs.not(A);if("console" in window){console.warn("Warning: tab without matching panel for selector '#"+y+"' removed from set")}}})};f.selectTab=function(x,C){var y=window.location,B=y.hash.match(/^[^\?]*/)[0],z=x.parent().data("easytabs").panel,A=x.parent().data("easytabs").ajax;if(r.collapsible&&!d&&(x.hasClass(r.tabActiveClass)||x.hasClass(r.collapsedClass))){f.toggleTabCollapse(x,z,A,C)}else{if(!x.hasClass(r.tabActiveClass)||!z.hasClass(r.panelActiveClass)){o(x,z,A,C)}else{if(!r.cache){o(x,z,A,C)}}}};f.toggleTabCollapse=function(x,y,z,A){f.panels.stop(true,true);if(u(q,"easytabs:before",[x,y,r])){f.tabs.filter("."+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);if(x.hasClass(r.collapsedClass)){if(z&&(!r.cache||!x.parent().data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[x,y]);y.load(z,function(C,B,D){x.parent().data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[x,y,C,B,D])})}x.parent().removeClass(r.collapsedClass).addClass(r.tabActiveClass).children().removeClass(r.collapsedClass).addClass(r.tabActiveClass);y.addClass(r.panelActiveClass)[v.uncollapse](v.speed,r.transitionUncollapseEasing,function(){q.trigger("easytabs:midTransition",[x,y,r]);if(typeof A=="function"){A()}})}else{x.addClass(r.collapsedClass).parent().addClass(r.collapsedClass);y.removeClass(r.panelActiveClass)[v.collapse](v.speed,r.transitionCollapseEasing,function(){q.trigger("easytabs:midTransition",[x,y,r]);if(typeof A=="function"){A()}})}}};f.matchTab=function(x){return f.tabs.find("[href='"+x+"'],[data-target='"+x+"']").first()};f.matchInPanel=function(x){return(x&&f.validId(x)?f.panels.filter(":has("+x+")").first():[])};f.validId=function(x){return x.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)};f.selectTabFromHashChange=function(){var y=window.location.hash.match(/^[^\?]*/)[0],x=f.matchTab(y),z;if(r.updateHash){if(x.length){d=true;f.selectTab(x)}else{z=f.matchInPanel(y);if(z.length){y="#"+z.attr("id");x=f.matchTab(y);d=true;f.selectTab(x)}else{if(!h.hasClass(r.tabActiveClass)&&!r.cycle){if(y===""||f.matchTab(m).length||q.closest(y).length){d=true;f.selectTab(l)}}}}}};f.cycleTabs=function(x){if(r.cycle){x=x%f.tabs.length;$tab=a(f.tabs[x]).children("a").first();d=true;f.selectTab($tab,function(){setTimeout(function(){f.cycleTabs(x+1)},r.cycle)})}};f.publicMethods={select:function(x){var y;if((y=f.tabs.filter(x)).length===0){if((y=f.tabs.find("a[href='"+x+"']")).length===0){if((y=f.tabs.find("a"+x)).length===0){if((y=f.tabs.find("[data-target='"+x+"']")).length===0){if((y=f.tabs.find("a[href$='"+x+"']")).length===0){a.error("Tab '"+x+"' does not exist in tab set")}}}}}else{y=y.children("a").first()}f.selectTab(y)}};var u=function(A,x,z){var y=a.Event(x);A.trigger(y,z);return y.result!==false};var b=function(){q.addClass(r.containerClass);f.tabs.parent().addClass(r.tabsClass);f.tabs.addClass(r.tabClass);f.panels.addClass(r.panelClass)};var g=function(){var y=window.location.hash.match(/^[^\?]*/)[0],x=f.matchTab(y).parent(),z;if(x.length===1){h=x;r.cycle=false}else{z=f.matchInPanel(y);if(z.length){y="#"+z.attr("id");h=f.matchTab(y).parent()}else{h=f.tabs.parent().find(r.defaultTab);if(h.length===0){a.error("The specified default tab ('"+r.defaultTab+"') could not be found in the tab set ('"+r.tabs+"') out of "+f.tabs.length+" tabs.")}}}l=h.children("a").first();p(x)};var p=function(z){var y,x;if(r.collapsible&&z.length===0&&r.collapsedByDefault){h.addClass(r.collapsedClass).children().addClass(r.collapsedClass)}else{y=a(h.data("easytabs").panel);x=h.data("easytabs").ajax;if(x&&(!r.cache||!h.data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[l,y]);y.load(x,function(B,A,C){h.data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[l,y,B,A,C])})}h.data("easytabs").panel.show().addClass(r.panelActiveClass);h.addClass(r.tabActiveClass).children().addClass(r.tabActiveClass)}q.trigger("easytabs:initialised",[l,y])};var w=function(){f.tabs.children("a").bind(r.bind_str,function(x){r.cycle=false;d=false;f.selectTab(a(this));x.preventDefault?x.preventDefault():x.returnValue=false})};var o=function(z,D,E,H){f.panels.stop(true,true);if(u(q,"easytabs:before",[z,D,r])){var A=f.panels.filter(":visible"),y=D.parent(),F,x,C,G,B=window.location.hash.match(/^[^\?]*/)[0];if(r.animate){F=s(D);x=A.length?k(A):0;C=F-x}m=B;G=function(){q.trigger("easytabs:midTransition",[z,D,r]);if(r.animate&&r.transitionIn=="fadeIn"){if(C<0){y.animate({height:y.height()+C},v.halfSpeed).css({"min-height":""})}}if(r.updateHash&&!d){window.location.hash="#"+D.attr("id")}else{d=false}D[v.show](v.speed,r.transitionInEasing,function(){y.css({height:"","min-height":""});q.trigger("easytabs:after",[z,D,r]);if(typeof H=="function"){H()}})};if(E&&(!r.cache||!z.parent().data("easytabs").cached)){q.trigger("easytabs:ajax:beforeSend",[z,D]);D.load(E,function(J,I,K){z.parent().data("easytabs").cached=true;q.trigger("easytabs:ajax:complete",[z,D,J,I,K])})}if(r.animate&&r.transitionOut=="fadeOut"){if(C>0){y.animate({height:(y.height()+C)},v.halfSpeed)}else{y.css({"min-height":y.height()})}}f.tabs.filter("."+r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);f.tabs.filter("."+r.collapsedClass).removeClass(r.collapsedClass).children().removeClass(r.collapsedClass);z.parent().addClass(r.tabActiveClass).children().addClass(r.tabActiveClass);f.panels.filter("."+r.panelActiveClass).removeClass(r.panelActiveClass);D.addClass(r.panelActiveClass);if(A.length){A[v.hide](v.speed,r.transitionOutEasing,G)}else{D[v.uncollapse](v.speed,r.transitionUncollapseEasing,G)}}};var s=function(z){if(z.data("easytabs")&&z.data("easytabs").lastHeight){return z.data("easytabs").lastHeight}var B=z.css("display"),y,x;try{y=a("<div></div>",{position:"absolute",visibility:"hidden",overflow:"hidden"})}catch(A){y=a("<div></div>",{visibility:"hidden",overflow:"hidden"})}x=z.wrap(y).css({position:"relative",visibility:"hidden",display:"block"}).outerHeight();z.unwrap();z.css({position:z.data("easytabs").position,visibility:z.data("easytabs").visibility,display:B});z.data("easytabs").lastHeight=x;return x};var k=function(y){var x=y.outerHeight();if(y.data("easytabs")){y.data("easytabs").lastHeight=x}else{y.data("easytabs",{lastHeight:x})}return x};var n=function(){if(typeof a(window).hashchange==="function"){a(window).hashchange(function(){f.selectTabFromHashChange()})}else{if(a.address&&typeof a.address.change==="function"){a.address.change(function(){f.selectTabFromHashChange()})}}};var c=function(){var x;if(r.cycle){x=f.tabs.index(h);setTimeout(function(){f.cycleTabs(x+1)},r.cycle)}};f.init()};a.fn.easytabs=function(c){var b=arguments;return this.each(function(){var e=a(this),d=e.data("easytabs");if(undefined===d){d=new a.easytabs(this,c);e.data("easytabs",d)}if(d.publicMethods[c]){return d.publicMethods[c](Array.prototype.slice.call(b,1))}})}})(jQuery);

var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

/*!
*  - v1.0.5
* Homepage: http://bqworks.com/slider-pro/
* Author: bqworks
* Author URL: http://bqworks.com/
*/
!function(a,b){"use strict";b.SliderPro={modules:[],addModule:function(a,c){this.modules.push(a),b.extend(d.prototype,c)}};var c=b.SliderPro.namespace="SliderPro",d=function(a,c){this.instance=a,this.$slider=b(this.instance),this.$slides=null,this.$slidesMask=null,this.$slidesContainer=null,this.slides=[],this.slidesOrder=[],this.options=c,this.settings={},this.originalSettings={},this.originalGotoSlide=null,this.selectedSlideIndex=0,this.previousSlideIndex=0,this.middleSlidePosition=0,this.supportedAnimation=null,this.vendorPrefix=null,this.transitionEvent=null,this.positionProperty=null,this.slidesPosition=0,this.slideWidth=0,this.slideHeight=0,this.slideSize=0,this.previousSlideWidth=0,this.previousSlideHeight=0,this.previousWindowWidth=0,this.previousWindowHeight=0,this.visibleOffset=0,this.allowResize=!0,this.uniqueId=(new Date).valueOf(),this.breakpoints=[],this.currentBreakpoint=-1,this.shuffledIndexes=[],this._init()};d.prototype={_init:function(){var d=this;this.supportedAnimation=f.getSupportedAnimation(),this.vendorPrefix=f.getVendorPrefix(),this.transitionEvent=f.getTransitionEvent(),this.$slider.removeClass("sp-no-js"),a.navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&this.$slider.addClass("ios");var e=/(msie) ([\w.]+)/,g=e.exec(a.navigator.userAgent.toLowerCase());null!==g&&this.$slider.addClass("ie ie"+parseInt(g[2],10)),this.$slidesContainer=b('<div class="sp-slides-container"></div>').appendTo(this.$slider),this.$slidesMask=b('<div class="sp-mask"></div>').appendTo(this.$slidesContainer),this.$slides=this.$slider.find(".sp-slides").appendTo(this.$slidesMask),this.$slider.find(".sp-slide").appendTo(this.$slides);var h=b.SliderPro.modules;if("undefined"!=typeof h)for(var i in h){var j=h[i].substring(0,1).toLowerCase()+h[i].substring(1)+"Defaults";"undefined"!=typeof this[j]&&b.extend(this.defaults,this[j])}if(this.settings=b.extend({},this.defaults,this.options),"undefined"!=typeof h)for(var k in h)"undefined"!=typeof this["init"+h[k]]&&this["init"+h[k]]();if(this.originalSettings=b.extend({},this.settings),this.originalGotoSlide=this.gotoSlide,null!==this.settings.breakpoints){for(var l in this.settings.breakpoints)this.breakpoints.push({size:parseInt(l,10),properties:this.settings.breakpoints[l]});this.breakpoints=this.breakpoints.sort(function(a,b){return a.size>=b.size?1:-1})}if(this.selectedSlideIndex=this.settings.startSlide,this.settings.shuffle===!0){var m=this.$slides.find(".sp-slide"),n=[];m.each(function(a){d.shuffledIndexes.push(a)});for(var o=this.shuffledIndexes.length-1;o>0;o--){var p=Math.floor(Math.random()*(o+1)),q=this.shuffledIndexes[o];this.shuffledIndexes[o]=this.shuffledIndexes[p],this.shuffledIndexes[p]=q}b.each(this.shuffledIndexes,function(a,b){n.push(m[b])}),this.$slides.empty().append(n)}b(a).on("resize."+this.uniqueId+"."+c,function(){var c=b(a).width(),e=b(a).height();d.allowResize===!1||d.previousWindowWidth===c&&d.previousWindowHeight===e||(d.previousWindowWidth=c,d.previousWindowHeight=e,d.allowResize=!1,setTimeout(function(){d.resize(),d.allowResize=!0},200))}),this.on("update."+c,function(){d.previousSlideWidth=0,d.resize()}),this.update(),this.trigger({type:"init"}),b.isFunction(this.settings.init)&&this.settings.init.call(this,{type:"init"})},update:function(){var a=this;"horizontal"===this.settings.orientation?(this.$slider.removeClass("sp-vertical").addClass("sp-horizontal"),this.$slider.css({height:"","max-height":""}),this.$slides.find(".sp-slide").css("top","")):"vertical"===this.settings.orientation&&(this.$slider.removeClass("sp-horizontal").addClass("sp-vertical"),this.$slides.find(".sp-slide").css("left","")),this.positionProperty="horizontal"===this.settings.orientation?"left":"top",this.gotoSlide=this.originalGotoSlide;for(var c=this.slides.length-1;c>=0;c--)if(0===this.$slider.find('.sp-slide[data-index="'+c+'"]').length){var d=this.slides[c];d.destroy(),this.slides.splice(c,1)}this.slidesOrder.length=0,this.$slider.find(".sp-slide").each(function(c){var d=b(this);"undefined"==typeof d.attr("data-init")?a._createSlide(c,d):a.slides[c].setIndex(c),a.slidesOrder.push(c)}),this.middleSlidePosition=parseInt((a.slidesOrder.length-1)/2,10),this.settings.loop===!0&&this._updateSlidesOrder(),this.trigger({type:"update"}),b.isFunction(this.settings.update)&&this.settings.update.call(this,{type:"update"})},_createSlide:function(a,c){var d=new e(b(c),a,this.settings);this.slides.splice(a,0,d)},_updateSlidesOrder:function(){var a,c,d=b.inArray(this.selectedSlideIndex,this.slidesOrder)-this.middleSlidePosition;if(0>d)for(a=this.slidesOrder.splice(d,Math.abs(d)),c=a.length-1;c>=0;c--)this.slidesOrder.unshift(a[c]);else if(d>0)for(a=this.slidesOrder.splice(0,d),c=0;c<=a.length-1;c++)this.slidesOrder.push(a[c])},_updateSlidesPosition:function(){var a=parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty),10);for(var b in this.slidesOrder){var c=this.$slides.find(".sp-slide").eq(this.slidesOrder[b]);c.css(this.positionProperty,a+(b-this.middleSlidePosition)*(this.slideSize+this.settings.slideDistance))}},_resetSlidesPosition:function(){for(var a in this.slidesOrder){var b=this.$slides.find(".sp-slide").eq(this.slidesOrder[a]);b.css(this.positionProperty,a*(this.slideSize+this.settings.slideDistance))}var c=-parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty),10)+this.visibleOffset;this._moveTo(c,!0)},resize:function(){var c=this;if(null!==this.settings.breakpoints&&this.breakpoints.length>0)if(b(a).width()>this.breakpoints[this.breakpoints.length-1].size&&-1!==this.currentBreakpoint)this.currentBreakpoint=-1,this._setProperties(this.originalSettings,!1);else for(var d=0,e=this.breakpoints.length;e>d;d++)if(b(a).width()<=this.breakpoints[d].size){if(this.currentBreakpoint!==this.breakpoints[d].size){var f={type:"breakpointReach",size:this.breakpoints[d].size,settings:this.breakpoints[d].properties};this.trigger(f),b.isFunction(this.settings.breakpointReach)&&this.settings.breakpointReach.call(this,f),this.currentBreakpoint=this.breakpoints[d].size;var g=b.extend({},this.originalSettings,this.breakpoints[d].properties);return void this._setProperties(g,!1)}break}this.settings.responsive===!0?"fullWidth"!==this.settings.forceSize&&"fullWindow"!==this.settings.forceSize||"auto"!==this.settings.visibleSize&&("auto"===this.settings.visibleSize||"vertical"!==this.settings.orientation)?this.$slider.css({width:"100%","max-width":this.settings.width,marginLeft:""}):(this.$slider.css("margin",0),this.$slider.css({width:b(a).width(),"max-width":"",marginLeft:-this.$slider.offset().left})):this.$slider.css({width:this.settings.width}),-1===this.settings.aspectRatio&&(this.settings.aspectRatio=this.settings.width/this.settings.height),this.slideWidth=this.$slider.width(),this.slideHeight="fullWindow"===this.settings.forceSize?b(a).height():isNaN(this.settings.aspectRatio)?this.settings.height:this.slideWidth/this.settings.aspectRatio,(this.previousSlideWidth!==this.slideWidth||this.previousSlideHeight!==this.slideHeight||"auto"!==this.settings.visibleSize||this.$slider.outerWidth()>this.$slider.parent().width()||this.$slider.width()!==this.$slidesMask.width())&&(this.previousSlideWidth=this.slideWidth,this.previousSlideHeight=this.slideHeight,this.slideSize="horizontal"===this.settings.orientation?this.slideWidth:this.slideHeight,this.visibleSlidesSize=this.slideSize,this.visibleOffset=0,b.each(this.slides,function(a,b){b.setSize(c.slideWidth,c.slideHeight)}),this.$slidesMask.css({width:this.slideWidth,height:this.slideHeight}),this.settings.autoHeight===!0?setTimeout(function(){c._resizeHeight()},1):this.$slidesMask.css(this.vendorPrefix+"transition",""),"auto"!==this.settings.visibleSize&&("horizontal"===this.settings.orientation?("fullWidth"===this.settings.forceSize||"fullWindow"===this.settings.forceSize?(this.$slider.css("margin",0),this.$slider.css({width:b(a).width(),"max-width":"",marginLeft:-this.$slider.offset().left})):this.$slider.css({width:this.settings.visibleSize,"max-width":"100%",marginLeft:0}),this.$slidesMask.css("width",this.$slider.width()),this.visibleSlidesSize=this.$slidesMask.width(),this.visibleOffset=Math.round((this.$slider.width()-this.slideWidth)/2)):(this.$slider.css("fullWindow"===this.settings.forceSize?{height:b(a).height(),"max-height":""}:{height:this.settings.visibleSize,"max-height":"100%"}),this.$slidesMask.css("height",this.$slider.height()),this.visibleSlidesSize=this.$slidesMask.height(),this.visibleOffset=Math.round((this.$slider.height()-this.slideHeight)/2))),this._resetSlidesPosition(),this.trigger({type:"sliderResize"}),b.isFunction(this.settings.sliderResize)&&this.settings.sliderResize.call(this,{type:"sliderResize"}))},_resizeHeight:function(){var a=this,b=this.getSlideAt(this.selectedSlideIndex),d=b.getSize();b.off("imagesLoaded."+c),b.on("imagesLoaded."+c,function(c){if(c.index===a.selectedSlideIndex){var d=b.getSize();a._resizeHeightTo(d.height)}}),"loading"!==d&&this._resizeHeightTo(d.height)},gotoSlide:function(a){if(a!==this.selectedSlideIndex&&"undefined"!=typeof this.slides[a]){var c=this;this.previousSlideIndex=this.selectedSlideIndex,this.selectedSlideIndex=a,this.$slides.find(".sp-selected").removeClass("sp-selected"),this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"),this.settings.loop===!0&&(this._updateSlidesOrder(),this._updateSlidesPosition()),this.settings.autoHeight===!0&&this._resizeHeight();var d=-parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty),10)+this.visibleOffset;this._moveTo(d,!1,function(){c.settings.loop===!0&&c._resetSlidesPosition(),c.trigger({type:"gotoSlideComplete",index:a,previousIndex:c.previousSlideIndex}),b.isFunction(c.settings.gotoSlideComplete)&&c.settings.gotoSlideComplete.call(c,{type:"gotoSlideComplete",index:a,previousIndex:c.previousSlideIndex})}),this.trigger({type:"gotoSlide",index:a,previousIndex:this.previousSlideIndex}),b.isFunction(this.settings.gotoSlide)&&this.settings.gotoSlide.call(this,{type:"gotoSlide",index:a,previousIndex:this.previousSlideIndex})}},nextSlide:function(){var a=this.selectedSlideIndex>=this.getTotalSlides()-1?0:this.selectedSlideIndex+1;this.gotoSlide(a)},previousSlide:function(){var a=this.selectedSlideIndex<=0?this.getTotalSlides()-1:this.selectedSlideIndex-1;this.gotoSlide(a)},_moveTo:function(a,b,c){var d=this,e={};if(a!==this.slidesPosition)if(this.slidesPosition=a,"css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation){var f,g="horizontal"===this.settings.orientation?a:0,h="horizontal"===this.settings.orientation?0:a;e[this.vendorPrefix+"transform"]="css-3d"===this.supportedAnimation?"translate3d("+g+"px, "+h+"px, 0)":"translate("+g+"px, "+h+"px)","undefined"!=typeof b&&b===!0?f="":(this.$slides.addClass("sp-animated"),f=this.vendorPrefix+"transform "+this.settings.slideAnimationDuration/1e3+"s",this.$slides.on(this.transitionEvent,function(a){a.target===a.currentTarget&&(d.$slides.off(d.transitionEvent),d.$slides.removeClass("sp-animated"),"function"==typeof c&&c())})),e[this.vendorPrefix+"transition"]=f,this.$slides.css(e)}else e["margin-"+this.positionProperty]=a,"undefined"!=typeof b&&b===!0?this.$slides.css(e):(this.$slides.addClass("sp-animated"),this.$slides.animate(e,this.settings.slideAnimationDuration,function(){d.$slides.removeClass("sp-animated"),"function"==typeof c&&c()}))},_stopMovement:function(){var a={};if("css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation){var b=this.$slides.css(this.vendorPrefix+"transform"),c=-1!==b.indexOf("matrix3d")?"matrix3d":"matrix",d=b.replace(c,"").match(/-?[0-9\.]+/g),e="matrix3d"===c?parseInt(d[12],10):parseInt(d[4],10),f="matrix3d"===c?parseInt(d[13],10):parseInt(d[5],10);a[this.vendorPrefix+"transform"]="css-3d"===this.supportedAnimation?"translate3d("+e+"px, "+f+"px, 0)":"translate("+e+"px, "+f+"px)",a[this.vendorPrefix+"transition"]="",this.$slides.css(a),this.$slides.off(this.transitionEvent),this.slidesPosition="horizontal"===this.settings.orientation?e:f}else this.$slides.stop(),this.slidesPosition=parseInt(this.$slides.css("margin-"+this.positionProperty),10);this.$slides.removeClass("sp-animated")},_resizeHeightTo:function(a){var b={height:a};"css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation?(b[this.vendorPrefix+"transition"]="height "+this.settings.heightAnimationDuration/1e3+"s",this.$slidesMask.css(b)):this.$slidesMask.animate(b,this.settings.heightAnimationDuration)},destroy:function(){this.$slider.removeData("sliderPro"),this.$slider.removeAttr("style"),this.$slides.removeAttr("style"),this.off("update."+c),b(a).off("resize."+this.uniqueId+"."+c);var d=b.SliderPro.modules;if("undefined"!=typeof d)for(var e in d)"undefined"!=typeof this["destroy"+d[e]]&&this["destroy"+d[e]]();b.each(this.slides,function(a,b){b.destroy()}),this.slides.length=0,this.$slides.prependTo(this.$slider),this.$slidesContainer.remove()},_setProperties:function(a,b){for(var c in a)this.settings[c]=a[c],b!==!1&&(this.originalSettings[c]=a[c]);this.update()},on:function(a,b){return this.$slider.on(a,b)},off:function(a){return this.$slider.off(a)},trigger:function(a){return this.$slider.triggerHandler(a)},getSlideAt:function(a){return this.slides[a]},getSelectedSlide:function(){return this.selectedSlideIndex},getTotalSlides:function(){return this.slides.length},defaults:{width:500,height:300,responsive:!0,aspectRatio:-1,imageScaleMode:"cover",centerImage:!0,autoHeight:!1,startSlide:0,shuffle:!1,orientation:"horizontal",forceSize:"none",loop:!0,slideDistance:10,slideAnimationDuration:700,heightAnimationDuration:700,visibleSize:"auto",breakpoints:null,init:function(){},update:function(){},sliderResize:function(){},gotoSlide:function(){},gotoSlideComplete:function(){},breakpointReach:function(){}}};var e=function(a,b,c){this.$slide=a,this.$mainImage=null,this.$imageContainer=null,this.hasMainImage=!1,this.isMainImageLoaded=!1,this.isMainImageLoading=!1,this.hasImages=!1,this.areImagesLoaded=!1,this.width=0,this.height=0,this.settings=c,this.setIndex(b),this._init()};e.prototype={_init:function(){this.$slide.attr("data-init",!0),this.$mainImage=0!==this.$slide.find(".sp-image").length?this.$slide.find(".sp-image"):null,null!==this.$mainImage&&(this.hasMainImage=!0,this.$imageContainer=b('<div class="sp-image-container"></div>').prependTo(this.$slide),0!==this.$mainImage.parent("a").length?this.$mainImage.parent("a").appendTo(this.$imageContainer):this.$mainImage.appendTo(this.$imageContainer)),this.hasImages=0!==this.$slide.find("img").length?!0:!1},setSize:function(a,b){this.width=a,this.height=this.settings.autoHeight===!0?"auto":b,this.$slide.css({width:this.width,height:this.height}),this.hasMainImage===!0&&(this.$imageContainer.css({width:this.width,height:this.height}),"undefined"==typeof this.$mainImage.attr("data-src")&&this.resizeMainImage())},getSize:function(){var a,b=this;if(this.hasImages===!0&&this.areImagesLoaded===!1&&"undefined"==typeof this.$slide.attr("data-loading")){this.$slide.attr("data-loading",!0);var d=f.checkImagesComplete(this.$slide,function(){b.areImagesLoaded=!0,b.$slide.removeAttr("data-loading"),b.trigger({type:"imagesLoaded."+c,index:b.index})});return"complete"===d?(a=this.calculateSize(),{width:a.width,height:a.height}):"loading"}return a=this.calculateSize(),{width:a.width,height:a.height}},calculateSize:function(){var a=this.$slide.width(),c=this.$slide.height();return this.$slide.children().each(function(d,e){var f=b(e),g=e.getBoundingClientRect(),h=f.position().top+(g.bottom-g.top),i=f.position().left+(g.right-g.left);h>c&&(c=h),i>a&&(a=i)}),{width:a,height:c}},resizeMainImage:function(a){var b=this;return a===!0&&(this.isMainImageLoaded=!1,this.isMainImageLoading=!1),this.isMainImageLoaded===!1&&this.isMainImageLoading===!1?(this.isMainImageLoading=!0,void f.checkImagesComplete(this.$mainImage,function(){b.isMainImageLoaded=!0,b.isMainImageLoading=!1,b.resizeMainImage(),b.trigger({type:"imagesLoaded."+c,index:b.index})})):void(this.settings.autoHeight===!0?this.$mainImage.css({width:"100%",height:"auto",marginLeft:"",marginTop:""}):("cover"===this.settings.imageScaleMode?this.$mainImage.css(this.$mainImage.width()/this.$mainImage.height()<=this.width/this.height?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}):"contain"===this.settings.imageScaleMode?this.$mainImage.css(this.$mainImage.width()/this.$mainImage.height()>=this.width/this.height?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}):"exact"===this.settings.imageScaleMode&&this.$mainImage.css({width:"100%",height:"100%"}),this.settings.centerImage===!0&&this.$mainImage.css({marginLeft:.5*(this.$imageContainer.width()-this.$mainImage.width()),marginTop:.5*(this.$imageContainer.height()-this.$mainImage.height())})))},destroy:function(){this.$slide.removeAttr("style"),this.$slide.removeAttr("data-init"),this.$slide.removeAttr("data-index"),this.$slide.removeAttr("data-loaded"),this.hasMainImage===!0&&(this.$slide.find(".sp-image").removeAttr("style").appendTo(this.$slide),this.$slide.find(".sp-image-container").remove())},getIndex:function(){return this.index},setIndex:function(a){this.index=a,this.$slide.attr("data-index",this.index)},on:function(a,b){return this.$slide.on(a,b)},off:function(a){return this.$slide.off(a)},trigger:function(a){return this.$slide.triggerHandler(a)}},a.SliderPro=d,a.SliderProSlide=e,b.fn.sliderPro=function(a){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){if("undefined"==typeof b(this).data("sliderPro")){var e=new d(this,a);b(this).data("sliderPro",e)}else if("undefined"!=typeof a){var f=b(this).data("sliderPro");if("function"==typeof f[a])f[a].apply(f,c);else if("undefined"!=typeof f.settings[a]){var g={};g[a]=c[0],f._setProperties(g)}else"object"==typeof a?f._setProperties(a):b.error(a+" does not exist in sliderPro.")}})};var f={supportedAnimation:null,vendorPrefix:null,transitionEvent:null,getSupportedAnimation:function(){if(null!==this.supportedAnimation)return this.supportedAnimation;var a=document.body||document.documentElement,b=a.style,c="undefined"!=typeof b.transition||"undefined"!=typeof b.WebkitTransition||"undefined"!=typeof b.MozTransition||"undefined"!=typeof b.OTransition;if(c===!0){var d=document.createElement("div");if(("undefined"!=typeof d.style.WebkitPerspective||"undefined"!=typeof d.style.perspective)&&(this.supportedAnimation="css-3d"),"css-3d"===this.supportedAnimation&&"undefined"!=typeof d.styleWebkitPerspective){var e=document.createElement("style");e.textContent="@media (transform-3d),(-webkit-transform-3d){#test-3d{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0;}}",document.getElementsByTagName("head")[0].appendChild(e),d.id="test-3d",document.body.appendChild(d),(9!==d.offsetLeft||5!==d.offsetHeight)&&(this.supportedAnimation=null),e.parentNode.removeChild(e),d.parentNode.removeChild(d)}null!==this.supportedAnimation||"undefined"==typeof d.style["-webkit-transform"]&&"undefined"==typeof d.style.transform||(this.supportedAnimation="css-2d")}else this.supportedAnimation="javascript";return this.supportedAnimation},getVendorPrefix:function(){if(null!==this.vendorPrefix)return this.vendorPrefix;var a=document.createElement("div"),b=["Webkit","Moz","ms","O"];if("transform"in a.style)return this.vendorPrefix="",this.vendorPrefix;for(var c=0;c<b.length;c++)if(b[c]+"Transform"in a.style){this.vendorPrefix="-"+b[c].toLowerCase()+"-";break}return this.vendorPrefix},getTransitionEvent:function(){if(null!==this.transitionEvent)return this.transitionEvent;var a=document.createElement("div"),b={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd"};for(var c in b)if(c in a.style){this.transitionEvent=b[c];break}return this.transitionEvent},checkImagesComplete:function(a,b){var c=this,d=this.checkImagesStatus(a);if("loading"===d)var e=setInterval(function(){d=c.checkImagesStatus(a),"complete"===d&&(clearInterval(e),"function"==typeof b&&b())},100);else"function"==typeof b&&b();return d},checkImagesStatus:function(a){var c="complete";return a.is("img")&&a[0].complete===!1?c="loading":a.find("img").each(function(){var a=b(this)[0];a.complete===!1&&(c="loading")}),c}};a.SliderProUtils=f}(window,jQuery),function(a,b){"use strict";var c="Thumbnails."+b.SliderPro.namespace,d={$thumbnails:null,$thumbnailsContainer:null,thumbnails:null,selectedThumbnailIndex:0,thumbnailsSize:0,thumbnailsContainerSize:0,thumbnailsPosition:0,thumbnailsOrientation:null,thumbnailsPositionProperty:null,isThumbnailScroller:!1,initThumbnails:function(){var a=this;this.thumbnails=[],this.on("update."+c,b.proxy(this._thumbnailsOnUpdate,this)),this.on("sliderResize."+c,b.proxy(this._thumbnailsOnResize,this)),this.on("gotoSlide."+c,function(b){a._gotoThumbnail(b.index)})},_thumbnailsOnUpdate:function(){var a=this;if(0===this.$slider.find(".sp-thumbnail").length&&0===this.thumbnails.length)return void(this.isThumbnailScroller=!1);if(this.isThumbnailScroller=!0,null===this.$thumbnailsContainer&&(this.$thumbnailsContainer=b('<div class="sp-thumbnails-container"></div>').insertAfter(this.$slidesContainer)),null===this.$thumbnails)if(0!==this.$slider.find(".sp-thumbnails").length){if(this.$thumbnails=this.$slider.find(".sp-thumbnails").appendTo(this.$thumbnailsContainer),this.settings.shuffle===!0){var c=this.$thumbnails.find(".sp-thumbnail"),d=[];b.each(this.shuffledIndexes,function(a,e){var f=b(c[e]);0!==f.parent("a").length&&(f=f.parent("a")),d.push(f)}),this.$thumbnails.empty().append(d)}}else this.$thumbnails=b('<div class="sp-thumbnails"></div>').appendTo(this.$thumbnailsContainer);this.$slides.find(".sp-thumbnail").each(function(){var c=b(this),d=c.parents(".sp-slide").index(),e=a.$thumbnails.find(".sp-thumbnail").length-1;d>e?c.appendTo(a.$thumbnails):c.insertBefore(a.$thumbnails.find(".sp-thumbnail").eq(d))});for(var e=this.thumbnails.length-1;e>=0;e--)if(0===this.$thumbnails.find('.sp-thumbnail[data-index="'+e+'"]').length){var f=this.thumbnails[e];f.destroy(),this.thumbnails.splice(e,1)}this.$thumbnails.find(".sp-thumbnail").each(function(c){var d=b(this);"undefined"==typeof d.attr("data-init")?a._createThumbnail(d,c):a.thumbnails[c].setIndex(c)}),this.$thumbnailsContainer.removeClass("sp-top-thumbnails sp-bottom-thumbnails sp-left-thumbnails sp-right-thumbnails"),"top"===this.settings.thumbnailsPosition?(this.$thumbnailsContainer.addClass("sp-top-thumbnails"),this.thumbnailsOrientation="horizontal"):"bottom"===this.settings.thumbnailsPosition?(this.$thumbnailsContainer.addClass("sp-bottom-thumbnails"),this.thumbnailsOrientation="horizontal"):"left"===this.settings.thumbnailsPosition?(this.$thumbnailsContainer.addClass("sp-left-thumbnails"),this.thumbnailsOrientation="vertical"):"right"===this.settings.thumbnailsPosition&&(this.$thumbnailsContainer.addClass("sp-right-thumbnails"),this.thumbnailsOrientation="vertical"),this.settings.thumbnailPointer===!0?this.$thumbnailsContainer.addClass("sp-has-pointer"):this.$thumbnailsContainer.removeClass("sp-has-pointer"),this.selectedThumbnailIndex=this.selectedSlideIndex,this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"),this.thumbnailsSize=0,b.each(this.thumbnails,function(b,c){c.setSize(a.settings.thumbnailWidth,a.settings.thumbnailHeight),a.thumbnailsSize+="horizontal"===a.thumbnailsOrientation?c.getSize().width:c.getSize().height}),"horizontal"===this.thumbnailsOrientation?(this.$thumbnails.css({width:this.thumbnailsSize,height:this.settings.thumbnailHeight}),this.$thumbnailsContainer.css("height",""),this.thumbnailsPositionProperty="left"):(this.$thumbnails.css({width:this.settings.thumbnailWidth,height:this.thumbnailsSize}),this.$thumbnailsContainer.css("width",""),this.thumbnailsPositionProperty="top"),this.trigger({type:"thumbnailsUpdate"}),b.isFunction(this.settings.thumbnailsUpdate)&&this.settings.thumbnailsUpdate.call(this,{type:"thumbnailsUpdate"})},_createThumbnail:function(a,b){var d=this,f=new e(a,this.$thumbnails,b);f.on("thumbnailClick."+c,function(a){d.gotoSlide(a.index)}),this.thumbnails.splice(b,0,f)},_thumbnailsOnResize:function(){if(this.isThumbnailScroller!==!1){var c,d=this;"horizontal"===this.thumbnailsOrientation?(this.thumbnailsContainerSize=Math.min(this.$slidesMask.width(),this.thumbnailsSize),this.$thumbnailsContainer.css("width",this.thumbnailsContainerSize),"fullWindow"===this.settings.forceSize&&(this.$slidesMask.css("height",this.$slidesMask.height()-this.$thumbnailsContainer.outerHeight(!0)),this.slideHeight=this.$slidesMask.height(),b.each(this.slides,function(a,b){b.setSize(d.slideWidth,d.slideHeight)}))):"vertical"===this.thumbnailsOrientation&&(this.$slidesMask.width()+this.$thumbnailsContainer.outerWidth(!0)>this.$slider.parent().width()&&("fullWidth"===this.settings.forceSize||"fullWindow"===this.settings.forceSize?this.$slider.css("max-width",b(a).width()-this.$thumbnailsContainer.outerWidth(!0)):this.$slider.css("max-width",this.$slider.parent().width()-this.$thumbnailsContainer.outerWidth(!0)),this.$slidesMask.css("width",this.$slider.width()),"horizontal"===this.settings.orientation?(this.visibleOffset=Math.round((this.$slider.width()-this.slideSize)/2),this.visibleSlidesSize=this.$slidesMask.width()):"vertical"===this.settings.orientation&&(this.slideWidth=this.$slider.width(),b.each(this.slides,function(a,b){b.setSize(d.slideWidth,d.slideHeight)})),this._resetSlidesPosition()),this.thumbnailsContainerSize=Math.min(this.$slidesMask.height(),this.thumbnailsSize),this.$thumbnailsContainer.css("height",this.thumbnailsContainerSize)),c=this.thumbnailsSize<=this.thumbnailsContainerSize||0===this.$thumbnails.find(".sp-selected-thumbnail").length?0:Math.max(-this.thumbnails[this.selectedThumbnailIndex].getPosition()[this.thumbnailsPositionProperty],this.thumbnailsContainerSize-this.thumbnailsSize),"top"===this.settings.thumbnailsPosition?this.$slider.css({paddingTop:this.$thumbnailsContainer.outerHeight(!0),paddingLeft:"",paddingRight:""}):"bottom"===this.settings.thumbnailsPosition?this.$slider.css({paddingTop:"",paddingLeft:"",paddingRight:""}):"left"===this.settings.thumbnailsPosition?this.$slider.css({paddingTop:"",paddingLeft:this.$thumbnailsContainer.outerWidth(!0),paddingRight:""}):"right"===this.settings.thumbnailsPosition&&this.$slider.css({paddingTop:"",paddingLeft:"",paddingRight:this.$thumbnailsContainer.outerWidth(!0)}),this._moveThumbnailsTo(c,!0)}},_gotoThumbnail:function(a){if(this.isThumbnailScroller!==!1&&"undefined"!=typeof this.thumbnails[a]){var c=this.selectedThumbnailIndex,d=this.thumbnailsPosition;if(this.selectedThumbnailIndex=a,this.$thumbnails.find(".sp-selected-thumbnail").removeClass("sp-selected-thumbnail"),this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"),this.selectedThumbnailIndex>=c){var e=this.selectedThumbnailIndex===this.thumbnails.length-1?this.selectedThumbnailIndex:this.selectedThumbnailIndex+1,f=this.thumbnails[e],g="horizontal"===this.thumbnailsOrientation?f.getPosition().right:f.getPosition().bottom,h=-this.thumbnailsPosition+this.thumbnailsContainerSize;g>h&&(d=this.thumbnailsPosition-(g-h))}else if(this.selectedThumbnailIndex<c){var i=0===this.selectedThumbnailIndex?this.selectedThumbnailIndex:this.selectedThumbnailIndex-1,j=this.thumbnails[i],k="horizontal"===this.thumbnailsOrientation?j.getPosition().left:j.getPosition().top;k<-this.thumbnailsPosition&&(d=-k)}this._moveThumbnailsTo(d),this.trigger({type:"gotoThumbnail"}),b.isFunction(this.settings.gotoThumbnail)&&this.settings.gotoThumbnail.call(this,{type:"gotoThumbnail"})}},_moveThumbnailsTo:function(a,c,d){var e=this,f={};if(a!==this.thumbnailsPosition)if(this.thumbnailsPosition=a,"css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation){var g,h="horizontal"===this.thumbnailsOrientation?a:0,i="horizontal"===this.thumbnailsOrientation?0:a;f[this.vendorPrefix+"transform"]="css-3d"===this.supportedAnimation?"translate3d("+h+"px, "+i+"px, 0)":"translate("+h+"px, "+i+"px)","undefined"!=typeof c&&c===!0?g="":(this.$thumbnails.addClass("sp-animated"),g=this.vendorPrefix+"transform 0.7s",this.$thumbnails.on(this.transitionEvent,function(a){a.target===a.currentTarget&&(e.$thumbnails.off(e.transitionEvent),e.$thumbnails.removeClass("sp-animated"),"function"==typeof d&&d(),e.trigger({type:"thumbnailsMoveComplete"}),b.isFunction(e.settings.thumbnailsMoveComplete)&&e.settings.thumbnailsMoveComplete.call(e,{type:"thumbnailsMoveComplete"}))})),f[this.vendorPrefix+"transition"]=g,this.$thumbnails.css(f)}else f["margin-"+this.thumbnailsPositionProperty]=a,"undefined"!=typeof c&&c===!0?this.$thumbnails.css(f):this.$thumbnails.addClass("sp-animated").animate(f,700,function(){e.$thumbnails.removeClass("sp-animated"),"function"==typeof d&&d(),e.trigger({type:"thumbnailsMoveComplete"}),b.isFunction(e.settings.thumbnailsMoveComplete)&&e.settings.thumbnailsMoveComplete.call(e,{type:"thumbnailsMoveComplete"})})},_stopThumbnailsMovement:function(){var a={};if("css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation){var b=this.$thumbnails.css(this.vendorPrefix+"transform"),c=-1!==b.indexOf("matrix3d")?"matrix3d":"matrix",d=b.replace(c,"").match(/-?[0-9\.]+/g),e="matrix3d"===c?parseInt(d[12],10):parseInt(d[4],10),f="matrix3d"===c?parseInt(d[13],10):parseInt(d[5],10);a[this.vendorPrefix+"transform"]="css-3d"===this.supportedAnimation?"translate3d("+e+"px, "+f+"px, 0)":"translate("+e+"px, "+f+"px)",a[this.vendorPrefix+"transition"]="",this.$thumbnails.css(a),this.$thumbnails.off(this.transitionEvent),this.thumbnailsPosition="horizontal"===this.thumbnailsOrientation?parseInt(d[4],10):parseInt(d[5],10)}else this.$thumbnails.stop(),this.thumbnailsPosition=parseInt(this.$thumbnails.css("margin-"+this.thumbnailsPositionProperty),10);this.$thumbnails.removeClass("sp-animated")},destroyThumbnails:function(){var d=this;this.off("update."+c),this.isThumbnailScroller!==!1&&(this.off("sliderResize."+c),this.off("gotoSlide."+c),b(a).off("resize."+this.uniqueId+"."+c),this.$thumbnails.find(".sp-thumbnail").each(function(){var a=b(this),e=parseInt(a.attr("data-index"),10),f=d.thumbnails[e];f.off("thumbnailClick."+c),f.destroy()}),this.thumbnails.length=0,this.$thumbnails.appendTo(this.$slider),this.$thumbnailsContainer.remove(),this.$slider.css({paddingTop:"",paddingLeft:"",paddingRight:""}))},thumbnailsDefaults:{thumbnailWidth:100,thumbnailHeight:80,thumbnailsPosition:"bottom",thumbnailPointer:!1,thumbnailsUpdate:function(){},gotoThumbnail:function(){},thumbnailsMoveComplete:function(){}}},e=function(a,b,c){this.$thumbnail=a,this.$thumbnails=b,this.$thumbnailContainer=null,this.width=0,this.height=0,this.isImageLoaded=!1,this.setIndex(c),this._init()};e.prototype={_init:function(){var a=this;this.$thumbnail.attr("data-init",!0),this.$thumbnailContainer=b('<div class="sp-thumbnail-container"></div>').appendTo(this.$thumbnails),0!==this.$thumbnail.parent("a").length?this.$thumbnail.parent("a").appendTo(this.$thumbnailContainer):this.$thumbnail.appendTo(this.$thumbnailContainer),this.$thumbnailContainer.on("click."+c,function(){a.trigger({type:"thumbnailClick."+c,index:a.index})})},setSize:function(a,b){this.width=a,this.height=b,this.$thumbnailContainer.css({width:this.width,height:this.height}),this.$thumbnail.is("img")&&"undefined"==typeof this.$thumbnail.attr("data-src")&&this.resizeImage()},getSize:function(){return{width:this.$thumbnailContainer.outerWidth(!0),height:this.$thumbnailContainer.outerHeight(!0)}},getPosition:function(){return{left:this.$thumbnailContainer.position().left+parseInt(this.$thumbnailContainer.css("marginLeft"),10),right:this.$thumbnailContainer.position().left+parseInt(this.$thumbnailContainer.css("marginLeft"),10)+this.$thumbnailContainer.outerWidth(),top:this.$thumbnailContainer.position().top+parseInt(this.$thumbnailContainer.css("marginTop"),10),bottom:this.$thumbnailContainer.position().top+parseInt(this.$thumbnailContainer.css("marginTop"),10)+this.$thumbnailContainer.outerHeight()}
},setIndex:function(a){this.index=a,this.$thumbnail.attr("data-index",this.index)},resizeImage:function(){var a=this;if(this.isImageLoaded===!1)return void SliderProUtils.checkImagesComplete(this.$thumbnailContainer,function(){a.isImageLoaded=!0,a.resizeImage()});this.$thumbnail=this.$thumbnailContainer.find(".sp-thumbnail");var b=this.$thumbnail.width(),c=this.$thumbnail.height();this.$thumbnail.css(b/c<=this.width/this.height?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),this.$thumbnail.css({marginLeft:.5*(this.$thumbnailContainer.width()-this.$thumbnail.width()),marginTop:.5*(this.$thumbnailContainer.height()-this.$thumbnail.height())})},destroy:function(){this.$thumbnailContainer.off("click."+c),this.$thumbnail.removeAttr("data-init"),this.$thumbnail.removeAttr("data-index"),0!==this.$thumbnail.parent("a").length?this.$thumbnail.parent("a").insertBefore(this.$thumbnailContainer):this.$thumbnail.insertBefore(this.$thumbnailContainer),this.$thumbnailContainer.remove()},on:function(a,b){return this.$thumbnailContainer.on(a,b)},off:function(a){return this.$thumbnailContainer.off(a)},trigger:function(a){return this.$thumbnailContainer.triggerHandler(a)}},b.SliderPro.addModule("Thumbnails",d)}(window,jQuery),function(a,b){"use strict";var c="ConditionalImages."+b.SliderPro.namespace,d={previousImageSize:null,currentImageSize:null,isRetinaScreen:!1,initConditionalImages:function(){this.currentImageSize=this.previousImageSize="default",this.isRetinaScreen="undefined"!=typeof this._isRetina&&this._isRetina()===!0,this.on("update."+c,b.proxy(this._conditionalImagesOnUpdate,this)),this.on("sliderResize."+c,b.proxy(this._conditionalImagesOnResize,this))},_conditionalImagesOnUpdate:function(){b.each(this.slides,function(a,c){var d=c.$slide;d.find("img:not([ data-default ])").each(function(){var a=b(this);"undefined"!=typeof a.attr("data-src")?a.attr("data-default",a.attr("data-src")):a.attr("data-default",a.attr("src"))})})},_conditionalImagesOnResize:function(){if(this.currentImageSize=this.slideWidth<=this.settings.smallSize?"small":this.slideWidth<=this.settings.mediumSize?"medium":this.slideWidth<=this.settings.largeSize?"large":"default",this.previousImageSize!==this.currentImageSize){var a=this;b.each(this.slides,function(c,d){var e=d.$slide;e.find("img").each(function(){var c=b(this),e="";a.isRetinaScreen===!0&&"undefined"!=typeof c.attr("data-retina"+a.currentImageSize)?(e=c.attr("data-retina"+a.currentImageSize),"undefined"!=typeof c.attr("data-retina")&&c.attr("data-retina",e)):"undefined"!=typeof c.attr("data-"+a.currentImageSize)&&(e=c.attr("data-"+a.currentImageSize),"undefined"!=typeof c.attr("data-src")&&c.attr("data-src",e)),""!==e&&"undefined"==typeof c.attr("data-src")&&a._loadConditionalImage(c,e,function(a){a.hasClass("sp-image")&&(d.$mainImage=a,d.resizeMainImage(!0))})})}),this.previousImageSize=this.currentImageSize}},_loadConditionalImage:function(a,c,d){var e=b(new Image);e.attr("class",a.attr("class")),e.attr("style",a.attr("style")),b.each(a.data(),function(a,b){e.attr("data-"+a,b)}),"undefined"!=typeof a.attr("width")&&e.attr("width",a.attr("width")),"undefined"!=typeof a.attr("height")&&e.attr("height",a.attr("height")),"undefined"!=typeof a.attr("alt")&&e.attr("alt",a.attr("alt")),"undefined"!=typeof a.attr("title")&&e.attr("title",a.attr("title")),e.attr("src",c),e.insertAfter(a),a.remove(),a=null,"function"==typeof d&&d(e)},destroyConditionalImages:function(){this.off("update."+c),this.off("sliderResize."+c)},conditionalImagesDefaults:{smallSize:480,mediumSize:768,largeSize:1024}};b.SliderPro.addModule("ConditionalImages",d)}(window,jQuery),function(a,b){"use strict";var c="LazyLoading."+b.SliderPro.namespace,d={allowLazyLoadingCheck:!0,initLazyLoading:function(){this.on("sliderResize."+c,b.proxy(this._lazyLoadingOnResize,this)),this.on("gotoSlide."+c,b.proxy(this._checkAndLoadVisibleImages,this)),this.on("thumbnailsUpdate."+c+" thumbnailsMoveComplete."+c,b.proxy(this._checkAndLoadVisibleThumbnailImages,this))},_lazyLoadingOnResize:function(){var a=this;this.allowLazyLoadingCheck!==!1&&(this.allowLazyLoadingCheck=!1,this._checkAndLoadVisibleImages(),0!==this.$slider.find(".sp-thumbnail").length&&this._checkAndLoadVisibleThumbnailImages(),setTimeout(function(){a.allowLazyLoadingCheck=!0},500))},_checkAndLoadVisibleImages:function(){if(0!==this.$slider.find(".sp-slide:not([ data-loaded ])").length){var a=this,c=this.settings.loop===!0?this.middleSlidePosition:this.selectedSlideIndex,d=Math.ceil((this.visibleSlidesSize-this.slideSize)/2/this.slideSize),e=c-d-1>0?c-d-1:0,f=c+d+1<this.getTotalSlides()-1?c+d+1:this.getTotalSlides()-1,g=this.slidesOrder.slice(e,f+1);b.each(g,function(c,d){var e=a.slides[d],f=e.$slide;"undefined"==typeof f.attr("data-loaded")&&(f.attr("data-loaded",!0),f.find("img[ data-src ]").each(function(){var c=b(this);a._loadImage(c,function(a){a.hasClass("sp-image")&&(e.$mainImage=a,e.resizeMainImage(!0))})}))})}},_checkAndLoadVisibleThumbnailImages:function(){if(0!==this.$slider.find(".sp-thumbnail-container:not([ data-loaded ])").length){var a=this,c=this.thumbnailsSize/this.thumbnails.length,d=Math.floor(Math.abs(this.thumbnailsPosition/c)),e=Math.floor((-this.thumbnailsPosition+this.thumbnailsContainerSize)/c),f=this.thumbnails.slice(d,e+1);b.each(f,function(c,d){var e=d.$thumbnailContainer;"undefined"==typeof e.attr("data-loaded")&&(e.attr("data-loaded",!0),e.find("img[ data-src ]").each(function(){var c=b(this);a._loadImage(c,function(){d.resizeImage()})}))})}},_loadImage:function(a,c){var d=b(new Image);d.attr("class",a.attr("class")),d.attr("style",a.attr("style")),b.each(a.data(),function(a,b){d.attr("data-"+a,b)}),"undefined"!=typeof a.attr("width")&&d.attr("width",a.attr("width")),"undefined"!=typeof a.attr("height")&&d.attr("height",a.attr("height")),"undefined"!=typeof a.attr("alt")&&d.attr("alt",a.attr("alt")),"undefined"!=typeof a.attr("title")&&d.attr("title",a.attr("title")),d.attr("src",a.attr("data-src")),d.removeAttr("data-src"),d.insertAfter(a),a.remove(),a=null,"function"==typeof c&&c(d)},destroyLazyLoading:function(){this.off("update."+c),this.off("gotoSlide."+c),this.off("sliderResize."+c),this.off("thumbnailsUpdate."+c),this.off("thumbnailsMoveComplete."+c)}};b.SliderPro.addModule("LazyLoading",d)}(window,jQuery),function(a,b){"use strict";var c="Retina."+b.SliderPro.namespace,d={initRetina:function(){this._isRetina()!==!1&&("undefined"!=typeof this._loadImage?this._loadImage=this._loadRetinaImage:(this.on("update."+c,b.proxy(this._checkRetinaImages,this)),0!==this.$slider.find(".sp-thumbnail").length&&this.on("update.Thumbnails."+c,b.proxy(this._checkRetinaThumbnailImages,this))))},_isRetina:function(){return a.devicePixelRatio>=2?!0:a.matchMedia&&a.matchMedia("(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx)").matches?!0:!1},_checkRetinaImages:function(){var a=this;b.each(this.slides,function(c,d){var e=d.$slide;"undefined"==typeof e.attr("data-loaded")&&(e.attr("data-loaded",!0),e.find("img").each(function(){var c=b(this);a._loadRetinaImage(c,function(a){a.hasClass("sp-image")&&(d.$mainImage=a,d.resizeMainImage(!0))})}))})},_checkRetinaThumbnailImages:function(){var a=this;this.$thumbnails.find(".sp-thumbnail-container").each(function(){var c=b(this);"undefined"==typeof c.attr("data-loaded")&&(c.attr("data-loaded",!0),a._loadRetinaImage(c.find("img")))})},_loadRetinaImage:function(a,c){var d=!1,e="";if("undefined"!=typeof a.attr("data-retina")&&(d=!0,e=a.attr("data-retina"),a.removeAttr("data-retina")),"undefined"!=typeof a.attr("data-src")&&(d===!1&&(e=a.attr("data-src")),a.removeAttr("data-src")),""!==e){var f=b(new Image);f.attr("class",a.attr("class")),f.attr("style",a.attr("style")),b.each(a.data(),function(a,b){f.attr("data-"+a,b)}),"undefined"!=typeof a.attr("width")&&f.attr("width",a.attr("width")),"undefined"!=typeof a.attr("height")&&f.attr("height",a.attr("height")),"undefined"!=typeof a.attr("alt")&&f.attr("alt",a.attr("alt")),"undefined"!=typeof a.attr("title")&&f.attr("title",a.attr("title")),f.insertAfter(a),a.remove(),a=null,f.attr("src",e),"function"==typeof c&&c(f)}},destroyRetina:function(){this.off("update."+c),this.off("update.Thumbnails."+c)}};b.SliderPro.addModule("Retina",d)}(window,jQuery),function(a,b){"use strict";var c="Layers."+b.SliderPro.namespace,d={layersGotoSlideReference:null,waitForLayersTimer:null,initLayers:function(){this.on("update."+c,b.proxy(this._layersOnUpdate,this)),this.on("sliderResize."+c,b.proxy(this._layersOnResize,this)),this.on("gotoSlide."+c,b.proxy(this._layersOnGotoSlide,this))},_layersOnUpdate:function(){var a=this;b.each(this.slides,function(a,c){var d=c.$slide;this.$slide.find(".sp-layer:not([ data-init ])").each(function(){var a=new f(b(this));"undefined"==typeof c.layers&&(c.layers=[]),c.layers.push(a),b(this).hasClass("sp-static")===!1&&("undefined"==typeof c.animatedLayers&&(c.animatedLayers=[]),c.animatedLayers.push(a)),b(this).appendTo(d)})}),this.settings.waitForLayers===!0&&(clearTimeout(this.waitForLayersTimer),this.waitForLayersTimer=setTimeout(function(){a.layersGotoSlideReference=a.gotoSlide,a.gotoSlide=a._layersGotoSlide},1))},_layersOnResize:function(){var a,c,d=this,e=this.settings.autoScaleLayers;return this.settings.autoScaleLayers===!1?void this.showLayers(this.selectedSlideIndex):(-1===this.settings.autoScaleReference?"string"==typeof this.settings.width&&-1!==this.settings.width.indexOf("%")?e=!1:a=parseInt(this.settings.width,10):a=this.settings.autoScaleReference,c=e===!0&&this.slideWidth<a?d.slideWidth/a:1,b.each(this.slides,function(a,d){"undefined"!=typeof d.layers&&b.each(d.layers,function(a,b){b.scale(c)})}),void this.showLayers(this.selectedSlideIndex))},_layersGotoSlide:function(a){var b=this,d=this.slides[this.selectedSlideIndex].animatedLayers;this.$slider.hasClass("sp-swiping")||"undefined"==typeof d||0===d.length?this.layersGotoSlideReference(a):(this.on("hideLayersComplete."+c,function(){b.off("hideLayersComplete."+c),b.layersGotoSlideReference(a)}),this.hideLayers(this.selectedSlideIndex))},_layersOnGotoSlide:function(){this.previousSlideIndex!==this.selectedSlideIndex&&this.hideLayers(this.previousSlideIndex),this.showLayers(this.selectedSlideIndex)},showLayers:function(a){var c=this,d=this.slides[a].animatedLayers,e=0;"undefined"!=typeof d&&b.each(d,function(a,f){f.isVisible()===!0?(e++,e===d.length&&(c.trigger({type:"showLayersComplete",index:a}),b.isFunction(c.settings.showLayersComplete)&&c.settings.showLayersComplete.call(c,{type:"showLayersComplete",index:a}))):f.show(function(){e++,e===d.length&&(c.trigger({type:"showLayersComplete",index:a}),b.isFunction(c.settings.showLayersComplete)&&c.settings.showLayersComplete.call(c,{type:"showLayersComplete",index:a}))})})},hideLayers:function(a){var c=this,d=this.slides[a].animatedLayers,e=0;"undefined"!=typeof d&&b.each(d,function(a,f){f.isVisible()===!1?(e++,e===d.length&&(c.trigger({type:"hideLayersComplete",index:a}),b.isFunction(c.settings.hideLayersComplete)&&c.settings.hideLayersComplete.call(c,{type:"hideLayersComplete",index:a}))):f.hide(function(){e++,e===d.length&&(c.trigger({type:"hideLayersComplete",index:a}),b.isFunction(c.settings.hideLayersComplete)&&c.settings.hideLayersComplete.call(c,{type:"hideLayersComplete",index:a}))})})},destroyLayers:function(){this.off("update."+c),this.off("resize."+c),this.off("gotoSlide."+c),this.off("hideLayersComplete."+c)},layersDefaults:{waitForLayers:!1,autoScaleLayers:!0,autoScaleReference:-1,showLayersComplete:function(){},hideLayersComplete:function(){}}},e=a.SliderProSlide.prototype.destroy;a.SliderProSlide.prototype.destroy=function(){"undefined"!=typeof this.layers&&(b.each(this.layers,function(a,b){b.destroy()}),this.layers.length=0),"undefined"!=typeof this.animatedLayers&&(this.animatedLayers.length=0),e.apply(this)};var f=function(a){this.$layer=a,this.visible=!1,this.styled=!1,this.data=null,this.position=null,this.horizontalProperty=null,this.verticalProperty=null,this.horizontalPosition=null,this.verticalPosition=null,this.scaleRatio=1,this.supportedAnimation=SliderProUtils.getSupportedAnimation(),this.vendorPrefix=SliderProUtils.getVendorPrefix(),this.transitionEvent=SliderProUtils.getTransitionEvent(),this.stayTimer=null,this._init()};f.prototype={_init:function(){this.$layer.attr("data-init",!0),this.$layer.hasClass("sp-static")?this._setStyle():this.$layer.css({visibility:"hidden",display:"none"})},_setStyle:function(){this.styled=!0,this.$layer.css("display",""),this.data=this.$layer.data(),"undefined"!=typeof this.data.width&&this.$layer.css("width",this.data.width),"undefined"!=typeof this.data.height&&this.$layer.css("height",this.data.height),"undefined"!=typeof this.data.depth&&this.$layer.css("z-index",this.data.depth),this.position=this.data.position?this.data.position.toLowerCase():"topleft",this.horizontalProperty=-1!==this.position.indexOf("right")?"right":-1!==this.position.indexOf("left")?"left":"center",this.verticalProperty=-1!==this.position.indexOf("bottom")?"bottom":-1!==this.position.indexOf("top")?"top":"center",this._setPosition(),this.scale(this.scaleRatio)},_setPosition:function(){var a=this.$layer.attr("style");this.horizontalPosition="undefined"!=typeof this.data.horizontal?this.data.horizontal:0,this.verticalPosition="undefined"!=typeof this.data.vertical?this.data.vertical:0,"center"===this.horizontalProperty?(("undefined"==typeof a||"undefined"!=typeof a&&-1===a.indexOf("width"))&&(this.$layer.css("white-space","nowrap"),this.$layer.css("width",this.$layer.outerWidth(!0))),this.$layer.css({marginLeft:"auto",marginRight:"auto",left:this.horizontalPosition,right:0})):this.$layer.css(this.horizontalProperty,this.horizontalPosition),"center"===this.verticalProperty?(("undefined"==typeof a||"undefined"!=typeof a&&-1===a.indexOf("height"))&&(this.$layer.css("white-space","nowrap"),this.$layer.css("height",this.$layer.outerHeight(!0))),this.$layer.css({marginTop:"auto",marginBottom:"auto",top:this.verticalPosition,bottom:0})):this.$layer.css(this.verticalProperty,this.verticalPosition)},scale:function(a){if(!this.$layer.hasClass("sp-no-scale")&&(this.scaleRatio=a,this.styled!==!1)){var b="center"===this.horizontalProperty?"left":this.horizontalProperty,c="center"===this.verticalProperty?"top":this.verticalProperty,d={};d[this.vendorPrefix+"transform-origin"]=this.horizontalProperty+" "+this.verticalProperty,d[this.vendorPrefix+"transform"]="scale("+this.scaleRatio+")","string"!=typeof this.horizontalPosition&&(d[b]=this.horizontalPosition*this.scaleRatio),"string"!=typeof this.verticalPosition&&(d[c]=this.verticalPosition*this.scaleRatio),"string"==typeof this.data.width&&-1!==this.data.width.indexOf("%")&&(d.width=(parseInt(this.data.width,10)/this.scaleRatio).toString()+"%"),"string"==typeof this.data.height&&-1!==this.data.height.indexOf("%")&&(d.height=(parseInt(this.data.height,10)/this.scaleRatio).toString()+"%"),this.$layer.css(d)}},show:function(a){if(this.visible!==!0){this.visible=!0,this.styled===!1&&this._setStyle();var b=this,c="undefined"!=typeof this.data.showOffset?this.data.showOffset:50,d="undefined"!=typeof this.data.showDuration?this.data.showDuration/1e3:.4,e="undefined"!=typeof this.data.showDelay?this.data.showDelay:10,f="undefined"!=typeof b.data.stayDuration?parseInt(b.data.stayDuration,10):-1;if("javascript"===this.supportedAnimation)this.$layer.stop().delay(e).css({opacity:0,visibility:"visible"}).animate({opacity:1},1e3*d,function(){-1!==f&&(b.stayTimer=setTimeout(function(){b.hide(),b.stayTimer=null},f)),"undefined"!=typeof a&&a()});else{var g={opacity:0,visibility:"visible"},h={opacity:1},i="";g[this.vendorPrefix+"transform"]="scale("+this.scaleRatio+")",h[this.vendorPrefix+"transform"]="scale("+this.scaleRatio+")",h[this.vendorPrefix+"transition"]="opacity "+d+"s","undefined"!=typeof this.data.showTransition&&("left"===this.data.showTransition?i=c+"px, 0":"right"===this.data.showTransition?i="-"+c+"px, 0":"up"===this.data.showTransition?i="0, "+c+"px":"down"===this.data.showTransition&&(i="0, -"+c+"px"),g[this.vendorPrefix+"transform"]+="css-3d"===this.supportedAnimation?" translate3d("+i+", 0)":" translate("+i+")",h[this.vendorPrefix+"transform"]+="css-3d"===this.supportedAnimation?" translate3d(0, 0, 0)":" translate(0, 0)",h[this.vendorPrefix+"transition"]+=", "+this.vendorPrefix+"transform "+d+"s"),this.$layer.on(this.transitionEvent,function(c){c.target===c.currentTarget&&(b.$layer.off(b.transitionEvent).css(b.vendorPrefix+"transition",""),-1!==f&&(b.stayTimer=setTimeout(function(){b.hide(),b.stayTimer=null},f)),"undefined"!=typeof a&&a())}),this.$layer.css(g),setTimeout(function(){b.$layer.css(h)},e)}}},hide:function(a){if(this.visible!==!1){var c=this,d="undefined"!=typeof this.data.hideOffset?this.data.hideOffset:50,e="undefined"!=typeof this.data.hideDuration?this.data.hideDuration/1e3:.4,f="undefined"!=typeof this.data.hideDelay?this.data.hideDelay:10;if(this.visible=!1,null!==this.stayTimer&&clearTimeout(this.stayTimer),"javascript"===this.supportedAnimation)this.$layer.stop().delay(f).animate({opacity:0},1e3*e,function(){b(this).css("visibility","hidden"),"undefined"!=typeof a&&a()});else{var g="",h={opacity:0};h[this.vendorPrefix+"transform"]="scale("+this.scaleRatio+")",h[this.vendorPrefix+"transition"]="opacity "+e+"s","undefined"!=typeof this.data.hideTransition&&("left"===this.data.hideTransition?g="-"+d+"px, 0":"right"===this.data.hideTransition?g=d+"px, 0":"up"===this.data.hideTransition?g="0, -"+d+"px":"down"===this.data.hideTransition&&(g="0, "+d+"px"),h[this.vendorPrefix+"transform"]+="css-3d"===this.supportedAnimation?" translate3d("+g+", 0)":" translate("+g+")",h[this.vendorPrefix+"transition"]+=", "+this.vendorPrefix+"transform "+e+"s"),this.$layer.on(this.transitionEvent,function(b){b.target===b.currentTarget&&(c.$layer.off(c.transitionEvent).css(c.vendorPrefix+"transition",""),c.visible===!1&&c.$layer.css("visibility","hidden"),"undefined"!=typeof a&&a())}),setTimeout(function(){c.$layer.css(h)},f)}}},isVisible:function(){return this.visible===!1||this.$layer.is(":hidden")?!1:!0},destroy:function(){this.$layer.removeAttr("style"),this.$layer.removeAttr("data-init")}},b.SliderPro.addModule("Layers",d)}(window,jQuery),function(a,b){"use strict";var c="Fade."+b.SliderPro.namespace,d={fadeGotoSlideReference:null,initFade:function(){this.on("update."+c,b.proxy(this._fadeOnUpdate,this))},_fadeOnUpdate:function(){this.settings.fade===!0&&(this.fadeGotoSlideReference=this.gotoSlide,this.gotoSlide=this._fadeGotoSlide)},_fadeGotoSlide:function(a){if(a!==this.selectedSlideIndex)if(this.$slider.hasClass("sp-swiping"))this.fadeGotoSlideReference(a);else{var c,d,e=this,f=a;b.each(this.slides,function(a,b){var g=b.getIndex(),h=b.$slide;g===f?(h.css({opacity:0,left:0,top:0,"z-index":20}),c=h):g===e.selectedSlideIndex?(h.css({opacity:1,left:0,top:0,"z-index":10}),d=h):h.css("visibility","hidden")}),this.previousSlideIndex=this.selectedSlideIndex,this.selectedSlideIndex=a,e.settings.loop===!0&&e._updateSlidesOrder(),this._moveTo(this.visibleOffset,!0),this.settings.fadeOutPreviousSlide===!0&&this._fadeSlideTo(d,0),this._fadeSlideTo(c,1,function(){b.each(e.slides,function(a,b){var c=b.$slide;c.css({visibility:"",opacity:"","z-index":""})}),e._resetSlidesPosition(),e.trigger({type:"gotoSlideComplete",index:a,previousIndex:e.previousSlideIndex}),b.isFunction(e.settings.gotoSlideComplete)&&e.settings.gotoSlideComplete.call(e,{type:"gotoSlideComplete",index:a,previousIndex:e.previousSlideIndex})}),this.settings.autoHeight===!0&&this._resizeHeight(),this.trigger({type:"gotoSlide",index:a,previousIndex:this.previousSlideIndex}),b.isFunction(this.settings.gotoSlide)&&this.settings.gotoSlide.call(this,{type:"gotoSlide",index:a,previousIndex:this.previousSlideIndex})}},_fadeSlideTo:function(a,b,c){var d=this;"css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation?(setTimeout(function(){var c={opacity:b};c[d.vendorPrefix+"transition"]="opacity "+d.settings.fadeDuration/1e3+"s",a.css(c)},1),a.on(this.transitionEvent,function(b){b.target===b.currentTarget&&(a.off(d.transitionEvent),a.css(d.vendorPrefix+"transition",""),"function"==typeof c&&c())})):a.stop().animate({opacity:b},this.settings.fadeDuration,function(){"function"==typeof c&&c()})},destroyFade:function(){this.off("update."+c),null!==this.fadeGotoSlideReference&&(this.gotoSlide=this.fadeGotoSlideReference)},fadeDefaults:{fade:!1,fadeOutPreviousSlide:!0,fadeDuration:500}};b.SliderPro.addModule("Fade",d)}(window,jQuery),function(a,b){"use strict";var c="TouchSwipe."+b.SliderPro.namespace,d={isTouchSupport:!1,touchStartPoint:{x:0,y:0},touchEndPoint:{x:0,y:0},touchDistance:{x:0,y:0},touchStartPosition:0,isTouchMoving:!1,touchSwipeEvents:{startEvent:"",moveEvent:"",endEvent:""},initTouchSwipe:function(){this.settings.touchSwipe!==!1&&(this.isTouchSupport="ontouchstart"in a,this.isTouchSupport===!0?(this.touchSwipeEvents.startEvent="touchstart",this.touchSwipeEvents.moveEvent="touchmove",this.touchSwipeEvents.endEvent="touchend"):(this.touchSwipeEvents.startEvent="mousedown",this.touchSwipeEvents.moveEvent="mousemove",this.touchSwipeEvents.endEvent="mouseup"),this.$slidesMask.on(this.touchSwipeEvents.startEvent+"."+c,b.proxy(this._onTouchStart,this)),this.$slidesMask.on("dragstart."+c,function(a){a.preventDefault()}),this.$slidesMask.addClass("sp-grab"))},_onTouchStart:function(a){if(!(b(a.target).closest(".sp-selectable").length>=1)){var d=this.isTouchSupport?a.originalEvent.touches[0]:a.originalEvent;this.isTouchSupport===!1&&a.preventDefault(),b(a.target).parents(".sp-slide").find("a").one("click."+c,function(a){a.preventDefault()}),this.touchStartPoint.x=d.pageX||d.clientX,this.touchStartPoint.y=d.pageY||d.clientY,this.touchStartPosition=this.slidesPosition,this.touchDistance.x=this.touchDistance.y=0,this.$slides.hasClass("sp-animated")&&(this.isTouchMoving=!0,this._stopMovement(),this.touchStartPosition=this.slidesPosition),this.$slidesMask.on(this.touchSwipeEvents.moveEvent+"."+c,b.proxy(this._onTouchMove,this)),b(document).on(this.touchSwipeEvents.endEvent+"."+this.uniqueId+"."+c,b.proxy(this._onTouchEnd,this)),this.$slidesMask.removeClass("sp-grab").addClass("sp-grabbing"),this.$slider.addClass("sp-swiping")}},_onTouchMove:function(a){var b=this.isTouchSupport?a.originalEvent.touches[0]:a.originalEvent;this.isTouchMoving=!0,this.touchEndPoint.x=b.pageX||b.clientX,this.touchEndPoint.y=b.pageY||b.clientY,this.touchDistance.x=this.touchEndPoint.x-this.touchStartPoint.x,this.touchDistance.y=this.touchEndPoint.y-this.touchStartPoint.y;var c="horizontal"===this.settings.orientation?this.touchDistance.x:this.touchDistance.y,d="horizontal"===this.settings.orientation?this.touchDistance.y:this.touchDistance.x;Math.abs(c)>Math.abs(d)&&(a.preventDefault(),this.settings.loop===!1&&(this.slidesPosition>this.touchStartPosition&&0===this.selectedSlideIndex||this.slidesPosition<this.touchStartPosition&&this.selectedSlideIndex===this.getTotalSlides()-1)&&(c=.2*c),this._moveTo(this.touchStartPosition+c,!0))},_onTouchEnd:function(a){var d=this,e="horizontal"===this.settings.orientation?this.touchDistance.x:this.touchDistance.y;if(this.$slidesMask.off(this.touchSwipeEvents.moveEvent+"."+c),b(document).off(this.touchSwipeEvents.endEvent+"."+this.uniqueId+"."+c),this.$slidesMask.removeClass("sp-grabbing").addClass("sp-grab"),(this.isTouchMoving===!1||this.isTouchMoving===!0&&Math.abs(this.touchDistance.x)<10&&Math.abs(this.touchDistance.y)<10)&&(b(a.target).parents(".sp-slide").find("a").off("click."+c),this.$slider.removeClass("sp-swiping")),setTimeout(function(){d.$slider.removeClass("sp-swiping")},1),this.isTouchMoving!==!1){this.isTouchMoving=!1,b(a.target).parents(".sp-slide").one("click",function(a){a.preventDefault()});var f=-parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty),10)+this.visibleOffset;if(Math.abs(e)<this.settings.touchSwipeThreshold)this._moveTo(f);else{var g=e/(this.slideSize+this.settings.slideDistance);g=parseInt(g,10)+(g>0?1:-1);var h=this.slidesOrder[b.inArray(this.selectedSlideIndex,this.slidesOrder)-g];this.settings.loop===!0?this.gotoSlide(h):"undefined"!=typeof h?this.gotoSlide(h):this._moveTo(f)}}},destroyTouchSwipe:function(){this.$slidesMask.off(this.touchSwipeEvents.startEvent+"."+c),this.$slidesMask.off(this.touchSwipeEvents.moveEvent+"."+c),this.$slidesMask.off("dragstart."+c),b(document).off(this.touchSwipeEvents.endEvent+"."+this.uniqueId+"."+c),this.$slidesMask.removeClass("sp-grab")},touchSwipeDefaults:{touchSwipe:!0,touchSwipeThreshold:50}};b.SliderPro.addModule("TouchSwipe",d)}(window,jQuery),function(a,b){"use strict";var c="Caption."+b.SliderPro.namespace,d={$captionContainer:null,captionContent:"",initCaption:function(){this.on("update."+c,b.proxy(this._captionOnUpdate,this)),this.on("gotoSlide."+c,b.proxy(this._updateCaptionContent,this))},_captionOnUpdate:function(){this.$captionContainer=this.$slider.find(".sp-caption-container"),this.$slider.find(".sp-caption").length&&0===this.$captionContainer.length&&(this.$captionContainer=b('<div class="sp-caption-container"></div>').appendTo(this.$slider),this._updateCaptionContent()),this.$slides.find(".sp-caption").each(function(){b(this).css("display","none")})},_updateCaptionContent:function(){var a=this,b=this.$slider.find(".sp-slide").eq(this.selectedSlideIndex).find(".sp-caption"),c=0!==b.length?b.html():"";this.settings.fadeCaption===!0?""!==this.captionContent?(0===parseFloat(this.$captionContainer.css("opacity"),10)&&(this.$captionContainer.css(this.vendorPrefix+"transition",""),this.$captionContainer.css("opacity",1)),this._fadeCaptionTo(0,function(){a.captionContent=c,""!==c?(a.$captionContainer.html(a.captionContent),a._fadeCaptionTo(1)):a.$captionContainer.empty()})):(this.captionContent=c,this.$captionContainer.html(this.captionContent),this.$captionContainer.css("opacity",0),this._fadeCaptionTo(1)):(this.captionContent=c,this.$captionContainer.html(this.captionContent))},_fadeCaptionTo:function(a,b){var c=this;"css-3d"===this.supportedAnimation||"css-2d"===this.supportedAnimation?(setTimeout(function(){var b={opacity:a};b[c.vendorPrefix+"transition"]="opacity "+c.settings.captionFadeDuration/1e3+"s",c.$captionContainer.css(b)},1),this.$captionContainer.on(this.transitionEvent,function(a){a.target===a.currentTarget&&(c.$captionContainer.off(c.transitionEvent),c.$captionContainer.css(c.vendorPrefix+"transition",""),"function"==typeof b&&b())})):this.$captionContainer.stop().animate({opacity:a},this.settings.captionFadeDuration,function(){"function"==typeof b&&b()})},destroyCaption:function(){this.off("update."+c),this.off("gotoSlide."+c),this.$captionContainer.remove(),this.$slider.find(".sp-caption").each(function(){b(this).css("display","")})},captionDefaults:{fadeCaption:!0,captionFadeDuration:500}};b.SliderPro.addModule("Caption",d)}(window,jQuery),function(a,b){"use strict";var c="DeepLinking."+b.SliderPro.namespace,d={initDeepLinking:function(){var d=this,e=!0;this.on("init."+c,function(){d._gotoHash(a.location.hash)}),this.on("gotoSlide."+c,function(b){e=!1,d.settings.updateHash===!0&&(a.location.hash=d.$slider.attr("id")+"/"+b.index)}),b(a).on("hashchange."+this.uniqueId+"."+c,function(){e===!0&&d._gotoHash(a.location.hash),e=!0})},_parseHash:function(a){if(""!==a){a=a.substring(1);var b=a.split("/"),c=b.pop(),d=a.slice(0,-c.toString().length-1);if(this.$slider.attr("id")===d)return{sliderID:d,slideId:c}}return!1},_gotoHash:function(a){var b=this._parseHash(a);if(b!==!1){var c=b.slideId,d=parseInt(c,10);if(isNaN(d)){var e=this.$slider.find(".sp-slide#"+c).index();-1!==e&&this.gotoSlide(e)}else this.gotoSlide(d)}},destroyDeepLinking:function(){this.off("init."+c),this.off("gotoSlide."+c),b(a).off("hashchange."+this.uniqueId+"."+c)},deepLinkingDefaults:{updateHash:!1}};b.SliderPro.addModule("DeepLinking",d)}(window,jQuery),function(a,b){"use strict";var c="Autoplay."+b.SliderPro.namespace,d={autoplayTimer:null,isTimerRunning:!1,isTimerPaused:!1,initAutoplay:function(){this.on("update."+c,b.proxy(this._autoplayOnUpdate,this))},_autoplayOnUpdate:function(){this.settings.autoplay===!0?(this.on("gotoSlide."+c,b.proxy(this._autoplayOnGotoSlide,this)),this.on("mouseenter."+c,b.proxy(this._autoplayOnMouseEnter,this)),this.on("mouseleave."+c,b.proxy(this._autoplayOnMouseLeave,this)),this.startAutoplay()):(this.off("gotoSlide."+c),this.off("mouseenter."+c),this.off("mouseleave."+c),this.stopAutoplay())},_autoplayOnGotoSlide:function(){this.isTimerRunning===!0&&this.stopAutoplay(),this.isTimerPaused===!1&&this.startAutoplay()},_autoplayOnMouseEnter:function(){!this.isTimerRunning||"pause"!==this.settings.autoplayOnHover&&"stop"!==this.settings.autoplayOnHover||(this.stopAutoplay(),this.isTimerPaused=!0)},_autoplayOnMouseLeave:function(){this.settings.autoplay===!0&&this.isTimerRunning===!1&&"stop"!==this.settings.autoplayOnHover&&(this.startAutoplay(),this.isTimerPaused=!1)},startAutoplay:function(){var a=this;this.isTimerRunning=!0,this.autoplayTimer=setTimeout(function(){"normal"===a.settings.autoplayDirection?a.nextSlide():"backwards"===a.settings.autoplayDirection&&a.previousSlide()},this.settings.autoplayDelay)},stopAutoplay:function(){this.isTimerRunning=!1,clearTimeout(this.autoplayTimer)},destroyAutoplay:function(){clearTimeout(this.autoplayTimer),this.off("update."+c),this.off("gotoSlide."+c),this.off("mouseenter."+c),this.off("mouseleave."+c)},autoplayDefaults:{autoplay:!0,autoplayDelay:5e3,autoplayDirection:"normal",autoplayOnHover:"pause"}};b.SliderPro.addModule("Autoplay",d)}(window,jQuery),function(a,b){"use strict";var c="Keyboard."+b.SliderPro.namespace,d={initKeyboard:function(){var a=this,d=!1;this.settings.keyboard!==!1&&(this.$slider.on("focus."+c,function(){d=!0}),this.$slider.on("blur."+c,function(){d=!1}),b(document).on("keydown."+this.uniqueId+"."+c,function(b){(a.settings.keyboardOnlyOnFocus!==!0||d!==!1)&&(37===b.which?a.previousSlide():39===b.which?a.nextSlide():13===b.which&&a.$slider.find(".sp-slide").eq(a.selectedSlideIndex).find(".sp-image-container a")[0].click())}))},destroyKeyboard:function(){this.$slider.off("focus."+c),this.$slider.off("blur."+c),b(document).off("keydown."+this.uniqueId+"."+c)},keyboardDefaults:{keyboard:!0,keyboardOnlyOnFocus:!1}};b.SliderPro.addModule("Keyboard",d)}(window,jQuery),function(a,b){"use strict";var c="FullScreen."+b.SliderPro.namespace,d={isFullScreen:!1,$fullScreenButton:null,sizeBeforeFullScreen:{},initFullScreen:function(){(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&this.on("update."+c,b.proxy(this._fullScreenOnUpdate,this))},_fullScreenOnUpdate:function(){this.settings.fullScreen===!0&&null===this.$fullScreenButton?this._addFullScreen():this.settings.fullScreen===!1&&null!==this.$fullScreenButton&&this._removeFullScreen(),this.settings.fullScreen===!0&&(this.settings.fadeFullScreen===!0?this.$fullScreenButton.addClass("sp-fade-full-screen"):this.settings.fadeFullScreen===!1&&this.$fullScreenButton.removeClass("sp-fade-full-screen"))},_addFullScreen:function(){this.$fullScreenButton=b('<div class="sp-full-screen-button"></div>').appendTo(this.$slider),this.$fullScreenButton.on("click."+c,b.proxy(this._onFullScreenButtonClick,this)),document.addEventListener("fullscreenchange",b.proxy(this._onFullScreenChange,this)),document.addEventListener("mozfullscreenchange",b.proxy(this._onFullScreenChange,this)),document.addEventListener("webkitfullscreenchange",b.proxy(this._onFullScreenChange,this)),document.addEventListener("MSFullscreenChange",b.proxy(this._onFullScreenChange,this))},_removeFullScreen:function(){null!==this.$fullScreenButton&&(this.$fullScreenButton.off("click."+c),this.$fullScreenButton.remove(),this.$fullScreenButton=null,document.removeEventListener("fullscreenchange",this._onFullScreenChange),document.removeEventListener("mozfullscreenchange",this._onFullScreenChange),document.removeEventListener("webkitfullscreenchange",this._onFullScreenChange),document.removeEventListener("MSFullscreenChange",this._onFullScreenChange))
},_onFullScreenButtonClick:function(){this.isFullScreen===!1?this.instance.requestFullScreen?this.instance.requestFullScreen():this.instance.mozRequestFullScreen?this.instance.mozRequestFullScreen():this.instance.webkitRequestFullScreen?this.instance.webkitRequestFullScreen():this.instance.msRequestFullscreen&&this.instance.msRequestFullscreen():document.exitFullScreen?document.exitFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},_onFullScreenChange:function(){this.isFullScreen=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?!0:!1,this.isFullScreen===!0?(this.sizeBeforeFullScreen={forceSize:this.settings.forceSize,autoHeight:this.settings.autoHeight},this.$slider.addClass("sp-full-screen"),this.settings.forceSize="fullWindow",this.settings.autoHeight=!1):(this.$slider.css("margin",""),this.$slider.removeClass("sp-full-screen"),this.settings.forceSize=this.sizeBeforeFullScreen.forceSize,this.settings.autoHeight=this.sizeBeforeFullScreen.autoHeight),this.resize()},destroyFullScreen:function(){this.off("update."+c),this._removeFullScreen()},fullScreenDefaults:{fullScreen:!1,fadeFullScreen:!0}};b.SliderPro.addModule("FullScreen",d)}(window,jQuery),function(a,b){"use strict";var c="Buttons."+b.SliderPro.namespace,d={$buttons:null,initButtons:function(){this.on("update."+c,b.proxy(this._buttonsOnUpdate,this))},_buttonsOnUpdate:function(){this.$buttons=this.$slider.find(".sp-buttons"),this.settings.buttons===!0&&this.getTotalSlides()>1&&0===this.$buttons.length?this._createButtons():this.settings.buttons===!0&&this.getTotalSlides()!==this.$buttons.find(".sp-button").length&&0!==this.$buttons.length?this._adjustButtons():(this.settings.buttons===!1||this.getTotalSlides()<=1&&0!==this.$buttons.length)&&this._removeButtons()},_createButtons:function(){var a=this;this.$buttons=b('<div class="sp-buttons"></div>').appendTo(this.$slider);for(var d=0;d<this.getTotalSlides();d++)b('<div class="sp-button"></div>').appendTo(this.$buttons);this.$buttons.on("click."+c,".sp-button",function(){a.gotoSlide(b(this).index())}),this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button"),this.on("gotoSlide."+c,function(b){a.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"),a.$buttons.find(".sp-button").eq(b.index).addClass("sp-selected-button")}),this.$slider.addClass("sp-has-buttons")},_adjustButtons:function(){this.$buttons.empty();for(var a=0;a<this.getTotalSlides();a++)b('<div class="sp-button"></div>').appendTo(this.$buttons);this.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"),this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button")},_removeButtons:function(){this.$buttons.off("click."+c,".sp-button"),this.off("gotoSlide."+c),this.$buttons.remove(),this.$slider.removeClass("sp-has-buttons")},destroyButtons:function(){this._removeButtons(),this.off("update."+c)},buttonsDefaults:{buttons:!0}};b.SliderPro.addModule("Buttons",d)}(window,jQuery),function(a,b){"use strict";var c="Arrows."+b.SliderPro.namespace,d={$arrows:null,$previousArrow:null,$nextArrow:null,initArrows:function(){this.on("update."+c,b.proxy(this._arrowsOnUpdate,this)),this.on("gotoSlide."+c,b.proxy(this._checkArrowsVisibility,this))},_arrowsOnUpdate:function(){var a=this;this.settings.arrows===!0&&null===this.$arrows?(this.$arrows=b('<div class="sp-arrows"></div>').appendTo(this.$slidesContainer),this.$previousArrow=b('<div class="sp-arrow sp-previous-arrow"></div>').appendTo(this.$arrows),this.$nextArrow=b('<div class="sp-arrow sp-next-arrow"></div>').appendTo(this.$arrows),this.$previousArrow.on("click."+c,function(){a.previousSlide()}),this.$nextArrow.on("click."+c,function(){a.nextSlide()}),this._checkArrowsVisibility()):this.settings.arrows===!1&&null!==this.$arrows&&this._removeArrows(),this.settings.arrows===!0&&(this.settings.fadeArrows===!0?this.$arrows.addClass("sp-fade-arrows"):this.settings.fadeArrows===!1&&this.$arrows.removeClass("sp-fade-arrows"))},_checkArrowsVisibility:function(){this.settings.arrows!==!1&&this.settings.loop!==!0&&(0===this.selectedSlideIndex?this.$previousArrow.css("display","none"):this.$previousArrow.css("display","block"),this.selectedSlideIndex===this.getTotalSlides()-1?this.$nextArrow.css("display","none"):this.$nextArrow.css("display","block"))},_removeArrows:function(){null!==this.$arrows&&(this.$previousArrow.off("click."+c),this.$nextArrow.off("click."+c),this.$arrows.remove(),this.$arrows=null)},destroyArrows:function(){this._removeArrows(),this.off("update."+c),this.off("gotoSlide."+c)},arrowsDefaults:{arrows:!1,fadeArrows:!0}};b.SliderPro.addModule("Arrows",d)}(window,jQuery),function(a,b){"use strict";var c="ThumbnailTouchSwipe."+b.SliderPro.namespace,d={isThumbnailTouchSupport:!1,thumbnailTouchStartPoint:{x:0,y:0},thumbnailTouchEndPoint:{x:0,y:0},thumbnailTouchDistance:{x:0,y:0},thumbnailTouchStartPosition:0,isThumbnailTouchMoving:!1,isThumbnailTouchSwipe:!1,thumbnailTouchSwipeEvents:{startEvent:"",moveEvent:"",endEvent:""},initThumbnailTouchSwipe:function(){this.on("update."+c,b.proxy(this._thumbnailTouchSwipeOnUpdate,this))},_thumbnailTouchSwipeOnUpdate:function(){this.isThumbnailScroller!==!1&&(this.settings.thumbnailTouchSwipe===!0&&this.isThumbnailTouchSwipe===!1&&(this.isThumbnailTouchSwipe=!0,this.isThumbnailTouchSupport="ontouchstart"in a,this.isThumbnailTouchSupport===!0?(this.thumbnailTouchSwipeEvents.startEvent="touchstart",this.thumbnailTouchSwipeEvents.moveEvent="touchmove",this.thumbnailTouchSwipeEvents.endEvent="touchend"):(this.thumbnailTouchSwipeEvents.startEvent="mousedown",this.thumbnailTouchSwipeEvents.moveEvent="mousemove",this.thumbnailTouchSwipeEvents.endEvent="mouseup"),this.$thumbnails.on(this.thumbnailTouchSwipeEvents.startEvent+"."+c,b.proxy(this._onThumbnailTouchStart,this)),this.$thumbnails.on("dragstart."+c,function(a){a.preventDefault()}),this.$thumbnails.addClass("sp-grab")),b.each(this.thumbnails,function(a,b){b.off("thumbnailClick")}))},_onThumbnailTouchStart:function(a){if(!(b(a.target).closest(".sp-selectable").length>=1)){var d=this.isThumbnailTouchSupport?a.originalEvent.touches[0]:a.originalEvent;this.isThumbnailTouchSupport===!1&&a.preventDefault(),b(a.target).parents(".sp-thumbnail-container").find("a").one("click."+c,function(a){a.preventDefault()}),this.thumbnailTouchStartPoint.x=d.pageX||d.clientX,this.thumbnailTouchStartPoint.y=d.pageY||d.clientY,this.thumbnailTouchStartPosition=this.thumbnailsPosition,this.thumbnailTouchDistance.x=this.thumbnailTouchDistance.y=0,this.$thumbnails.hasClass("sp-animated")&&(this.isThumbnailTouchMoving=!0,this._stopThumbnailsMovement(),this.thumbnailTouchStartPosition=this.thumbnailsPosition),this.$thumbnails.on(this.thumbnailTouchSwipeEvents.moveEvent+"."+c,b.proxy(this._onThumbnailTouchMove,this)),b(document).on(this.thumbnailTouchSwipeEvents.endEvent+"."+this.uniqueId+"."+c,b.proxy(this._onThumbnailTouchEnd,this)),this.$thumbnails.removeClass("sp-grab").addClass("sp-grabbing"),this.$thumbnailsContainer.addClass("sp-swiping")}},_onThumbnailTouchMove:function(a){var b=this.isThumbnailTouchSupport?a.originalEvent.touches[0]:a.originalEvent;this.isThumbnailTouchMoving=!0,this.thumbnailTouchEndPoint.x=b.pageX||b.clientX,this.thumbnailTouchEndPoint.y=b.pageY||b.clientY,this.thumbnailTouchDistance.x=this.thumbnailTouchEndPoint.x-this.thumbnailTouchStartPoint.x,this.thumbnailTouchDistance.y=this.thumbnailTouchEndPoint.y-this.thumbnailTouchStartPoint.y;var c="horizontal"===this.thumbnailsOrientation?this.thumbnailTouchDistance.x:this.thumbnailTouchDistance.y,d="horizontal"===this.thumbnailsOrientation?this.thumbnailTouchDistance.y:this.thumbnailTouchDistance.x;if(Math.abs(c)>Math.abs(d)){if(a.preventDefault(),this.thumbnailsPosition>=0){var e=-this.thumbnailTouchStartPosition;c=e+.2*(c-e)}else if(this.thumbnailsPosition<=-this.thumbnailsSize+this.thumbnailsContainerSize){var f=this.thumbnailsSize-this.thumbnailsContainerSize+this.thumbnailTouchStartPosition;c=-f+.2*(c+f)}this._moveThumbnailsTo(this.thumbnailTouchStartPosition+c,!0)}},_onThumbnailTouchEnd:function(a){{var d=this;"horizontal"===this.thumbnailsOrientation?this.thumbnailTouchDistance.x:this.thumbnailTouchDistance.y}if(this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent+"."+c),b(document).off(this.thumbnailTouchSwipeEvents.endEvent+"."+this.uniqueId+"."+c),this.$thumbnails.removeClass("sp-grabbing").addClass("sp-grab"),this.isThumbnailTouchMoving===!1||this.isThumbnailTouchMoving===!0&&Math.abs(this.thumbnailTouchDistance.x)<10&&Math.abs(this.thumbnailTouchDistance.y)<10){var e=b(a.target).hasClass("sp-thumbnail-container")?b(a.target):b(a.target).parents(".sp-thumbnail-container"),f=e.index();return void(0!==b(a.target).parents("a").length?(b(a.target).parents("a").off("click."+c),this.$thumbnailsContainer.removeClass("sp-swiping")):f!==this.selectedThumbnailIndex&&-1!==f&&this.gotoSlide(f))}this.isThumbnailTouchMoving=!1,b(a.target).parents(".sp-thumbnail").one("click",function(a){a.preventDefault()}),setTimeout(function(){d.$thumbnailsContainer.removeClass("sp-swiping")},1),this.thumbnailsPosition>0?this._moveThumbnailsTo(0):this.thumbnailsPosition<this.thumbnailsContainerSize-this.thumbnailsSize&&this._moveThumbnailsTo(this.thumbnailsContainerSize-this.thumbnailsSize),this.trigger({type:"thumbnailsMoveComplete"}),b.isFunction(this.settings.thumbnailsMoveComplete)&&this.settings.thumbnailsMoveComplete.call(this,{type:"thumbnailsMoveComplete"})},destroyThumbnailTouchSwipe:function(){this.off("update."+c),this.isThumbnailScroller!==!1&&(this.$thumbnails.off(this.thumbnailTouchSwipeEvents.startEvent+"."+c),this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent+"."+c),this.$thumbnails.off("dragstart."+c),b(document).off(this.thumbnailTouchSwipeEvents.endEvent+"."+this.uniqueId+"."+c),this.$thumbnails.removeClass("sp-grab"))},thumbnailTouchSwipeDefaults:{thumbnailTouchSwipe:!0}};b.SliderPro.addModule("ThumbnailTouchSwipe",d)}(window,jQuery),function(a,b){"use strict";var c="ThumbnailArrows."+b.SliderPro.namespace,d={$thumbnailArrows:null,$previousThumbnailArrow:null,$nextThumbnailArrow:null,initThumbnailArrows:function(){var a=this;this.on("update."+c,b.proxy(this._thumbnailArrowsOnUpdate,this)),this.on("sliderResize."+c+" thumbnailsMoveComplete."+c,function(){a.isThumbnailScroller===!0&&a.settings.thumbnailArrows===!0&&a._checkThumbnailArrowsVisibility()})},_thumbnailArrowsOnUpdate:function(){var a=this;this.isThumbnailScroller!==!1&&(this.settings.thumbnailArrows===!0&&null===this.$thumbnailArrows?(this.$thumbnailArrows=b('<div class="sp-thumbnail-arrows"></div>').appendTo(this.$thumbnailsContainer),this.$previousThumbnailArrow=b('<div class="sp-thumbnail-arrow sp-previous-thumbnail-arrow"></div>').appendTo(this.$thumbnailArrows),this.$nextThumbnailArrow=b('<div class="sp-thumbnail-arrow sp-next-thumbnail-arrow"></div>').appendTo(this.$thumbnailArrows),this.$previousThumbnailArrow.on("click."+c,function(){var b=Math.min(0,a.thumbnailsPosition+a.thumbnailsContainerSize);a._moveThumbnailsTo(b)}),this.$nextThumbnailArrow.on("click."+c,function(){var b=Math.max(a.thumbnailsContainerSize-a.thumbnailsSize,a.thumbnailsPosition-a.thumbnailsContainerSize);a._moveThumbnailsTo(b)})):this.settings.thumbnailArrows===!1&&null!==this.$thumbnailArrows&&this._removeThumbnailArrows(),this.settings.thumbnailArrows===!0&&(this.settings.fadeThumbnailArrows===!0?this.$thumbnailArrows.addClass("sp-fade-thumbnail-arrows"):this.settings.fadeThumbnailArrows===!1&&this.$thumbnailArrows.removeClass("sp-fade-thumbnail-arrows"),this._checkThumbnailArrowsVisibility()))},_checkThumbnailArrowsVisibility:function(){0===this.thumbnailsPosition?this.$previousThumbnailArrow.css("display","none"):this.$previousThumbnailArrow.css("display","block"),this.thumbnailsPosition===this.thumbnailsContainerSize-this.thumbnailsSize?this.$nextThumbnailArrow.css("display","none"):this.$nextThumbnailArrow.css("display","block")},_removeThumbnailArrows:function(){null!==this.$thumbnailArrows&&(this.$previousThumbnailArrow.off("click."+c),this.$nextThumbnailArrow.off("click."+c),this.$thumbnailArrows.remove(),this.$thumbnailArrows=null)},destroyThumbnailArrows:function(){this._removeThumbnailArrows(),this.off("update."+c),this.off("sliderResize."+c),this.off("thumbnailsMoveComplete."+c)},thumbnailArrowsDefaults:{thumbnailArrows:!1,fadeThumbnailArrows:!0}};b.SliderPro.addModule("ThumbnailArrows",d)}(window,jQuery),function(a,b){"use strict";var c="Video."+b.SliderPro.namespace,d={initVideo:function(){this.on("update."+c,b.proxy(this._videoOnUpdate,this)),this.on("gotoSlideComplete."+c,b.proxy(this._videoOnGotoSlideComplete,this))},_videoOnUpdate:function(){var a=this;this.$slider.find(".sp-video").not("a, [data-init]").each(function(){var c=b(this);a._initVideo(c)}),this.$slider.find("a.sp-video").not("[data-preinit]").each(function(){var c=b(this);a._preinitVideo(c)})},_initVideo:function(a){var d=this;a.attr("data-init",!0).videoController(),a.on("videoPlay."+c,function(){"stopAutoplay"===d.settings.playVideoAction&&"undefined"!=typeof d.stopAutoplay&&(d.stopAutoplay(),d.settings.autoplay=!1);var c={type:"videoPlay",video:a};d.trigger(c),b.isFunction(d.settings.videoPlay)&&d.settings.videoPlay.call(d,c)}),a.on("videoPause."+c,function(){"startAutoplay"===d.settings.pauseVideoAction&&"undefined"!=typeof d.startAutoplay&&(d.startAutoplay(),d.settings.autoplay=!0);var c={type:"videoPause",video:a};d.trigger(c),b.isFunction(d.settings.videoPause)&&d.settings.videoPause.call(d,c)}),a.on("videoEnded."+c,function(){"startAutoplay"===d.settings.endVideoAction&&"undefined"!=typeof d.startAutoplay?(d.startAutoplay(),d.settings.autoplay=!0):"nextSlide"===d.settings.endVideoAction?d.nextSlide():"replayVideo"===d.settings.endVideoAction&&a.videoController("replay");var c={type:"videoEnd",video:a};d.trigger(c),b.isFunction(d.settings.videoEnd)&&d.settings.videoEnd.call(d,c)})},_preinitVideo:function(a){var d=this;a.attr("data-preinit",!0),a.on("click."+c,function(c){if(!d.$slider.hasClass("sp-swiping")){c.preventDefault();var e,f,g,h,i,j,k,l=a.attr("href"),m=a.children("img").attr("width"),n=a.children("img").attr("height");-1!==l.indexOf("youtube")||-1!==l.indexOf("youtu.be")?f="youtube":-1!==l.indexOf("vimeo")&&(f="vimeo"),g="youtube"===f?/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/:/http:\/\/(www\.)?vimeo.com\/(\d+)/,h=l.match(g),i=h[2],j="youtube"===f?"http://www.youtube.com/embed/"+i+"?enablejsapi=1&wmode=opaque":"http://player.vimeo.com/video/"+i+"?api=1",k=l.split("?")[1],"undefined"!=typeof k&&(k=k.split("&"),b.each(k,function(a,b){-1===b.indexOf(i)&&(j+="&"+b)})),e=b("<iframe></iframe>").attr({src:j,width:m,height:n,"class":a.attr("class"),frameborder:0}).insertBefore(a),d._initVideo(e),e.videoController("play"),a.css("display","none")}})},_videoOnGotoSlideComplete:function(a){var b=this.$slides.find(".sp-slide").eq(a.previousIndex).find(".sp-video[data-init]");if(-1!==a.previousIndex&&0!==b.length&&("stopVideo"===this.settings.leaveVideoAction?b.videoController("stop"):"pauseVideo"===this.settings.leaveVideoAction?b.videoController("pause"):"removeVideo"===this.settings.leaveVideoAction&&(0!==b.siblings("a.sp-video").length?(b.siblings("a.sp-video").css("display",""),b.videoController("destroy"),b.remove()):b.videoController("stop"))),"playVideo"===this.settings.reachVideoAction){var d=this.$slides.find(".sp-slide").eq(a.index).find(".sp-video[data-init]"),e=this.$slides.find(".sp-slide").eq(a.index).find(".sp-video[data-preinit]");0!==d.length?d.videoController("play"):0!==e.length&&e.trigger("click."+c)}},destroyVideo:function(){this.$slider.find(".sp-video[ data-preinit ]").each(function(){var a=b(this);a.removeAttr("data-preinit"),a.off("click."+c)}),this.$slider.find(".sp-video[ data-init ]").each(function(){var a=b(this);a.removeAttr("data-init"),a.off("Video"),a.videoController("destroy")}),this.off("update."+c),this.off("gotoSlideComplete."+c)},videoDefaults:{reachVideoAction:"none",leaveVideoAction:"pauseVideo",playVideoAction:"stopAutoplay",pauseVideoAction:"none",endVideoAction:"none",videoPlay:function(){},videoPause:function(){},videoEnd:function(){}}};b.SliderPro.addModule("Video",d)}(window,jQuery),function(a){"use strict";var b=window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0:!1,c=function(b,c){this.$video=a(b),this.options=c,this.settings={},this.player=null,this._init()};c.prototype={_init:function(){this.settings=a.extend({},this.defaults,this.options);var b=this,c=a.VideoController.players,d=this.$video.attr("id");for(var e in c)if("undefined"!=typeof c[e]&&c[e].isType(this.$video)){this.player=new c[e](this.$video);break}if(null!==this.player){var f=["ready","start","play","pause","ended"];a.each(f,function(c,e){var f="video"+e.charAt(0).toUpperCase()+e.slice(1);b.player.on(e,function(){b.trigger({type:f,video:d}),a.isFunction(b.settings[f])&&b.settings[f].call(b,{type:f,video:d})})})}},play:function(){b===!0&&this.player.isStarted()===!1||"playing"===this.player.getState()||this.player.play()},stop:function(){b===!0&&this.player.isStarted()===!1||"stopped"===this.player.getState()||this.player.stop()},pause:function(){b===!0&&this.player.isStarted()===!1||"paused"===this.player.getState()||this.player.pause()},replay:function(){(b!==!0||this.player.isStarted()!==!1)&&this.player.replay()},on:function(a,b){return this.$video.on(a,b)},off:function(a){return this.$video.off(a)},trigger:function(a){return this.$video.triggerHandler(a)},destroy:function(){this.player.isStarted()===!0&&this.stop(),this.player.off("ready"),this.player.off("start"),this.player.off("play"),this.player.off("pause"),this.player.off("ended"),this.$video.removeData("videoController")},defaults:{videoReady:function(){},videoStart:function(){},videoPlay:function(){},videoPause:function(){},videoEnded:function(){}}},a.VideoController={players:{},addPlayer:function(a,b){this.players[a]=b}},a.fn.videoController=function(b){var d=Array.prototype.slice.call(arguments,1);return this.each(function(){if("undefined"==typeof a(this).data("videoController")){var e=new c(this,b);a(this).data("videoController",e)}else if("undefined"!=typeof b){var f=a(this).data("videoController");"function"==typeof f[b]?f[b].apply(f,d):a.error(b+" does not exist in videoController.")}})};var d=function(b){this.$video=b,this.player=null,this.ready=!1,this.started=!1,this.state="",this.events=a({}),this._init()};d.prototype={_init:function(){},play:function(){},pause:function(){},stop:function(){},replay:function(){},isType:function(){},isReady:function(){return this.ready},isStarted:function(){return this.started},getState:function(){return this.state},on:function(a,b){return this.events.on(a,b)},off:function(a){return this.events.off(a)},trigger:function(a){return this.events.triggerHandler(a)}};var e={youtubeAPIAdded:!1,youtubeVideos:[]},f=function(b){this.init=!1;var c=window.YT&&window.YT.Player;if("undefined"!=typeof c)d.call(this,b);else if(e.youtubeVideos.push({video:b,scope:this}),e.youtubeAPIAdded===!1){e.youtubeAPIAdded=!0;var f=document.createElement("script");f.src="http://www.youtube.com/player_api";var g=document.getElementsByTagName("script")[0];g.parentNode.insertBefore(f,g),window.onYouTubePlayerAPIReady=function(){a.each(e.youtubeVideos,function(a,b){d.call(b.scope,b.video)})}}};f.prototype=new d,f.prototype.constructor=f,a.VideoController.addPlayer("YoutubeVideo",f),f.isType=function(a){if(a.is("iframe")){var b=a.attr("src");if(-1!==b.indexOf("youtube.com")||-1!==b.indexOf("youtu.be"))return!0}return!1},f.prototype._init=function(){this.init=!0,this._setup()},f.prototype._setup=function(){var a=this;this.player=new YT.Player(this.$video[0],{events:{onReady:function(){a.trigger({type:"ready"}),a.ready=!0},onStateChange:function(b){switch(b.data){case YT.PlayerState.PLAYING:a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"});break;case YT.PlayerState.PAUSED:a.state="paused",a.trigger({type:"pause"});break;case YT.PlayerState.ENDED:a.state="ended",a.trigger({type:"ended"})}}}})},f.prototype.play=function(){var a=this;if(this.ready===!0)this.player.playVideo();else var b=setInterval(function(){a.ready===!0&&(clearInterval(b),a.player.playVideo())},100)},f.prototype.pause=function(){b===!0?this.stop():this.player.pauseVideo()},f.prototype.stop=function(){this.player.seekTo(1),this.player.stopVideo(),this.state="stopped"},f.prototype.replay=function(){this.player.seekTo(1),this.player.playVideo()},f.prototype.on=function(a,b){var c=this;if(this.init===!0)d.prototype.on.call(this,a,b);else var e=setInterval(function(){c.init===!0&&(clearInterval(e),d.prototype.on.call(c,a,b))},100)};var g={vimeoAPIAdded:!1,vimeoVideos:[]},h=function(b){if(this.init=!1,"undefined"!=typeof window.Froogaloop)d.call(this,b);else if(g.vimeoVideos.push({video:b,scope:this}),g.vimeoAPIAdded===!1){g.vimeoAPIAdded=!0;var c=document.createElement("script");c.src="http://a.vimeocdn.com/js/froogaloop2.min.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(c,e);var f=setInterval(function(){"undefined"!=typeof window.Froogaloop&&(clearInterval(f),a.each(g.vimeoVideos,function(a,b){d.call(b.scope,b.video)}))},100)}};h.prototype=new d,h.prototype.constructor=h,a.VideoController.addPlayer("VimeoVideo",h),h.isType=function(a){if(a.is("iframe")){var b=a.attr("src");if(-1!==b.indexOf("vimeo.com"))return!0}return!1},h.prototype._init=function(){this.init=!0,this._setup()},h.prototype._setup=function(){var a=this;this.player=$f(this.$video[0]),this.player.addEvent("ready",function(){a.ready=!0,a.trigger({type:"ready"}),a.player.addEvent("play",function(){a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"})}),a.player.addEvent("pause",function(){a.state="paused",a.trigger({type:"pause"})}),a.player.addEvent("finish",function(){a.state="ended",a.trigger({type:"ended"})})})},h.prototype.play=function(){var a=this;if(this.ready===!0)this.player.api("play");else var b=setInterval(function(){a.ready===!0&&(clearInterval(b),a.player.api("play"))},100)},h.prototype.pause=function(){this.player.api("pause")},h.prototype.stop=function(){this.player.api("seekTo",0),this.player.api("pause"),this.state="stopped"},h.prototype.replay=function(){this.player.api("seekTo",0),this.player.api("play")},h.prototype.on=function(a,b){var c=this;if(this.init===!0)d.prototype.on.call(this,a,b);else var e=setInterval(function(){c.init===!0&&(clearInterval(e),d.prototype.on.call(c,a,b))},100)};var i=function(a){d.call(this,a)};i.prototype=new d,i.prototype.constructor=i,a.VideoController.addPlayer("HTML5Video",i),i.isType=function(a){return a.is("video")&&a.hasClass("video-js")===!1&&a.hasClass("sublime")===!1?!0:!1},i.prototype._init=function(){var a=this;this.player=this.$video[0],this.ready=!0,this.player.addEventListener("play",function(){a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"})}),this.player.addEventListener("pause",function(){a.state="paused",a.trigger({type:"pause"})}),this.player.addEventListener("ended",function(){a.state="ended",a.trigger({type:"ended"})})},i.prototype.play=function(){this.player.play()},i.prototype.pause=function(){this.player.pause()},i.prototype.stop=function(){this.player.currentTime=0,this.player.pause(),this.state="stopped"},i.prototype.replay=function(){this.player.currentTime=0,this.player.play()};var j=function(a){d.call(this,a)};j.prototype=new d,j.prototype.constructor=j,a.VideoController.addPlayer("VideoJSVideo",j),j.isType=function(a){return"undefined"==typeof a.attr("data-videojs-id")&&!a.hasClass("video-js")||"undefined"==typeof videojs?!1:!0},j.prototype._init=function(){var a=this,b=this.$video.attr(this.$video.hasClass("video-js")?"id":"data-videojs-id");this.player=videojs(b),this.player.ready(function(){a.ready=!0,a.trigger({type:"ready"}),a.player.on("play",function(){a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"})}),a.player.on("pause",function(){a.state="paused",a.trigger({type:"pause"})}),a.player.on("ended",function(){a.state="ended",a.trigger({type:"ended"})})})},j.prototype.play=function(){this.player.play()},j.prototype.pause=function(){this.player.pause()},j.prototype.stop=function(){this.player.currentTime(0),this.player.pause(),this.state="stopped"},j.prototype.replay=function(){this.player.currentTime(0),this.player.play()};var k=function(a){d.call(this,a)};k.prototype=new d,k.prototype.constructor=k,a.VideoController.addPlayer("SublimeVideo",k),k.isType=function(a){return a.hasClass("sublime")&&"undefined"!=typeof sublime?!0:!1},k.prototype._init=function(){var a=this;sublime.ready(function(){a.player=sublime.player(a.$video.attr("id")),a.ready=!0,a.trigger({type:"ready"}),a.player.on("play",function(){a.started===!1&&(a.started=!0,a.trigger({type:"start"})),a.state="playing",a.trigger({type:"play"})}),a.player.on("pause",function(){a.state="paused",a.trigger({type:"pause"})}),a.player.on("stop",function(){a.state="stopped",a.trigger({type:"stop"})}),a.player.on("end",function(){a.state="ended",a.trigger({type:"ended"})})})},k.prototype.play=function(){this.player.play()},k.prototype.pause=function(){this.player.pause()},k.prototype.stop=function(){this.player.stop()},k.prototype.replay=function(){this.player.stop(),this.player.play()};var l=function(a){d.call(this,a)};l.prototype=new d,l.prototype.constructor=l,a.VideoController.addPlayer("JWPlayerVideo",l),l.isType=function(a){return"undefined"==typeof a.attr("data-jwplayer-id")&&!a.hasClass("jwplayer")&&0===a.find("object[data*='jwplayer']").length||"undefined"==typeof jwplayer?!1:!0},l.prototype._init=function(){var a,b=this;this.$video.hasClass("jwplayer")?a=this.$video.attr("id"):"undefined"!=typeof this.$video.attr("data-jwplayer-id")?a=this.$video.attr("data-jwplayer-id"):0!==this.$video.find("object[data*='jwplayer']").length&&(a=this.$video.find("object").attr("id")),this.player=jwplayer(a),this.player.onReady(function(){b.ready=!0,b.trigger({type:"ready"}),b.player.onPlay(function(){b.started===!1&&(b.started=!0,b.trigger({type:"start"})),b.state="playing",b.trigger({type:"play"})}),b.player.onPause(function(){b.state="paused",b.trigger({type:"pause"})}),b.player.onComplete(function(){b.state="ended",b.trigger({type:"ended"})})})},l.prototype.play=function(){this.player.play(!0)},l.prototype.pause=function(){this.player.pause(!0)},l.prototype.stop=function(){this.player.stop(),this.state="stopped"},l.prototype.replay=function(){this.player.seek(0),this.player.play(!0)}}(jQuery);

/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 28.03.2013
*********************************************/

/*!
 * jQuery Transit - CSS3 transitions and transformations
 * Copyright(c) 2011 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */

/*!
jQuery WaitForImages

Copyright (c) 2012 Alex Dickson

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


https://github.com/alexanderdickson/waitForImages


 */

// WAIT FOR IMAGES
/*
 * waitForImages 1.4
 * -----------------
 * Provides a callback when all images have loaded in your given selector.
 * http://www.alexanderdickson.com/
 *
 *
 * Copyright (c) 2011 Alex Dickson
 * Licensed under the MIT licenses.
 * See website for more info.
 *
 */

// EASINGS

/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(jQuery) {
  jQuery.transit = {
    version: "0.9.9",

    // Map of jQuery.css() keys to values for 'transitionProperty'.
    // See https://developer.mozilla.org/en/CSS/CSS_transitions#Properties_that_can_be_animated
    propertyMap: {
      marginLeft    : 'margin',
      marginRight   : 'margin',
      marginBottom  : 'margin',
      marginTop     : 'margin',
      paddingLeft   : 'padding',
      paddingRight  : 'padding',
      paddingBottom : 'padding',
      paddingTop    : 'padding'
    },

    // Will simply transition "instantly" if false
    enabled: true,

    // Set this to false if you don't want to use the transition end property.
    useTransitionEnd: false
  };

  var div = document.createElement('div');
  var support = {};

  // Helper function to get the proper vendor property name.
  // (`transition` => `WebkitTransition`)
  function getVendorPropertyName(prop) {
    // Handle unprefixed versions (FF16+, for example)
    if (prop in div.style) return prop;

    var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
    var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

    if (prop in div.style) { return prop; }

    for (var i=0; i<prefixes.length; ++i) {
      var vendorProp = prefixes[i] + prop_;
      if (vendorProp in div.style) { return vendorProp; }
    }
  }

  // Helper function to check if transform3D is supported.
  // Should return true for Webkits and Firefox 10+.
  function checkTransform3dSupport() {
    div.style[support.transform] = '';
    div.style[support.transform] = 'rotateY(90deg)';
    return div.style[support.transform] !== '';
  }

  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  // Check for the browser's transitions support.
  support.transition      = getVendorPropertyName('transition');
  support.transitionDelay = getVendorPropertyName('transitionDelay');
  support.transform       = getVendorPropertyName('transform');
  support.transformOrigin = getVendorPropertyName('transformOrigin');
  support.transform3d     = checkTransform3dSupport();

  var eventNames = {
    'transition':       'transitionEnd',
    'MozTransition':    'transitionend',
    'OTransition':      'oTransitionEnd',
    'WebkitTransition': 'webkitTransitionEnd',
    'msTransition':     'MSTransitionEnd'
  };

  // Detect the 'transitionend' event needed.
  var transitionEnd = support.transitionEnd = eventNames[support.transition] || null;

  // Populate jQuery's `jQuery.support` with the vendor prefixes we know.
  // As per [jQuery's cssHooks documentation](http://api.jquery.com/jQuery.cssHooks/),
  // we set jQuery.support.transition to a string of the actual property name used.
  for (var key in support) {
    if (support.hasOwnProperty(key) && typeof jQuery.support[key] === 'undefined') {
      jQuery.support[key] = support[key];
    }
  }

  // Avoid memory leak in IE.
  div = null;

  // ## jQuery.cssEase
  // List of easing aliases that you can use with `jQuery.fn.transition`.
  jQuery.cssEase = {
    '_default':       'ease',
    'in':             'ease-in',
    'out':            'ease-out',
    'in-out':         'ease-in-out',
    'snap':           'cubic-bezier(0,1,.5,1)',
    // Penner equations
    'easeInCubic':    'cubic-bezier(.55, .055, .675, .19)',
    'easeOutCubic':   'cubic-bezier(.215,.61,.355,1)',
    'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
    'easeInCirc':     'cubic-bezier(.6,.04,.98,.335)',
    'easeOutCirc':    'cubic-bezier(.075,.82,.165,1)',
    'easeInOutCirc':  'cubic-bezier(.785,.135,.15,.86)',
    'easeInExpo':     'cubic-bezier(.95,.05,.795,.035)',
    'easeOutExpo':    'cubic-bezier(.19,1,.22,1)',
    'easeInOutExpo':  'cubic-bezier(1,0,0,1)',
    'easeInQuad':     'cubic-bezier(.55,.085,.68,.53)',
    'easeOutQuad':    'cubic-bezier(.25,.46,.45,.94)',
    'easeInOutQuad':  'cubic-bezier(.455,.03,.515,.955)',
    'easeInQuart':    'cubic-bezier(.895,.03,.685,.22)',
    'easeOutQuart':   'cubic-bezier(.165,.84,.44,1)',
    'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
    'easeInQuint':    'cubic-bezier(.755,.05,.855,.06)',
    'easeOutQuint':   'cubic-bezier(.23,1,.32,1)',
    'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
    'easeInSine':     'cubic-bezier(.47,0,.745,.715)',
    'easeOutSine':    'cubic-bezier(.39,.575,.565,1)',
    'easeInOutSine':  'cubic-bezier(.445,.05,.55,.95)',
    'easeInBack':     'cubic-bezier(.6,-.28,.735,.045)',
    'easeOutBack':    'cubic-bezier(.175, .885,.32,1.275)',
    'easeInOutBack':  'cubic-bezier(.68,-.55,.265,1.55)'
  };

  // ## 'transform' CSS hook
  // Allows you to use the `transform` property in CSS.
  //
  //     jQuery("#hello").css({ transform: "rotate(90deg)" });
  //
  //     jQuery("#hello").css('transform');
  //     //=> { rotate: '90deg' }
  //
  jQuery.cssHooks['transit:transform'] = {
    // The getter returns a `Transform` object.
    get: function(elem) {
      return jQuery(elem).data('transform') || new Transform();
    },

    // The setter accepts a `Transform` object or a string.
    set: function(elem, v) {
      var value = v;

      if (!(value instanceof Transform)) {
        value = new Transform(value);
      }

      // We've seen the 3D version of Scale() not work in Chrome when the
      // element being scaled extends outside of the viewport.  Thus, we're
      // forcing Chrome to not use the 3d transforms as well.  Not sure if
      // translate is affectede, but not risking it.  Detection code from
      // http://davidwalsh.name/detecting-google-chrome-javascript
      if (support.transform === 'WebkitTransform' && !isChrome) {
        elem.style[support.transform] = value.toString(true);
      } else {
        elem.style[support.transform] = value.toString();
      }

      jQuery(elem).data('transform', value);
    }
  };

  // Add a CSS hook for `.css({ transform: '...' })`.
  // In jQuery 1.8+, this will intentionally override the default `transform`
  // CSS hook so it'll play well with Transit. (see issue #62)
  jQuery.cssHooks.transform = {
    set: jQuery.cssHooks['transit:transform'].set
  };

  // jQuery 1.8+ supports prefix-free transitions, so these polyfills will not
  // be necessary.
  if (jQuery.fn.jquery < "1.8") {
    // ## 'transformOrigin' CSS hook
    // Allows the use for `transformOrigin` to define where scaling and rotation
    // is pivoted.
    //
    //     jQuery("#hello").css({ transformOrigin: '0 0' });
    //
    jQuery.cssHooks.transformOrigin = {
      get: function(elem) {
        return elem.style[support.transformOrigin];
      },
      set: function(elem, value) {
        elem.style[support.transformOrigin] = value;
      }
    };

    // ## 'transition' CSS hook
    // Allows you to use the `transition` property in CSS.
    //
    //     jQuery("#hello").css({ transition: 'all 0 ease 0' });
    //
    jQuery.cssHooks.transition = {
      get: function(elem) {
        return elem.style[support.transition];
      },
      set: function(elem, value) {
        elem.style[support.transition] = value;
      }
    };
  }

  // ## Other CSS hooks
  // Allows you to rotate, scale and translate.
  registerCssHook('scale');
  registerCssHook('translate');
  registerCssHook('rotate');
  registerCssHook('rotateX');
  registerCssHook('rotateY');
  registerCssHook('rotate3d');
  registerCssHook('perspective');
  registerCssHook('skewX');
  registerCssHook('skewY');
  registerCssHook('x', true);
  registerCssHook('y', true);

  // ## Transform class
  // This is the main class of a transformation property that powers
  // `jQuery.fn.css({ transform: '...' })`.
  //
  // This is, in essence, a dictionary object with key/values as `-transform`
  // properties.
  //
  //     var t = new Transform("rotate(90) scale(4)");
  //
  //     t.rotate             //=> "90deg"
  //     t.scale              //=> "4,4"
  //
  // Setters are accounted for.
  //
  //     t.set('rotate', 4)
  //     t.rotate             //=> "4deg"
  //
  // Convert it to a CSS string using the `toString()` and `toString(true)` (for WebKit)
  // functions.
  //
  //     t.toString()         //=> "rotate(90deg) scale(4,4)"
  //     t.toString(true)     //=> "rotate(90deg) scale3d(4,4,0)" (WebKit version)
  //
  function Transform(str) {
    if (typeof str === 'string') { this.parse(str); }
    return this;
  }

  Transform.prototype = {
    // ### setFromString()
    // Sets a property from a string.
    //
    //     t.setFromString('scale', '2,4');
    //     // Same as set('scale', '2', '4');
    //
    setFromString: function(prop, val) {
      var args =
        (typeof val === 'string')  ? val.split(',') :
        (val.constructor === Array) ? val :
        [ val ];

      args.unshift(prop);

      Transform.prototype.set.apply(this, args);
    },

    // ### set()
    // Sets a property.
    //
    //     t.set('scale', 2, 4);
    //
    set: function(prop) {
      var args = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[prop]) {
        this.setter[prop].apply(this, args);
      } else {
        this[prop] = args.join(',');
      }
    },

    get: function(prop) {
      if (this.getter[prop]) {
        return this.getter[prop].apply(this);
      } else {
        return this[prop] || 0;
      }
    },

    setter: {
      // ### rotate
      //
      //     .css({ rotate: 30 })
      //     .css({ rotate: "30" })
      //     .css({ rotate: "30deg" })
      //     .css({ rotate: "30deg" })
      //
      rotate: function(theta) {
        this.rotate = unit(theta, 'deg');
      },

      rotateX: function(theta) {
        this.rotateX = unit(theta, 'deg');
      },

      rotateY: function(theta) {
        this.rotateY = unit(theta, 'deg');
      },

      // ### scale
      //
      //     .css({ scale: 9 })      //=> "scale(9,9)"
      //     .css({ scale: '3,2' })  //=> "scale(3,2)"
      //
      scale: function(x, y) {
        if (y === undefined) { y = x; }
        this.scale = x + "," + y;
      },

      // ### skewX + skewY
      skewX: function(x) {
        this.skewX = unit(x, 'deg');
      },

      skewY: function(y) {
        this.skewY = unit(y, 'deg');
      },

      // ### perspectvie
      perspective: function(dist) {
        this.perspective = unit(dist, 'px');
      },

      // ### x / y
      // Translations. Notice how this keeps the other value.
      //
      //     .css({ x: 4 })       //=> "translate(4px, 0)"
      //     .css({ y: 10 })      //=> "translate(4px, 10px)"
      //
      x: function(x) {
        this.set('translate', x, null);
      },

      y: function(y) {
        this.set('translate', null, y);
      },

      // ### translate
      // Notice how this keeps the other value.
      //
      //     .css({ translate: '2, 5' })    //=> "translate(2px, 5px)"
      //
      translate: function(x, y) {
        if (this._translateX === undefined) { this._translateX = 0; }
        if (this._translateY === undefined) { this._translateY = 0; }

        if (x !== null && x !== undefined) { this._translateX = unit(x, 'px'); }
        if (y !== null && y !== undefined) { this._translateY = unit(y, 'px'); }

        this.translate = this._translateX + "," + this._translateY;
      }
    },

    getter: {
      x: function() {
        return this._translateX || 0;
      },

      y: function() {
        return this._translateY || 0;
      },

      scale: function() {
        var s = (this.scale || "1,1").split(',');
        if (s[0]) { s[0] = parseFloat(s[0]); }
        if (s[1]) { s[1] = parseFloat(s[1]); }

        // "2.5,2.5" => 2.5
        // "2.5,1" => [2.5,1]
        return (s[0] === s[1]) ? s[0] : s;
      },

      rotate3d: function() {
        var s = (this.rotate3d || "0,0,0,0deg").split(',');
        for (var i=0; i<=3; ++i) {
          if (s[i]) { s[i] = parseFloat(s[i]); }
        }
        if (s[3]) { s[3] = unit(s[3], 'deg'); }

        return s;
      }
    },

    // ### parse()
    // Parses from a string. Called on constructor.
    parse: function(str) {
      var self = this;
      str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(x, prop, val) {
        self.setFromString(prop, val);
      });
    },

    // ### toString()
    // Converts to a `transition` CSS property string. If `use3d` is given,
    // it converts to a `-webkit-transition` CSS property string instead.
    toString: function(use3d) {
      var re = [];

      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          // Don't use 3D transformations if the browser can't support it.
          if ((!support.transform3d) && (
            (i === 'rotateX') ||
            (i === 'rotateY') ||
            (i === 'perspective') ||
            (i === 'transformOrigin'))) { continue; }

          if (i[0] !== '_') {
            if (use3d && (i === 'scale')) {
              re.push(i + "3d(" + this[i] + ",1)");
            } else if (use3d && (i === 'translate')) {
              re.push(i + "3d(" + this[i] + ",0)");
            } else {
              re.push(i + "(" + this[i] + ")");
            }
          }
        }
      }

      return re.join(" ");
    }
  };

  function callOrQueue(self, queue, fn) {
    if (queue === true) {
      self.queue(fn);
    } else if (queue) {
      self.queue(queue, fn);
    } else {
      fn();
    }
  }

  // ### getProperties(dict)
  // Returns properties (for `transition-property`) for dictionary `props`. The
  // value of `props` is what you would expect in `jQuery.css(...)`.
  function getProperties(props) {
    var re = [];

    jQuery.each(props, function(key) {
      key = jQuery.camelCase(key); // Convert "text-align" => "textAlign"
      key = jQuery.transit.propertyMap[key] || jQuery.cssProps[key] || key;
      key = uncamel(key); // Convert back to dasherized

      if (jQuery.inArray(key, re) === -1) { re.push(key); }
    });

    return re;
  }

  // ### getTransition()
  // Returns the transition string to be used for the `transition` CSS property.
  //
  // Example:
  //
  //     getTransition({ opacity: 1, rotate: 30 }, 500, 'ease');
  //     //=> 'opacity 500ms ease, -webkit-transform 500ms ease'
  //
  function getTransition(properties, duration, easing, delay) {
    // Get the CSS properties needed.
    var props = getProperties(properties);

    // Account for aliases (`in` => `ease-in`).
    if (jQuery.cssEase[easing]) { easing = jQuery.cssEase[easing]; }

    // Build the duration/easing/delay attributes for it.
    var attribs = '' + toMS(duration) + ' ' + easing;
    if (parseInt(delay, 10) > 0) { attribs += ' ' + toMS(delay); }

    // For more properties, add them this way:
    // "margin 200ms ease, padding 200ms ease, ..."
    var transitions = [];
    jQuery.each(props, function(i, name) {
      transitions.push(name + ' ' + attribs);
    });

    return transitions.join(', ');
  }

  // ## jQuery.fn.transition
  // Works like jQuery.fn.animate(), but uses CSS transitions.
  //
  //     jQuery("...").transition({ opacity: 0.1, scale: 0.3 });
  //
  //     // Specific duration
  //     jQuery("...").transition({ opacity: 0.1, scale: 0.3 }, 500);
  //
  //     // With duration and easing
  //     jQuery("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in');
  //
  //     // With callback
  //     jQuery("...").transition({ opacity: 0.1, scale: 0.3 }, function() { ... });
  //
  //     // With everything
  //     jQuery("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in', function() { ... });
  //
  //     // Alternate syntax
  //     jQuery("...").transition({
  //       opacity: 0.1,
  //       duration: 200,
  //       delay: 40,
  //       easing: 'in',
  //       complete: function() { /* ... */ }
  //      });
  //
  jQuery.fn.transition = jQuery.fn.transit = function(properties, duration, easing, callback) {
    var self  = this;
    var delay = 0;
    var queue = true;

    var theseProperties = jQuery.extend(true, {}, properties);

    // Account for `.transition(properties, callback)`.
    if (typeof duration === 'function') {
      callback = duration;
      duration = undefined;
    }

    // Account for `.transition(properties, options)`.
    if (typeof duration === 'object') {
      easing = duration.easing;
      delay = duration.delay || 0;
      queue = duration.queue || true;
      callback = duration.complete;
      duration = duration.duration;
    }

    // Account for `.transition(properties, duration, callback)`.
    if (typeof easing === 'function') {
      callback = easing;
      easing = undefined;
    }

    // Alternate syntax.
    if (typeof theseProperties.easing !== 'undefined') {
      easing = theseProperties.easing;
      delete theseProperties.easing;
    }

    if (typeof theseProperties.duration !== 'undefined') {
      duration = theseProperties.duration;
      delete theseProperties.duration;
    }

    if (typeof theseProperties.complete !== 'undefined') {
      callback = theseProperties.complete;
      delete theseProperties.complete;
    }

    if (typeof theseProperties.queue !== 'undefined') {
      queue = theseProperties.queue;
      delete theseProperties.queue;
    }

    if (typeof theseProperties.delay !== 'undefined') {
      delay = theseProperties.delay;
      delete theseProperties.delay;
    }

    // Set defaults. (`400` duration, `ease` easing)
    if (typeof duration === 'undefined') { duration = jQuery.fx.speeds._default; }
    if (typeof easing === 'undefined')   { easing = jQuery.cssEase._default; }

    duration = toMS(duration);

    // Build the `transition` property.
    var transitionValue = getTransition(theseProperties, duration, easing, delay);

    // Compute delay until callback.
    // If this becomes 0, don't bother setting the transition property.
    var work = jQuery.transit.enabled && support.transition;
    var i = work ? (parseInt(duration, 10) + parseInt(delay, 10)) : 0;

    // If there's nothing to do...
    if (i === 0) {
      var fn = function(next) {
        self.css(theseProperties);
        if (callback) { callback.apply(self); }
        if (next) { next(); }
      };

      callOrQueue(self, queue, fn);
      return self;
    }

    // Save the old transitions of each element so we can restore it later.
    var oldTransitions = {};

    var run = function(nextCall) {
      var bound = false;

      // Prepare the callback.
      var cb = function() {
        if (bound) { self.unbind(transitionEnd, cb); }

        if (i > 0) {
          self.each(function() {
            this.style[support.transition] = (oldTransitions[this] || null);
          });
        }

        if (typeof callback === 'function') { callback.apply(self); }
        if (typeof nextCall === 'function') { nextCall(); }
      };

      if ((i > 0) && (transitionEnd) && (jQuery.transit.useTransitionEnd)) {
        // Use the 'transitionend' event if it's available.
        bound = true;
        self.bind(transitionEnd, cb);
      } else {
        // Fallback to timers if the 'transitionend' event isn't supported.
        window.setTimeout(cb, i);
      }

      // Apply transitions.
      self.each(function() {
        if (i > 0) {
          this.style[support.transition] = transitionValue;
        }
        jQuery(this).css(properties);
      });
    };

    // Defer running. This allows the browser to paint any pending CSS it hasn't
    // painted yet before doing the transitions.
    var deferredRun = function(next) {
        this.offsetWidth; // force a repaint
        run(next);
    };

    // Use jQuery's fx queue.
    callOrQueue(self, queue, deferredRun);

    // Chainability.
    return this;
  };

  function registerCssHook(prop, isPixels) {
    // For certain properties, the 'px' should not be implied.
    if (!isPixels) { jQuery.cssNumber[prop] = true; }

    jQuery.transit.propertyMap[prop] = support.transform;

    jQuery.cssHooks[prop] = {
      get: function(elem) {
        var t = jQuery(elem).css('transit:transform');
        return t.get(prop);
      },

      set: function(elem, value) {
        var t = jQuery(elem).css('transit:transform');
        t.setFromString(prop, value);

        jQuery(elem).css({ 'transit:transform': t });
      }
    };

  }

  // ### uncamel(str)
  // Converts a camelcase string to a dasherized string.
  // (`marginLeft` => `margin-left`)
  function uncamel(str) {
    return str.replace(/([A-Z])/g, function(letter) { return '-' + letter.toLowerCase(); });
  }

  // ### unit(number, unit)
  // Ensures that number `number` has a unit. If no unit is found, assume the
  // default is `unit`.
  //
  //     unit(2, 'px')          //=> "2px"
  //     unit("30deg", 'rad')   //=> "30deg"
  //
  function unit(i, units) {
    if ((typeof i === "string") && (!i.match(/^[\-0-9\.]+$/))) {
      return i;
    } else {
      return "" + i + units;
    }
  }

  // ### toMS(duration)
  // Converts given `duration` to a millisecond string.
  //
  // toMS('fast') => jQuery.fx.speeds[i] => "200ms"
  // toMS('normal') //=> jQuery.fx.speeds._default => "400ms"
  // toMS(10) //=> '10ms'
  // toMS('100ms') //=> '100ms'
  //
  function toMS(duration) {
    var i = duration;

    // Allow string durations like 'fast' and 'slow', without overriding numeric values.
    if (typeof i === 'string' && (!i.match(/^[\-0-9\.]+/))) { i = jQuery.fx.speeds[i] || jQuery.fx.speeds._default; }

    return unit(i, 'ms');
  }

  // Export some functions for testable-ness.
  jQuery.transit.getTransitionValue = getTransition;
})(jQuery);

(function(e,t){
	jQuery.easing["jswing"]=jQuery.easing["swing"];
	jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}});
					e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};
					e.fn.swipe=function(t){if(!this)return false;var n={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var r="left";var i="right";var s="up";var o="down";var u="none";var f="horizontal";var l="vertical";var c="auto";var h="start";var p="move";var d="end";var v="cancel";var m="ontouchstart"in window,g=m?"touchstart":"mousedown",y=m?"touchmove":"mousemove",b=m?"touchend":"mouseup",w="touchcancel";var E="start";if(t.allowPageScroll==undefined&&(t.swipe!=undefined||t.swipeStatus!=undefined))t.allowPageScroll=u;if(t)e.extend(n,t);return this.each(function(){function t(){var e=S();if(e<=45&&e>=0)return r;else if(e<=360&&e>=315)return r;else if(e>=135&&e<=225)return i;else if(e>45&&e<135)return o;else return s}function S(){var e=H.x-B.x;var t=B.y-H.y;var n=Math.atan2(t,e);var r=Math.round(n*180/Math.PI);if(r<0)r=360-Math.abs(r);return r}function x(){return Math.round(Math.sqrt(Math.pow(B.x-H.x,2)+Math.pow(B.y-H.y,2)))}function T(e,t){if(n.allowPageScroll==u){e.preventDefault()}else{var a=n.allowPageScroll==c;switch(t){case r:if(n.swipeLeft&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case i:if(n.swipeRight&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case s:if(n.swipeUp&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break;case o:if(n.swipeDown&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break}}}function N(e,t){if(n.swipeStatus)n.swipeStatus.call(_,e,t,direction||null,distance||0);if(t==v){if(n.click&&(P==1||!m)&&(isNaN(distance)||distance==0))n.click.call(_,e,e.target)}if(t==d){if(n.swipe){n.swipe.call(_,e,direction,distance)}switch(direction){case r:if(n.swipeLeft)n.swipeLeft.call(_,e,direction,distance);break;case i:if(n.swipeRight)n.swipeRight.call(_,e,direction,distance);break;case s:if(n.swipeUp)n.swipeUp.call(_,e,direction,distance);break;case o:if(n.swipeDown)n.swipeDown.call(_,e,direction,distance);break}}}function C(e){P=0;H.x=0;H.y=0;B.x=0;B.y=0;F.x=0;F.y=0}function L(e){e.preventDefault();distance=x();direction=t();if(n.triggerOnTouchEnd){E=d;if((P==n.fingers||!m)&&B.x!=0){if(distance>=n.threshold){N(e,E);C(e)}else{E=v;N(e,E);C(e)}}else{E=v;N(e,E);C(e)}}else if(E==p){E=v;N(e,E);C(e)}M.removeEventListener(y,A,false);M.removeEventListener(b,L,false)}function A(e){if(E==d||E==v)return;var r=m?e.touches[0]:e;B.x=r.pageX;B.y=r.pageY;direction=t();if(m){P=e.touches.length}E=p;T(e,direction);if(P==n.fingers||!m){distance=x();if(n.swipeStatus)N(e,E,direction,distance);if(!n.triggerOnTouchEnd){if(distance>=n.threshold){E=d;N(e,E);C(e)}}}else{E=v;N(e,E);C(e)}}function O(e){var t=m?e.touches[0]:e;E=h;if(m){P=e.touches.length}distance=0;direction=null;if(P==n.fingers||!m){H.x=B.x=t.pageX;H.y=B.y=t.pageY;if(n.swipeStatus)N(e,E)}else{C(e)}M.addEventListener(y,A,false);M.addEventListener(b,L,false)}var M=this;var _=e(this);var D=null;var P=0;var H={x:0,y:0};var B={x:0,y:0};var F={x:0,y:0};try{this.addEventListener(g,O,false);this.addEventListener(w,C)}catch(I){}})}
	})(jQuery)

// SOME ERROR MESSAGES IN CASE THE PLUGIN CAN NOT BE LOADED
function revslider_showDoubleJqueryError(sliderID) {
	var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
	errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
		jQuery(sliderID).show().html(errorMessage);
}

 /*!
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     jQuery(".fancybox").fancybox({
 *         helpers : {
 *             buttons: {
 *                 position : 'top'
 *             }
 *         }
 *     });
 *
 */
(function ($) {
	//Shortcut for fancyBox object
	var F = jQuery.fancybox;

	//Add helper object
	F.helpers.buttons = {
		defaults : {
			skipSingle : false, // disables if gallery contains single image
			position   : 'top', // 'top' or 'bottom'
			tpl        : '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
		},

		list : null,
		buttons: null,

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items

			if (opts.skipSingle && obj.group.length < 2) {
				obj.helpers.buttons = false;
				obj.closeBtn = true;

				return;
			}

			//Increase top margin to give space for buttons
			obj.margin[ opts.position === 'bottom' ? 2 : 0 ] += 30;
		},

		onPlayStart: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
			}
		},

		onPlayEnd: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
			}
		},

		afterShow: function (opts, obj) {
			var buttons = this.buttons;

			if (!buttons) {
				this.list = jQuery(opts.tpl).addClass(opts.position).appendTo('body');

				buttons = {
					prev   : this.list.find('.btnPrev').click( F.prev ),
					next   : this.list.find('.btnNext').click( F.next ),
					play   : this.list.find('.btnPlay').click( F.play ),
					toggle : this.list.find('.btnToggle').click( F.toggle ),
					close  : this.list.find('.btnClose').click( F.close )
				}
			}

			//Prev
			if (obj.index > 0 || obj.loop) {
				buttons.prev.removeClass('btnDisabled');
			} else {
				buttons.prev.addClass('btnDisabled');
			}

			//Next / Play
			if (obj.loop || obj.index < obj.group.length - 1) {
				buttons.next.removeClass('btnDisabled');
				buttons.play.removeClass('btnDisabled');

			} else {
				buttons.next.addClass('btnDisabled');
				buttons.play.addClass('btnDisabled');
			}

			this.buttons = buttons;

			this.onUpdate(opts, obj);
		},

		onUpdate: function (opts, obj) {
			var toggle;

			if (!this.buttons) {
				return;
			}

			toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

			//Size toggle button
			if (obj.canShrink) {
				toggle.addClass('btnToggleOn');

			} else if (!obj.canExpand) {
				toggle.addClass('btnDisabled');
			}
		},

		beforeClose: function () {
			if (this.list) {
				this.list.remove();
			}

			this.list    = null;
			this.buttons = null;
		}
	};

}(jQuery));

/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     jQuery(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     jQuery(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     jQuery(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
	"use strict";

	//Shortcut for fancyBox object
	var F = jQuery.fancybox,
		format = function( url, rez, params ) {
			params = params || '';

			if ( jQuery.type( params ) === "object" ) {
				params = jQuery.param(params, true);
			}

			jQuery.each(rez, function(key, value) {
				url = url.replace( '$' + key, value || '' );
			});

			if (params.length) {
				url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
			}

			return url;
		};

	//Add helper object
	F.helpers.media = {
		defaults : {
			youtube : {
				matcher : /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params  : {
					autoplay    : 1,
					autohide    : 1,
					fs          : 1,
					rel         : 0,
					hd          : 1,
					wmode       : 'opaque',
					enablejsapi : 1
				},
				type : 'iframe',
				url  : '//www.youtube.com/embed/$3'
			},
			vimeo : {
				matcher : /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params  : {
					autoplay      : 1,
					hd            : 1,
					show_title    : 1,
					show_byline   : 1,
					show_portrait : 0,
					fullscreen    : 1
				},
				type : 'iframe',
				url  : '//player.vimeo.com/video/$1'
			},
			metacafe : {
				matcher : /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params  : {
					autoPlay : 'yes'
				},
				type : 'swf',
				url  : function( rez, params, obj ) {
					obj.swf.flashVars = 'playerVars=' + jQuery.param( params, true );

					return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
				}
			},
			dailymotion : {
				matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
				params  : {
					additionalInfos : 0,
					autoStart : 1
				},
				type : 'swf',
				url  : '//www.dailymotion.com/swf/video/$1'
			},
			twitvid : {
				matcher : /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params  : {
					autoplay : 0
				},
				type : 'iframe',
				url  : '//www.twitvid.com/embed.php?guid=$1'
			},
			twitpic : {
				matcher : /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type : 'image',
				url  : '//twitpic.com/show/full/$1/'
			},
			instagram : {
				matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type : 'image',
				url  : '//$1/p/$2/media/?size=l'
			},
			google_maps : {
				matcher : /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type : 'iframe',
				url  : function( rez ) {
					return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
				}
			}
		},

		beforeLoad : function(opts, obj) {
			var url   = obj.href || '',
				type  = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				if (opts.hasOwnProperty(what)) {
					item = opts[ what ];
					rez  = url.match( item.matcher );

					if (rez) {
						type   = item.type;
						params = jQuery.extend(true, {}, item.params, obj[ what ] || (jQuery.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

						url = jQuery.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

						break;
					}
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));

 /*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     jQuery(".fancybox").fancybox({
 *         helpers : {
 *             thumbs: {
 *                 width  : 50,
 *                 height : 50
 *             }
 *         }
 *     });
 *
 */
(function ($) {
	//Shortcut for fancyBox object
	var F = jQuery.fancybox;

	//Add helper object
	F.helpers.thumbs = {
		defaults : {
			width    : 50,       // thumbnail width
			height   : 50,       // thumbnail height
			position : 'bottom', // 'top' or 'bottom'
			source   : function ( item ) {  // function to obtain the URL of the thumbnail image
				var href;

				if (item.element) {
					href = jQuery(item.element).find('img').attr('src');
				}

				if (!href && item.type === 'image' && item.href) {
					href = item.href;
				}

				return href;
			}
		},

		wrap  : null,
		list  : null,
		width : 0,

		init: function (opts, obj) {
			var that = this,
				list,
				thumbWidth  = opts.width,
				thumbHeight = opts.height,
				thumbSource = opts.source;

			//Build list structure
			list = '';

			for (var n = 0; n < obj.group.length; n++) {
				list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
			}

			this.wrap = jQuery('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
			this.list = jQuery('<ul>' + list + '</ul>').appendTo(this.wrap);

			//Load each thumbnail
			jQuery.each(obj.group, function (i) {
				var href = thumbSource( obj.group[ i ] );

				if (!href) {
					return;
				}

				jQuery("<img />").load(function () {
					var width  = this.width,
						height = this.height,
						widthRatio, heightRatio, parent;

					if (!that.list || !width || !height) {
						return;
					}

					//Calculate thumbnail width/height and center it
					widthRatio  = width / thumbWidth;
					heightRatio = height / thumbHeight;

					parent = that.list.children().eq(i).find('a');

					if (widthRatio >= 1 && heightRatio >= 1) {
						if (widthRatio > heightRatio) {
							width  = Math.floor(width / heightRatio);
							height = thumbHeight;

						} else {
							width  = thumbWidth;
							height = Math.floor(height / widthRatio);
						}
					}

					jQuery(this).css({
						width  : width,
						height : height,
						top    : Math.floor(thumbHeight / 2 - height / 2),
						left   : Math.floor(thumbWidth / 2 - width / 2)
					});

					parent.width(thumbWidth).height(thumbHeight);

					jQuery(this).hide().appendTo(parent).fadeIn(300);

				}).attr('src', href);
			});

			//Set initial width
			this.width = this.list.children().eq(0).outerWidth(true);

			this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor(jQuery(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
		},

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items
			if (obj.group.length < 2) {
				obj.helpers.thumbs = false;

				return;
			}

			//Increase bottom margin to give space for thumbs
			obj.margin[ opts.position === 'top' ? 0 : 2 ] += ((opts.height) + 15);
		},

		afterShow: function (opts, obj) {
			//Check if exists and create or update list
			if (this.list) {
				this.onUpdate(opts, obj);

			} else {
				this.init(opts, obj);
			}

			//Set active element
			this.list.children().removeClass('active').eq(obj.index).addClass('active');
		},

		//Center list
		onUpdate: function (opts, obj) {
			if (this.list) {
				this.list.stop(true).animate({
					'left': Math.floor(jQuery(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
				}, 150);
			}
		},

		beforeClose: function () {
			if (this.wrap) {
				this.wrap.remove();
			}

			this.wrap  = null;
			this.list  = null;
			this.width = 0;
		}
	}

}(jQuery));

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(c($){b 3i=x h.g.3K();c 1r(t){3.14(t)};1r.1R=x h.g.4d();1r.1R.4b=c(){};1r.1R.4a=c(){};1r.1R.47=c(){};$.p={};$.46.p=c(5){s 3.45(c(){b p=$(3).m(\'p\');7(!p){b 1q=$.1v(B,{},$.1q);$(3).m(\'p\',1q.2N(3,5));$.p=1q}n{$.p=p}})};$.1q={2K:{C:\'\',G:44.9,F:24.1,2s:4,1E:42,2V:B,2X:B,32:\'41\',3g:\'40\',2F:\'3Z\',2h:B,11:{z:\'3Y\',N:\'2W\'},2e:B,10:{z:\'3X\',N:\'2W\'},2d:v,2a:B,3V:v,3T:H,28:v,25:v,e:[],D:[],1g:{P:\'#1f\',O:1.0,L:2},19:{P:\'#1f\',O:1.0,L:2,S:\'#1f\',R:0.2},W:{P:\'#1f\',O:1.0,L:2,S:\'#1f\',R:0.2},1Q:{P:\'#1f\',O:1.0,L:2,S:\'#1f\',R:0.2},2O:\'3S\',2U:\'<1k 3P=3N>\',2Y:\'</1k>\',1s:v},t:H,1w:0,e:[],35:[],37:[],3d:[],3f:[],1x:[],1z:[],1h:v,1b:H,D:H,w:H,o:H,2n:H,2g:H,27:H,22:H,8:H,1K:H,2N:c(29,5){b 8=$.1v(B,{},$.1q.2K,5);3.o=$(29);3.8=8;7(8.C)3.12({C:8.C,1d:B});n 7($.2Z(8.e)&&8.e.u>0){7(8.e[0].C)3.12({C:8.e[0].C,1d:B});n 3.1K=x h.g.V(8.e[0].G,8.e[0].F)}n 3.1K=x h.g.V(8.G,8.F);b 34={1d:3.1K,28:8.28,2e:8.2e,25:8.25,10:{z:h.g.1J[8.10.z.18()],N:h.g.38[8.10.N.18()]},3a:h.g.3J[8.2O.18()],2h:8.2h,11:{z:h.g.1J[8.11.z.18()],N:h.g.3c[8.11.N.18()]},2d:8.2d,2a:8.2a,2s:8.2s};3.t=x h.g.3I(29,34);3.w=x 1r(3.t);3.D={1g:{q:\'2n\',y:\'35\',1y:\'3j\'},19:{q:\'2g\',y:\'37\',1y:\'2B\'},W:{q:\'27\',y:\'3d\',1y:\'2D\'},1Q:{q:\'22\',y:\'3f\',1y:\'2E\'}};3.2n=$(\'<1k N="Q:1T;"/>\').1I(3.o);3.2g=$(\'<1k N="Q:1T;"/>\').1I(3.o);3.27=$(\'<1k N="Q:1T;"/>\').1I(3.o);3.22=$(\'<1k N="Q:1T;"/>\').1I(3.o);I(b j=0,l=8.e.u;j<l;j++)3.1F(8.e[j]);I(b j=0,l=8.D.u;j<l;j++)3[3.D[8.D[j].d].1y](8.D[j]);b p=3;7(8.1s==B||8.1s==\'3F\'){h.g.K.1o(p.t,\'21\',c(K){b 5={z:K.2L,1G:B};b 6=p.1F(5);h.g.K.1o(6,\'30\',c(K){6.14(H);p.2f(6.q)})})}n 7(8.1s==\'3E\'){h.g.K.1o(p.t,\'21\',c(K){7(!p.1L){b 5={z:K.2L,1G:B};b 6=p.1F(5);p.1L=B;h.g.K.1o(6,\'30\',c(K){6.14(H);p.2f(6.q);p.1L=v})}})}J 8.e;J 8.D;s 3},3B:c(f){h.g.K.3A(3.t,\'3z\',c(){s f()})},12:c(C,5){b p=3;1M(c(){3i.12({\'C\':C.C},c(1N,1u){7(1u==h.g.1O.2l&&C.1d)p.t.3y(1N[0].2r.2x);7(1u==h.g.1O.2l&&5&&5.E)5.E.3w(1N[0].2r.2x);n 7(1u==h.g.1O.2l&&5){7(p.1h){p.1h=v;5.z=1N[0].2r.2x;5.12=B;p.1F(5)}}n 7(1u==h.g.1O.3t){p.12(C,5)}})},3.8.1E)},23:c(){7(3.1z.u>0&&!3.1h){3.1h=B;b 17=3.1z.1H(0,1);3.12({C:17[0].C},17[0])}n 7(3.1h){b p=3;1M(c(){p.23()},3.8.1E)}},14:c(5){J 5.3a;7(5.C){3.12({C:5.C,1d:B});J 5.C}n 7(5.G&&5.F){5.1d=x h.g.V(5.G,5.F);J 5.F;J 5.G}7(5.10&&5.10.z)5.10.z=h.g.1J[5.10.z.18()];7(5.10&&5.10.N)5.10.N=h.g.38[5.10.N.18()];7(5.11&&5.11.z)5.11.z=h.g.1J[5.11.z.18()];7(5.11&&5.11.N)5.11.N=h.g.3c[5.11.N.18()];3.t.1S(5)},2I:c(){s 3.t},2J:c(d,K,m){b 1l;7(1B d!=\'2M\')d={d:d};7(d.d==\'t\')1l=3.t;n 7(d.d==\'6\'&&d.6)1l=$(3.o).m(d.6);n 7(d.d==\'k\'&&d.6)1l=$(3.o).m(d.6+\'k\');7(1l)s h.g.K.1o(1l,K,m);n 7((d.d==\'6\'||d.d==\'k\')&&3.2b()!=3.2c())b p=3;1M(c(){p.2J(d,K,m)},3.8.1E)},2Q:c(2R){h.g.K.2Q(2R)},2S:c(6,A){b p=3;A.1n=p.8.2U+A.1n+p.8.2Y;b M=x h.g.3s(A);M.X=v;$(p.o).m(6.q+\'k\',M);7(A.3r){p.2j(M,6,A);M.X=B}h.g.K.1o(6,\'21\',c(){7(M.X&&p.8.2V){M.1p();M.X=v}n{p.2j(M,6,A);M.X=B}})},2j:c(M,6,A){7(3.8.2X)3.31();7(A.1X){M.2m(3.t,6);$.1X({3q:A.1X,3p:c(A){M.2p(A)}})}n 7(A.q){M.2p($(A.q).A());M.2m(3.t,6)}n M.2m(3.t,6)},3n:c(q,1Z){b k=$(3.o).m(q+\'k\');7(1B 1Z==\'2M\')k.1S(1Z);n k.2p(1Z)},3m:c(q,39){b k=$(3.o).m(q+\'k\').3O();7(39)s $(k).A();n s k},31:c(){I(b i=0,l=3.e.u;i<l;i++){b k=$(3.o).m(3.e[i]+\'k\');7(k){k.1p();k.X=v}}},2v:c(d,e){b p=3;7(3.2b()!=3.2c())1M(c(){p.2v(d,e)},3.8.1E);n{3.1b=x h.g.2w();7(!d||(d&&d==\'3l\')){I(b i=0,l=3.e.u;i<l;i++){3.1b.1v($(3.o).m(3.e[i]).z)}}n 7(d&&d==\'1A\'){I(b i=0,l=3.e.u;i<l;i++){7(3.1D(3.e[i]))3.1b.1v($(3.o).m(3.e[i]).z)}}n 7(d&&d==\'e\'&&$.2Z(e)){I(b i=0,l=e.u;i<l;i++){3.1b.1v($(3.o).m(e[i]).z)}}3.t.2v(3.1b)}},2z:c(){s 3.t.2z()},3j:c(a){a.d=\'1g\';s 3.1C(a)},2B:c(a){a.d=\'19\';s 3.1C(a)},2D:c(a){a.d=\'W\';s 3.1C(a)},2E:c(a){a.d=\'1Q\';s 3.1C(a)},1C:c(a){b w=[];7(!a.q){3.1w++;a.q=3.8.3g+3.1w}3e(a.d){16\'1g\':7(a.T.u>0){I(b j=0,l=a.T.u;j<l;j++)w.U(x h.g.V(a.T[j].G,a.T[j].F));w=x h.g.3o({t:3.t,2o:w,1Y:a.P?a.P:3.8.1g.P,1W:a.O?a.O:3.8.1g.O,1V:a.L?a.L:3.8.1g.L})}n s v;Y;16\'19\':7(a.T.u>0){I(b j=0,l=a.T.u;j<l;j++)w.U(x h.g.V(a.T[j].G,a.T[j].F));w=x h.g.3u({t:3.t,2o:w,1Y:a.P?a.P:3.8.19.P,1W:a.O?a.O:3.8.19.O,1V:a.L?a.L:3.8.19.L,S:a.S?a.S:3.8.19.S,R:a.R?a.R:3.8.19.R})}n s v;Y;16\'W\':w=x h.g.3v({t:3.t,1d:x h.g.V(a.G,a.F),2C:a.2C,1Y:a.P?a.P:3.8.W.P,1W:a.O?a.O:3.8.W.O,1V:a.L?a.L:3.8.W.L,S:a.S?a.S:3.8.W.S,R:a.R?a.R:3.8.W.R});Y;16\'1Q\':w=x h.g.3x({t:3.t,1b:x h.g.2w(x h.g.V(a.1t.G,a.1t.F),x h.g.V(a.1j.G,a.1j.F)),1Y:a.P?a.P:3.8.W.P,1W:a.O?a.O:3.8.W.O,1V:a.L?a.L:3.8.W.L,S:a.S?a.S:3.8.W.S,R:a.R?a.R:3.8.W.R});Y;26:s v;Y}3.36(a,w);s w},36:c(a,w){$(3[3.D[a.d].q]).m(a.q,w);3[3.D[a.d].y].U(a.q)},3C:c(d,w,5){w=$(3[3.D[d].q]).m(w);7(5.T&&5.T.u>0){b y=[];I(b j=0,l=5.T.u;j<l;j++)y.U(x h.g.V(5.T[j].G,5.T[j].F));5.2o=y;J 5.T}n 7(5.1j&&5.1t){5.1b=x h.g.2w(x h.g.V(5.1t.G,5.1t.F),x h.g.V(5.1j.G,5.1j.F));J 5.1j;J 5.1t}n 7(5.G&&5.F){5.1d=x h.g.V(5.G,5.F);J 5.G;J 5.F}w.1S(5)},3D:c(d,w,Q){7(1B Q===\'2i\'){7(3.2T(d,w))Q=v;n Q=B}7(Q)$(3[3.D[d].q]).m(w).14(3.t);n $(3[3.D[d].q]).m(w).14(H)},2T:c(d,w){7($(3[3.D[d].q]).m(w).2I())s B;n s v},3G:c(d){s 3[3.D[d].y].u},3H:c(d,w){b 1i=$.3b(w,3[3.D[d].y]),17;7(1i>-1){17=3[3.D[d].y].1H(1i,1);b E=17[0];$(3[3.D[d].q]).m(E).14(H);$(3[3.D[d].q]).1m(E);s B}s v},3L:c(d){I(b i=0,l=3[3.D[d].y].u;i<l;i++){b E=3[3.D[d].y][i];$(3[3.D[d].q]).m(E).14(H);$(3[3.D[d].q]).1m(E)}3[3.D[d].y]=[]},3M:c(6,Q){7(1B Q===\'2i\'){7(3.1D(6)){$(3.o).m(6).1c(v);b k=$(3.o).m(6+\'k\');7(k&&k.X){k.1p();k.X=v}}n $(3.o).m(6).1c(B)}n $(3.o).m(6).1c(Q)},3k:c(13,Q){I(b i=0,l=3.e.u;i<l;i++){b E=3.e[i];b 6=$(3.o).m(E);7(6.13==13){7(1B Q===\'2i\'){7(3.1D(E)){6.1c(v);b k=$(3.o).m(E+\'k\');7(k&&k.X){k.1p();k.X=v}}n 6.1c(B)}n 6.1c(Q)}}},1D:c(6){s $(3.o).m(6).3Q()},2b:c(){s 3.e.u},2c:c(){s 3.1x.u},3R:c(){s 3.1P(\'2H\').u},3U:c(13){s 3.1P(\'13\',13).u},1P:c(d,2A){b y=[];3e(d){16"3W":I(b i=0,l=3.e.u;i<l;i++){b 1a="\'"+i+"\': \'"+$(3.o).m(3.e[i]).1U().2k()+"\'";y.U(1a)}y="{\'e\':{"+y.3h(",")+"}}";Y;16"m":I(b i=0,l=3.e.u;i<l;i++){b 1a="6["+i+"]="+$(3.o).m(3.e[i]).1U().2k();y.U(1a)}y=y.3h("&");Y;16"33":I(b i=0,l=3.e.u;i<l;i++){7(3.2P($(3.o).m(3.e[i]).1U()))y.U(3.e[i])}Y;16"2H":I(b i=0,l=3.e.u;i<l;i++){7(3.1D(3.e[i]))y.U(3.e[i])}Y;16"13":7(2A)I(b i=0,l=3.e.u;i<l;i++){7($(3.o).m(3.e[i]).13==2A)y.U(3.e[i])}Y;16"e":I(b i=0,l=3.e.u;i<l;i++){b 1a=$(3.o).m(3.e[i]);y.U(1a)}Y;26:I(b i=0,l=3.e.u;i<l;i++){b 1a=$(3.o).m(3.e[i]).1U().2k();y.U(1a)}Y}s y},43:c(){s 3.1P(\'33\')},1F:c(6){7(!6.12){3.1w++;7(!6.q)6.q=3.8.32+3.1w;3.1x.U(6.q)}7(6.C&&!6.12){3.1z.U(6);3.23()}n 7(6.G&&6.F||6.z){b 5={t:3.t};5.q=6.q;5.13=6.13?6.13:3.8.2F;5.2q=6.2q?6.2q:0;5.2t=6.2t?6.2t:0;7(6.1A==v)5.1A=6.1A;7(6.2u)5.2u=6.2u;7(6.1G)5.1G=6.1G;7(6.r&&6.r.1e){5.r=6.r.1e;7(6.r.Z)5.Z=6.r.Z}n 7(6.r)5.r=6.r;n 7(3.8.r&&3.8.r.1e){5.r=3.8.r.1e;7(3.8.r.Z)5.Z=3.8.r.Z}n 7(3.8.r)5.r=3.8.r;5.z=6.z?6.z:x h.g.V(6.G,6.F);b 20=x h.g.48(5);7(6.A){7(!6.A.1n&&!6.A.1X&&!6.A.q)6.A={1n:6.A};n 7(!6.A.1n)6.A.1n=H;3.2S(20,6.A)}3.1s(20);s 20}},1s:c(6){$(3.o).m(6.q,6);3.e.U(6.q)},49:c(6,5){b 2y=$(3.o).m(6);J 5.q;J 5.1A;7(5.r){b 15=5.r;J 5.r;7(15&&15==\'26\'){7(3.8.r&&3.8.r.1e){5.r=3.8.r.1e;7(3.8.r.Z)5.Z=3.8.r.Z}n 7(3.8.r)5.r=3.8.r}n 7(15&&15.1e){5.r=15.1e;7(15.Z)5.Z=15.Z}n 7(15)5.r=15}7(5.C){3.12({C:5.C},{E:2y});J 5.C;J 5.G;J 5.F;J 5.z}n 7(5.G&&5.F||5.z){7(!5.z)5.z=x h.g.V(5.G,5.F)}2y.1S(5)},2f:c(6){b 1i=$.3b(6,3.e),17;7(1i>-1){3.1x.1H(1i,1);17=3.e.1H(1i,1);b E=17[0];b 6=$(3.o).m(E);b k=$(3.o).m(E+\'k\');6.1c(v);6.14(H);$(3.o).1m(E);7(k){k.1p();k.X=v;$(3.o).1m(E+\'k\')}s B}s v},4c:c(){I(b i=0,l=3.e.u;i<l;i++){b E=3.e[i];b 6=$(3.o).m(E);b k=$(3.o).m(E+\'k\');6.1c(v);6.14(H);$(3.o).1m(E);7(k){k.1p();k.X=v;$(3.o).1m(E+\'k\')}}3.1L=v;3.1h=v;3.e=[];3.1x=[];3.1z=[]},2P:c(2G){s 3.t.2z().4e(2G)}}})(4f);',62,264,'|||this||options|marker|if|opts||poly|var|function|type|markers||maps|google|||info||data|else|mapId|goMap|id|icon|return|map|length|false|overlay|new|array|position|html|true|address|overlays|markerId|longitude|latitude|null|for|delete|event|weight|infowindow|style|opacity|color|display|fillOpacity|fillColor|coords|push|LatLng|circle|show|break|shadow|mapTypeControlOptions|navigationControlOptions|geocode|group|setMap|toption|case|current|toUpperCase|polygon|temp|bounds|setVisible|center|image|FF0000|polyline|lockGeocode|index|ne|div|target|removeData|content|addListener|close|goMapBase|MyOverlay|addMarker|sw|status|extend|count|tmpMarkers|create|geoMarkers|visible|typeof|createOverlay|getVisibleMarker|delay|createMarker|draggable|splice|appendTo|ControlPosition|centerLatLng|singleMarker|setTimeout|results|GeocoderStatus|getMarkers|rectangle|prototype|setOptions|none|getPosition|strokeWeight|strokeOpacity|ajax|strokeColor|text|cmarker|click|rId|geoMarker||streetViewControl|default|cId|disableDoubleClickZoom|el|scrollwheel|getMarkerCount|getTmpMarkerCount|scaleControl|mapTypeControl|removeMarker|pgId|navigationControl|undefined|openWindow|toUrlValue|OK|open|plId|path|setContent|zIndex|geometry|zoom|zIndexOrg|title|fitBounds|LatLngBounds|location|tmarker|getBounds|name|createPolygon|radius|createCircle|createRectangle|groupId|latlng|visiblesInMap|getMap|createListener|defaults|latLng|object|init|maptype|isVisible|removeListener|listener|setInfoWindow|getVisibleOverlay|html_prepend|hideByClick|DEFAULT|oneInfoWindow|html_append|isArray|dblclick|clearInfo|prefixId|visiblesInBounds|myOptions|polylines|addOverlay|polygons|MapTypeControlStyle|hideDiv|mapTypeId|inArray|NavigationControlStyle|circles|switch|rectangles|polyId|join|geocoder|createPolyline|showHideMarkerByGroup|all|getInfo|setInfo|Polyline|success|url|popup|InfoWindow|OVER_QUERY_LIMIT|Polygon|Circle|setPosition|Rectangle|setCenter|bounds_changed|addListenerOnce|ready|setOverlay|showHideOverlay|single|multi|getOverlaysCount|removeOverlay|Map|MapTypeId|Geocoder|clearOverlays|showHideMarker|gomapMarker|getContent|class|getVisible|getVisibleMarkerCount|HYBRID|directionsResult|getMarkerByGroupCount|directions|json|TOP_RIGHT|TOP_LEFT|gogroup|gopoly|gomarker|200|getVisibleMarkers|56|each|fn|draw|Marker|setMarker|onRemove|onAdd|clearMarkers|OverlayView|contains|jQuery'.split('|'),0,{}));