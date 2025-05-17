document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(TextPlugin)

    gsap.from('.navbar', {
        y : -150
    });
    gsap.to('.navbar', {
        duration:2,
        ease: "elastic.out(1,0.3)",
        y: 0
        });


    gsap.from('.tagline', {
        duration:2,
        opacity:0,
        delay: 2,
        ease: "slow(0.7,0.7,false)",
    });

});