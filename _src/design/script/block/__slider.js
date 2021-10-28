//////////////////////////////////////////// slider
(() => {

  // hot-provider-slider
  if (document.querySelector('.hot-provider__wrap-list')) {
    const hotProvider = new Swiper('.hot-provider__wrap-list', {
      slidesPerView: 6,
      navigation: {
        prevEl: '.hot-provider__btn-prev',
        nextEl: '.hot-provider__btn-next',
      },
      pagination: {
        el: '.hot-provider__pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 6
      },
      breakpoints: {
        1429: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 'auto'
        }
      }
    });
  }

})();
