const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const navigasi = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  windowPostion = window.scrollY > 200;
  navigasi.classList.toggle("navigation-active", window.scrollY > 0);
  hamburger.classList.toggle("btn-active", windowPostion);
  hamburger.classList.remove("is-active");
  menu.classList.remove("menu-active");
});
