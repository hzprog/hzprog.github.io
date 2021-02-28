// const mainHeaderButton = document.querySelector(".main-header__button");
const menuMobile = document.querySelector(".menu-mobile");
const mobileMenuLinks = document.querySelectorAll(".menu-mobile__links a");
const mainHeaderButton = document.querySelector(".main-header__button");

const skill = document.getElementById("skills");

AOS.init({
  offset: 250,
  once: true,
});

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

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
