// const mainHeaderButton = document.querySelector(".main-header__button");
const menuMobile = document.querySelector(".menu-mobile");
const mobileMenuLinks = document.querySelectorAll(".menu-mobile__links a");
const mainHeaderButton = document.querySelector(".main-header__button");

// const skill = document.getElementById("skills");

const contactForm = document.getElementById("contact-form");

const handleContactFormSubmit = (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");

  if (
    emailInput.value === "" ||
    nameInput.value === "" ||
    messageInput.value === ""
  ) {
  } else {
    Email.send({
      SecureToken: "4f20dcc2-3f85-4603-96a1-c4501260f1dd",
      To: "hzproforg@gmail.com",
      From: "hz.pro666@gmail.com",
      Subject: `${nameInput.value} sent you a message`,
      Body: `<strong>Email :</strong> ${emailInput.value} <br/> <strong>Message :</strong>${messageInput.value} `,
    })
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
contactForm.addEventListener("submit", handleContactFormSubmit);

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

const delay = () => {
  setTimeout(() => {
    window.location = "#skills";
  }, 1000);
};

//Get the button:
scrollButton = document.getElementById("scroll-up-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollButton.classList.add("scroll-up-button-visibility");
  } else {
    scrollButton.classList.remove("scroll-up-button-visibility");
  }
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
