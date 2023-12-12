const toursSlider = () => {
  const swiperWrapper = document.querySelector('[data-tours-slider]');
  const buttonPrev = document.querySelector('[data-tours-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-tours-slider-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1200: {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};

export {toursSlider};
