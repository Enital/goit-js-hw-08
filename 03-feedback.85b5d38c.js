function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,i,r,a,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,f=setTimeout(O,t),l?b(e):a}function w(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function O(){var e=v();if(w(e))return j(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,r-(e-c)):n}(e))}function j(e){return f=void 0,p&&o?b(e):(o=i=void 0,a)}function T(){var e=v(),n=w(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(O,t),b(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},T.flush=function(){return void 0===f?a:j(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),h=b.elements.email,w=b.elements.message;let O={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);if(e){const{email:e="",message:n=""}=t;h.value=e,w.value=n}}(),b.addEventListener("input",e(t)((function(e){O.email=h.value,O.message=w.value;const t=JSON.stringify(O);try{localStorage.setItem("feedback-form-state",t)}catch(e){console.log("We have some problems with loading. Issue:",e)}}),500)),b.addEventListener("submit",(function(e){if(e.preventDefault(),!O.hasOwnProperty("email")&&!O.hasOwnProperty("message"))return;console.log(O),O={},localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.85b5d38c.js.map
