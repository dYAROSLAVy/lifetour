const heroSlider = () => {
  const swiperWrapper = document.querySelector('[data-hero-slider]');

  return new window.Swiper(swiperWrapper, {
    loop: false,
    breakpoints: {
      1200: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
  });
};

export {heroSlider};
