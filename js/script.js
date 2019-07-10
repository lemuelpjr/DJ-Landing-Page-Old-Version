var navIcon = document.getElementById('nav-icon');
var navMenu = document.querySelector('nav');

navIcon.addEventListener('click', function() {
  // Rotate bars to create an X in the navigation menu icon
  navIcon.classList.toggle('change');
  // Toggle navigation menu
  navMenu.classList.toggle('toggle-menu');
});