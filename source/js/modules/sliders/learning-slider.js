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
        initialSlide: 1,
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: false,
      },
      768: {
        initialSlide: 1,
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
      },
      320: {
        initialSlide: 3,
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
      },
    },
  });
};

export {learningSlider};
