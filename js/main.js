

const nav = document.querySelector('.nav-list');
const burger = document.querySelector('.btn-burger-menu');
const navLinks = document.querySelectorAll('.__item a');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  burger.classList.toggle('toggle');
})


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
  })
})