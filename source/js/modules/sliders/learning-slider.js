const learningSlider = () => {
  const swiperWrapper = document.querySelector('[data-learning-slider]');
  const buttonPrev = document.querySelector('[data-learning-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-learning-slider-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false,
      },
    },
  });
};

export {learningSlider};
