const advantagesSlider = () => {
  const swiperWrapper = document.querySelector('[data-advantages-slider]');
  const buttonPrev = document.querySelector('[data-advantages-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-advantages-slider-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        initialSlide: 1,
        allowTouchMove: false,
      },
    },
  });
};

export {advantagesSlider};
