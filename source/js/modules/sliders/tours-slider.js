const toursSlider = () => {
  const swiperWrapper = document.querySelector('[data-tours-slider]');
  const buttonPrev = document.querySelector('[data-tours-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-tours-slider-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    autoHeight: true,
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
      768: {
        initialSlide: 1,
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: true,
      },
      320: {
        initialSlide: 1,
        slidesPerView: 'auto',
        spaceBetween: 15,
        allowTouchMove: true,
      },
    },
  });
};

export {toursSlider};
