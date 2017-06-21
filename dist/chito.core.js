!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Chito",[],e):"object"==typeof exports?exports.Chito=e():t.Chito=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={UPDATE:"update",START:"start",REPEAT_COMPLETE:"repeatComplete",AFTER_UPDATE:"afterUpdate",COMPLETE:"complete",PAUSE:"pause",STOP:"stop",RESET:"reset"},r={DURATION:"duration",REPEAT:"repeat",DELAY:"delay",EASING:"easing",INTERVAL:"interval",YOYO:"yoyo",START:"startAt"},u={LINEAR:"Linear",QUADRATIC_IN:"QuadraticIn",QUADRATIC_OUT:"QuadraticOut",QUADRATIC_IN_OUT:"QuadraticInOut",CUBIC_IN:"CubicIn",CUBIC_OUT:"CubicOut",CUBIC_IN_OUT:"CubicInOut",QUARTIC_IN:"QuarticIn",QUARTIC_OUT:"QuarticOut",QUARTIC_IN_OUT:"QuarticInOut",QUINTIC_IN:"QuinticIn",QUINTIC_OUT:"QuinticOut",QUINTIC_IN_OUT:"QuinticInOut",SINUSOIDAL_IN:"SinusoidalIn",SINUSOIDAL_OUT:"SinusoidalOut",SINUSOIDAL_IN_OUT:"SinusoidalInOut",EXPONENTIAL_IN:"ExponentialIn",EXPONENTIAL_OUT:"ExponentialOut",EXPONENTIAL_IN_OUT:"ExponentialInOut",CIRCULAR_IN:"CircularIn",CIRCULAR_OUT:"CircularOut",CIRCULAR_IN_OUT:"CircularInOut",ELASTIC_IN:"ElasticIn",ELASTIC_OUT:"ElasticOut",ELASTIC_IN_OUT:"ElasticInOut",BACK_IN:"BackIn",BACK_OUT:"BackOut",BACK_IN_OUT:"BackInOut",BOUNCE_IN:"BounceIn",BOUNCE_OUT:"BounceOut",BOUNCE_IN_OUT:"BounceInOut"};e.Ev=i,e.Attr=r,e.Easing=u},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=function(){function t(){i(this,t),this.__events__={},this.__id__=Math.random()*Date.now()}return r(t,[{key:"on",value:function(t,e){var n=this.__events__;return n[t]=n[t]||[],n[t].push(e),this}},{key:"once",value:function(t,e){var n=this,i=function i(){for(var r=arguments.length,u=Array(r),a=0;a<r;a++)u[a]=arguments[a];n.off(t,i),e.apply(n,u)};return i.listener=e,this.on(t,i)}},{key:"off",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.__events__;if(!t)return this.__events__={},this;if(!e)return delete n[t],this;var i=n[t];if(i)for(var r=i.length-1;r>=0;){var u=i[r];u!==e&&u!=u.listener||i.splice(r,1),r--}return this}},{key:"emit",value:function(t){var e=this.__events__[t];if(e){for(var n=0,i=e.length,r=arguments.length,u=Array(r>1?r-1:0),a=1;a<r;a++)u[a-1]=arguments[a];for(;n<i;){e[n++].apply(this,u)}}return this}},{key:"events",get:function(){return this.__events__}}]),t}();e.default=u},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Clip=e.Animation=void 0;var r=n(4),u=i(r),a=n(3),o=i(a);e.default={Animation:u.default,Clip:o.default},e.Animation=u.default,e.Clip=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(1),c=i(s),l=n(7),f=i(l),_=n(5),p=i(_),h=n(0),v=function(t){function e(t,n){r(this,e);var i=u(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i._options={},i._attr={},i._duration=0,i._delay=0,i._interval=0,i._repeat_0=0,i._repeat=0,i._easing=null,i._yoyo=!1,i._startAt=0,i._stopped=!0,i._paused=!1,i._startTime=0,i._pauseStart=0,i._pauseTime=0,i._reversed=!1,i._chainClips=[],i._tracks=[],i._interpolation=p.default.Linear,i._animation=null,i._options=t||{},i._attr=n,i._initOption(t),i._tracks=i._transform(n),i}return a(e,t),o(e,[{key:"_initOption",value:function(t){var e=t[h.Attr.EASING]||h.Easing.LINEAR;this._easing=f.default[e]?f.default[e]:e,this._delay=t[h.Attr.DELAY]||0;var n=t[h.Attr.DURATION];this._duration=void 0===n?1e3:n,this._repeat_0=this._repeat=t[h.Attr.REPEAT]||1,this._interval=t[h.Attr.INTERVAL]||0,this._yoyo=t[h.Attr.YOYO]||!1,this._startAt=t[h.Attr.START]||0}},{key:"_transform",value:function(t){var e=this.constructor._plugins,n=[];for(var i in t)if(t.hasOwnProperty(i)){var r=t[i];for(var u in e){var a=e[u];if(a.test(r,i)){r=a.parse(r,i),r.__type__=a.type;break}}n.push({key:i,value:r})}return n}},{key:"_getOption",value:function(){return{options:this._options,attr:this._attr}}},{key:"start",value:function(t){var e=window.performance.now();if(this._paused)this._pauseTime+=e-this._pauseStart,this._paused=!1;else{if(!t&&!this._stopped)return this;this._stopped=!1,this._startTime=e+this._delay}return this.emit(h.Ev.START,this._getOption()),this}},{key:"stop",value:function(t){return this._stopped||(this._stopped=!0,this._paused=!1,this._pauseTime=0,this._pauseStart=0,this.emit(h.Ev.STOP,this._getOption()),this.stopChain()),t&&(this._repeat=this._repeat_0),this}},{key:"pause",value:function(){return this._stopped||this._paused?this:(this._paused=!0,this._pauseStart=window.performance.now(),this.emit(h.Ev.PAUSE,this._getOption()),this)}},{key:"update",value:function(t){if(this._stopped)return!0;if(this._paused||t&&t<this._startTime)return!0;var e=t-this._pauseTime,n=this._getProgress(e),i=n.progress,r=n.elapsed,u=this._updateAttr(i,r);return this.emit(h.Ev.UPDATE,i,u,this._getOption()),this._afterUpdate(e,r)}},{key:"_getProgress",value:function(t){var e=(t-this._startTime)/this._duration;return e+=this._startAt,e=Math.min(e,1),{progress:this._easing(this._reversed?1-e:e),elapsed:e}}},{key:"_updateAttr",value:function(t,e){for(var n=this._tracks,i={},r=0,u=n.length;r<u;){var a=n[r++],o=a.key,s=a.value,c=s.__type__;if(c){s=this.constructor._plugins[c].valueOf(s,t,e,o)}else s=this._interpolation(s,t);i[o]=s}return i}},{key:"_afterUpdate",value:function(t,e){if(1==e){var n=this._repeat;if(n>1)return isFinite(n)&&n--,this._startTime=t+this._interval,this._startAt=0,this._yoyo&&(this._reversed=!this._reversed),this.emit(h.Ev.REPEAT_COMPLETE,n,this._getOption()),this._repeat=n,!0;this.emit(h.Ev.COMPLETE,this._getOption());for(var i=-1,r=this._chainClips,u=r.length;++i<u;){var a=r[i],o=this._animation;o&&o.addClip(a),a.start()}return this._stopped=!0,this._pauseTime=0,this._pauseStart=0,this._repeat=this._repeat_0,!1}return!0}},{key:"chain",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this._chainClips=e,this}},{key:"stopChain",value:function(){for(var t=-1,e=this._chainClips,n=e.length;++t<n;){e[t].stop()}return this}},{key:"destroy",value:function(){this._stopped=!0,this._paused=!1,this._startTime=0,this._pauseTime=0,this._pauseStart=0,this._chainClips=[];var t=this._animation;t&&t.removeClip(this),this._animation=null,this.off()}}]),e}(c.default);v._plugins=null,v.Event=h.Ev,v.Attr=h.Attr,v.Easing=h.Easing,v.registerPlugin=function(t){var e=t.type,n=v._plugins;n&&n[e]||(v._plugins=n||{},v._plugins[e]=t)},e.default=v},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(1),c=i(s),l=n(8),f=i(l),_=n(6),p=n(0),h=function(t){function e(t){r(this,e);var n=u(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n._options={},n._savedClips=[],n._clips=[],n._timer=null,n._options=t||{},n}return a(e,t),o(e,[{key:"_startAni",value:function(){var t=this,e=function e(n){t._timer=(0,_.requestAnimationFrame)(e),t._update(n)};this._timer=(0,_.requestAnimationFrame)(e)}},{key:"_stopAni",value:function(){var t=this._timer;return!!t&&((0,_.cancelAnimationFrame)(t),this._timer=null,!0)}},{key:"_update",value:function(t){var e=this._clips;this.emit(p.Ev.UPDATE,e);for(var n=0;n<e.length;){var i=e[n];i.update(t)?n++:(i._animation=null,e.splice(n,1))}this._clips=e,this.emit(p.Ev.AFTER_UPDATE,e),0==e.length&&(this._stopAni(),this.emit(p.Ev.COMPLETE))}},{key:"start",value:function(){var t=this._clips,e=t.length;if(this._timer||0==e)return this;for(var n=-1;++n<e;){t[n].start()}return this.emit(p.Ev.START),this._startAni(),this}},{key:"stop",value:function(){return this._stop(!1),this}},{key:"pause",value:function(){return this._stop(!0),this}},{key:"reset",value:function(){for(var t=-1,e=this._savedClips,n=e.length;++t<n;){e[t].stop(!0)}return this._clips=e.slice(),this.emit(p.Ev.RESET),this}},{key:"_stop",value:function(t,e){this._stopAni();var n=this._clips,i=n.length;if(i){for(var r=-1;++r<i;){var u=n[r];t?u.pause():u.stop(e)}this.emit(t?p.Ev.PAUSE:p.Ev.STOP)}}},{key:"addClip",value:function(t){Array.isArray(t)||(t=[t]);for(var e=-1,n=t.length;++e<n;){var i=t[e];i._animation=this,this._clips.push(i),this._savedClips.push(i)}return this}},{key:"removeClip",value:function(t){var e=this._clips,n=this._savedClips;if(t)f.default.remove(e,function(e){return e===t}),f.default.remove(n,function(e){return e===t}),t._animation=null;else{for(var i=-1,r=n.length;++i<r;){n[i]._animation=null}this._clips=[],this._savedClips=[]}return this}},{key:"getClips",value:function(){return this._clips}},{key:"destroy",value:function(){this._stopAni(),this.removeClip(),this.off()}}]),e}(c.default);h.Event=p.Ev,e.default=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={Linear:function(t,e){var n=t.length-1,r=n*e,u=Math.floor(r),a=i.Utils.Linear;return e<0?a(t[0],t[1],r):e>1?a(t[n],t[n-1],n-r):a(t[u],t[u+1>n?n:u+1],r-u)},Bezier:function(t,e){for(var n=0,r=t.length-1,u=Math.pow,a=i.Utils.Bernstein,o=0;o<=r;o++)n+=u(1-e,r-o)*u(e,o)*t[o]*a(r,o);return n},CatmullRom:function(t,e){var n=t.length-1,r=n*e,u=Math.floor(r),a=i.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(u=Math.floor(r=n*(1+e))),a(t[(u-1+n)%n],t[u],t[(u+1)%n],t[(u+2)%n],r-u)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[n]-(a(t[n],t[n],t[n-1],t[n-1],r-n)-t[n]):a(t[u?u-1:0],t[u],t[n<u+1?n:u+1],t[n<u+2?n:u+2],r-u)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=i.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,r){var u=.5*(n-t),a=.5*(i-e),o=r*r;return(2*e-2*n+u+a)*(r*o)+(-3*e+3*n-2*u-a)*o+u*r+e}}};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(){if("performance"in window==!1&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var t=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-t}}}();var i=function(){return"undefined"!=typeof window&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)}}(),r=function(){return"undefined"!=typeof window&&(window.cancelAnimationFrame||window.msCancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame)||function(t){clearTimeout(t)}}();e.requestAnimationFrame=i,e.cancelAnimationFrame=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={Linear:function(t){return t},QuadraticIn:function(t){return t*t},QuadraticOut:function(t){return t*(2-t)},QuadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},CubicIn:function(t){return t*t*t},CubicOut:function(t){return--t*t*t+1},CubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},QuarticIn:function(t){return t*t*t*t},QuarticOut:function(t){return 1- --t*t*t*t},QuarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},QuinticIn:function(t){return t*t*t*t*t},QuinticOut:function(t){return--t*t*t*t*t+1},QuinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},SinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},SinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},SinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},ExponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},ExponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},ExponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},CircularIn:function(t){return 1-Math.sqrt(1-t*t)},CircularOut:function(t){return Math.sqrt(1- --t*t)},CircularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},ElasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},ElasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},ElasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},BackIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},BackOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},BackInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},BounceIn:function(t){return 1-i.BounceOut(1-t)},BounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},BounceInOut:function(t){return t<.5?.5*i.BounceIn(2*t):.5*i.BounceOut(2*t-1)+.5}};e.default=i},function(t,e,n){"use strict";function i(t,e){var n=t?e.length:0;if(n>0)for(;n--;){var i=e[n];Array.prototype.splice.call(t,i,1)}return t}function r(t,e){var n=[];if(!t||!t.length)return n;if("function"==typeof e){for(var r=-1,u=[],a=t.length;++r<a;){var o=t[r];e(o,r,t)&&(n.push(o),u.push(r))}i(t,u)}return n}function u(t){return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default={remove:r,clone:u}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Clip=e.Animation=void 0;var i=n(2);e.default={Animation:i.Animation,Clip:i.Clip},e.Animation=i.Animation,e.Clip=i.Clip}])});