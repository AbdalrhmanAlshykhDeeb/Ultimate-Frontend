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
