const tl = gsap.timeline({ defaults: { ease: "power4.inOut", delay: 0.5 } });

tl.to(".container", {
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
