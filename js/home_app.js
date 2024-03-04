const tl = gsap.timeline({ defaults: { ease: "power4.inOut", delay: 0.5 } });

tl.to(".intro", {
  "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  opacity: 1,
  y: 0,
  duration: 0.6,
})
  .to(
    ".intro p",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "-=1"
  )
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
  .to(".aboutme__images", {
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
  .to(".lang__list", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 4,
    start: "top top",
    scrollTrigger: {
      trigger: ".lang__list",
      start: "top 90%",
      end: "bottom 100%",
      scrub: 4,
    },
  })
  .to(".projects__title", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 2,
    start: "top top",
    scrollTrigger: {
      trigger: ".projects__title",
      start: "top 90%",
      end: "bottom 100%",
      scrub: 4,
    },
  })
  .from(".project__card1", {
    duration: 1,
    x: "-50vw",
    opacity: 0,
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
    opacity: 0,

    scrollTrigger: {
      trigger: ".project__card2",
      start: "top 100%",
      end: "bottom 80%",
      scrub: 4,

      toggleActions: "restart pause reverse reset",
    },
  })
  .to(".connect__title", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    duration: 4,
    start: "top top",
    scrollTrigger: {
      trigger: ".connect__title",
      start: "top 90%",
      end: "bottom 100%",
      scrub: 4,
    },
  })
  .from(
    ".icon",
    {
      stagger: 0.2,
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".connect__title",
        start: "top 90%",
        end: "bottom 100%",
        scrub: 4,
      },
    }
    // scrollTrigger: {
    //   trigger: ".icon",
    //   start: "top 100%",
    //   end: "bottom 90%",
    //   markers: true,
    // },
  );
