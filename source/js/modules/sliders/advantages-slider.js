let desktop = window.matchMedia('(min-width: 1200px)');

const advantagesSlider = () => {
  const swiperWrapper = document.querySelector('[data-advantages-slider]');
  const buttonPrev = document.querySelector('[data-advantages-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-advantages-slider-btn-next]');

  const slider = new window.Swiper(swiperWrapper, {
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

  if (desktop.matches) {
    return slider;
  } else {
    return slider.destroy();
  }
};

export {advantagesSlider};
