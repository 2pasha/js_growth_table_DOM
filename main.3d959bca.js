parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".field"),n=document.querySelector(".append-row"),d=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),o=document.querySelector(".remove-column"),c=2,l=10;n.addEventListener("click",function(){e.tBodies[0].append(e.rows[0].cloneNode(!0)),e.rows.length>=l&&(n.disabled=!0),d.disabled=!1}),d.addEventListener("click",function(){e.rows[e.rows.length-1].remove(),e.rows.length<=c&&(d.disabled=!0),n.disabled=!1}),r.addEventListener("click",function(){Array.from(e.rows).forEach(function(e){e.append(e.children[0].cloneNode(!0)),e.children.length>=l&&(r.disabled=!0)}),o.disabled=!1}),o.addEventListener("click",function(){Array.from(e.rows).forEach(function(e){e.children[e.children.length-1].remove(),e.children.length<=c&&(o.disabled=!0)}),r.disabled=!1});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3d959bca.js.map