// const mainHeaderButton = document.querySelector(".main-header__button");
const menuMobile = document.querySelector(".menu-mobile");
const mobileMenuLinks = document.querySelectorAll(".menu-mobile__links a");
const mainHeaderButton = document.querySelector(".main-header__button");

const skill = document.getElementById("skills");

const form = document.getElementById("contact-form");

const handleFormSubmit = (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  if (email.value === "" || name.value === "" || message.value === "") {
  } else {
    Email.send({
      SecureToken: "fbc57371-9cd3-4d22-bb08-e54ae042d88a",
      To: "houariezzine@gmail.com",
      From: "hz.pro666@gmail.com",
      Subject: `${name.value} messaged you`,
      Body: `email : ${email.value} \n message : ${message.value}`,
    })
      .then(function (message) {
        alert(message);
      })
      .catch((message) => {
        console.log(message);
      });
  }
};
form.addEventListener("submit", handleFormSubmit);

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
mybutton = document.getElementById("scroll-up-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("scroll-up-button-visibility");
    // mybutton.style.display = "block";
  } else {
    // mybutton.style.display = "none";
    mybutton.classList.remove("scroll-up-button-visibility");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
