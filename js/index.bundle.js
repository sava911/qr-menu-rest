!function(){var t={211:function(){$((function(){$(document).ready((function(){e.countCart()>0&&t.removeClass("empty")}));let t=$(".cd-cart-container");t.children(".cd-cart-trigger").on("click",(function(e){e.preventDefault(),("undefined"==typeof bool?t.hasClass("cart-open"):bool)?t.removeClass("cart-open"):t.addClass("cart-open")})),t.removeClass("cart-open");const e=function(){let t=[];function e(t,e,n,o){this.name=t,this.price=e,this.count=n,this.img=o}function n(){localStorage.setItem("shoppingCart",JSON.stringify(t))}return t=JSON.parse(localStorage.getItem("shoppingCart")),null===t&&(t=[]),{addItemToCart:function(o,a,r,i){for(var c in t)if(t[c].name===o)return t[c].count+=r,void n();var s=new e(o,a,r,i);t.push(s),n()},setCountForItem:function(e,o){for(var a in t)if(t[a].name===e){t[a].count=o;break}n()},removeItemFromCart:function(e){for(var o in t)if(t[o].name===e){t[o].count--,0===t[o].count&&t.splice(o,1);break}n()},removeItemFromCartAll:function(e){for(var o in t)if(t[o].name===e){t.splice(o,1);break}n()},clearCart:function(){t=[],n()},countCart:function(){var e=0;for(var n in t)e+=t[n].count;return e},totalCart:function(){var e=0;for(var n in t)e+=t[n].price*t[n].count;return e.toFixed(0)},listCart:function(){var e=[];for(var n in t){var o=t[n],a={};for(var r in o)a[r]=o[r];a.total=(o.price*o.count).toFixed(0),e.push(a)}return e}}}();function n(){var t=e.listCart(),n="";for(var o in t)n+=`<li class='product'>\n\t\t\t\t\t<div class="product-image"><a href="#0"><img src="${t[o].img}" alt="${t[o].name}"></a></div>\n\t\t\t\t\t<div class='product-details'>\n\t\t\t\t\n           \n            \t\t<h3>${t[o].name}</h3>\n\t\t\t\t\t\n\t\t\t\t\t\t \n\n\t\t\t\t\t\t<div class='actions'>\n\t\t\t\t\t\t\t<div class="quantity">\n\t\t\t\t\t\t\t<label for="cd-product-3">Кол</label>\n\n\t\t\t\t\t\t\t<span class="select">\n\t\t\t\t\t\t\t\t<select id="cd-product-3" name="quantity" class='item-count' data-name='${t[o].name}' value=''>\n\t\t\t\t\t\t\t\t\t<option value="">${t[o].count}</option>\n\t\t\t\t\t\t\t\t\t<option value="1">1</option>\n\t\t\t\t\t\t\t\t\t<option value="2">2</option>\n\t\t\t\t\t\t\t\t\t<option value="3">3</option>\n\t\t\t\t\t\t\t\t\t<option value="4">4</option>\n\t\t\t\t\t\t\t\t\t<option value="5">5</option>\n\t\t\t\t\t\t\t\t\t<option value="6">6</option>\n\t\t\t\t\t\t\t\t\t<option value="7">7</option>\n\t\t\t\t\t\t\t\t\t<option value="8">8</option>\n\t\t\t\t\t\t\t\t\t<option value="9">9</option>\n\t\t\t\t\t\t\t\t\t<option value="10">10</option>\n\t\t\t\t\t\t\t\t\t<option value="11">11</option>\n\t\t\t\t\t\t\t\t\t<option value="12">12</option>\n\t\t\t\t\t\t\t\t\t<option value="13">13</option>\n\t\t\t\t\t\t\t\t\t<option value="14">14</option>\n\t\t\t\t\t\t\t\t\t<option value="15">15</option>\n\t\t\t\t\t\t\t\t\t<option value="16">16</option>\n\t\t\t\t\t\t\t\t\t<option value="17">17</option>\n\t\t\t\t\t\t\t\t\t<option value="18">18</option>\n\t\t\t\t\t\t\t\t\t<option value="19">19</option>\n\t\t\t\t\t\t\t\t\t<option value="20">20</option>\n\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n         \n\t\t\t\t\t\t  <span class='price'>${t[o].total} ₽</span>\n\n\t\t\t\t\t\n\t\t\t\t\t</div>\n          \t  <a class='delete-item' data-name='${t[o].name}'><span>&#10540;</span></a>\n\t\t\t\t\t</li>`;$("#show-cart").html(n),$("#count-cart").html(e.countCart()),$("#total-cart").html(e.totalCart())}$(".add-to-cart").click((function(o){o.preventDefault();var a=$(this).attr("data-name"),r=Number($(this).attr("data-price")),i=$(this).attr("data-img");e.addItemToCart(a,r,1,i),n(),t.removeClass("empty")})),$("#clear-cart").click((function(o){t.removeClass("cart-open"),t.addClass("empty"),e.clearCart(),n()})),$("#show-cart").on("click",".delete-item",(function(o){o.preventDefault();var a=$(this).attr("data-name");e.removeItemFromCartAll(a),n(),0==e.countCart()&&(t.removeClass("cart-open"),t.addClass("empty"))})),$("#show-cart").on("click",".subtract-item",(function(t){var o=$(this).attr("data-name");e.removeItemFromCart(o),n()})),$("#show-cart").on("click",".plus-item",(function(t){var o=$(this).attr("data-name");e.addItemToCart(o,0,1),n()})),$("#show-cart").on("change",".item-count",(function(t){var o=$(this).attr("data-name"),a=Number($(this).val());e.setCountForItem(o,a),n()})),n()}))}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=n(211),e=n.n(t);document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelectorAll(".slide"),e=document.querySelectorAll(".dot");let n=0;function o(){t.forEach((t=>{t.classList.remove("active")})),e.forEach((t=>{t.classList.remove("active")})),t[n].classList.add("active"),e[n].classList.add("active"),e.forEach((t=>{t.classList.remove("fade-in")})),e[n].classList.add("fade-in")}setInterval((function(){n++,n>=t.length&&(n=0),o()}),3e3),o()})),document.querySelectorAll(".filters .tabs__btn").forEach((function(t,e){t.addEventListener("click",(function(){const t=document.querySelectorAll(".filters .tabs__btn"),n=document.querySelectorAll(".tabs__list .tabs__items");t.forEach((function(t){t.classList.remove("tabs__active-btn")})),this.classList.add("tabs__active-btn"),n.forEach((function(t){t.classList.remove("tabs__active-btn")})),n[e].classList.add("tabs__active-btn")}))})),function(t){function e(t,e,n){n?(e.classList.add("rotated"),t.classList.add("active")):(e.classList.remove("rotated"),t.classList.remove("active"))}document.querySelectorAll(".wrapper-dropdown").forEach((t=>{t.children[2];const n=t.querySelectorAll("div.wrapper-dropdown li a");t.addEventListener("click",(()=>{let n=t.children[1];if(t.classList.contains("active"))e(t,n,!1);else{let o=document.querySelector(".wrapper-dropdown.active");o&&e(o,o.children[1],!1),e(t,n,!0)}}));for(let e of n)e.addEventListener("click",(()=>{t.querySelector(".selected-display").innerHTML=e.innerHTML}))})),window.addEventListener("click",(function(t){null===t.target.closest(".wrapper-dropdown")&&document.querySelectorAll(".wrapper-dropdown").forEach((t=>{t.children[2],e(t,t.children[1],!1)}))}))}(),function(){let t=document.querySelectorAll(".item");Array.from(t).map((t=>{t.addEventListener("click",(()=>{t.classList.toggle("active")}))}))}(),document.querySelector(".js-menu").addEventListener("click",(()=>{document.querySelector(".js-menu").classList.toggle("active"),document.querySelector(".js-nav").classList.toggle("open"),document.querySelector(".js-nav__list").classList.toggle("show")})),document.querySelectorAll(".js-menu").forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),document.body.classList.contains("open")?(document.body.classList.remove("open"),document.body.style.overflow="auto"):(document.body.classList.add("open"),document.body.style.overflow="hidden")}))})),window.addEventListener("scroll",(function(){window.scrollY>=200?document.querySelector(".header-fixed").classList.add("with-effect"):document.querySelector(".header-fixed").classList.remove("with-effect")})),e()()}()}();