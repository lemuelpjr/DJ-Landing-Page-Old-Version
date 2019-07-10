var navIcon = document.getElementById('nav-icon');
var navMenu = document.querySelector('nav');
var navMenuBg = document.querySelector('.menu-bg');

navIcon.addEventListener('click', function() {
  // Rotate bars to create an X in the navigation menu icon
  navIcon.classList.toggle('change-nav-icon');
  // Toggle navigation menu
  navMenu.classList.toggle('toggle-menu');
  // Toggle navigation menu background
  navMenuBg.classList.toggle('change-bg');
});