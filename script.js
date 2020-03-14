window.onload = function() {
  // Header
  makeActive(MENU, "a", "active");

  // Slider
  rightSlide();
  leftSlide();

  // Phone screen
  hideScreen(PHONE_1, PHONE_1_SCREEN);
  hideScreen(PHONE_2, PHONE_2_SCREEN);

  // Portfolio
  moveElements();
  makeActive(PORTFOLIO_LIST, "li", "portfolio-active");
  addBorder();

  // Modal
  openModal();
  addInfoToModal();
  closeModal();
}

  // Header
  const MENU = document.getElementById("header-ul");
  // Slider
  let currentSlide = 1;
  const PHONES_BLOCK = document.getElementById("phone-block");
  const ARROW_LEFT = document.getElementById("arrow-l");
  const ARROW_RIGHT = document.getElementById("arrow-r");
  const SLIDER = document.getElementById("slider-wrap");
  // Phone screen
  const PHONE_1 = document.getElementById("phone1");
  const PHONE_1_SCREEN = document.getElementById("phone1-screen");
  const PHONE_2 = document.getElementById("phone2");
  const PHONE_2_SCREEN = document.getElementById("phone2-screen");
  // Portfolio
  const PORTFOLIO_LIST = document.getElementById("portfolio-list");
  const GALLERY = document.getElementById("gallery");
  // Form
  const MODAL = document.getElementById("modal");
  const SUBMIT = document.getElementById("submit");
  const CLOSE_MODAL = document.getElementsByClassName("close")[0];
  const FORM = document.forms.main;

  function makeActive(block, element, activeClass) {
    block.addEventListener("click", (event) => {
      if ( event.target.tagName === element.toUpperCase() ) {
        document.querySelectorAll(element).forEach(el => el.classList.remove(activeClass));
        event.target.classList.add(activeClass);
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

  function rightSlide() {
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

  function moveElements() {
    PORTFOLIO_LIST.addEventListener("click", (event) => {
        if ( event.target.tagName === "LI" && !event.target.classList.contains("portfolio-active")) {
          for (let i = 0; i < 4; i++) {
            GALLERY.prepend(GALLERY.lastElementChild);
          }
        }
      });
  }

  function addBorder() {
    GALLERY.addEventListener("click", (event) => {
      if (event.target.tagName === "IMG") {
        GALLERY.querySelectorAll(".gallery-img img").forEach(el => el.classList.remove("img-border"));
        event.target.classList.add("img-border")
      }
    });
  }

  function addInfoToModal() {

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
    SUBMIT.addEventListener("click", () => {
      let userName = FORM.elements.personName;
      let email = FORM.elements.email;

      if (userName.validity.valid && email.validity.valid) {
        MODAL.style.display = "block";
      }
    })
  }

  function closeModal() {
    CLOSE_MODAL.addEventListener("click", () => {
      MODAL.style.display = "none";
    })
    window.addEventListener("click", (event) => {
      if (event.target === MODAL) {
        MODAL.style.display = "none";
      }
    })
  }
