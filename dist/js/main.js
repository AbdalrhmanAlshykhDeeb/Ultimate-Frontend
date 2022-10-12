let btn = document.getElementById("toggle-sidebar");

let aside = document.getElementById("sidebar");
let asideH = document.getElementById("content-area");

btn.onclick = function () {
  aside.classList.toggle("no-sidebar");
  asideH.classList.toggle("no-sidebar");
};

let toggle = document.getElementById("toggle-submenue-icon");
let toggleMisc = document.getElementById("toggle-misc");

toggle.onclick = function () {
  toggle.classList.toggle("fa-angle-down");
};

toggleMisc.onclick = () => {
  toggleMisc.classList.toggle("fa-angle-down");
};

let fullScreen = document.getElementById("toggle-fullscreen");

fullScreen.onclick = () => {
  fullScreen.classList.toggle("full-screen");
  console.log(fullScreen.classList.value);
  if (fullScreen.classList.value.includes("full-screen")) {
    openFullscreen();
  } else {
    closeFullscreen();
  }
};

let elem = document.documentElement;
/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  console.log(document);
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

let toggleIcon = document.getElementById("toggle-settings");
let toggleSettings = document.getElementById("settings-box");

toggleIcon.onclick = () => {
  toggleSettings.classList.toggle("no-setting");
  toggleIcon.classList.toggle("fa-spin");
};

var themesClasses = [];
$(".color-options li").each(function () {
  themesClasses.push($(this).data("theme"));
});
$(".color-options li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $("body")
    .removeClass(themesClasses.join(" "))
    .addClass($(this).data("theme"));
});
