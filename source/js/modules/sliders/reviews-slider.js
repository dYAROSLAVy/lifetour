const reviewsSlider = () => {
  const swiperWrapper = document.querySelector('[data-reviews-slider]');
  const buttonPrev = document.querySelector('[data-reviews-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-reviews-slider-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        allowTouchMove: true,
      },
    },
  });
};

export {reviewsSlider};
