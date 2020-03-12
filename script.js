const MENU = document.getElementById("header-ul");
const PHONES_BLOCK = document.getElementById("phone-block");
const ARROW_LEFT = document.getElementById("arrow-l");
const ARROW_RIGHT = document.getElementById("arrow-r");
const SLIDER = document.getElementById("slider-wrap");
const SLIDER_ITEM_1 = document.getElementById("slider-item1");
const SLIDER_ITEM_2 = document.getElementById("slider-item2");

MENU.addEventListener("click", (event) => {
  MENU.querySelectorAll("li a").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
})

let currentSlide = 1;

ARROW_RIGHT.addEventListener("click", (event) => {
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

ARROW_LEFT.addEventListener("click", (event) => {
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
