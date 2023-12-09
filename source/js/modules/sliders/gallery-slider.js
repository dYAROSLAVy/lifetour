const gallerySlider = () => {
  const swiperWrapper = document.querySelector('[data-gallery-slider]');
  const buttonPrev = document.querySelector('[data-gallery-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-gallery-slider-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 5,
        allowTouchMove: false,
      },
    },
  });
};

export {gallerySlider};
