menuResponsive();

function menuResponsive() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.small__menu__content');
  const back = document.querySelector('.back');

  burger.addEventListener('click', function(){
    menu.classList.remove('is-hidden');
    burger.classList.add('is-hidden');
  });

  back.addEventListener('click', function(){
    menu.classList.add('is-hidden');
    burger.classList.remove('is-hidden');
  });
}

var homeSlider = require('home/home-slider.js')
homeSlider()
//
// jQuery(document).ready(function ($) {
//   homeSlider()
// })
