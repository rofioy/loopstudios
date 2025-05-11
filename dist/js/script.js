'use strict';

const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobileMenu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open-btn');
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('hidden');
}
