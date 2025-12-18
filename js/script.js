$(document).ready(function () {

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  })

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("open");
    $("body, html").toggleClass("overflow");
    $(".header").toggleClass("bg");
});

let swiper2 = null;
let swiper3 = null;

function initSwiper(tabId) {
  if (tabId === '2' && !swiper2) {
    swiper2 = new Swiper('.swiper-tab-2', {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-tab-2 .swiper-button-next',
        prevEl: '.swiper-tab-2 .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-tab-2 .swiper-pagination',
        clickable: true,
      },
    });
  }

  if (tabId === '3' && !swiper3) {
    swiper3 = new Swiper('.swiper-tab-3', {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-tab-3 .swiper-button-next',
        prevEl: '.swiper-tab-3 .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-tab-3 .swiper-pagination',
        clickable: true,
      },
    });
  }
}

const buttons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.tab;

    buttons.forEach(b => b.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));

    btn.classList.add('active');
    document.querySelector(`.tab[data-tab="${id}"]`).classList.add('active');

    // Инициализация Swiper при открытии
    initSwiper(id);

    // Обновление если уже создан
    if (id === '2' && swiper2) swiper2.update();
    if (id === '3' && swiper3) swiper3.update();
  });
});


  AOS.init();
});
