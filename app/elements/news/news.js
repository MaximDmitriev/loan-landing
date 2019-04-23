new Swiper($('#news-slider'), {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 3,
  simulateTouch: false,
  navigation: {
    nextEl: '.news-next',
    prevEl: '.news-prev',
  },
  breakpoints: {
    // when window width is <= 320px
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 15,
      simulateTouch: true,
    }
  }
});

