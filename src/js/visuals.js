const themeElements = {
  body: document.querySelector('body'),
  button: document.querySelector('.header__theme-button'),
  label: document.querySelector('.header__theme-current'),
};
const darkThemeLabel = 'light';
const lightThemeLabel = 'dark';
const prefersDarkTheme = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;
let currentTheme = localStorage.getItem('theme');

const animationElems = [
  document.querySelector('.header'),
  document.querySelector('.search-bar'),
  document.querySelector('.result'),
];

function changeThemeAnimation() {
  gsap.from(themeElements.body, {
    opacity: 0,
    duration: 0.5,
    ease: Power0.easeNone,
  });
}

function changeTheme() {
  if (currentTheme === 'light') {
    themeElements.body.classList.add('dark');
    themeElements.body.classList.remove('light');
    themeElements.label.innerText = darkThemeLabel;
    currentTheme = 'dark';
  } else if (currentTheme === 'dark') {
    themeElements.body.classList.add('light');
    themeElements.body.classList.remove('dark');
    themeElements.label.innerText = lightThemeLabel;
    currentTheme = 'light';
  }
  localStorage.setItem('theme', currentTheme);
  changeThemeAnimation();
}

(() => {
  if (currentTheme == null) {
    if (prefersDarkTheme) currentTheme = 'dark';
    else currentTheme = 'light';
    localStorage.setItem('theme', currentTheme);
  }
  if (currentTheme === 'light') {
    themeElements.label.innerText = lightThemeLabel;
  } else themeElements.label.innerText = darkThemeLabel;
  localStorage.setItem('theme', currentTheme);
  themeElements.body.classList.add(currentTheme);
  themeElements.button.addEventListener('click', changeTheme);
  gsap.from(animationElems, {
    delay: 0.25,
    opacity: 0,
    duration: 1,
    ease: 'bounce.out',
    y: -50,
    stagger: 0.25,
  });
  particlesJS.load('particles-js', './json/particles.json');
})();
