"use strict";$(function(){var e=$('<script>"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(e=>{e.addEventListener("updatefound",()=>{newWorker=e.installing,newWorker.addEventListener("statechange",()=>{if("installed"===newWorker.state&&navigator.serviceWorker.controller){var e="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark,t=GLOBAL_CONFIG.Snackbar.position;Snackbar.show({text:"已更新最新版本",backgroundColor:e,duration:3e3,pos:t,actionText:"點擊刷新",actionTextColor:"#fff",onActionClick:function(e){location.reload()}})}})})});<\/script>'),t=$('<div class="app-refresh" id="app-refresh"> <div class="app-refresh-wrap" onclick="location.reload()"> <label>已更新最新版本</label> <span>點擊刷新</span></div></div><script>function showNotification(){var e="dark"===document.documentElement.getAttribute("data-theme")?"#1f1f1f":"#49b1f5";$("#app-refresh").css("background",e),$("#app-refresh").addClass("app-refresh-show")}"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(e=>{e.addEventListener("updatefound",()=>{newWorker=e.installing,newWorker.addEventListener("statechange",()=>{"installed"===newWorker.state&&navigator.serviceWorker.controller&&showNotification()})})});<\/script>'),r=$('<style type="text/css">.app-refresh{height:0;line-height:3em;overflow:hidden;position:fixed;top:0;left:0;right:0;z-index:99999;padding:0 1rem;transition:all .3s ease}.app-refresh-wrap{display:flex;color:#fff;height:100%;align-items:center;cursor:pointer}.app-refresh-wrap label{flex:1}.app-refresh-show{height:2.7rem}</style>');window.addEventListener("load",function(){void 0!==GLOBAL_CONFIG.Snackbar?$("body").append(e):($("body").append(t),$("head").append(r))}),window.addEventListener("load",function(){var e=window.location.hash,t=$("#vcomment");if(e&&t.length)var r=decodeURIComponent(e),a=setInterval(function(){$(r).offset().top>t.offset().top&&$(r).length&&($("html, body").animate({scrollTop:$(r).offset().top-90},1e3),clearInterval(a))},100)})});