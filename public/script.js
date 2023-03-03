let textSection = document.querySelectorAll(".text-section");
let faqBtn = document.querySelectorAll(".faq-btn");
let faqIcon = document.querySelectorAll(".faq-icon");
let container = document.querySelectorAll(".container-box");
let glampingBtn = document.querySelector("#glamping-btn");
let campingBtn = document.querySelector("#camping-btn");
let glampingSection = document.querySelector("#glamping-section");
let campingSection = document.querySelector("#camping-section");
const phoneMenu = document.querySelector("#phone-menu");
const menuButton = document.querySelector("#menu-btn");
const exitBtn = document.querySelector("#exit-btn");

menuButton.addEventListener("click", function () {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
    phoneMenu.classList.add("flex-col");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("flex-col");
    phoneMenu.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (!phoneMenu.classList.contains("hidden") && e.key == "Escape") {
    phoneMenu.classList.remove("flex");
    phoneMenu.classList.add("hidden");
  }
});

for (let i = 0; i < faqBtn.length; i++) {
  faqBtn[i].addEventListener("click", () => {
    if (textSection[i].classList.contains("hidden")) {
      textSection[i].classList.remove("hidden");
      faqIcon[i].classList.add("rotate-180");
      container[i].classList.add("shadow-lg");
    } else if (!textSection[i].classList.contains("hidden")) {
      textSection[i].classList.add("hidden");
      faqIcon[i].classList.remove("rotate-180");
      container[i].classList.remove("shadow-lg");
    }
  });
}

glampingBtn.addEventListener("click", () => {
  if (glampingBtn.classList.contains("btn-inactive")) {
    campingBtn.classList.remove("btn-active");
    campingBtn.classList.add("btn-inactive");

    glampingBtn.classList.remove("btn-inactive");
    glampingBtn.classList.add("btn-active");
  }
});
campingBtn.addEventListener("click", () => {
  if (campingBtn.classList.contains("btn-inactive")) {
    glampingBtn.classList.remove("btn-active");
    glampingBtn.classList.add("btn-inactive");

    campingBtn.classList.remove("btn-inactive");
    campingBtn.classList.add("btn-active");
  }
});

glampingBtn.addEventListener("click", () => {
  if (glampingSection.classList.contains("hidden")) {
    glampingSection.classList.remove("hidden");
    campingSection.classList.add("hidden");
  }
});

campingBtn.addEventListener("click", () => {
  if (campingSection.classList.contains("hidden")) {
    campingSection.classList.remove("hidden");
    glampingSection.classList.add("hidden");
  }
});

const today = new Date();
const year = today.getFullYear();
document.getElementById("year").textContent = year;
