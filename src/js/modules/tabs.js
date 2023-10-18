export default function tabs() {
  document.querySelectorAll(".filters .tabs__btn").forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      const filters = document.querySelectorAll(".filters .tabs__btn");
      const tabs = document.querySelectorAll(".tabs__list .tabs__items");

      filters.forEach(function (tab) {
        tab.classList.remove("tabs__active-btn");
      });
      this.classList.add("tabs__active-btn");

      tabs.forEach(function (tabContent) {
        tabContent.classList.remove("tabs__active-btn");
      });
      tabs[index].classList.add("tabs__active-btn");

    });

  });



}