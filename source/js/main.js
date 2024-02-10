import {initBurger} from './modules/header/init-burger';
import {Form} from './modules/form-validate/form';
import {initSliders} from './modules/sliders/init-sliders';
import {initVideos} from './modules/init-videos';

window.addEventListener('DOMContentLoaded', () => {
  initBurger();
  initSliders();
  initVideos();
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});
