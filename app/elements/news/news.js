new Swiper($('#news-slider'), {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 3,
  simulateTouch: false,
  loop: true,
  navigation: {
    nextEl: '.news-next',
    prevEl: '.news-prev',
  },
  breakpoints: {
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

