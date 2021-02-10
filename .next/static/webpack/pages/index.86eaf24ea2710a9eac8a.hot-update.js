webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, freeze, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return sn; });
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[Q]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);return!t||t===Object.prototype}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(r){return t(r)||n(23,r),r[Q].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Z)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=nn(n);delete t[Q];for(var r=Z(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=tn[t];return r||n(18,t),r}function m(n,t){tn[n]||(tn[n]=t)}function _(){return false||U||n(0),U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.g=!0}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.O||b("ES5").S(e,t,o),o?(i[Q].P&&(g(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r)}function z(n,t){var r=n[Q];return(r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function E(n){n.P||(n.P=!0,n.l&&E(n.l))}function k(n){n.o||(n.o=l(n.t))}function R(n,t,r){var e=s(t)?b("MapSet").T(t,r):v(t)?b("MapSet").F(t,r):n.O?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=rn;r&&(i=[e],o=en);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return(r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=N(t,c),u.I=!1}else e=N(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r))})),3===c?new Set(e):e}(e)}function N(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function T(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return true&&f(t),rn.get(t,n)},set:function(t){var r=this[Q]; true&&f(r),rn.set(r,n,t)}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&E(r);break;case 4:o(r)&&E(r)}}}function o(n){for(var t=n.t,r=n.k,e=Z(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!t[Q];return e.length!==Z(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function f(t){t.g&&n(3,JSON.stringify(p(t)))}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=nn(t);delete o[Q];for(var u=Z(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,E(r)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,E(r))}));else if(5===c){if(a(r)&&(E(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function F(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++)"object"!=typeof(f=a(f,i[s]))&&n(15,i.join("/"));var v=o(f),p=e(r.value),l=i[i.length-1];switch(u){case"replace":switch(v){case 2:return f.set(l,p);case 3:n(16);default:return f[l]=p}case c:switch(v){case 1:return f.splice(l,0,p);case 2:return f.set(l,p);case 3:return f.add(p);default:return f[l]=p}case"remove":switch(v){case 1:return f.splice(l,1);case 2:return f.delete(l);case 3:return f.delete(r.value);default:return delete f[l]}default:n(17,u)}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length})}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function t(n,t){function r(){this.constructor=n}a(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=R(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function u(t){t.g&&n(3,JSON.stringify(p(t)))}var a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function n(n,t){return this[Q]={i:2,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,g:!1},this}t(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,t){var r=this[Q];return u(r),p(r).has(n)&&p(r).get(n)===t||(e(r),E(r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),e(t),E(t),t.D.set(n,!1),t.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),E(n),n.D=new Map,i(n.t,(function(t){n.D.set(t,!1)})),n.o.clear())},o.forEach=function(n,t){var r=this;p(this[Q]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},o.get=function(n){var t=this[Q];u(t);var i=p(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var o=R(t.A.h,i,t);return e(t),t.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},o.entries=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,t){return this[Q]={i:3,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(n){var t=this[Q];return u(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[Q];return u(t),this.has(n)||(o(t),E(t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),o(t),E(t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),E(n),n.o.clear())},r.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},r.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();m("MapSet",{T:function(n,t){return new f(n,t)},F:function(n,t){return new c(n,t)}})}function J(){T(),C(),F()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n}},Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,nn=Object.getOwnPropertyDescriptors||function(n){var t={};return Z(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},tn={},rn={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(k(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return!0;k(n),E(n)}return n.o[t]=r,n.D[t]=!0,!0},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,k(n),E(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},en={};i(rn,(function(n,t){en[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),en.deleteProperty=function(t,r){return true&&isNaN(parseInt(r))&&n(13),rn.deleteProperty.call(this,t[0],r)},en.set=function(t,r,e){return true&&"length"!==r&&isNaN(parseInt(r))&&n(14),rn.set.call(this,t[0],r,e,t[0])};var on=function(){function e(n){this.O=B,this.N=!0,"boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return(r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=w(this),c=R(this,t,void 0),s=!0;try{a=e(c),s=!1}finally{s?g(f):O(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(f,i),P(n,f)}),(function(n){throw g(f),n})):(j(f,i),P(a,f))}if(!t||"object"!=typeof t){if((a=e(t))===H)return;return void 0===a&&(a=t),this.N&&d(a,!0),a}n(21,t)},i.produceWithPatches=function(n,t){var r,e,i=this;return"function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t})),r,e]},i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(t,r){var e=t&&t[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.N=n},i.setUseProxies=function(t){t&&!B&&n(20),this.O=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),un=new on,an=un.produce,fn=un.produceWithPatches.bind(un),cn=un.setAutoFreeze.bind(un),sn=un.setUseProxies.bind(un),vn=un.applyPatches.bind(un),pn=un.createDraft.bind(un),ln=un.finishDraft.bind(un);/* harmony default export */ __webpack_exports__["default"] = (an);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");



var initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image()
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.sentence()
      }]
    };
  });
};
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: '제로초'
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '제로초'
    }
  };
}; // 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          });
          post.Comments.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break; // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
          // const post = { ...state.mainPosts[postIndex] };
          // post.Comments = [dummyComment(action.data.content), ...post.Comments];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = post;
          // return {
          //   ...state,
          //   mainPosts,
          //   addCommentLoading: false,
          //   addCommentDone: true,
          // };
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: '제로초',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: '부기초'
    }, {
      nickname: 'Chanho Lee'
    }, {
      nickname: 'neue zeal'
    }],
    Followers: [{
      nickname: '부기초'
    }, {
      nickname: 'Chanho Lee'
    }, {
      nickname: 'neue zeal'
    }]
  });
};

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.me.Followings.push({
          id: action.data
        });
        draft.followDone = true;
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data;
        });
        draft.unfollowDone = true;
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = dummyUser(action.data);
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //   },
      // };

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsInBvc3RJZCIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dp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QUFDRTtBQXhHSjtBQTBHRCxHQTNHd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUE2R2VLLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2ZWFmMjRlYTI3MTBhOWVhYzhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBuKG4pe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHI9QXJyYXkodD4xP3QtMTowKSxlPTE7ZTx0O2UrKylyW2UtMV09YXJndW1lbnRzW2VdO2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBpPVlbbl0sbz1pP1wiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShudWxsLHIpOmk6XCJ1bmtub3duIGVycm9yIG5yOiBcIituO3Rocm93IEVycm9yKFwiW0ltbWVyXSBcIitvKX10aHJvdyBFcnJvcihcIltJbW1lcl0gbWluaWZpZWQgZXJyb3IgbnI6IFwiK24rKHIubGVuZ3RoP1wiIFwiK3IubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIidcIituK1wiJ1wifSkpLmpvaW4oXCIsXCIpOlwiXCIpK1wiLiBGaW5kIHRoZSBmdWxsIGVycm9yIGF0OiBodHRwczovL2JpdC5seS8zY1hFS1dmXCIpfWZ1bmN0aW9uIHQobil7cmV0dXJuISFuJiYhIW5bUV19ZnVuY3Rpb24gcihuKXtyZXR1cm4hIW4mJihmdW5jdGlvbihuKXtpZighbnx8XCJvYmplY3RcIiE9dHlwZW9mIG4pcmV0dXJuITE7dmFyIHQ9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO3JldHVybiF0fHx0PT09T2JqZWN0LnByb3RvdHlwZX0obil8fEFycmF5LmlzQXJyYXkobil8fCEhbltMXXx8ISFuLmNvbnN0cnVjdG9yW0xdfHxzKG4pfHx2KG4pKX1mdW5jdGlvbiBlKHIpe3JldHVybiB0KHIpfHxuKDIzLHIpLHJbUV0udH1mdW5jdGlvbiBpKG4sdCxyKXt2b2lkIDA9PT1yJiYocj0hMSksMD09PW8obik/KHI/T2JqZWN0LmtleXM6WikobikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ciYmXCJzeW1ib2xcIj09dHlwZW9mIGV8fHQoZSxuW2VdLG4pfSkpOm4uZm9yRWFjaCgoZnVuY3Rpb24ocixlKXtyZXR1cm4gdChlLHIsbil9KSl9ZnVuY3Rpb24gbyhuKXt2YXIgdD1uW1FdO3JldHVybiB0P3QuaT4zP3QuaS00OnQuaTpBcnJheS5pc0FycmF5KG4pPzE6cyhuKT8yOnYobik/MzowfWZ1bmN0aW9uIHUobix0KXtyZXR1cm4gMj09PW8obik/bi5oYXModCk6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sdCl9ZnVuY3Rpb24gYShuLHQpe3JldHVybiAyPT09byhuKT9uLmdldCh0KTpuW3RdfWZ1bmN0aW9uIGYobix0LHIpe3ZhciBlPW8obik7Mj09PWU/bi5zZXQodCxyKTozPT09ZT8obi5kZWxldGUodCksbi5hZGQocikpOm5bdF09cn1mdW5jdGlvbiBjKG4sdCl7cmV0dXJuIG49PT10PzAhPT1ufHwxL249PTEvdDpuIT1uJiZ0IT10fWZ1bmN0aW9uIHMobil7cmV0dXJuIFgmJm4gaW5zdGFuY2VvZiBNYXB9ZnVuY3Rpb24gdihuKXtyZXR1cm4gcSYmbiBpbnN0YW5jZW9mIFNldH1mdW5jdGlvbiBwKG4pe3JldHVybiBuLm98fG4udH1mdW5jdGlvbiBsKG4pe2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pO3ZhciB0PW5uKG4pO2RlbGV0ZSB0W1FdO2Zvcih2YXIgcj1aKHQpLGU9MDtlPHIubGVuZ3RoO2UrKyl7dmFyIGk9cltlXSxvPXRbaV07ITE9PT1vLndyaXRhYmxlJiYoby53cml0YWJsZT0hMCxvLmNvbmZpZ3VyYWJsZT0hMCksKG8uZ2V0fHxvLnNldCkmJih0W2ldPXtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsZW51bWVyYWJsZTpvLmVudW1lcmFibGUsdmFsdWU6bltpXX0pfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSx0KX1mdW5jdGlvbiBkKG4sZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSx5KG4pfHx0KG4pfHwhcihuKT9uOihvKG4pPjEmJihuLnNldD1uLmFkZD1uLmNsZWFyPW4uZGVsZXRlPWgpLE9iamVjdC5mcmVlemUobiksZSYmaShuLChmdW5jdGlvbihuLHQpe3JldHVybiBkKHQsITApfSksITApLG4pfWZ1bmN0aW9uIGgoKXtuKDIpfWZ1bmN0aW9uIHkobil7cmV0dXJuIG51bGw9PW58fFwib2JqZWN0XCIhPXR5cGVvZiBufHxPYmplY3QuaXNGcm96ZW4obil9ZnVuY3Rpb24gYih0KXt2YXIgcj10blt0XTtyZXR1cm4gcnx8bigxOCx0KSxyfWZ1bmN0aW9uIG0obix0KXt0bltuXXx8KHRuW25dPXQpfWZ1bmN0aW9uIF8oKXtyZXR1cm5cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WfHxVfHxuKDApLFV9ZnVuY3Rpb24gaihuLHQpe3QmJihiKFwiUGF0Y2hlc1wiKSxuLnU9W10sbi5zPVtdLG4udj10KX1mdW5jdGlvbiBnKG4pe08obiksbi5wLmZvckVhY2goUyksbi5wPW51bGx9ZnVuY3Rpb24gTyhuKXtuPT09VSYmKFU9bi5sKX1mdW5jdGlvbiB3KG4pe3JldHVybiBVPXtwOltdLGw6VSxoOm4sbTohMCxfOjB9fWZ1bmN0aW9uIFMobil7dmFyIHQ9bltRXTswPT09dC5pfHwxPT09dC5pP3QuaigpOnQuZz0hMH1mdW5jdGlvbiBQKHQsZSl7ZS5fPWUucC5sZW5ndGg7dmFyIGk9ZS5wWzBdLG89dm9pZCAwIT09dCYmdCE9PWk7cmV0dXJuIGUuaC5PfHxiKFwiRVM1XCIpLlMoZSx0LG8pLG8/KGlbUV0uUCYmKGcoZSksbig0KSkscih0KSYmKHQ9TShlLHQpLGUubHx8eChlLHQpKSxlLnUmJmIoXCJQYXRjaGVzXCIpLk0oaVtRXSx0LGUudSxlLnMpKTp0PU0oZSxpLFtdKSxnKGUpLGUudSYmZS52KGUudSxlLnMpLHQhPT1IP3Q6dm9pZCAwfWZ1bmN0aW9uIE0obix0LHIpe2lmKHkodCkpcmV0dXJuIHQ7dmFyIGU9dFtRXTtpZighZSlyZXR1cm4gaSh0LChmdW5jdGlvbihpLG8pe3JldHVybiBBKG4sZSx0LGksbyxyKX0pLCEwKSx0O2lmKGUuQSE9PW4pcmV0dXJuIHQ7aWYoIWUuUClyZXR1cm4geChuLGUudCwhMCksZS50O2lmKCFlLkkpe2UuST0hMCxlLkEuXy0tO3ZhciBvPTQ9PT1lLml8fDU9PT1lLmk/ZS5vPWwoZS5rKTplLm87aSgzPT09ZS5pP25ldyBTZXQobyk6bywoZnVuY3Rpb24odCxpKXtyZXR1cm4gQShuLGUsbyx0LGkscil9KSkseChuLG8sITEpLHImJm4udSYmYihcIlBhdGNoZXNcIikuUihlLHIsbi51LG4ucyl9cmV0dXJuIGUub31mdW5jdGlvbiBBKGUsaSxvLGEsYyxzKXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZjPT09byYmbig1KSx0KGMpKXt2YXIgdj1NKGUsYyxzJiZpJiYzIT09aS5pJiYhdShpLkQsYSk/cy5jb25jYXQoYSk6dm9pZCAwKTtpZihmKG8sYSx2KSwhdCh2KSlyZXR1cm47ZS5tPSExfWlmKHIoYykmJiF5KGMpKXtpZighZS5oLk4mJmUuXzwxKXJldHVybjtNKGUsYyksaSYmaS5BLmx8fHgoZSxjKX19ZnVuY3Rpb24geChuLHQscil7dm9pZCAwPT09ciYmKHI9ITEpLG4uaC5OJiZuLm0mJmQodCxyKX1mdW5jdGlvbiB6KG4sdCl7dmFyIHI9bltRXTtyZXR1cm4ocj9wKHIpOm4pW3RdfWZ1bmN0aW9uIEkobix0KXtpZih0IGluIG4pZm9yKHZhciByPU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTtyOyl7dmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpO2lmKGUpcmV0dXJuIGU7cj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yocil9fWZ1bmN0aW9uIEUobil7bi5QfHwobi5QPSEwLG4ubCYmRShuLmwpKX1mdW5jdGlvbiBrKG4pe24ub3x8KG4ubz1sKG4udCkpfWZ1bmN0aW9uIFIobix0LHIpe3ZhciBlPXModCk/YihcIk1hcFNldFwiKS5UKHQscik6dih0KT9iKFwiTWFwU2V0XCIpLkYodCxyKTpuLk8/ZnVuY3Rpb24obix0KXt2YXIgcj1BcnJheS5pc0FycmF5KG4pLGU9e2k6cj8xOjAsQTp0P3QuQTpfKCksUDohMSxJOiExLEQ6e30sbDp0LHQ6bixrOm51bGwsbzpudWxsLGo6bnVsbCxDOiExfSxpPWUsbz1ybjtyJiYoaT1bZV0sbz1lbik7dmFyIHU9UHJveHkucmV2b2NhYmxlKGksbyksYT11LnJldm9rZSxmPXUucHJveHk7cmV0dXJuIGUuaz1mLGUuaj1hLGZ9KHQscik6YihcIkVTNVwiKS5KKHQscik7cmV0dXJuKHI/ci5BOl8oKSkucC5wdXNoKGUpLGV9ZnVuY3Rpb24gRChlKXtyZXR1cm4gdChlKXx8bigyMixlKSxmdW5jdGlvbiBuKHQpe2lmKCFyKHQpKXJldHVybiB0O3ZhciBlLHU9dFtRXSxjPW8odCk7aWYodSl7aWYoIXUuUCYmKHUuaTw0fHwhYihcIkVTNVwiKS5LKHUpKSlyZXR1cm4gdS50O3UuST0hMCxlPU4odCxjKSx1Lkk9ITF9ZWxzZSBlPU4odCxjKTtyZXR1cm4gaShlLChmdW5jdGlvbih0LHIpe3UmJmEodS50LHQpPT09cnx8ZihlLHQsbihyKSl9KSksMz09PWM/bmV3IFNldChlKTplfShlKX1mdW5jdGlvbiBOKG4sdCl7c3dpdGNoKHQpe2Nhc2UgMjpyZXR1cm4gbmV3IE1hcChuKTtjYXNlIDM6cmV0dXJuIEFycmF5LmZyb20obil9cmV0dXJuIGwobil9ZnVuY3Rpb24gVCgpe2Z1bmN0aW9uIHIobix0KXt2YXIgcj1zW25dO3JldHVybiByP3IuZW51bWVyYWJsZT10OnNbbl09cj17Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6dCxnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzW1FdO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYodCkscm4uZ2V0KHQsbil9LHNldDpmdW5jdGlvbih0KXt2YXIgcj10aGlzW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYocikscm4uc2V0KHIsbix0KX19LHJ9ZnVuY3Rpb24gZShuKXtmb3IodmFyIHQ9bi5sZW5ndGgtMTt0Pj0wO3QtLSl7dmFyIHI9blt0XVtRXTtpZighci5QKXN3aXRjaChyLmkpe2Nhc2UgNTphKHIpJiZFKHIpO2JyZWFrO2Nhc2UgNDpvKHIpJiZFKHIpfX19ZnVuY3Rpb24gbyhuKXtmb3IodmFyIHQ9bi50LHI9bi5rLGU9WihyKSxpPWUubGVuZ3RoLTE7aT49MDtpLS0pe3ZhciBvPWVbaV07aWYobyE9PVEpe3ZhciBhPXRbb107aWYodm9pZCAwPT09YSYmIXUodCxvKSlyZXR1cm4hMDt2YXIgZj1yW29dLHM9ZiYmZltRXTtpZihzP3MudCE9PWE6IWMoZixhKSlyZXR1cm4hMH19dmFyIHY9ISF0W1FdO3JldHVybiBlLmxlbmd0aCE9PVoodCkubGVuZ3RoKyh2PzA6MSl9ZnVuY3Rpb24gYShuKXt2YXIgdD1uLms7aWYodC5sZW5ndGghPT1uLnQubGVuZ3RoKXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCx0Lmxlbmd0aC0xKTtyZXR1cm4hKCFyfHxyLmdldCl9ZnVuY3Rpb24gZih0KXt0LmcmJm4oMyxKU09OLnN0cmluZ2lmeShwKHQpKSl9dmFyIHM9e307bShcIkVTNVwiLHtKOmZ1bmN0aW9uKG4sdCl7dmFyIGU9QXJyYXkuaXNBcnJheShuKSxpPWZ1bmN0aW9uKG4sdCl7aWYobil7Zm9yKHZhciBlPUFycmF5KHQubGVuZ3RoKSxpPTA7aTx0Lmxlbmd0aDtpKyspT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJcIitpLHIoaSwhMCkpO3JldHVybiBlfXZhciBvPW5uKHQpO2RlbGV0ZSBvW1FdO2Zvcih2YXIgdT1aKG8pLGE9MDthPHUubGVuZ3RoO2ErKyl7dmFyIGY9dVthXTtvW2ZdPXIoZixufHwhIW9bZl0uZW51bWVyYWJsZSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpLG8pfShlLG4pLG89e2k6ZT81OjQsQTp0P3QuQTpfKCksUDohMSxJOiExLEQ6e30sbDp0LHQ6bixrOmksbzpudWxsLGc6ITEsQzohMX07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFEse3ZhbHVlOm8sd3JpdGFibGU6ITB9KSxpfSxTOmZ1bmN0aW9uKG4scixvKXtvP3QocikmJnJbUV0uQT09PW4mJmUobi5wKToobi51JiZmdW5jdGlvbiBuKHQpe2lmKHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgcj10W1FdO2lmKHIpe3ZhciBlPXIudCxvPXIuayxmPXIuRCxjPXIuaTtpZig0PT09YylpKG8sKGZ1bmN0aW9uKHQpe3QhPT1RJiYodm9pZCAwIT09ZVt0XXx8dShlLHQpP2ZbdF18fG4ob1t0XSk6KGZbdF09ITAsRShyKSkpfSkpLGkoZSwoZnVuY3Rpb24obil7dm9pZCAwIT09b1tuXXx8dShvLG4pfHwoZltuXT0hMSxFKHIpKX0pKTtlbHNlIGlmKDU9PT1jKXtpZihhKHIpJiYoRShyKSxmLmxlbmd0aD0hMCksby5sZW5ndGg8ZS5sZW5ndGgpZm9yKHZhciBzPW8ubGVuZ3RoO3M8ZS5sZW5ndGg7cysrKWZbc109ITE7ZWxzZSBmb3IodmFyIHY9ZS5sZW5ndGg7djxvLmxlbmd0aDt2KyspZlt2XT0hMDtmb3IodmFyIHA9TWF0aC5taW4oby5sZW5ndGgsZS5sZW5ndGgpLGw9MDtsPHA7bCsrKXZvaWQgMD09PWZbbF0mJm4ob1tsXSl9fX19KG4ucFswXSksZShuLnApKX0sSzpmdW5jdGlvbihuKXtyZXR1cm4gND09PW4uaT9vKG4pOmEobil9fSl9ZnVuY3Rpb24gRigpe2Z1bmN0aW9uIGUobil7aWYoIXIobikpcmV0dXJuIG47aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gbi5tYXAoZSk7aWYocyhuKSlyZXR1cm4gbmV3IE1hcChBcnJheS5mcm9tKG4uZW50cmllcygpKS5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybltuWzBdLGUoblsxXSldfSkpKTtpZih2KG4pKXJldHVybiBuZXcgU2V0KEFycmF5LmZyb20obikubWFwKGUpKTt2YXIgdD1PYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSk7Zm9yKHZhciBpIGluIG4pdFtpXT1lKG5baV0pO3JldHVybiB0fWZ1bmN0aW9uIGYobil7cmV0dXJuIHQobik/ZShuKTpufXZhciBjPVwiYWRkXCI7bShcIlBhdGNoZXNcIix7JDpmdW5jdGlvbih0LHIpe3JldHVybiByLmZvckVhY2goKGZ1bmN0aW9uKHIpe2Zvcih2YXIgaT1yLnBhdGgsdT1yLm9wLGY9dCxzPTA7czxpLmxlbmd0aC0xO3MrKylcIm9iamVjdFwiIT10eXBlb2YoZj1hKGYsaVtzXSkpJiZuKDE1LGkuam9pbihcIi9cIikpO3ZhciB2PW8oZikscD1lKHIudmFsdWUpLGw9aVtpLmxlbmd0aC0xXTtzd2l0Y2godSl7Y2FzZVwicmVwbGFjZVwiOnN3aXRjaCh2KXtjYXNlIDI6cmV0dXJuIGYuc2V0KGwscCk7Y2FzZSAzOm4oMTYpO2RlZmF1bHQ6cmV0dXJuIGZbbF09cH1jYXNlIGM6c3dpdGNoKHYpe2Nhc2UgMTpyZXR1cm4gZi5zcGxpY2UobCwwLHApO2Nhc2UgMjpyZXR1cm4gZi5zZXQobCxwKTtjYXNlIDM6cmV0dXJuIGYuYWRkKHApO2RlZmF1bHQ6cmV0dXJuIGZbbF09cH1jYXNlXCJyZW1vdmVcIjpzd2l0Y2godil7Y2FzZSAxOnJldHVybiBmLnNwbGljZShsLDEpO2Nhc2UgMjpyZXR1cm4gZi5kZWxldGUobCk7Y2FzZSAzOnJldHVybiBmLmRlbGV0ZShyLnZhbHVlKTtkZWZhdWx0OnJldHVybiBkZWxldGUgZltsXX1kZWZhdWx0Om4oMTcsdSl9fSkpLHR9LFI6ZnVuY3Rpb24obix0LHIsZSl7c3dpdGNoKG4uaSl7Y2FzZSAwOmNhc2UgNDpjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBvPW4udCxzPW4ubztpKG4uRCwoZnVuY3Rpb24obixpKXt2YXIgdj1hKG8sbikscD1hKHMsbiksbD1pP3UobyxuKT9cInJlcGxhY2VcIjpjOlwicmVtb3ZlXCI7aWYodiE9PXB8fFwicmVwbGFjZVwiIT09bCl7dmFyIGQ9dC5jb25jYXQobik7ci5wdXNoKFwicmVtb3ZlXCI9PT1sP3tvcDpsLHBhdGg6ZH06e29wOmwscGF0aDpkLHZhbHVlOnB9KSxlLnB1c2gobD09PWM/e29wOlwicmVtb3ZlXCIscGF0aDpkfTpcInJlbW92ZVwiPT09bD97b3A6YyxwYXRoOmQsdmFsdWU6Zih2KX06e29wOlwicmVwbGFjZVwiLHBhdGg6ZCx2YWx1ZTpmKHYpfSl9fSkpfShuLHQscixlKTtjYXNlIDU6Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuLHQscixlKXt2YXIgaT1uLnQsbz1uLkQsdT1uLm87aWYodS5sZW5ndGg8aS5sZW5ndGgpe3ZhciBhPVt1LGldO2k9YVswXSx1PWFbMV07dmFyIHM9W2Uscl07cj1zWzBdLGU9c1sxXX1mb3IodmFyIHY9MDt2PGkubGVuZ3RoO3YrKylpZihvW3ZdJiZ1W3ZdIT09aVt2XSl7dmFyIHA9dC5jb25jYXQoW3ZdKTtyLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKHVbdl0pfSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6ZihpW3ZdKX0pfWZvcih2YXIgbD1pLmxlbmd0aDtsPHUubGVuZ3RoO2wrKyl7dmFyIGQ9dC5jb25jYXQoW2xdKTtyLnB1c2goe29wOmMscGF0aDpkLHZhbHVlOmYodVtsXSl9KX1pLmxlbmd0aDx1Lmxlbmd0aCYmZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnQuY29uY2F0KFtcImxlbmd0aFwiXSksdmFsdWU6aS5sZW5ndGh9KX0obix0LHIsZSk7Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHQscixlKXt2YXIgaT1uLnQsbz1uLm8sdT0wO2kuZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIW8uaGFzKG4pKXt2YXIgaT10LmNvbmNhdChbdV0pO3IucHVzaCh7b3A6XCJyZW1vdmVcIixwYXRoOmksdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6YyxwYXRoOmksdmFsdWU6bn0pfXUrK30pKSx1PTAsby5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighaS5oYXMobikpe3ZhciBvPXQuY29uY2F0KFt1XSk7ci5wdXNoKHtvcDpjLHBhdGg6byx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpcInJlbW92ZVwiLHBhdGg6byx2YWx1ZTpufSl9dSsrfSkpfShuLHQscixlKX19LE06ZnVuY3Rpb24obix0LHIsZSl7ci5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOnR9KSxlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6bi50fSl9fSl9ZnVuY3Rpb24gQygpe2Z1bmN0aW9uIHQobix0KXtmdW5jdGlvbiByKCl7dGhpcy5jb25zdHJ1Y3Rvcj1ufWEobix0KSxuLnByb3RvdHlwZT0oci5wcm90b3R5cGU9dC5wcm90b3R5cGUsbmV3IHIpfWZ1bmN0aW9uIGUobil7bi5vfHwobi5EPW5ldyBNYXAsbi5vPW5ldyBNYXAobi50KSl9ZnVuY3Rpb24gbyhuKXtuLm98fChuLm89bmV3IFNldCxuLnQuZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYocih0KSl7dmFyIGU9UihuLkEuaCx0LG4pO24ucC5zZXQodCxlKSxuLm8uYWRkKGUpfWVsc2Ugbi5vLmFkZCh0KX0pKSl9ZnVuY3Rpb24gdSh0KXt0LmcmJm4oMyxKU09OLnN0cmluZ2lmeShwKHQpKSl9dmFyIGE9ZnVuY3Rpb24obix0KXtyZXR1cm4oYT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24obix0KXtuLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24obix0KXtmb3IodmFyIHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYobltyXT10W3JdKX0pKG4sdCl9LGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sdCl7cmV0dXJuIHRoaXNbUV09e2k6MixsOnQsQTp0P3QuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLEQ6dm9pZCAwLHQ6bixrOnRoaXMsQzohMSxnOiExfSx0aGlzfXQobixNYXApO3ZhciBvPW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSxvLmhhcz1mdW5jdGlvbihuKXtyZXR1cm4gcCh0aGlzW1FdKS5oYXMobil9LG8uc2V0PWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpc1tRXTtyZXR1cm4gdShyKSxwKHIpLmhhcyhuKSYmcChyKS5nZXQobik9PT10fHwoZShyKSxFKHIpLHIuRC5zZXQobiwhMCksci5vLnNldChuLHQpLHIuRC5zZXQobiwhMCkpLHRoaXN9LG8uZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLGUodCksRSh0KSx0LkQuc2V0KG4sITEpLHQuby5kZWxldGUobiksITB9LG8uY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYoZShuKSxFKG4pLG4uRD1uZXcgTWFwLGkobi50LChmdW5jdGlvbih0KXtuLkQuc2V0KHQsITEpfSkpLG4uby5jbGVhcigpKX0sby5mb3JFYWNoPWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpcztwKHRoaXNbUV0pLmZvckVhY2goKGZ1bmN0aW9uKGUsaSl7bi5jYWxsKHQsci5nZXQoaSksaSxyKX0pKX0sby5nZXQ9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTt1KHQpO3ZhciBpPXAodCkuZ2V0KG4pO2lmKHQuSXx8IXIoaSkpcmV0dXJuIGk7aWYoaSE9PXQudC5nZXQobikpcmV0dXJuIGk7dmFyIG89Uih0LkEuaCxpLHQpO3JldHVybiBlKHQpLHQuby5zZXQobixvKSxvfSxvLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5rZXlzKCl9LG8udmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG4sdD10aGlzLHI9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHQudmFsdWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXIubmV4dCgpO3JldHVybiBuLmRvbmU/bjp7ZG9uZTohMSx2YWx1ZTp0LmdldChuLnZhbHVlKX19LG59LG8uZW50cmllcz1mdW5jdGlvbigpe3ZhciBuLHQ9dGhpcyxyPXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiB0LmVudHJpZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49ci5uZXh0KCk7aWYobi5kb25lKXJldHVybiBuO3ZhciBlPXQuZ2V0KG4udmFsdWUpO3JldHVybntkb25lOiExLHZhbHVlOltuLnZhbHVlLGVdfX0sbn0sb1tWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sbn0oKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHQpe3JldHVybiB0aGlzW1FdPXtpOjMsbDp0LEE6dD90LkE6XygpLFA6ITEsSTohMSxvOnZvaWQgMCx0Om4sazp0aGlzLHA6bmV3IE1hcCxnOiExLEM6ITF9LHRoaXN9dChuLFNldCk7dmFyIHI9bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLHIuaGFzPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksdC5vPyEhdC5vLmhhcyhuKXx8ISghdC5wLmhhcyhuKXx8IXQuby5oYXModC5wLmdldChuKSkpOnQudC5oYXMobil9LHIuYWRkPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksdGhpcy5oYXMobil8fChvKHQpLEUodCksdC5vLmFkZChuKSksdGhpc30sci5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksbyh0KSxFKHQpLHQuby5kZWxldGUobil8fCEhdC5wLmhhcyhuKSYmdC5vLmRlbGV0ZSh0LnAuZ2V0KG4pKX0sci5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihvKG4pLEUobiksbi5vLmNsZWFyKCkpfSxyLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8udmFsdWVzKCl9LHIuZW50cmllcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8uZW50cmllcygpfSxyLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0scltWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSxyLmZvckVhY2g9ZnVuY3Rpb24obix0KXtmb3IodmFyIHI9dGhpcy52YWx1ZXMoKSxlPXIubmV4dCgpOyFlLmRvbmU7KW4uY2FsbCh0LGUudmFsdWUsZS52YWx1ZSx0aGlzKSxlPXIubmV4dCgpfSxufSgpO20oXCJNYXBTZXRcIix7VDpmdW5jdGlvbihuLHQpe3JldHVybiBuZXcgZihuLHQpfSxGOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBjKG4sdCl9fSl9ZnVuY3Rpb24gSigpe1QoKSxDKCksRigpfWZ1bmN0aW9uIEsobil7cmV0dXJuIG59ZnVuY3Rpb24gJChuKXtyZXR1cm4gbn12YXIgRyxVLFc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbChcInhcIiksWD1cInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwLHE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCxCPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm94eSYmdm9pZCAwIT09UHJveHkucmV2b2NhYmxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCxIPVc/U3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIik6KChHPXt9KVtcImltbWVyLW5vdGhpbmdcIl09ITAsRyksTD1XP1N5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik6XCJfXyRpbW1lcl9kcmFmdGFibGVcIixRPVc/U3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpOlwiX18kaW1tZXJfc3RhdGVcIixWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsWT17MDpcIklsbGVnYWwgc3RhdGVcIiwxOlwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIiwyOlwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIiwzOmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIitufSw0OlwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIiw1OlwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsNjpcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLDc6XCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIiw4OlwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLDk6XCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsMTA6XCJUaGUgZ2l2ZW4gZHJhZnQgaXMgYWxyZWFkeSBmaW5hbGl6ZWRcIiwxMTpcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTI6XCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEzOlwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsMTQ6XCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsMTU6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIitufSwxNjonU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsMTc6ZnVuY3Rpb24obil7cmV0dXJuXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiK259LDE4OmZ1bmN0aW9uKG4pe3JldHVyblwiVGhlIHBsdWdpbiBmb3IgJ1wiK24rXCInIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBgZW5hYmxlXCIrbitcIigpYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLlwifSwyMDpcIkNhbm5vdCB1c2UgcHJveGllcyBpZiBQcm94eSwgUHJveHkucmV2b2NhYmxlIG9yIFJlZmxlY3QgYXJlIG5vdCBhdmFpbGFibGVcIiwyMTpmdW5jdGlvbihuKXtyZXR1cm5cInByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJ1wiK24rXCInXCJ9LDIyOmZ1bmN0aW9uKG4pe3JldHVyblwiJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyMzpmdW5jdGlvbihuKXtyZXR1cm5cIidvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259fSxaPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0Lm93bktleXM/UmVmbGVjdC5vd25LZXlzOnZvaWQgMCE9PU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM/ZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG4pLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG4pKX06T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsbm49T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnN8fGZ1bmN0aW9uKG4pe3ZhciB0PXt9O3JldHVybiBaKG4pLmZvckVhY2goKGZ1bmN0aW9uKHIpe3Rbcl09T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHIpfSkpLHR9LHRuPXt9LHJuPXtnZXQ6ZnVuY3Rpb24obix0KXtpZih0PT09USlyZXR1cm4gbjt2YXIgZT1wKG4pO2lmKCF1KGUsdCkpcmV0dXJuIGZ1bmN0aW9uKG4sdCxyKXt2YXIgZSxpPUkodCxyKTtyZXR1cm4gaT9cInZhbHVlXCJpbiBpP2kudmFsdWU6bnVsbD09PShlPWkuZ2V0KXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5jYWxsKG4uayk6dm9pZCAwfShuLGUsdCk7dmFyIGk9ZVt0XTtyZXR1cm4gbi5JfHwhcihpKT9pOmk9PT16KG4udCx0KT8oayhuKSxuLm9bdF09UihuLkEuaCxpLG4pKTppfSxoYXM6ZnVuY3Rpb24obix0KXtyZXR1cm4gdCBpbiBwKG4pfSxvd25LZXlzOmZ1bmN0aW9uKG4pe3JldHVybiBSZWZsZWN0Lm93bktleXMocChuKSl9LHNldDpmdW5jdGlvbihuLHQscil7dmFyIGU9SShwKG4pLHQpO2lmKG51bGw9PWU/dm9pZCAwOmUuc2V0KXJldHVybiBlLnNldC5jYWxsKG4uayxyKSwhMDtpZighbi5QKXt2YXIgaT16KHAobiksdCksbz1udWxsPT1pP3ZvaWQgMDppW1FdO2lmKG8mJm8udD09PXIpcmV0dXJuIG4ub1t0XT1yLG4uRFt0XT0hMSwhMDtpZihjKHIsaSkmJih2b2lkIDAhPT1yfHx1KG4udCx0KSkpcmV0dXJuITA7ayhuKSxFKG4pfXJldHVybiBuLm9bdF09cixuLkRbdF09ITAsITB9LGRlbGV0ZVByb3BlcnR5OmZ1bmN0aW9uKG4sdCl7cmV0dXJuIHZvaWQgMCE9PXoobi50LHQpfHx0IGluIG4udD8obi5EW3RdPSExLGsobiksRShuKSk6ZGVsZXRlIG4uRFt0XSxuLm8mJmRlbGV0ZSBuLm9bdF0sITB9LGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpmdW5jdGlvbihuLHQpe3ZhciByPXAobiksZT1SZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpO3JldHVybiBlP3t3cml0YWJsZTohMCxjb25maWd1cmFibGU6MSE9PW4uaXx8XCJsZW5ndGhcIiE9PXQsZW51bWVyYWJsZTplLmVudW1lcmFibGUsdmFsdWU6clt0XX06ZX0sZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oKXtuKDExKX0sZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuLnQpfSxzZXRQcm90b3R5cGVPZjpmdW5jdGlvbigpe24oMTIpfX0sZW49e307aShybiwoZnVuY3Rpb24obix0KXtlbltuXT1mdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHNbMF09YXJndW1lbnRzWzBdWzBdLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0pKSxlbi5kZWxldGVQcm9wZXJ0eT1mdW5jdGlvbih0LHIpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmlzTmFOKHBhcnNlSW50KHIpKSYmbigxMykscm4uZGVsZXRlUHJvcGVydHkuY2FsbCh0aGlzLHRbMF0scil9LGVuLnNldD1mdW5jdGlvbih0LHIsZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJsZW5ndGhcIiE9PXImJmlzTmFOKHBhcnNlSW50KHIpKSYmbigxNCkscm4uc2V0LmNhbGwodGhpcyx0WzBdLHIsZSx0WzBdKX07dmFyIG9uPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShuKXt0aGlzLk89Qix0aGlzLk49ITAsXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT1uP3ZvaWQgMDpuLnVzZVByb3hpZXMpJiZ0aGlzLnNldFVzZVByb3hpZXMobi51c2VQcm94aWVzKSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PW4/dm9pZCAwOm4uYXV0b0ZyZWV6ZSkmJnRoaXMuc2V0QXV0b0ZyZWV6ZShuLmF1dG9GcmVlemUpLHRoaXMucHJvZHVjZT10aGlzLnByb2R1Y2UuYmluZCh0aGlzKSx0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcz10aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKHRoaXMpfXZhciBpPWUucHJvdG90eXBlO3JldHVybiBpLnByb2R1Y2U9ZnVuY3Rpb24odCxlLGkpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpe3ZhciBvPWU7ZT10O3ZhciB1PXRoaXM7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciB0PXRoaXM7dm9pZCAwPT09biYmKG49byk7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsaT1BcnJheShyPjE/ci0xOjApLGE9MTthPHI7YSsrKWlbYS0xXT1hcmd1bWVudHNbYV07cmV0dXJuIHUucHJvZHVjZShuLChmdW5jdGlvbihuKXt2YXIgcjtyZXR1cm4ocj1lKS5jYWxsLmFwcGx5KHIsW3Qsbl0uY29uY2F0KGkpKX0pKX19dmFyIGE7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbig2KSx2b2lkIDAhPT1pJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBpJiZuKDcpLHIodCkpe3ZhciBmPXcodGhpcyksYz1SKHRoaXMsdCx2b2lkIDApLHM9ITA7dHJ5e2E9ZShjKSxzPSExfWZpbmFsbHl7cz9nKGYpOk8oZil9cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJmEgaW5zdGFuY2VvZiBQcm9taXNlP2EudGhlbigoZnVuY3Rpb24obil7cmV0dXJuIGooZixpKSxQKG4sZil9KSwoZnVuY3Rpb24obil7dGhyb3cgZyhmKSxufSkpOihqKGYsaSksUChhLGYpKX1pZighdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQpe2lmKChhPWUodCkpPT09SClyZXR1cm47cmV0dXJuIHZvaWQgMD09PWEmJihhPXQpLHRoaXMuTiYmZChhLCEwKSxhfW4oMjEsdCl9LGkucHJvZHVjZVdpdGhQYXRjaGVzPWZ1bmN0aW9uKG4sdCl7dmFyIHIsZSxpPXRoaXM7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj9mdW5jdGlvbih0KXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxlPUFycmF5KHI+MT9yLTE6MCksbz0xO288cjtvKyspZVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gaS5wcm9kdWNlV2l0aFBhdGNoZXModCwoZnVuY3Rpb24odCl7cmV0dXJuIG4uYXBwbHkodm9pZCAwLFt0XS5jb25jYXQoZSkpfSkpfTpbdGhpcy5wcm9kdWNlKG4sdCwoZnVuY3Rpb24obix0KXtyPW4sZT10fSkpLHIsZV19LGkuY3JlYXRlRHJhZnQ9ZnVuY3Rpb24oZSl7cihlKXx8big4KSx0KGUpJiYoZT1EKGUpKTt2YXIgaT13KHRoaXMpLG89Uih0aGlzLGUsdm9pZCAwKTtyZXR1cm4gb1tRXS5DPSEwLE8oaSksb30saS5maW5pc2hEcmFmdD1mdW5jdGlvbih0LHIpe3ZhciBlPXQmJnRbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKGUmJmUuQ3x8big5KSxlLkkmJm4oMTApKTt2YXIgaT1lLkE7cmV0dXJuIGooaSxyKSxQKHZvaWQgMCxpKX0saS5zZXRBdXRvRnJlZXplPWZ1bmN0aW9uKG4pe3RoaXMuTj1ufSxpLnNldFVzZVByb3hpZXM9ZnVuY3Rpb24odCl7dCYmIUImJm4oMjApLHRoaXMuTz10fSxpLmFwcGx5UGF0Y2hlcz1mdW5jdGlvbihuLHIpe3ZhciBlO2ZvcihlPXIubGVuZ3RoLTE7ZT49MDtlLS0pe3ZhciBpPXJbZV07aWYoMD09PWkucGF0aC5sZW5ndGgmJlwicmVwbGFjZVwiPT09aS5vcCl7bj1pLnZhbHVlO2JyZWFrfX12YXIgbz1iKFwiUGF0Y2hlc1wiKS4kO3JldHVybiB0KG4pP28obixyKTp0aGlzLnByb2R1Y2UobiwoZnVuY3Rpb24obil7cmV0dXJuIG8obixyLnNsaWNlKGUrMSkpfSkpfSxlfSgpLHVuPW5ldyBvbixhbj11bi5wcm9kdWNlLGZuPXVuLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKHVuKSxjbj11bi5zZXRBdXRvRnJlZXplLmJpbmQodW4pLHNuPXVuLnNldFVzZVByb3hpZXMuYmluZCh1biksdm49dW4uYXBwbHlQYXRjaGVzLmJpbmQodW4pLHBuPXVuLmNyZWF0ZURyYWZ0LmJpbmQodW4pLGxuPXVuLmZpbmlzaERyYWZ0LmJpbmQodW4pO2V4cG9ydCBkZWZhdWx0IGFuO2V4cG9ydHtvbiBhcyBJbW1lcix2biBhcyBhcHBseVBhdGNoZXMsSyBhcyBjYXN0RHJhZnQsJCBhcyBjYXN0SW1tdXRhYmxlLHBuIGFzIGNyZWF0ZURyYWZ0LEQgYXMgY3VycmVudCxKIGFzIGVuYWJsZUFsbFBsdWdpbnMsVCBhcyBlbmFibGVFUzUsQyBhcyBlbmFibGVNYXBTZXQsRiBhcyBlbmFibGVQYXRjaGVzLGxuIGFzIGZpbmlzaERyYWZ0LGQgYXMgZnJlZXplLEwgYXMgaW1tZXJhYmxlLHQgYXMgaXNEcmFmdCxyIGFzIGlzRHJhZnRhYmxlLEggYXMgbm90aGluZyxlIGFzIG9yaWdpbmFsLGFuIGFzIHByb2R1Y2UsZm4gYXMgcHJvZHVjZVdpdGhQYXRjaGVzLGNuIGFzIHNldEF1dG9GcmVlemUsc24gYXMgc2V0VXNlUHJveGllc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbW1lci5lc20uanMubWFwXG4iLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gIH0sXHJcbiAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgSW1hZ2VzOiBbe1xyXG4gICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gIH1dLFxyXG4gIENvbW1lbnRzOiBbe1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgfV0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgfSxcclxufSk7XHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJgo67aI67OA7ISx7J2AIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAvLyAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgLy8gfTtcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gIGlkOiAxLFxyXG4gIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogJ+u2gOq4sOy0iCcgfSwgeyBuaWNrbmFtZTogJ0NoYW5obyBMZWUnIH0sIHsgbmlja25hbWU6ICduZXVlIHplYWwnIH1dLFxyXG4gIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICfrtoDquLDstIgnIH0sIHsgbmlja25hbWU6ICdDaGFuaG8gTGVlJyB9LCB7IG5pY2tuYW1lOiAnbmV1ZSB6ZWFsJyB9XSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH07XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtZToge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=