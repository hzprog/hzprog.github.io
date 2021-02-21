// const mainHeaderButton = document.querySelector(".main-header__button");
const menuMobile = document.querySelector(".menu-mobile");

const addChangeToButton = (x) => {
    x.classList.toggle("change");
    menuMobile.classList.toggle("menu-mobile__display");
}