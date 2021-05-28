const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('is-open')
});

closeButton.addEventListener('click', () => {
  menu.classList.toggle('is-open')
})