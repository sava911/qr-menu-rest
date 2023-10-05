

function slideBanner() {

  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");


    let slideIndex = 0;

    function showSlide() {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });

      slides[slideIndex].classList.add("active");
      dots[slideIndex].classList.add("active");

      animateDots();
    }

    function animateDots() {
      dots.forEach((dot) => {
        dot.classList.remove("fade-in");
      });
      dots[slideIndex].classList.add("fade-in");
    }

    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide();
    }

    setInterval(nextSlide, 3000);

    showSlide();
  });

}

export default slideBanner;