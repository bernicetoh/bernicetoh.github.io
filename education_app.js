const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const container = document.querySelector(".navbar__container");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  container.classList.toggle("active");
});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

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
          duration: 1.5,
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
          duration: 1.55,
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

tl.to(".title h1", {
  "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  opacity: 1,
  y: 0,
  duration: 0.6,
});

// gsap.from(".timeline__container", {
//   duration: 4,
//   //   x: "-50vw",
//   ease: "linear",
//   stagger: 3,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".timeline__container",
//     start: "top 40%",
//     end: "bottom 80%",
//     scrub: 2,

//     toggleActions: "restart pause reverse reset",
//   },
// });

// let timelinebar = CSSRulePlugin.getRule(".timeline:after");
// gsap.registerPlugin(CSSRulePlugin);

// gsap.from(timelinebar, {
//   "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//   opacity: 1,
//   y: 0,
//   duration: 4,
//   //   start: "top top",
//   scrollTrigger: {
//     trigger: timelinebar,
//     start: "top 40%",
//     end: "bottom 40%",
//     markers: true,
//     scrub: 4,
//   },
// });
