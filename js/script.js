let slideIndex = 0;
let slides, dots, timer;

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll(".dot");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  // Navigation buttons
  nextBtn.addEventListener("click", () => changeSlide(1));
  prevBtn.addEventListener("click", () => changeSlide(-1));

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      slideIndex = parseInt(dot.dataset.index) - 1;
      showSlides();
    });
  });

  showSlides();
});

function showSlides() {
  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex - 1].classList.add("active");

  timer = setTimeout(showSlides, 8000); // slower, smoother auto-rotation (6s)
}

function changeSlide(n) {
  slideIndex += n - 1;
  showSlides();
}

// animation.js
// Simple animation trigger when elements enter the viewport
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".animate");

  elements.forEach(function(el) {
    let top = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      el.classList.add("in-view");
    }
  });
});

// Run once on page load
window.addEventListener("load", function() {
  let elements = document.querySelectorAll(".animate");

  elements.forEach(function(el) {
    let top = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      el.classList.add("in-view");
    }
  });
});
