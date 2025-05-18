const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarMenu = document.querySelector(".navbar-menu");
const dropdownMenu = document.querySelectorAll(".dropdown-menu");
const dropdownContent = document.querySelectorAll(".dropdown-content");
const pesanSekarang = document.getElementById("pesan-sekarang");
const pemesanan = document.querySelector(".pemesanan");

hamburgerMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden");
});

dropdownMenu.forEach((menu, index) => {
    menu.addEventListener("click", () => {
        dropdownContent[index].classList.toggle("dropdown-hidden");
    });
});


const heroContent = document.querySelector(".hero-content")
pesanSekarang.addEventListener("click", (e) => {
    e.stopPropagation();
    pemesanan.classList.toggle("pop-up");
    heroContent.style.opacity = 0;

});

document.addEventListener("click", (e) => {
    if (
        pemesanan.classList.contains("pop-up") &&
        !pemesanan.contains(e.target)
    ) {
        pemesanan.classList.remove("pop-up");
        heroContent.style.opacity = 1;
    }
})


console.log(window.innerWidth + "x" + window.innerHeight);
