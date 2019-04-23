new Swiper($('#partners'), {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 4,
  simulateTouch: false,
  navigation: {
    nextEl: '.partners-next',
    prevEl: '.partners-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    950: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      simulateTouch: true,
    }
  }
});










