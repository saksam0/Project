// Navbar Toggle
const menu = document.querySelector('.bx-menu');
const x = document.querySelector('.bx-x');
const showMenu = document.querySelector('.inside-navbar');

menu.addEventListener('click', () => {
  if (showMenu.style.display == 'block') {
    showMenu.style.display = 'none'; // Hide if already shown
  } else {
    showMenu.style.display = 'block'; // Show if hidden
  }
});

x.addEventListener('click', () => {
  showMenu.style.display = 'none';
});

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  loop: true, // Enables infinite looping of slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000, // Slides will change every 5 seconds
    disableOnInteraction: false,
  },
});
