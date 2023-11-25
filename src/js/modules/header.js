export default function header() {

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 200) {
      document.querySelector(".header-fixed").classList.add("with-effect");
    } else {
      document.querySelector(".header-fixed").classList.remove("with-effect");
    }
  });
}