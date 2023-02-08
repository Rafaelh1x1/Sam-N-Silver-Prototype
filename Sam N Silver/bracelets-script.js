const btnNavEl = document.querySelector(".hamburger");
const headerEl = document.querySelector(".bracelets-page");
const btncloseEl = document.querySelector(".x");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

btncloseEl.addEventListener("click", function () {
  headerEl.classList.add("nav-open");
});

("nav-open");
