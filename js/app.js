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
  menu.classList.toggle(isActive);
}

validation(smallView);

// Dark mode
// TODO: Move to external source.
const x = [
  {
    key: '--background',
    light: '#fff',
    dark: '#000'
  },
  {
    key: '--color',
    light: '#0f0f0f',
    dark: '#f1f1f1'
  },
  {
    key: '--header-background',
    light: '#1fab89',
    dark: '#142850'
  },
  {
    key: '--header-menu-item-hover',
    light: '#1c9e7d',
    dark: '#0e1d3a'
  },
  {
    key: '--greeting-background',
    light: '#9df3c4',
    dark: '#27496d'
  },
  {
    key: '--greeting-color',
    light: '#5c6470',
    dark: '#fff'
  },
  {
    key: '--greeting-color-bold',
    light: '#393e46',
    dark: '#a8fcff'
  },
  {
    key: '--skills-background',
    light: '#d7fbe8',
    dark: '#0c7b93'
  },
  {
    key: '--skills-box-background',
    light: '#fff',
    dark: '#000'
  },
  {
    key: '--skills-box-shadow',
    light: '#c2e2d1',
    dark: '#131338'
  },
  {
    key: '--soft-skill-box-border',
    light: '#000',
    dark: '#fff'
  },
  {
    key: '--soft-skill-box-shadow',
    light: '#449e886c',
    dark: '#44559eb4'
  },
  {
    key: '--hobby-card-background',
    light: '#d9e9e0',
    dark: '#02021b'
  },
  {
    key: '--hobby-card-border',
    light: '#000',
    dark: '#fff'
  },
  {
    key: '--hobby-description-background',
    light: '#fff',
    dark: '#000'
  },
  {
    key: '--footer-background',
    light: '#222831',
    dark: '#27496d'
  },
  {
    key: '--footer-color',
    light: '#fff',
    dark: '#fff'
  }
]


const switchButton = document.querySelector('#switch');

let isDark = false;

switchButton.addEventListener('click', () => {
  switchButton.classList.toggle('active');
  isDark = !isDark;
  switchDark();
})

const switchDark = () => {
  const root = document.documentElement;
  const attribute = isDark ? 'dark' : 'light';
  x.forEach((current) => {
    root.style.setProperty(current.key, current[attribute]);
  });
};

// Progress bar

let progress = document.querySelector('.progress-bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  console.log(progressHeight);
  progress.style.height = `${progressHeight}%`;
}