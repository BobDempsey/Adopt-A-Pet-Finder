parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({3:[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,o){if("function"==typeof e&&e.amd)e(["exports","module"],o);else if("undefined"!=typeof exports&&"undefined"!=typeof module)o(exports,module);else{var n={exports:{}};o(n.exports,n),t.fetchJsonp=n.exports}}(this,function(e,t){"use strict";var o={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function n(e){try{delete window[e]}catch(t){window[e]=void 0}}function r(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=e,a=t.timeout||o.timeout,u=t.jsonpCallback||o.jsonpCallback,c=void 0;return new Promise(function(o,s){var l=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),d=u+"_"+l;window[l]=function(e){o({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),r(d),n(l)},i+=-1===i.indexOf("?")?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+i+u+"="+l),t.charset&&m.setAttribute("charset",t.charset),m.id=d,document.getElementsByTagName("head")[0].appendChild(m),c=setTimeout(function(){s(new Error("JSONP request to "+e+" timed out")),n(l),r(d),window[l]=function(){n(l)}},a),m.onerror=function(){s(new Error("JSONP request to "+e+" failed")),n(l),r(d),c&&clearTimeout(c)}})}});
},{}],1:[function(require,module,exports) {
"use strict";var t=require("fetch-jsonp"),n=e(t);function e(t){return t&&t.__esModule?t:{default:t}}function a(t){var n=document.querySelector("#results");n.innerHTML="",t.forEach(function(t){var e=document.createElement("div");e.classList.add("card"),e.innerHTML='\n    <img src="'+t.media.photos.photo[3].$t+'" />\n    <div class="cardContent">\n    <h3>'+(t.name.$t?""+t.name.$t:"")+" ("+(t.age.$t?""+t.age.$t:"")+" "+(t.sex.$t?""+t.sex.$t:"")+" \n    "+(t.animal.$t?""+t.animal.$t:"")+")</h3>\n    <p>"+(t.breeds.breed.$t?"<i>"+t.breeds.breed.$t+"</i><br>":"")+"\n\n    "+(t.contact.address1.$t?t.contact.address1.$t+"<br>":"")+"\n    "+(t.contact.address2.$t?t.contact.address2.$t+"<br>":"")+"\n    "+(t.contact.city.$t?t.contact.city.$t+",":"")+"\n    "+(t.contact.state.$t?""+t.contact.state.$t:"")+"\n    "+(t.contact.zip.$t?""+t.contact.zip.$t:"")+"\n    </p>\n    <ul>\n    "+(t.contact.phone.$t?'<li>Phone: <a href="tel:'+t.contact.phone.$t+'">'+t.contact.phone.$t+"</a></li>":"")+"\n    "+(t.contact.email.$t?'<li>Email: <a href="mailto:'+t.contact.email.$t+'">'+t.contact.email.$t+"</a></li>":"")+"\n    "+(t.contact.email.$t?"<li>Shelter ID: "+t.shelterId.$t+"</li>":"")+"\n    </ul>\n    </div>\n    ",n.appendChild(e),console.log(t)})}new Vue({el:"#app",data:function(){return{valid:!0,mask:"#####",zip:"",select:null,animals:["cat","dog","bird","barnyard"],dialog:!1}},methods:{fetchAnimals:function(t){var e=document.querySelector("#alert");this.$refs.form.validate(t)&&(t.preventDefault(),(0,n.default)("http://api.petfinder.com/pet.find?format=json&key=6c05ad76afb30803f826bda51957c226&animal="+this.select+"&location="+this.zip+"&callback=callback",{jsonpCallbackFunction:"callback"}).then(function(t){return t.json()}).then(function(t){return a(t.petfinder.pets.pet)}).then(function(t){return e.style.display="none"}).catch(function(t){return e.style.display="flex"}).catch(function(t){return console.log(t)}))},callback:function(t){console.log(t)},clear:function(){this.$refs.form.reset(),document.querySelector("#results").innerHTML=""}}});
},{"fetch-jsonp":3}]},{},[1], null)
//# sourceMappingURL=/main.649f201a.map