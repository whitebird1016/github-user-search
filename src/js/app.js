import SearchApp from './search-app.js';

const search = {
  button: document.querySelector('.search-bar__button'),
  input: document.querySelector('.search-bar__input'),
};

const display = {
  avatar: document.querySelector('.result__avatar'),
  name: document.querySelector('.result__name'),
  login: document.querySelector('.result__login'),
  joined: document.querySelector('.result__joined'),
  bioSmall: document.querySelector('.result__bio--small'),
  bioLarge: document.querySelector('.result__bio--large'),
  repos: document.querySelector('.result__stat--repos'),
  followers: document.querySelector('.result__stat--followers'),
  following: document.querySelector('.result__stat--following'),
  location: document.querySelector('.result__links-value--location'),
  blog: document.querySelector('.result__links-value--blog'),
  twitter: document.querySelector('.result__links-value--twitter'),
  company: document.querySelector('.result__links-value--company'),
};

const App = new SearchApp();

window.addEventListener('load', () => {
  App.init(search, display);
});

search.button.addEventListener('click', () => {
  search.button.classList.remove('search-bar__button--no-results');
  App.init(search, display);
});

search.input.addEventListener('focus', () => {
  search.button.classList.remove('search-bar__button--no-results');
});

search.input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) search.button.click();
});
