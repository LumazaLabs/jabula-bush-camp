let textSection = document.querySelectorAll(".text-section");
let faqBtn = document.querySelectorAll(".faq-btn");
let faqIcon = document.querySelectorAll(".faq-icon");
let container = document.querySelectorAll(".container-box");

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
