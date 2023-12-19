const heroSlider = () => {
  const swiperWrapper = document.querySelector('[data-hero-slider]');
  const pagination = document.querySelector('[data-hero-slider-pagination]');

  return new window.Swiper(swiperWrapper, {
    loop: true,
    pagination: {
      el: pagination,
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
        allowTouchMove: false,
      },
      0: {
        allowTouchMove: true,
      },
    },
  });
};

export {heroSlider};
