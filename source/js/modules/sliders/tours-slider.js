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
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: false,
      },
      768: {
        initialSlide: 1,
        slidesPerView: 'auto',
        spaceBetween: 18,
      },
      0: {
        initialSlide: 1,
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
  });
};

export {toursSlider};
