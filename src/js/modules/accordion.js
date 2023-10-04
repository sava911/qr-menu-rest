function accordion() {
  // accordion
  document.addEventListener("DOMContentLoaded", function () {
    var atTitles = document.querySelectorAll(".at-title");
    atTitles.forEach(function (atTitle) {
      atTitle.addEventListener("click", function () {
        this.classList.toggle("active");
        var atTab = this.nextElementSibling;
        if (atTab.style.display === "block") {
          atTab.style.display = "none";
          this.classList.remove("active");
        } else {
          atTab.style.display = "block";
          var siblings = this.parentNode.parentNode.children;
          for (var i = 0; i < siblings.length; i++) {
            var sibling = siblings[i];
            if (sibling !== this.parentNode) {
              var siblingTab = sibling.querySelector(".at-tab");
              siblingTab.style.display = "none";
              sibling.querySelector(".at-title").classList.remove("active");
            }
          }
        }
      });
    });
  });


}
export default accordion;