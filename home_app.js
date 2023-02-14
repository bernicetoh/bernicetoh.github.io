const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const container = document.querySelector(".navbar__container");
const connect_icon_container = document.querySelector(
  ".connect__icon_container"
);

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  container.classList.toggle("active");
});

const iconobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("hover");
    } else {
      entry.target.classList.remove("hover");
    }
  });
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
connect_icon_container.forEach((el) => iconobserver.observe(el));

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: true,
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

const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

tl.to(".intro", {
  "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  opacity: 1,
  y: 0,
  duration: 0.6,
})
  .to(".intro p", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 1,
  })
  .to(".aboutme__title", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 3,
    start: "top top",
    scrollTrigger: {
      trigger: ".aboutme__title",
      start: "top 90%",
      end: "bottom 100%",
      scrub: 4,
    },
  })
  .to(".profile_round", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 3,
    start: "top top",
    "clip-path": "circle(50% at 50% 50%)",

    scrollTrigger: {
      trigger: ".profile_round",
      start: "top 90%",
      end: "bottom 100%",
      scrub: 0.5,
    },
  })
  .to(".aboutme__text_container", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 2,
    start: "top top",
    scrollTrigger: {
      trigger: ".aboutme__text_container",
      start: "top 90%",
      end: "bottom 100%",
      scrub: 4,
    },
  })
  .to(".skills__title", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 4,
    start: "top top",
    scrollTrigger: {
      trigger: ".skills__title",
      start: "top 90%",
      end: "bottom 100%",
      scrub: 4,
    },
  })
  .to(".projects__title", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 4,
    start: "top top",
    scrollTrigger: {
      trigger: ".projects__title",
      start: "top 90%",
      end: "bottom 100%",
      scrub: 4,
    },
  })
  .from(".lang__list1", {
    duration: 1,
    x: "-50vw",
    ease: "linear",
    "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    y: "100px",
    opacity: 0,
    scrollTrigger: {
      trigger: ".lang__list1",
      start: "top 100%",
      end: "bottom 100%",
      scrub: 4,

      toggleActions: "restart pause reverse reset",
    },
  })
  .from(".lang__list2", {
    duration: 1,
    x: "50vw",
    ease: "linear",
    "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    y: "100px",
    opacity: 0,
    scrollTrigger: {
      trigger: ".lang__list2",
      start: "top 100%",
      end: "bottom 100%",
      scrub: 4,

      toggleActions: "restart pause reverse reset",
    },
  })
  .from(".project__card1", {
    duration: 1,
    x: "-50vw",
    ease: "linear",
    scrollTrigger: {
      trigger: ".project__card1",
      start: "top 100%",
      end: "bottom 80%",
      scrub: 4,

      toggleActions: "restart pause reverse reset",
    },
  })
  .from(".project__card2", {
    duration: 1,
    x: "50vw",
    ease: "linear",

    scrollTrigger: {
      trigger: ".project__card2",
      start: "top 100%",
      end: "bottom 80%",
      scrub: 4,

      toggleActions: "restart pause reverse reset",
    },
  });
