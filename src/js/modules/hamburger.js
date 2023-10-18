export default function hamburger(second) {
  document.querySelector('.js-menu').addEventListener('click', () => {

    document.querySelector('.js-menu').classList.toggle('active');
    document.querySelector('.js-nav').classList.toggle('open');
    document.querySelector('.js-nav__list').classList.toggle('show');
  });

  const menuLinks = document.querySelectorAll('.js-menu');

  // Обходим все ссылки и добавляем обработчик событий на клик
  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Отменяем действие перехода по ссылке
      event.preventDefault();

      // Проверяем наличие активного класса на меню
      if (document.body.classList.contains('open')) {
        // Если меню уже открыто, скрываем его и включаем прокрутку
        document.body.classList.remove('open');
        document.body.style.overflow = 'auto';
      } else {
        // Если меню закрыто, открываем его и отключаем прокрутку
        document.body.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });


  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 200) {
      document.querySelector(".header-fixed").classList.add("with-effect");
    } else {
      document.querySelector(".header-fixed").classList.remove("with-effect");
    }
  });

}