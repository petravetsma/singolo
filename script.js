// alert(123)
const MENU = document.getElementById("header-ul");



MENU.addEventListener("click", (event) => {
  MENU.querySelectorAll("li a").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
})
