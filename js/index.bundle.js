!function(){"use strict";document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".slide"),t=document.querySelectorAll(".dot");let s=0;function c(){e.forEach((e=>{e.classList.remove("active")})),t.forEach((e=>{e.classList.remove("active")})),e[s].classList.add("active"),t[s].classList.add("active"),t.forEach((e=>{e.classList.remove("fade-in")})),t[s].classList.add("fade-in")}setInterval((function(){s++,s>=e.length&&(s=0),c()}),3e3),c()})),document.querySelectorAll(".filters .tabs__btn").forEach((function(e,t){e.addEventListener("click",(function(){const e=document.querySelectorAll(".filters .tabs__btn"),s=document.querySelectorAll(".tabs__list .tabs__items");e.forEach((function(e){e.classList.remove("tabs__active-btn")})),this.classList.add("tabs__active-btn"),s.forEach((function(e){e.classList.remove("tabs__active-btn")})),s[t].classList.add("tabs__active-btn")}))})),document.querySelector(".js-menu").addEventListener("click",(()=>{document.querySelector(".js-menu").classList.toggle("active"),document.querySelector(".js-nav").classList.toggle("open"),document.querySelector(".js-nav__list").classList.toggle("show")})),document.querySelectorAll(".js-menu").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.contains("open")?(document.body.classList.remove("open"),document.body.style.overflow="auto"):(document.body.classList.add("open"),document.body.style.overflow="hidden")}))})),window.addEventListener("scroll",(function(){window.scrollY>=200?document.querySelector(".header-fixed").classList.add("with-effect"):document.querySelector(".header-fixed").classList.remove("with-effect")})),function(e){let t=document.querySelector("select");t.addEventListener("focus",(()=>{t.size=5,t.classList.add("fadeIn"),t.classList.remove("fadeOut"),t.style.backgroundColor="#FFF"})),t.addEventListener("blur",(()=>{t.size=1,t.classList.add("fadeOut"),t.classList.remove("fadeIn"),t.style.backgroundColor="#FFF"})),t.addEventListener("change",(()=>{t.size=1,t.blur(),t.style.backgroundColor="#FFF"})),t.addEventListener("mouseover",(()=>{1==t.size&&(t.style.backgroundColor="rgb(247, 247, 247)")})),t.addEventListener("mouseout",(()=>{1==t.size&&(t.style.backgroundColor="#FFF")})),document.querySelector("select").addEventListener("change",(function(){document.querySelectorAll(".tab__select").forEach(((e,t)=>{e.classList.toggle("active-select",t===this.selectedIndex)}))}))}()}();