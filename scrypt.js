// =========================
// MENÚ HAMBURGUESA (CORRECTO)
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");

// Abrir / cerrar menú en móvil
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Cerrar menú al dar clic en un link
links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});