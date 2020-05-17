// Burger menu listener.

const menu = document.querySelector('#header-menu');
const burgerButton = document.querySelector('#header-burger-icon');
const isActive = 'is-active';

const smallView = window.matchMedia('screen and (max-width: 480px)');

smallView.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener('click', changeMenuState);
    console.log('add');
  } else {
    burgerButton.removeEventListener('click', changeMenuState);
    console.log('remove');
  }
}

function changeMenuState() {
  if (menu.classList.contains(isActive)) {
    menu.classList.remove(isActive);
  } else {
    menu.classList.add(isActive);
  }
}

validation(smallView);

// Dark mode

const switchButton = document.querySelector('#switch');

switchButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  switchButton.classList.toggle('active');
});