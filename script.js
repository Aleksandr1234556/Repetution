document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__list");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("nav__list--active");
  });

  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Заявка надіслана!");
  });

});