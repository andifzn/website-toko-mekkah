document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(TextPlugin);

    gsap.from(".navbar", {
        y: -150,
    });
    gsap.to(".navbar", {
        delay:1,
        duration: 2,
        ease: "elastic.out(1,0.3)",
        y: 0,
    });

    gsap.from(".hero-content", {
        duration: 1,
        opacity: 0,
        delay: 1.5,
        ease: "slow(0.7,0.7,false)",
    });
});
