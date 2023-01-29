const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const container = document.querySelector(".navbar__container");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  container.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const observerleft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showleft");
    } else {
      entry.target.classList.remove("showleft");
    }
  });
});

const observerright = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showright");
    } else {
      entry.target.classList.remove("showright");
    }
  });
});

const hiddenElemenents = document.querySelectorAll(".hidden");

const hiddenElementsleft = document.querySelectorAll(".hiddenleft");
const hiddenElementsright = document.querySelectorAll(".hiddenright");
hiddenElemenents.forEach((el) => observer.observe(el));

hiddenElementsleft.forEach((el) => observerleft.observe(el));
hiddenElementsright.forEach((el) => observerright.observe(el));
