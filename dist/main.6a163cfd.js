parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WEtv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.joke=void 0;var n={getJoke:function(n){return new Promise(function(t,e){fetch("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/".concat(n)).then(function(n){return n.json()}).then(function(n){return t(n[0])}).catch(function(n){return e(n)})})},createJoke:function(n,t,e){return new Promise(function(o,r){fetch("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/jokes/create",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({type:n,setup:t,punchline:e})}).then(function(n){return n.json()}).then(function(n){return o(n)}).catch(function(n){return r(n)})})}};exports.joke=n;
},{}],"sYEW":[function(require,module,exports) {

},{"./..\\..\\content\\images\\wallpaper.jpg":[["wallpaper.5cb5a98d.jpg","rOYt"],"rOYt"]}],"WToO":[function(require,module,exports) {
"use strict";var e=require("./joke");require("./../../scss/custom/main.scss"),document.addEventListener("DOMContentLoaded",function(){t("general")}),document.querySelector("#get-joke").addEventListener("click",function(e){var o=document.querySelector("#hear-joke-section #joke-type").value;document.querySelector("#get-joke").disabled=!0,t(o)}),document.querySelector("#create-joke").addEventListener("click",function(e){var t=document.querySelector("#create-joke-section #joke-type").value,c=document.querySelector("#create-joke-section #setup").value.trim(),n=document.querySelector("#create-joke-section #punchline").value.trim();""!=c&&""!=n&&(document.querySelector("#create-joke").disabled=!0,o(t,c,n))});var t=function(t){e.joke.getJoke(t).then(function(e){document.querySelector("#joke").innerHTML='<div class="setup">'.concat(e.setup.trim(),'</div><br /><div class="punchline">').concat(e.punchline.trim(),"</div>"),document.querySelector("#get-joke").disabled=!1}).catch(function(e){document.querySelector("#joke").innerHTML='<div class="error">Something went wrong !!</div>',document.querySelector("#get-joke").disabled=!1})},o=function(t,o,c){e.joke.createJoke(t,o,c).then(function(e){console.log(e),""!=e.id?alert("joke created successfully"):alert("something went wrong"),document.querySelector("#create-joke").disabled=!1}).catch(function(e){console.log(e),document.querySelector("#create-joke").disabled=!1})};
},{"./joke":"WEtv","./../../scss/custom/main.scss":"sYEW"}]},{},["WToO"], null)
//# sourceMappingURL=main.6a163cfd.js.map