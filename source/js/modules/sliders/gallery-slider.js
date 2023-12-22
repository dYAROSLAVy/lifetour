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
        slidesPerGroup: 2,
        slidesPerGroupSkip: 2,
        slidesPerView: 'auto',
        spaceBetween: 5,
        allowTouchMove: false,
      },
      768: {
        slidesPerGroup: 2,
        slidesPerGroupSkip: 2,
        slidesPerView: 'auto',
        spaceBetween: 5,
        allowTouchMove: true,
      },
      320: {
        slidesPerGroup: 2,
        slidesPerGroupSkip: 2,
        slidesPerView: 'auto',
        spaceBetween: 3,
        allowTouchMove: true,
      },
    },
  });
};

export {gallerySlider};
