const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarMenu = document.querySelector(".navbar-menu");
const pesanSekarang = document.getElementById("pesan-sekarang");
const pemesanan = document.querySelector(".pemesanan");

hamburgerMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("hidden");
});

// Dropdown Menu
document.addEventListener("DOMContentLoaded", () => {
    const dropdownMenu = document.querySelectorAll(".dropdown-menu");
    const dropdownContent = document.querySelectorAll(".dropdown-content");

    dropdownMenu.forEach((menu, index) => {
        menu.addEventListener("click", (e) => {
            e.stopPropagation();

            // Tutup semua Dropdown kecuali yang sedang diklik
            dropdownContent.forEach((content, i) => {
                if (i !== index) {
                    content.classList.add("dropdown-hidden");
                }
            });
            // Togle dropdown yang diklik
            dropdownContent[index].classList.toggle("dropdown-hidden");
        });
    }); 

    // klik di luar dropdown -> sembunyikan semua dropdown
    document.addEventListener("click", () => {
        dropdownContent.forEach(content => {
            content.classList.add("dropdown-hidden");
        });
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
});




console.log(window.innerWidth + "x" + window.innerHeight);
