// const mainHeaderButton = document.querySelector(".main-header__button");
const menuMobile = document.querySelector(".menu-mobile");
const mobileMenuLinks = document.querySelectorAll(".menu-mobile__links a");
const mainHeaderButton = document.querySelector(".main-header__button");

const skill = document.getElementById("skills");

AOS.init();

mainHeaderButton.addEventListener("click", () => {
  mainHeaderButton.classList.toggle("change");
  menuMobile.classList.toggle("menu-mobile__display");
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    setTimeout(() => {
      menuMobile.classList.toggle("menu-mobile__display");
      mainHeaderButton.classList.toggle("change");
      link.classList.toggle("active");
    }, 1000);
  });
});
