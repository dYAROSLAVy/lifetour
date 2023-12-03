const heroSlider = () => {
  const swiperWrapper = document.querySelector('[data-hero-slider]');

  return new window.Swiper(swiperWrapper, {
    loop: true,
    allowTouchMove: true,
  });
};

export {heroSlider};
