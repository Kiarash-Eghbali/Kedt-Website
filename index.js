const backToTop = document.createElement("button");
backToTop.innerHTML = "⬆";
backToTop.className =
  "fixed bottom-6 left-6 bg-blue-500 text-white w-14 h-14 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 text-2xl hidden z-50";
document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".faq-toggle").forEach((button) => {
  button.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const icon = this.querySelector(".faq-icon");
    const isOpen = !answer.classList.contains("hidden");

    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.classList.add("hidden");
    });
    document.querySelectorAll(".faq-icon").forEach((ic) => {
      ic.textContent = "+";
    });

    if (!isOpen) {
      answer.classList.remove("hidden");
      icon.textContent = "−";
    }
  });
});
