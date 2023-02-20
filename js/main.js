window.onload = () => {
  const transition_el = document.querySelector(".transition");
  const anchors = document.querySelector("a");
  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const achor = anchors[i];

    anchors.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      transition_el.classList.add("is-active");

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  }
};

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

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
  });
});
