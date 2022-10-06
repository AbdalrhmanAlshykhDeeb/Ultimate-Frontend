let btn = document.getElementById("toggle-sidebar");

let aside = document.getElementById("sidebar");
let asideH = document.getElementById("content-area");

btn.onclick = function () {
  aside.classList.toggle("no-sidebar");
  asideH.classList.toggle("no-sidebar");
};
