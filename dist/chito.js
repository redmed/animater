!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Chito",[],e):"object"==typeof exports?exports.Chito=e():t.Chito=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=12)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(2),f=r(l),c=n(7),h=r(c),p=n(5),d=r(p),v=n(1),_=function(t){function e(t,n){i(this,e);var r=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r._options={},r._attr={},r._startAt=0,r._stopped=!0,r._paused=!1,r._startTime=0,r._pauseStart=0,r._pauseTime=0,r._reversed=!1,r._chainClips=[],r._tracks=[],r._interpolation=d.default.Linear,r._options=t||{},r._attr=n,r._initOption(t),r._tracks=r._transform(n),r}return u(e,t),s(e,null,[{key:"registerPlugin",value:function(t){var e=t.type,n=this._plugins;n&&n[e]||(this._plugins=n||{},this._plugins[e]=t)}}]),s(e,[{key:"_initOption",value:function(t){var e=t[v.Attr.EASING]||v.Easing.LINEAR;this._easing=h.default[e]?h.default[e]:e,this._delay=t[v.Attr.DELAY]||0;var n=t[v.Attr.DURATION];this._duration=void 0===n?1e3:n,this._repeat_0=this._repeat=t[v.Attr.REPEAT]||1,this._interval=t[v.Attr.INTERVAL]||0,this._yoyo=t[v.Attr.YOYO]||!1,this._startAt=t[v.Attr.START]||0}},{key:"_transform",value:function(t){var e=this.constructor._plugins,n=[];for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];for(var a in e){var u=e[a];if(u.test(i,r)){i=u.parse(i,r),i.__type__=u.type;break}}n.push({key:r,value:i})}return n}},{key:"start",value:function(t){var e=window.performance.now(),n=!1;if(this._paused)this._pauseTime+=e-this._pauseStart,this._paused=!1;else{if(!t&&!this._stopped)return this;n=!0,this._stopped=!1,this._startTime=e+this._delay}this.emit(v.Ev.START);var r=this._repeat;return r>1&&r===this._repeat_0&&n&&this.emit(v.Ev.REPEAT,0),this}},{key:"stop",value:function(t){return this._stopped||(this._stopped=!0,this._paused=!1,this._pauseTime=0,this._pauseStart=0,this.emit(v.Ev.STOP),this.stopChain()),t&&(this._repeat=this._repeat_0),this}},{key:"pause",value:function(){return this._stopped||this._paused?this:(this._paused=!0,this._pauseStart=window.performance.now(),this.emit(v.Ev.PAUSE),this)}},{key:"update",value:function(t){if(this._stopped)return!0;if(this._paused||t&&t<this._startTime)return!0;var e=t-this._pauseTime,n=this._getProgress(e),r=n.progress,i=n.elapsed,a=this._updateAttr(r,i);return this.emit(v.Ev.UPDATE,r,a,i),this._afterUpdate(e,i)}},{key:"_getProgress",value:function(t){var e=(t-this._startTime)/this._duration;return e+=this._startAt,e=Math.min(e,1),{progress:this._easing(this._reversed?1-e:e),elapsed:e}}},{key:"_updateAttr",value:function(t,e){for(var n=this._tracks,r={},i=0,a=n.length;i<a;){var u=n[i++],o=u.key,s=u.value,l=s.__type__;if(l){s=this.constructor._plugins[l].valueOf(s,t,e,o)}else s=this._interpolation(s,t);r[o]=s}return r}},{key:"_afterUpdate",value:function(t,e){if(1===e){var n=this._repeat,r=this._repeat_0;if(n>1)return isFinite(n)&&n--,this._startTime=t+this._interval,this._startAt=0,this._yoyo&&(this._reversed=!this._reversed),this._repeat=n,this.emit(v.Ev.REPEAT_COMPLETE,n),this.emit(v.Ev.REPEAT,r-n),!0;this._stopped=!0,this._pauseTime=0,this._pauseStart=0,this._repeat=r,r>1&&this.emit(v.Ev.REPEAT_COMPLETE,0),this.emit(v.Ev.COMPLETE);for(var i=-1,a=this._chainClips,u=a.length,o=this._animation;++i<u;){var s=a[i];o&&o._addLiveClip(s),s.start()}return!1}return!0}},{key:"chain",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this._chainClips=e,this}},{key:"stopChain",value:function(){for(var t=-1,e=this._chainClips,n=e.length;++t<n;){e[t].stop()}return this}},{key:"destroy",value:function(){this.off(),this._stopped=!0,this._paused=!1,this._startTime=0,this._pauseTime=0,this._pauseStart=0,this._chainClips=[];var t=this._animation;t&&t.removeClip(this),this._animation=null}}]),e}(f.default);_.Event=v.Ev,_.Attr=v.Attr,_.Easing=v.Easing,e.default=_},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={UPDATE:"update",START:"start",REPEAT:"repeat",REPEAT_COMPLETE:"repeatComplete",AFTER_UPDATE:"afterUpdate",COMPLETE:"complete",PAUSE:"pause",STOP:"stop",RESET:"reset"},i={DURATION:"duration",REPEAT:"repeat",DELAY:"delay",EASING:"easing",INTERVAL:"interval",YOYO:"yoyo",START:"startAt"},a={LINEAR:"Linear",QUADRATIC_IN:"QuadraticIn",QUADRATIC_OUT:"QuadraticOut",QUADRATIC_IN_OUT:"QuadraticInOut",CUBIC_IN:"CubicIn",CUBIC_OUT:"CubicOut",CUBIC_IN_OUT:"CubicInOut",QUARTIC_IN:"QuarticIn",QUARTIC_OUT:"QuarticOut",QUARTIC_IN_OUT:"QuarticInOut",QUINTIC_IN:"QuinticIn",QUINTIC_OUT:"QuinticOut",QUINTIC_IN_OUT:"QuinticInOut",SINUSOIDAL_IN:"SinusoidalIn",SINUSOIDAL_OUT:"SinusoidalOut",SINUSOIDAL_IN_OUT:"SinusoidalInOut",EXPONENTIAL_IN:"ExponentialIn",EXPONENTIAL_OUT:"ExponentialOut",EXPONENTIAL_IN_OUT:"ExponentialInOut",CIRCULAR_IN:"CircularIn",CIRCULAR_OUT:"CircularOut",CIRCULAR_IN_OUT:"CircularInOut",ELASTIC_IN:"ElasticIn",ELASTIC_OUT:"ElasticOut",ELASTIC_IN_OUT:"ElasticInOut",BACK_IN:"BackIn",BACK_OUT:"BackOut",BACK_IN_OUT:"BackInOut",BOUNCE_IN:"BounceIn",BOUNCE_OUT:"BounceOut",BOUNCE_IN_OUT:"BounceInOut"};e.Ev=r,e.Attr=i,e.Easing=a},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=-1,u=function(){function t(){r(this,t),this.__events__={},this.__id__=++a}return i(t,[{key:"on",value:function(t,e,n){var r=this.__events__,i=r[t]=r[t]||[];n===this&&(n=void 0);for(var a=-1,u=i;++a<u;){var o=i[a],s=o.fn,l=o.ctx;if(s===e&&l===n)return this}var f={fn:e,ctx:n};return i.push(f),this}},{key:"once",value:function(t,e,n){function r(n){this.off(t,r),e.call(this,n)}return r.listener=e,this.on(t,r,n)}},{key:"off",value:function(t,e,n){var r=this.__events__;if(!t)return this.__events__={},this;if(!e)return delete r[t],this;var i=r[t];if(i)for(var a=i.length;--a>=0;){var u=i[a],o=u.fn,s=u.ctx;s===n&&(o!==e&&o!==o.listener||(i.splice(a,1),o=function(){}))}return this}},{key:"emit",value:function(t){var e=this.__events__[t];if(e){for(var n={target:this,type:t},r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];i.push(n);for(var u=-1,o=e.length;++u<o;){var s=e[u],l=s.fn,f=s.ctx;l.apply(f||this,i)}}return this}},{key:"events",get:function(){return this.__events__}},{key:"id",get:function(){return this.__id__}}]),t}();e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Clip=e.Animation=void 0;var i=n(4),a=r(i),u=n(0),o=r(u);e.default={Animation:a.default,Clip:o.default},e.Animation=a.default,e.Clip=o.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(2),f=r(l),c=n(8),h=r(c),p=n(6),d=n(1),v=function(t){function e(t){i(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n._options={},n._savedClips=[],n._clips=[],n._options=t||{},n}return u(e,t),s(e,[{key:"_startAni",value:function(){var t=this,e=function e(n){t._timer=(0,p.requestAnimationFrame)(e),t._update(n)};this._timer=(0,p.requestAnimationFrame)(e)}},{key:"_stopAni",value:function(){var t=this._timer;return!!t&&((0,p.cancelAnimationFrame)(t),this._timer=null,!0)}},{key:"_update",value:function(t){var e=this._clips;this.emit(d.Ev.UPDATE,t);for(var n=0;n<e.length;){e[n].update(t)?n++:e.splice(n,1)}this._clips=e,this.emit(d.Ev.AFTER_UPDATE),0==e.length&&(this._stopAni(),this.emit(d.Ev.COMPLETE))}},{key:"start",value:function(){var t=this._clips,e=t.length;if(this._timer||0==e)return this;this.emit(d.Ev.START);for(var n=-1;++n<e;){t[n].start()}return this._startAni(),this}},{key:"stop",value:function(){return this._stop(!1),this}},{key:"pause",value:function(){return this._stop(!0),this}},{key:"reset",value:function(){this._stop(!1,!0,!1);for(var t=-1,e=this._savedClips,n=e.length;++t<n;){e[t].stop(!0)}return this._clips=e.slice(),this.emit(d.Ev.RESET),this}},{key:"_stop",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this._stopAni();var r=this._clips,i=r.length;if(i){for(var a=-1;++a<i;){var u=r[a];t?u.pause():u.stop(e)}n&&this.emit(t?d.Ev.PAUSE:d.Ev.STOP)}}},{key:"addClip",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Array.isArray(t)||(t=[t]);for(var n=-1,r=t.length;++n<r;){var i=t[n];this.hasClip(i)||(this._addLiveClip(i),this._addSavedClip(i),this._timer&&e&&i.start())}return this}},{key:"_addLiveClip",value:function(t){var e=this._clips;-1===e.indexOf(t)&&(e.push(t),t._animation=this)}},{key:"_addSavedClip",value:function(t){var e=this._savedClips;-1===e.indexOf(t)&&(e.push(t),t._animation=this)}},{key:"removeClip",value:function(t){var e=this._savedClips;if(t)this._removeLiveClip(t),this._removeSavedClip(t),t._animation=null;else{for(var n=-1,r=e.length;++n<r;){e[n]._animation=null}this._clips=[],this._savedClips=[]}return this}},{key:"_removeLiveClip",value:function(t){h.default.remove(this._clips,function(e){return e===t})}},{key:"_removeSavedClip",value:function(t){h.default.remove(this._savedClips,function(e){return e===t})}},{key:"getClips",value:function(){return this._clips}},{key:"hasClip",value:function(t){return-1!==this._savedClips.indexOf(t)}},{key:"destroy",value:function(){this.off(),this._stopAni(),this.removeClip()}}]),e}(f.default);v.Event=d.Ev,e.default=v},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={Linear:function(t,e){var n=t.length-1,i=n*e,a=Math.floor(i),u=r.Utils.Linear;return e<0?u(t[0],t[1],i):e>1?u(t[n],t[n-1],n-i):u(t[a],t[a+1>n?n:a+1],i-a)},Bezier:function(t,e){for(var n=0,i=t.length-1,a=Math.pow,u=r.Utils.Bernstein,o=0;o<=i;o++)n+=a(1-e,i-o)*a(e,o)*t[o]*u(i,o);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,a=Math.floor(i),u=r.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(a=Math.floor(i=n*(1+e))),u(t[(a-1+n)%n],t[a],t[(a+1)%n],t[(a+2)%n],i-a)):e<0?t[0]-(u(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(u(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):u(t[a?a-1:0],t[a],t[n<a+1?n:a+1],t[n<a+2?n:a+2],i-a)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=r.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var r=e;r>1;r--)n*=r;return t[e]=n,n}}(),CatmullRom:function(t,e,n,r,i){var a=.5*(n-t),u=.5*(r-e),o=i*i;return(2*e-2*n+a+u)*(i*o)+(-3*e+3*n-2*a-u)*o+a*i+e}}};e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(){if("performance"in window==!1&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var t=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-t}}}();var r=function(){return"undefined"!=typeof window&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)}}(),i=function(){return"undefined"!=typeof window&&(window.cancelAnimationFrame||window.msCancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame)||function(t){clearTimeout(t)}}();e.requestAnimationFrame=r,e.cancelAnimationFrame=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={Linear:function(t){return t},QuadraticIn:function(t){return t*t},QuadraticOut:function(t){return t*(2-t)},QuadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},CubicIn:function(t){return t*t*t},CubicOut:function(t){return--t*t*t+1},CubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},QuarticIn:function(t){return t*t*t*t},QuarticOut:function(t){return 1- --t*t*t*t},QuarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},QuinticIn:function(t){return t*t*t*t*t},QuinticOut:function(t){return--t*t*t*t*t+1},QuinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},SinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},SinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},SinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},ExponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},ExponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},ExponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},CircularIn:function(t){return 1-Math.sqrt(1-t*t)},CircularOut:function(t){return Math.sqrt(1- --t*t)},CircularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},ElasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},ElasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},ElasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},BackIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},BackOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},BackInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},BounceIn:function(t){return 1-r.BounceOut(1-t)},BounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},BounceInOut:function(t){return t<.5?.5*r.BounceIn(2*t):.5*r.BounceOut(2*t-1)+.5}};e.default=r},function(t,e,n){"use strict";function r(t,e){var n=t?e.length:0;if(n>0)for(;n--;){var r=e[n];Array.prototype.splice.call(t,r,1)}return t}function i(t,e){var n=[];if(!t||!t.length)return n;if("function"==typeof e){for(var i=-1,a=[],u=t.length;++i<u;){var o=t[i];e(o,i,t)&&(n.push(o),a.push(i))}r(t,a)}return n}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Array.isArray(t))return t;var n=e.type,r=void 0===n?"":n,i=e.range,o=void 0===i?[0,1]:i,s=e.min,l=void 0===s?Math.min.apply(Math,t):s,f=e.max,c=void 0===f?Math.max.apply(Math,t):f;r=r.toLowerCase();for(var h=[],p=c-l,d=-1,v=t.length;++d<v;){var _=t[d];_>c&&(_=c),_<l&&(_=l);var y=void 0;y="log"!==r?(_-l)/p:Math.log10(_),h.push(y)}"log"===r&&(h=a(h));var m=u(o,2),g=m[0],b=m[1];if(0!==g||1!==b){for(var A=-1,O=h.length,w=b-g,I=[];++A<O;){var E=h[A],C=w*E+g;I.push(C)}h=I}return h}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&o.return&&o.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default={remove:i,normalize:a}},function(t,e,n){"use strict";n(15)},function(t,e,n){"use strict";n(16)},,function(t,e,n){"use strict";var r=n(3),i=r.Animation,a=r.Clip;n(9),n(10),t.exports.default={Animation:i,Clip:a},t.exports.Animation=i,t.exports.Clip=a},function(t,e,n){"use strict";function r(t){return t=Math.round(t),t<0?0:t>255?255:t}function i(t){return t<0?0:t>1?1:t}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&o.return&&o.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=n(14),o=function(t){return t&&t.__esModule?t:{default:t}}(u),s=o.default.parseCSSColor,l={isColor:function(t){if("string"==typeof t)return!!(0,o.default)(t);if(Array.isArray(t)){for(var e=0,n=t.length;e<n;){var r=t[e++];if("string"!=typeof r)return!1;if(!s(r))return!1}return!0}return!1},toColorIncrease:function(t){return[t[0]||0,t[1]||0,t[2]||0,t[3]||0]},toNormal:function(t){if(Array.isArray(t)){for(var e=[],n=0,r=t.length;n<r;){var i=t[n++];if("string"!=typeof i)return null;var a=s(i);if(!a)return null;e.push(a)}return e}return"string"==typeof t?s(t):null},toNormalArray:function(t){if(Array.isArray(t)){for(var e=[],n=0,r=t.length;n<r;){var i=t[n++];if("string"!=typeof i)return null;var a=s(i);if(!a)return null;e.push(a)}return e}return"string"==typeof t?[s(t)]:null},linearGradient:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.Utils.Linear,r=t.length-1,i=r*e,u=i>>0,o=n,s=t[u],f=t[u+1>r?r:u+1],c=i-u;return function(t,e,n){var r=a(t,4),i=r[0],u=r[1],s=r[2],l=r[3],f=a(e,4),c=f[0],h=f[1],p=f[2],d=f[3];return[o(i,c,n)>>0,o(u,h,n)>>0,o(s,p,n)>>0,o(l,d,n)]}(s,f,c)},mixColors:function(t,e){var n=this.toNormal(t);if(Array.isArray(e)&&n){var a=[r(n[0]+e[0]||0),r(n[1]+e[1]||0),r(n[2]+e[2]||0),i(n[3]+e[3]||0)];return"rgba("+[a[0],a[1],a[2],a[3]].join(",")+")"}return t},toRGBA:function(t){if(t&&t.length>=3){var e=void 0===t[3]?1:t[3];return"rgba("+r(t[0])+","+r(t[1])+","+r(t[2])+","+i(e)+")"}return"transparent"},Utils:{Linear:function(t,e,n){return(e-t)*n+t}}};e.default=l},function(t,e,n){"use strict";function r(t){return t=Math.round(t),t<0?0:t>255?255:t}function i(t){return t<0?0:t>1?1:t}function a(t){return r("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function u(t){return i("%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))}function o(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function s(t){var e=t.replace(/ /g,"").toLowerCase();if(e in l)return l[e].slice();if("#"===e[0]){if(4===e.length){var n=parseInt(e.substr(1),16);return n>=0&&n<=4095?[(3840&n)>>4|(3840&n)>>8,240&n|(240&n)>>4,15&n|(15&n)<<4,1]:null}if(7===e.length){var n=parseInt(e.substr(1),16);return n>=0&&n<=16777215?[(16711680&n)>>16,(65280&n)>>8,255&n,1]:null}return null}var i=e.indexOf("("),s=e.indexOf(")");if(-1!==i&&s+1===e.length){var f=e.substr(0,i),c=e.substr(i+1,s-(i+1)).split(","),h=1;switch(f){case"rgba":if(4!==c.length)return null;h=u(c.pop());case"rgb":return 3!==c.length?null:[a(c[0]),a(c[1]),a(c[2]),h];case"hsla":if(4!==c.length)return null;h=u(c.pop());case"hsl":if(3!==c.length)return null;var p=(parseFloat(c[0])%360+360)%360/360,d=u(c[1]),v=u(c[2]),_=v<=.5?v*(d+1):v+d-v*d,y=2*v-_;return[r(255*o(y,_,p+1/3)),r(255*o(y,_,p)),r(255*o(y,_,p-1/3)),h];default:return null}}return null}var l={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};try{e.parseCSSColor=s}catch(t){}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=r(i),u=n(13),o=r(u),s={type:"color",test:function(t,e){return o.default.isColor(t)},parse:function(t,e){return o.default.toNormalArray(t)},valueOf:function(t,e,n,r){var i=o.default.linearGradient(t,e);return i=o.default.toRGBA(i)}};a.default.registerPlugin(s),e.default=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=0,n=t.length,r=0,i=[],a=[],u=0;e<n-1;){var o=t[e],s=t[e+1],f=l.default.distance(o,s);r+=f,u=l.default.getAngle(s,o),i.push(o),a.push({length:r,segmentLength:f,segment:[o.slice(),s.slice()],path:i.slice(),angle:u}),e++}return a.sum=r,a}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,a=t}finally{try{!r&&o.return&&o.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=n(0),o=r(u),s=n(17),l=r(s),f={type:"coordinate-2d",test:function(t,e){var n=!1;if(Array.isArray(t))for(var r=-1,i=t.length;++r<i;){var u=t[r];if(Array.isArray(u)){var o=a(u,2),s=o[0],l=o[1],f=[+s,+l];s=f[0],l=f[1],n="number"==typeof s&&"number"==typeof l&&isFinite(s)&&isFinite(l)}}return n},parse:function(t,e){for(var n=[],r=-1,u=t.length;++r<u;){var o=t[r],s=a(o,2),l=s[0],f=s[1],c=[+l,+f];l=c[0],f=c[1],n.push([l,f])}return i(n)},valueOf:function(t,e,n,r){for(var i=t.sum,u=i*e,o=-1,s=t.length,f=t[0];++o<s;){var c=t[o];if(u<=c.length){f=c;break}}var h=a(f.segment,2),p=h[0],d=h[1],v=0;v=0==o?u:u-t[o-1].length;var _=v/f.segmentLength,y=l.default.create(),m=l.default.create();return l.default.sub(y,d,p),l.default.scaleAndAdd(m,p,y,_),m.step=f,m}};o.default.registerPlugin(f),e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="undefined"==typeof Float32Array?Array:Float32Array,i={create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new r(2);return n[0]=t,n[1]=e,n},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t},clone:function(t){var e=new r(2);return e[0]=t[0],e[1]=t[1],e},set:function(t,e,n){return t[0]=e,t[1]=n,t},add:function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t},scaleAndAdd:function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t},sub:function(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t},length:function(t){return Math.sqrt(this.lengthSquare(t))},lengthSquare:function(t){return t[0]*t[0]+t[1]*t[1]},multiply:function(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t},divide:function(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t},normalize:function(t,e){var n=this.len(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t},distance:function(t,e){return Math.sqrt(this.distanceSquare(t,e))},distanceSquare:function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])},negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:function(t,e,n,r){return t[0]=e[0]+r*(n[0]-e[0]),t[1]=e[1]+r*(n[1]-e[1]),t},applyTransform:function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i+n[4],t[1]=n[1]*r+n[3]*i+n[5],t},min:function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t},max:function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t},getAngle:function(t,e){var n=0;return 0!=t[0]-e[0]&&(n=Math.atan2(t[1]-e[1],t[0]-e[0])),n}};i.len=i.length,i.lenSquare=i.lengthSquare,i.dist=i.distance,i.distSquare=i.distanceSquare,e.default=i}])});