const navToggle = document.querySelector(".header__toggle");
const navMenu = document.querySelector(".header__nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle(".nav-menu_visible");
})