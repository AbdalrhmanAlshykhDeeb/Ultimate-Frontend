let btn=document.getElementById("toggle-sidebar"),aside=document.getElementById("sidebar"),asideH=document.getElementById("content-area");btn.onclick=function(){aside.classList.toggle("no-sidebar"),asideH.classList.toggle("no-sidebar")};let toggle=document.getElementById("toggle-submenue-icon"),toggleMisc=document.getElementById("toggle-misc");toggle.onclick=function(){toggle.classList.toggle("fa-angle-down")},toggleMisc.onclick=(()=>{toggleMisc.classList.toggle("fa-angle-down")});let fullScreen=document.getElementById("toggle-fullscreen");fullScreen.onclick=(()=>{fullScreen.classList.toggle("full-screen"),fullScreen.classList.toString("full-screen")?(openFullscreen(),console.log("11111")):(closeFullscreen(),console.log("0000000000"))});let elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen:document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}let toggleIcon=document.getElementById("toggle-settings"),toggleSettings=document.getElementById("settings-box");toggleIcon.onclick=(()=>{toggleSettings.classList.toggle("no-setting"),toggleIcon.classList.toggle("fa-spin")});var themesClasses=[];$(".color-options li").each(function(){themesClasses.push($(this).data("theme"))}),$(".color-options li").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$("body").removeClass(themesClasses.join(" ")).addClass($(this).data("theme"))});