const advantagesSlider = () => {
  let slider;
  const swiperWrapper = document.querySelector('[data-advantages-slider]');
  const buttonPrev = document.querySelector('[data-advantages-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-advantages-slider-btn-next]');
  const desktop = window.matchMedia('(min-width: 1200px)');

  const createSlider = () => {
    slider = new window.Swiper(swiperWrapper, {
      loop: false,
      autoHeight: true,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide: 1,
          allowTouchMove: false,
        },
      },
    });
  };

  const breakpointChecker = (evt) => {
    const matches = evt ? evt.matches : desktop.matches;
    if (matches) {
      createSlider();
    } else if (slider) {
      slider.destroy();
    }
  };

  desktop.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

export {advantagesSlider};
