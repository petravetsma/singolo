window.onload = function () {
  // Header
  makeActiveHeaderNav();

  // Slider
  rightSlide();
  leftSlide();

  // Phone screen
  hideScreen1();
  hideScreen2();

  // Portfolio
  moveElements();
  makeActivePortfolioNav()
  addBorder();

  // Modal
  openModal();
  addInfoToModal();
  closeModal();
}

let currentSlide = 1;

function makeActive(block, element, activeClass) {
  block.addEventListener("click", (event) => {
    if (event.target.tagName === element.toUpperCase()) {
      document.querySelectorAll(element).forEach(el => el.classList.remove(activeClass));
      event.target.classList.add(activeClass);
    }
  })
}

function makeActiveHeaderNav() {
  const MENU = document.getElementById("header-ul");
  makeActive(MENU, "a", "active");
}

function rightSlide() {
  const PHONES_BLOCK = document.getElementById("phone-block");
  const ARROW_RIGHT = document.getElementById("arrow-r");
  const SLIDER = document.getElementById("slider-wrap");

  ARROW_RIGHT.addEventListener("click", () => {
    if (currentSlide === 1) {
      SLIDER.style.transform = "translateX(-100%)";
      PHONES_BLOCK.style.backgroundColor = "#648bf0";
      ++currentSlide;
    } else if (currentSlide == 2) {
      SLIDER.style.transform = "translateX(0%)";
      PHONES_BLOCK.style.backgroundColor = "#f06c64";
      --currentSlide;
    }
  })
}

function leftSlide() {
  const PHONES_BLOCK = document.getElementById("phone-block");
  const ARROW_LEFT = document.getElementById("arrow-l");
  const SLIDER = document.getElementById("slider-wrap");

  ARROW_LEFT.addEventListener("click", () => {
    if (currentSlide === 2) {
      SLIDER.style.transform = "translateX(0%)";
      PHONES_BLOCK.style.backgroundColor = "#f06c64";
      --currentSlide;
    } else if (currentSlide == 1) {
      SLIDER.style.transform = "translateX(-100%)";
      PHONES_BLOCK.style.backgroundColor = "#648bf0";
      ++currentSlide;
    }
  })
}

function hideScreen(phone, screen) {
  phone.addEventListener("click", () => {
    if (screen.style.opacity !== "0") {
      screen.style.opacity = "0";
    } else if (screen.style.opacity !== "1") {
      screen.style.opacity = "1";
    }
  })

  screen.addEventListener("click", () => {
    if (screen.style.opacity !== "0") {
      screen.style.opacity = "0";
    } else if (screen.style.opacity !== "1") {
      screen.style.opacity = "1";
    }
  })
}

function hideScreen1() {
  const PHONE_1 = document.getElementById("phone1");
  const PHONE_1_SCREEN = document.getElementById("phone1-screen");

  hideScreen(PHONE_1, PHONE_1_SCREEN);
}

function hideScreen2() {
  const PHONE_2 = document.getElementById("phone2");
  const PHONE_2_SCREEN = document.getElementById("phone2-screen");

  hideScreen(PHONE_2, PHONE_2_SCREEN);
}

function moveElements() {
  const PORTFOLIO_LIST = document.getElementById("portfolio-list");
  const GALLERY = document.getElementById("gallery");

  PORTFOLIO_LIST.addEventListener("click", (event) => {
    if (event.target.tagName === "LI" && !event.target.classList.contains("portfolio-active")) {
      for (let i = 0; i < 4; i++) {
        GALLERY.prepend(GALLERY.lastElementChild);
      }
    }
  });
}

function makeActivePortfolioNav() {
  const PORTFOLIO_LIST = document.getElementById("portfolio-list");

  makeActive(PORTFOLIO_LIST, "li", "portfolio-active");
}

function addBorder() {
  const GALLERY = document.getElementById("gallery");

  GALLERY.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      GALLERY.querySelectorAll(".gallery-img img").forEach(el => el.classList.remove("img-border"));
      event.target.classList.add("img-border")
    }
  });
}

function addInfoToModal() {
  const MODAL = document.getElementById("modal");
  const SUBMIT = document.getElementById("submit");
  const FORM = document.forms.main;

  SUBMIT.addEventListener("click", () => {
    let subject = FORM.elements.subject.value;
    let description = FORM.elements.description.value;

    if (subject !== "") {
      MODAL.querySelector(".modal-content p:nth-child(2)").textContent = `Тема: ${subject}`;
    } else if (subject == "") {
      MODAL.querySelector(".modal-content p:nth-child(2)").textContent = `Без темы`;
    }
    if (description !== "") {
      MODAL.querySelector(".modal-content p:nth-child(3)").textContent = `Описание: ${description}`;
    } else if (description == "") {
      MODAL.querySelector(".modal-content p:nth-child(3)").textContent = `Без описания`;
    }
  })
}

function openModal() {
  const MODAL = document.getElementById("modal");
  const SUBMIT = document.getElementById("submit");
  const FORM = document.forms.main;

  SUBMIT.addEventListener("click", () => {
    let userName = FORM.elements.personName;
    let email = FORM.elements.email;

    if (userName.validity.valid && email.validity.valid) {
      MODAL.style.display = "block";
    }
  })
}

function closeModal() {
  const MODAL = document.getElementById("modal");
  const CLOSE_MODAL = document.getElementsByClassName("close")[0];

  CLOSE_MODAL.addEventListener("click", () => {
    MODAL.style.display = "none";
  })
  window.addEventListener("click", (event) => {
    if (event.target === MODAL) {
      MODAL.style.display = "none";
    }
  })
}
