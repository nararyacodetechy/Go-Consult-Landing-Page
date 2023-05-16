const hamburgerButtonElement = document.querySelector('#hamburgerButton');
const drawerElement = document.querySelector('#drawer');

const mainElement = document.querySelector('#mainContent');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});
