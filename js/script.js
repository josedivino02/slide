import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper').init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
