webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsInBvc3RJZCIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dp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QUFDRTtBQXhHSjtBQTBHRCxHQTNHd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUE2R2VLLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODZlYWYyNGVhMjcxMGE5ZWFjOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG4obil7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1BcnJheSh0PjE/dC0xOjApLGU9MTtlPHQ7ZSsrKXJbZS0xXT1hcmd1bWVudHNbZV07aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIGk9WVtuXSxvPWk/XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KG51bGwscik6aTpcInVua25vd24gZXJyb3IgbnI6IFwiK247dGhyb3cgRXJyb3IoXCJbSW1tZXJdIFwiK28pfXRocm93IEVycm9yKFwiW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogXCIrbisoci5sZW5ndGg/XCIgXCIrci5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiJ1wiK24rXCInXCJ9KSkuam9pbihcIixcIik6XCJcIikrXCIuIEZpbmQgdGhlIGZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZcIil9ZnVuY3Rpb24gdChuKXtyZXR1cm4hIW4mJiEhbltRXX1mdW5jdGlvbiByKG4pe3JldHVybiEhbiYmKGZ1bmN0aW9uKG4pe2lmKCFufHxcIm9iamVjdFwiIT10eXBlb2YgbilyZXR1cm4hMTt2YXIgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7cmV0dXJuIXR8fHQ9PT1PYmplY3QucHJvdG90eXBlfShuKXx8QXJyYXkuaXNBcnJheShuKXx8ISFuW0xdfHwhIW4uY29uc3RydWN0b3JbTF18fHMobil8fHYobikpfWZ1bmN0aW9uIGUocil7cmV0dXJuIHQocil8fG4oMjMscikscltRXS50fWZ1bmN0aW9uIGkobix0LHIpe3ZvaWQgMD09PXImJihyPSExKSwwPT09byhuKT8ocj9PYmplY3Qua2V5czpaKShuKS5mb3JFYWNoKChmdW5jdGlvbihlKXtyJiZcInN5bWJvbFwiPT10eXBlb2YgZXx8dChlLG5bZV0sbil9KSk6bi5mb3JFYWNoKChmdW5jdGlvbihyLGUpe3JldHVybiB0KGUscixuKX0pKX1mdW5jdGlvbiBvKG4pe3ZhciB0PW5bUV07cmV0dXJuIHQ/dC5pPjM/dC5pLTQ6dC5pOkFycmF5LmlzQXJyYXkobik/MTpzKG4pPzI6dihuKT8zOjB9ZnVuY3Rpb24gdShuLHQpe3JldHVybiAyPT09byhuKT9uLmhhcyh0KTpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobix0KX1mdW5jdGlvbiBhKG4sdCl7cmV0dXJuIDI9PT1vKG4pP24uZ2V0KHQpOm5bdF19ZnVuY3Rpb24gZihuLHQscil7dmFyIGU9byhuKTsyPT09ZT9uLnNldCh0LHIpOjM9PT1lPyhuLmRlbGV0ZSh0KSxuLmFkZChyKSk6blt0XT1yfWZ1bmN0aW9uIGMobix0KXtyZXR1cm4gbj09PXQ/MCE9PW58fDEvbj09MS90Om4hPW4mJnQhPXR9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gWCYmbiBpbnN0YW5jZW9mIE1hcH1mdW5jdGlvbiB2KG4pe3JldHVybiBxJiZuIGluc3RhbmNlb2YgU2V0fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4ub3x8bi50fWZ1bmN0aW9uIGwobil7aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobik7dmFyIHQ9bm4obik7ZGVsZXRlIHRbUV07Zm9yKHZhciByPVoodCksZT0wO2U8ci5sZW5ndGg7ZSsrKXt2YXIgaT1yW2VdLG89dFtpXTshMT09PW8ud3JpdGFibGUmJihvLndyaXRhYmxlPSEwLG8uY29uZmlndXJhYmxlPSEwKSwoby5nZXR8fG8uc2V0KSYmKHRbaV09e2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCxlbnVtZXJhYmxlOm8uZW51bWVyYWJsZSx2YWx1ZTpuW2ldfSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pLHQpfWZ1bmN0aW9uIGQobixlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITEpLHkobil8fHQobil8fCFyKG4pP246KG8obik+MSYmKG4uc2V0PW4uYWRkPW4uY2xlYXI9bi5kZWxldGU9aCksT2JqZWN0LmZyZWV6ZShuKSxlJiZpKG4sKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGQodCwhMCl9KSwhMCksbil9ZnVuY3Rpb24gaCgpe24oMil9ZnVuY3Rpb24geShuKXtyZXR1cm4gbnVsbD09bnx8XCJvYmplY3RcIiE9dHlwZW9mIG58fE9iamVjdC5pc0Zyb3plbihuKX1mdW5jdGlvbiBiKHQpe3ZhciByPXRuW3RdO3JldHVybiByfHxuKDE4LHQpLHJ9ZnVuY3Rpb24gbShuLHQpe3RuW25dfHwodG5bbl09dCl9ZnVuY3Rpb24gXygpe3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fFV8fG4oMCksVX1mdW5jdGlvbiBqKG4sdCl7dCYmKGIoXCJQYXRjaGVzXCIpLG4udT1bXSxuLnM9W10sbi52PXQpfWZ1bmN0aW9uIGcobil7TyhuKSxuLnAuZm9yRWFjaChTKSxuLnA9bnVsbH1mdW5jdGlvbiBPKG4pe249PT1VJiYoVT1uLmwpfWZ1bmN0aW9uIHcobil7cmV0dXJuIFU9e3A6W10sbDpVLGg6bixtOiEwLF86MH19ZnVuY3Rpb24gUyhuKXt2YXIgdD1uW1FdOzA9PT10Lml8fDE9PT10Lmk/dC5qKCk6dC5nPSEwfWZ1bmN0aW9uIFAodCxlKXtlLl89ZS5wLmxlbmd0aDt2YXIgaT1lLnBbMF0sbz12b2lkIDAhPT10JiZ0IT09aTtyZXR1cm4gZS5oLk98fGIoXCJFUzVcIikuUyhlLHQsbyksbz8oaVtRXS5QJiYoZyhlKSxuKDQpKSxyKHQpJiYodD1NKGUsdCksZS5sfHx4KGUsdCkpLGUudSYmYihcIlBhdGNoZXNcIikuTShpW1FdLHQsZS51LGUucykpOnQ9TShlLGksW10pLGcoZSksZS51JiZlLnYoZS51LGUucyksdCE9PUg/dDp2b2lkIDB9ZnVuY3Rpb24gTShuLHQscil7aWYoeSh0KSlyZXR1cm4gdDt2YXIgZT10W1FdO2lmKCFlKXJldHVybiBpKHQsKGZ1bmN0aW9uKGksbyl7cmV0dXJuIEEobixlLHQsaSxvLHIpfSksITApLHQ7aWYoZS5BIT09bilyZXR1cm4gdDtpZighZS5QKXJldHVybiB4KG4sZS50LCEwKSxlLnQ7aWYoIWUuSSl7ZS5JPSEwLGUuQS5fLS07dmFyIG89ND09PWUuaXx8NT09PWUuaT9lLm89bChlLmspOmUubztpKDM9PT1lLmk/bmV3IFNldChvKTpvLChmdW5jdGlvbih0LGkpe3JldHVybiBBKG4sZSxvLHQsaSxyKX0pKSx4KG4sbywhMSksciYmbi51JiZiKFwiUGF0Y2hlc1wiKS5SKGUscixuLnUsbi5zKX1yZXR1cm4gZS5vfWZ1bmN0aW9uIEEoZSxpLG8sYSxjLHMpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmM9PT1vJiZuKDUpLHQoYykpe3ZhciB2PU0oZSxjLHMmJmkmJjMhPT1pLmkmJiF1KGkuRCxhKT9zLmNvbmNhdChhKTp2b2lkIDApO2lmKGYobyxhLHYpLCF0KHYpKXJldHVybjtlLm09ITF9aWYocihjKSYmIXkoYykpe2lmKCFlLmguTiYmZS5fPDEpcmV0dXJuO00oZSxjKSxpJiZpLkEubHx8eChlLGMpfX1mdW5jdGlvbiB4KG4sdCxyKXt2b2lkIDA9PT1yJiYocj0hMSksbi5oLk4mJm4ubSYmZCh0LHIpfWZ1bmN0aW9uIHoobix0KXt2YXIgcj1uW1FdO3JldHVybihyP3Aocik6bilbdF19ZnVuY3Rpb24gSShuLHQpe2lmKHQgaW4gbilmb3IodmFyIHI9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO3I7KXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCk7aWYoZSlyZXR1cm4gZTtyPU9iamVjdC5nZXRQcm90b3R5cGVPZihyKX19ZnVuY3Rpb24gRShuKXtuLlB8fChuLlA9ITAsbi5sJiZFKG4ubCkpfWZ1bmN0aW9uIGsobil7bi5vfHwobi5vPWwobi50KSl9ZnVuY3Rpb24gUihuLHQscil7dmFyIGU9cyh0KT9iKFwiTWFwU2V0XCIpLlQodCxyKTp2KHQpP2IoXCJNYXBTZXRcIikuRih0LHIpOm4uTz9mdW5jdGlvbihuLHQpe3ZhciByPUFycmF5LmlzQXJyYXkobiksZT17aTpyPzE6MCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOnQsdDpuLGs6bnVsbCxvOm51bGwsajpudWxsLEM6ITF9LGk9ZSxvPXJuO3ImJihpPVtlXSxvPWVuKTt2YXIgdT1Qcm94eS5yZXZvY2FibGUoaSxvKSxhPXUucmV2b2tlLGY9dS5wcm94eTtyZXR1cm4gZS5rPWYsZS5qPWEsZn0odCxyKTpiKFwiRVM1XCIpLkoodCxyKTtyZXR1cm4ocj9yLkE6XygpKS5wLnB1c2goZSksZX1mdW5jdGlvbiBEKGUpe3JldHVybiB0KGUpfHxuKDIyLGUpLGZ1bmN0aW9uIG4odCl7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIGUsdT10W1FdLGM9byh0KTtpZih1KXtpZighdS5QJiYodS5pPDR8fCFiKFwiRVM1XCIpLksodSkpKXJldHVybiB1LnQ7dS5JPSEwLGU9Tih0LGMpLHUuST0hMX1lbHNlIGU9Tih0LGMpO3JldHVybiBpKGUsKGZ1bmN0aW9uKHQscil7dSYmYSh1LnQsdCk9PT1yfHxmKGUsdCxuKHIpKX0pKSwzPT09Yz9uZXcgU2V0KGUpOmV9KGUpfWZ1bmN0aW9uIE4obix0KXtzd2l0Y2godCl7Y2FzZSAyOnJldHVybiBuZXcgTWFwKG4pO2Nhc2UgMzpyZXR1cm4gQXJyYXkuZnJvbShuKX1yZXR1cm4gbChuKX1mdW5jdGlvbiBUKCl7ZnVuY3Rpb24gcihuLHQpe3ZhciByPXNbbl07cmV0dXJuIHI/ci5lbnVtZXJhYmxlPXQ6c1tuXT1yPXtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTp0LGdldDpmdW5jdGlvbigpe3ZhciB0PXRoaXNbUV07cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZih0KSxybi5nZXQodCxuKX0sc2V0OmZ1bmN0aW9uKHQpe3ZhciByPXRoaXNbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZihyKSxybi5zZXQocixuLHQpfX0scn1mdW5jdGlvbiBlKG4pe2Zvcih2YXIgdD1uLmxlbmd0aC0xO3Q+PTA7dC0tKXt2YXIgcj1uW3RdW1FdO2lmKCFyLlApc3dpdGNoKHIuaSl7Y2FzZSA1OmEocikmJkUocik7YnJlYWs7Y2FzZSA0Om8ocikmJkUocil9fX1mdW5jdGlvbiBvKG4pe2Zvcih2YXIgdD1uLnQscj1uLmssZT1aKHIpLGk9ZS5sZW5ndGgtMTtpPj0wO2ktLSl7dmFyIG89ZVtpXTtpZihvIT09USl7dmFyIGE9dFtvXTtpZih2b2lkIDA9PT1hJiYhdSh0LG8pKXJldHVybiEwO3ZhciBmPXJbb10scz1mJiZmW1FdO2lmKHM/cy50IT09YTohYyhmLGEpKXJldHVybiEwfX12YXIgdj0hIXRbUV07cmV0dXJuIGUubGVuZ3RoIT09Wih0KS5sZW5ndGgrKHY/MDoxKX1mdW5jdGlvbiBhKG4pe3ZhciB0PW4uaztpZih0Lmxlbmd0aCE9PW4udC5sZW5ndGgpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHQubGVuZ3RoLTEpO3JldHVybiEoIXJ8fHIuZ2V0KX1mdW5jdGlvbiBmKHQpe3QuZyYmbigzLEpTT04uc3RyaW5naWZ5KHAodCkpKX12YXIgcz17fTttKFwiRVM1XCIse0o6ZnVuY3Rpb24obix0KXt2YXIgZT1BcnJheS5pc0FycmF5KG4pLGk9ZnVuY3Rpb24obix0KXtpZihuKXtmb3IodmFyIGU9QXJyYXkodC5sZW5ndGgpLGk9MDtpPHQubGVuZ3RoO2krKylPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlwiK2kscihpLCEwKSk7cmV0dXJuIGV9dmFyIG89bm4odCk7ZGVsZXRlIG9bUV07Zm9yKHZhciB1PVoobyksYT0wO2E8dS5sZW5ndGg7YSsrKXt2YXIgZj11W2FdO29bZl09cihmLG58fCEhb1tmXS5lbnVtZXJhYmxlKX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodCksbyl9KGUsbiksbz17aTplPzU6NCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOnQsdDpuLGs6aSxvOm51bGwsZzohMSxDOiExfTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGksUSx7dmFsdWU6byx3cml0YWJsZTohMH0pLGl9LFM6ZnVuY3Rpb24obixyLG8pe28/dChyKSYmcltRXS5BPT09biYmZShuLnApOihuLnUmJmZ1bmN0aW9uIG4odCl7aWYodCYmXCJvYmplY3RcIj09dHlwZW9mIHQpe3ZhciByPXRbUV07aWYocil7dmFyIGU9ci50LG89ci5rLGY9ci5ELGM9ci5pO2lmKDQ9PT1jKWkobywoZnVuY3Rpb24odCl7dCE9PVEmJih2b2lkIDAhPT1lW3RdfHx1KGUsdCk/Zlt0XXx8bihvW3RdKTooZlt0XT0hMCxFKHIpKSl9KSksaShlLChmdW5jdGlvbihuKXt2b2lkIDAhPT1vW25dfHx1KG8sbil8fChmW25dPSExLEUocikpfSkpO2Vsc2UgaWYoNT09PWMpe2lmKGEocikmJihFKHIpLGYubGVuZ3RoPSEwKSxvLmxlbmd0aDxlLmxlbmd0aClmb3IodmFyIHM9by5sZW5ndGg7czxlLmxlbmd0aDtzKyspZltzXT0hMTtlbHNlIGZvcih2YXIgdj1lLmxlbmd0aDt2PG8ubGVuZ3RoO3YrKylmW3ZdPSEwO2Zvcih2YXIgcD1NYXRoLm1pbihvLmxlbmd0aCxlLmxlbmd0aCksbD0wO2w8cDtsKyspdm9pZCAwPT09ZltsXSYmbihvW2xdKX19fX0obi5wWzBdKSxlKG4ucCkpfSxLOmZ1bmN0aW9uKG4pe3JldHVybiA0PT09bi5pP28obik6YShuKX19KX1mdW5jdGlvbiBGKCl7ZnVuY3Rpb24gZShuKXtpZighcihuKSlyZXR1cm4gbjtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBuLm1hcChlKTtpZihzKG4pKXJldHVybiBuZXcgTWFwKEFycmF5LmZyb20obi5lbnRyaWVzKCkpLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuW25bMF0sZShuWzFdKV19KSkpO2lmKHYobikpcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShuKS5tYXAoZSkpO3ZhciB0PU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pKTtmb3IodmFyIGkgaW4gbil0W2ldPWUobltpXSk7cmV0dXJuIHR9ZnVuY3Rpb24gZihuKXtyZXR1cm4gdChuKT9lKG4pOm59dmFyIGM9XCJhZGRcIjttKFwiUGF0Y2hlc1wiLHskOmZ1bmN0aW9uKHQscil7cmV0dXJuIHIuZm9yRWFjaCgoZnVuY3Rpb24ocil7Zm9yKHZhciBpPXIucGF0aCx1PXIub3AsZj10LHM9MDtzPGkubGVuZ3RoLTE7cysrKVwib2JqZWN0XCIhPXR5cGVvZihmPWEoZixpW3NdKSkmJm4oMTUsaS5qb2luKFwiL1wiKSk7dmFyIHY9byhmKSxwPWUoci52YWx1ZSksbD1pW2kubGVuZ3RoLTFdO3N3aXRjaCh1KXtjYXNlXCJyZXBsYWNlXCI6c3dpdGNoKHYpe2Nhc2UgMjpyZXR1cm4gZi5zZXQobCxwKTtjYXNlIDM6bigxNik7ZGVmYXVsdDpyZXR1cm4gZltsXT1wfWNhc2UgYzpzd2l0Y2godil7Y2FzZSAxOnJldHVybiBmLnNwbGljZShsLDAscCk7Y2FzZSAyOnJldHVybiBmLnNldChsLHApO2Nhc2UgMzpyZXR1cm4gZi5hZGQocCk7ZGVmYXVsdDpyZXR1cm4gZltsXT1wfWNhc2VcInJlbW92ZVwiOnN3aXRjaCh2KXtjYXNlIDE6cmV0dXJuIGYuc3BsaWNlKGwsMSk7Y2FzZSAyOnJldHVybiBmLmRlbGV0ZShsKTtjYXNlIDM6cmV0dXJuIGYuZGVsZXRlKHIudmFsdWUpO2RlZmF1bHQ6cmV0dXJuIGRlbGV0ZSBmW2xdfWRlZmF1bHQ6bigxNyx1KX19KSksdH0sUjpmdW5jdGlvbihuLHQscixlKXtzd2l0Y2gobi5pKXtjYXNlIDA6Y2FzZSA0OmNhc2UgMjpyZXR1cm4gZnVuY3Rpb24obix0LHIsZSl7dmFyIG89bi50LHM9bi5vO2kobi5ELChmdW5jdGlvbihuLGkpe3ZhciB2PWEobyxuKSxwPWEocyxuKSxsPWk/dShvLG4pP1wicmVwbGFjZVwiOmM6XCJyZW1vdmVcIjtpZih2IT09cHx8XCJyZXBsYWNlXCIhPT1sKXt2YXIgZD10LmNvbmNhdChuKTtyLnB1c2goXCJyZW1vdmVcIj09PWw/e29wOmwscGF0aDpkfTp7b3A6bCxwYXRoOmQsdmFsdWU6cH0pLGUucHVzaChsPT09Yz97b3A6XCJyZW1vdmVcIixwYXRoOmR9OlwicmVtb3ZlXCI9PT1sP3tvcDpjLHBhdGg6ZCx2YWx1ZTpmKHYpfTp7b3A6XCJyZXBsYWNlXCIscGF0aDpkLHZhbHVlOmYodil9KX19KSl9KG4sdCxyLGUpO2Nhc2UgNTpjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBpPW4udCxvPW4uRCx1PW4ubztpZih1Lmxlbmd0aDxpLmxlbmd0aCl7dmFyIGE9W3UsaV07aT1hWzBdLHU9YVsxXTt2YXIgcz1bZSxyXTtyPXNbMF0sZT1zWzFdfWZvcih2YXIgdj0wO3Y8aS5sZW5ndGg7disrKWlmKG9bdl0mJnVbdl0hPT1pW3ZdKXt2YXIgcD10LmNvbmNhdChbdl0pO3IucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYodVt2XSl9KSxlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKGlbdl0pfSl9Zm9yKHZhciBsPWkubGVuZ3RoO2w8dS5sZW5ndGg7bCsrKXt2YXIgZD10LmNvbmNhdChbbF0pO3IucHVzaCh7b3A6YyxwYXRoOmQsdmFsdWU6Zih1W2xdKX0pfWkubGVuZ3RoPHUubGVuZ3RoJiZlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6dC5jb25jYXQoW1wibGVuZ3RoXCJdKSx2YWx1ZTppLmxlbmd0aH0pfShuLHQscixlKTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBpPW4udCxvPW4ubyx1PTA7aS5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighby5oYXMobikpe3ZhciBpPXQuY29uY2F0KFt1XSk7ci5wdXNoKHtvcDpcInJlbW92ZVwiLHBhdGg6aSx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpjLHBhdGg6aSx2YWx1ZTpufSl9dSsrfSkpLHU9MCxvLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFpLmhhcyhuKSl7dmFyIG89dC5jb25jYXQoW3VdKTtyLnB1c2goe29wOmMscGF0aDpvLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOlwicmVtb3ZlXCIscGF0aDpvLHZhbHVlOm59KX11Kyt9KSl9KG4sdCxyLGUpfX0sTTpmdW5jdGlvbihuLHQscixlKXtyLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6dH0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpuLnR9KX19KX1mdW5jdGlvbiBDKCl7ZnVuY3Rpb24gdChuLHQpe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPW59YShuLHQpLG4ucHJvdG90eXBlPShyLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgcil9ZnVuY3Rpb24gZShuKXtuLm98fChuLkQ9bmV3IE1hcCxuLm89bmV3IE1hcChuLnQpKX1mdW5jdGlvbiBvKG4pe24ub3x8KG4ubz1uZXcgU2V0LG4udC5mb3JFYWNoKChmdW5jdGlvbih0KXtpZihyKHQpKXt2YXIgZT1SKG4uQS5oLHQsbik7bi5wLnNldCh0LGUpLG4uby5hZGQoZSl9ZWxzZSBuLm8uYWRkKHQpfSkpKX1mdW5jdGlvbiB1KHQpe3QuZyYmbigzLEpTT04uc3RyaW5naWZ5KHAodCkpKX12YXIgYT1mdW5jdGlvbihuLHQpe3JldHVybihhPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihuLHQpe24uX19wcm90b19fPXR9fHxmdW5jdGlvbihuLHQpe2Zvcih2YXIgciBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJihuW3JdPXRbcl0pfSkobix0KX0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0KXtyZXR1cm4gdGhpc1tRXT17aToyLGw6dCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsRDp2b2lkIDAsdDpuLGs6dGhpcyxDOiExLGc6ITF9LHRoaXN9dChuLE1hcCk7dmFyIG89bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLG8uaGFzPWZ1bmN0aW9uKG4pe3JldHVybiBwKHRoaXNbUV0pLmhhcyhuKX0sby5zZXQ9ZnVuY3Rpb24obix0KXt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLHAocikuaGFzKG4pJiZwKHIpLmdldChuKT09PXR8fChlKHIpLEUociksci5ELnNldChuLCEwKSxyLm8uc2V0KG4sdCksci5ELnNldChuLCEwKSksdGhpc30sby5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksZSh0KSxFKHQpLHQuRC5zZXQobiwhMSksdC5vLmRlbGV0ZShuKSwhMH0sby5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihlKG4pLEUobiksbi5EPW5ldyBNYXAsaShuLnQsKGZ1bmN0aW9uKHQpe24uRC5zZXQodCwhMSl9KSksbi5vLmNsZWFyKCkpfSxvLmZvckVhY2g9ZnVuY3Rpb24obix0KXt2YXIgcj10aGlzO3AodGhpc1tRXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSxpKXtuLmNhbGwodCxyLmdldChpKSxpLHIpfSkpfSxvLmdldD1mdW5jdGlvbihuKXt2YXIgdD10aGlzW1FdO3UodCk7dmFyIGk9cCh0KS5nZXQobik7aWYodC5JfHwhcihpKSlyZXR1cm4gaTtpZihpIT09dC50LmdldChuKSlyZXR1cm4gaTt2YXIgbz1SKHQuQS5oLGksdCk7cmV0dXJuIGUodCksdC5vLnNldChuLG8pLG99LG8ua2V5cz1mdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLmtleXMoKX0sby52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbix0PXRoaXMscj10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdC52YWx1ZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49ci5uZXh0KCk7cmV0dXJuIG4uZG9uZT9uOntkb25lOiExLHZhbHVlOnQuZ2V0KG4udmFsdWUpfX0sbn0sby5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG4sdD10aGlzLHI9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHQuZW50cmllcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj1yLm5leHQoKTtpZihuLmRvbmUpcmV0dXJuIG47dmFyIGU9dC5nZXQobi52YWx1ZSk7cmV0dXJue2RvbmU6ITEsdmFsdWU6W24udmFsdWUsZV19fSxufSxvW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxufSgpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sdCl7cmV0dXJuIHRoaXNbUV09e2k6MyxsOnQsQTp0P3QuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLHQ6bixrOnRoaXMscDpuZXcgTWFwLGc6ITEsQzohMX0sdGhpc310KG4sU2V0KTt2YXIgcj1uLnByb3RvdHlwZTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLnNpemV9fSksci5oYXM9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSx0Lm8/ISF0Lm8uaGFzKG4pfHwhKCF0LnAuaGFzKG4pfHwhdC5vLmhhcyh0LnAuZ2V0KG4pKSk6dC50LmhhcyhuKX0sci5hZGQ9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSx0aGlzLmhhcyhuKXx8KG8odCksRSh0KSx0Lm8uYWRkKG4pKSx0aGlzfSxyLmRlbGV0ZT1mdW5jdGlvbihuKXtpZighdGhpcy5oYXMobikpcmV0dXJuITE7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSxvKHQpLEUodCksdC5vLmRlbGV0ZShuKXx8ISF0LnAuaGFzKG4pJiZ0Lm8uZGVsZXRlKHQucC5nZXQobikpfSxyLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTt1KG4pLHAobikuc2l6ZSYmKG8obiksRShuKSxuLm8uY2xlYXIoKSl9LHIudmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby52YWx1ZXMoKX0sci5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby5lbnRyaWVzKCl9LHIua2V5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSxyW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHIuZm9yRWFjaD1mdW5jdGlvbihuLHQpe2Zvcih2YXIgcj10aGlzLnZhbHVlcygpLGU9ci5uZXh0KCk7IWUuZG9uZTspbi5jYWxsKHQsZS52YWx1ZSxlLnZhbHVlLHRoaXMpLGU9ci5uZXh0KCl9LG59KCk7bShcIk1hcFNldFwiLHtUOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBmKG4sdCl9LEY6ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IGMobix0KX19KX1mdW5jdGlvbiBKKCl7VCgpLEMoKSxGKCl9ZnVuY3Rpb24gSyhuKXtyZXR1cm4gbn1mdW5jdGlvbiAkKG4pe3JldHVybiBufXZhciBHLFUsVz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKFwieFwiKSxYPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBNYXAscT1cInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0LEI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb3h5JiZ2b2lkIDAhPT1Qcm94eS5yZXZvY2FibGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0LEg9Vz9TeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKTooKEc9e30pW1wiaW1tZXItbm90aGluZ1wiXT0hMCxHKSxMPVc/U3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKTpcIl9fJGltbWVyX2RyYWZ0YWJsZVwiLFE9Vz9TeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIik6XCJfXyRpbW1lcl9zdGF0ZVwiLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yfHxcIkBAaXRlcmF0b3JcIixZPXswOlwiSWxsZWdhbCBzdGF0ZVwiLDE6XCJJbW1lciBkcmFmdHMgY2Fubm90IGhhdmUgY29tcHV0ZWQgcHJvcGVydGllc1wiLDI6XCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLDM6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiK259LDQ6XCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLDU6XCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIiw2OlwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsNzpcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLDg6XCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsOTpcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIiwxMDpcIlRoZSBnaXZlbiBkcmFmdCBpcyBhbHJlYWR5IGZpbmFsaXplZFwiLDExOlwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMjpcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTM6XCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIiwxNDpcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIiwxNTpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCBhcHBseSBwYXRjaCwgcGF0aCBkb2Vzbid0IHJlc29sdmU6IFwiK259LDE2OidTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJywxNzpmdW5jdGlvbihuKXtyZXR1cm5cIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIrbn0sMTg6ZnVuY3Rpb24obil7cmV0dXJuXCJUaGUgcGx1Z2luIGZvciAnXCIrbitcIicgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIGBlbmFibGVcIituK1wiKClgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uXCJ9LDIwOlwiQ2Fubm90IHVzZSBwcm94aWVzIGlmIFByb3h5LCBQcm94eS5yZXZvY2FibGUgb3IgUmVmbGVjdCBhcmUgbm90IGF2YWlsYWJsZVwiLDIxOmZ1bmN0aW9uKG4pe3JldHVyblwicHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnXCIrbitcIidcIn0sMjI6ZnVuY3Rpb24obil7cmV0dXJuXCInY3VycmVudCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDIzOmZ1bmN0aW9uKG4pe3JldHVyblwiJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrbn19LFo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3Qub3duS2V5cz9SZWZsZWN0Lm93bktleXM6dm9pZCAwIT09T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9mdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobikpfTpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxubj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc3x8ZnVuY3Rpb24obil7dmFyIHQ9e307cmV0dXJuIFoobikuZm9yRWFjaCgoZnVuY3Rpb24ocil7dFtyXT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4scil9KSksdH0sdG49e30scm49e2dldDpmdW5jdGlvbihuLHQpe2lmKHQ9PT1RKXJldHVybiBuO3ZhciBlPXAobik7aWYoIXUoZSx0KSlyZXR1cm4gZnVuY3Rpb24obix0LHIpe3ZhciBlLGk9SSh0LHIpO3JldHVybiBpP1widmFsdWVcImluIGk/aS52YWx1ZTpudWxsPT09KGU9aS5nZXQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNhbGwobi5rKTp2b2lkIDB9KG4sZSx0KTt2YXIgaT1lW3RdO3JldHVybiBuLkl8fCFyKGkpP2k6aT09PXoobi50LHQpPyhrKG4pLG4ub1t0XT1SKG4uQS5oLGksbikpOml9LGhhczpmdW5jdGlvbihuLHQpe3JldHVybiB0IGluIHAobil9LG93bktleXM6ZnVuY3Rpb24obil7cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhwKG4pKX0sc2V0OmZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1JKHAobiksdCk7aWYobnVsbD09ZT92b2lkIDA6ZS5zZXQpcmV0dXJuIGUuc2V0LmNhbGwobi5rLHIpLCEwO2lmKCFuLlApe3ZhciBpPXoocChuKSx0KSxvPW51bGw9PWk/dm9pZCAwOmlbUV07aWYobyYmby50PT09cilyZXR1cm4gbi5vW3RdPXIsbi5EW3RdPSExLCEwO2lmKGMocixpKSYmKHZvaWQgMCE9PXJ8fHUobi50LHQpKSlyZXR1cm4hMDtrKG4pLEUobil9cmV0dXJuIG4ub1t0XT1yLG4uRFt0XT0hMCwhMH0sZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24obix0KXtyZXR1cm4gdm9pZCAwIT09eihuLnQsdCl8fHQgaW4gbi50PyhuLkRbdF09ITEsayhuKSxFKG4pKTpkZWxldGUgbi5EW3RdLG4ubyYmZGVsZXRlIG4ub1t0XSwhMH0sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKG4sdCl7dmFyIHI9cChuKSxlPVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCk7cmV0dXJuIGU/e3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZToxIT09bi5pfHxcImxlbmd0aFwiIT09dCxlbnVtZXJhYmxlOmUuZW51bWVyYWJsZSx2YWx1ZTpyW3RdfTplfSxkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbigpe24oMTEpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG4udCl9LHNldFByb3RvdHlwZU9mOmZ1bmN0aW9uKCl7bigxMil9fSxlbj17fTtpKHJuLChmdW5jdGlvbihuLHQpe2VuW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXT1hcmd1bWVudHNbMF1bMF0sdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSkpLGVuLmRlbGV0ZVByb3BlcnR5PWZ1bmN0aW9uKHQscil7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmaXNOYU4ocGFyc2VJbnQocikpJiZuKDEzKSxybi5kZWxldGVQcm9wZXJ0eS5jYWxsKHRoaXMsdFswXSxyKX0sZW4uc2V0PWZ1bmN0aW9uKHQscixlKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcImxlbmd0aFwiIT09ciYmaXNOYU4ocGFyc2VJbnQocikpJiZuKDE0KSxybi5zZXQuY2FsbCh0aGlzLHRbMF0scixlLHRbMF0pfTt2YXIgb249ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKG4pe3RoaXMuTz1CLHRoaXMuTj0hMCxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PW4/dm9pZCAwOm4udXNlUHJveGllcykmJnRoaXMuc2V0VXNlUHJveGllcyhuLnVzZVByb3hpZXMpLFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09bj92b2lkIDA6bi5hdXRvRnJlZXplKSYmdGhpcy5zZXRBdXRvRnJlZXplKG4uYXV0b0ZyZWV6ZSksdGhpcy5wcm9kdWNlPXRoaXMucHJvZHVjZS5iaW5kKHRoaXMpLHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzPXRoaXMucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQodGhpcyl9dmFyIGk9ZS5wcm90b3R5cGU7cmV0dXJuIGkucHJvZHVjZT1mdW5jdGlvbih0LGUsaSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgZSl7dmFyIG89ZTtlPXQ7dmFyIHU9dGhpcztyZXR1cm4gZnVuY3Rpb24obil7dmFyIHQ9dGhpczt2b2lkIDA9PT1uJiYobj1vKTtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxpPUFycmF5KHI+MT9yLTE6MCksYT0xO2E8cjthKyspaVthLTFdPWFyZ3VtZW50c1thXTtyZXR1cm4gdS5wcm9kdWNlKG4sKGZ1bmN0aW9uKG4pe3ZhciByO3JldHVybihyPWUpLmNhbGwuYXBwbHkocixbdCxuXS5jb25jYXQoaSkpfSkpfX12YXIgYTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZuKDYpLHZvaWQgMCE9PWkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGkmJm4oNykscih0KSl7dmFyIGY9dyh0aGlzKSxjPVIodGhpcyx0LHZvaWQgMCkscz0hMDt0cnl7YT1lKGMpLHM9ITF9ZmluYWxseXtzP2coZik6TyhmKX1yZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSYmYSBpbnN0YW5jZW9mIFByb21pc2U/YS50aGVuKChmdW5jdGlvbihuKXtyZXR1cm4gaihmLGkpLFAobixmKX0pLChmdW5jdGlvbihuKXt0aHJvdyBnKGYpLG59KSk6KGooZixpKSxQKGEsZikpfWlmKCF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCl7aWYoKGE9ZSh0KSk9PT1IKXJldHVybjtyZXR1cm4gdm9pZCAwPT09YSYmKGE9dCksdGhpcy5OJiZkKGEsITApLGF9bigyMSx0KX0saS5wcm9kdWNlV2l0aFBhdGNoZXM9ZnVuY3Rpb24obix0KXt2YXIgcixlLGk9dGhpcztyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP2Z1bmN0aW9uKHQpe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGU9QXJyYXkocj4xP3ItMTowKSxvPTE7bzxyO28rKyllW28tMV09YXJndW1lbnRzW29dO3JldHVybiBpLnByb2R1Y2VXaXRoUGF0Y2hlcyh0LChmdW5jdGlvbih0KXtyZXR1cm4gbi5hcHBseSh2b2lkIDAsW3RdLmNvbmNhdChlKSl9KSl9Olt0aGlzLnByb2R1Y2Uobix0LChmdW5jdGlvbihuLHQpe3I9bixlPXR9KSkscixlXX0saS5jcmVhdGVEcmFmdD1mdW5jdGlvbihlKXtyKGUpfHxuKDgpLHQoZSkmJihlPUQoZSkpO3ZhciBpPXcodGhpcyksbz1SKHRoaXMsZSx2b2lkIDApO3JldHVybiBvW1FdLkM9ITAsTyhpKSxvfSxpLmZpbmlzaERyYWZ0PWZ1bmN0aW9uKHQscil7dmFyIGU9dCYmdFtRXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoZSYmZS5DfHxuKDkpLGUuSSYmbigxMCkpO3ZhciBpPWUuQTtyZXR1cm4gaihpLHIpLFAodm9pZCAwLGkpfSxpLnNldEF1dG9GcmVlemU9ZnVuY3Rpb24obil7dGhpcy5OPW59LGkuc2V0VXNlUHJveGllcz1mdW5jdGlvbih0KXt0JiYhQiYmbigyMCksdGhpcy5PPXR9LGkuYXBwbHlQYXRjaGVzPWZ1bmN0aW9uKG4scil7dmFyIGU7Zm9yKGU9ci5sZW5ndGgtMTtlPj0wO2UtLSl7dmFyIGk9cltlXTtpZigwPT09aS5wYXRoLmxlbmd0aCYmXCJyZXBsYWNlXCI9PT1pLm9wKXtuPWkudmFsdWU7YnJlYWt9fXZhciBvPWIoXCJQYXRjaGVzXCIpLiQ7cmV0dXJuIHQobik/byhuLHIpOnRoaXMucHJvZHVjZShuLChmdW5jdGlvbihuKXtyZXR1cm4gbyhuLHIuc2xpY2UoZSsxKSl9KSl9LGV9KCksdW49bmV3IG9uLGFuPXVuLnByb2R1Y2UsZm49dW4ucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQodW4pLGNuPXVuLnNldEF1dG9GcmVlemUuYmluZCh1biksc249dW4uc2V0VXNlUHJveGllcy5iaW5kKHVuKSx2bj11bi5hcHBseVBhdGNoZXMuYmluZCh1bikscG49dW4uY3JlYXRlRHJhZnQuYmluZCh1biksbG49dW4uZmluaXNoRHJhZnQuYmluZCh1bik7ZXhwb3J0IGRlZmF1bHQgYW47ZXhwb3J0e29uIGFzIEltbWVyLHZuIGFzIGFwcGx5UGF0Y2hlcyxLIGFzIGNhc3REcmFmdCwkIGFzIGNhc3RJbW11dGFibGUscG4gYXMgY3JlYXRlRHJhZnQsRCBhcyBjdXJyZW50LEogYXMgZW5hYmxlQWxsUGx1Z2lucyxUIGFzIGVuYWJsZUVTNSxDIGFzIGVuYWJsZU1hcFNldCxGIGFzIGVuYWJsZVBhdGNoZXMsbG4gYXMgZmluaXNoRHJhZnQsZCBhcyBmcmVlemUsTCBhcyBpbW1lcmFibGUsdCBhcyBpc0RyYWZ0LHIgYXMgaXNEcmFmdGFibGUsSCBhcyBub3RoaW5nLGUgYXMgb3JpZ2luYWwsYW4gYXMgcHJvZHVjZSxmbiBhcyBwcm9kdWNlV2l0aFBhdGNoZXMsY24gYXMgc2V0QXV0b0ZyZWV6ZSxzbiBhcyBzZXRVc2VQcm94aWVzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmVzbS5qcy5tYXBcbiIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5cclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgfSxcclxuICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICBJbWFnZXM6IFt7XHJcbiAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgfV0sXHJcbiAgQ29tbWVudHM6IFt7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICB9XSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgY29udGVudDogZGF0YSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICB9LFxyXG59KTtcclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCjrtojrs4DshLHsnYAg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtYWluUG9zdHMsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAvLyB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIJyB9LCB7IG5pY2tuYW1lOiAnQ2hhbmhvIExlZScgfSwgeyBuaWNrbmFtZTogJ25ldWUgemVhbCcgfV0sXHJcbiAgRm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogJ+u2gOq4sOy0iCcgfSwgeyBuaWNrbmFtZTogJ0NoYW5obyBMZWUnIH0sIHsgbmlja25hbWU6ICduZXVlIHplYWwnIH1dLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWU6IHtcclxuICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==