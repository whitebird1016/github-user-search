export default class SearchApp {
  apiLinkTemplate = 'https://api.github.com/users/';

  locationTemplate = 'https://www.google.com/maps/search/';

  twitterTemplate = 'https://twitter.com/';

  githubTemplate = 'https://github.com/';

  init({ ...search }, { ...display }) {
    this.search = { ...search };
    this.display = { ...display };
    this.getData();
  }

  static formatDate(date) {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate();
    const month = formattedDate.toLocaleString('en-US', { month: 'short' });
    const year = formattedDate.getFullYear();
    return `${day} ${month} ${year}`;
  }

  async getData() {
    if (localStorage.getItem('lastGithubUser') != null) {
      this.user = localStorage.getItem('lastGithubUser');
    } else this.user = 'octocat';
    if (this.search.input.value !== '') this.user = this.search.input.value;
    try {
      const response = await fetch(`${this.apiLinkTemplate}${this.user}`, {
        cache: 'no-cache',
      });
      const data = await response.json();
      if (data.message != null) {
        this.search.button.classList.add('search-bar__button--no-results');
        return;
      }
      localStorage.setItem('lastGithubUser', this.user);
      this.showData(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  showData(data) {
    this.displayData(data);
    this.validateData();
    this.setUpLinks(data);
    this.checkIfItsMe();
  }

  displayData(data) {
    this.display.avatar.src = data.avatar_url;
    this.display.name.innerText = data.name;
    this.display.login.innerText = `@${data.login}`;
    this.display.joined.innerText = `Joined ${SearchApp.formatDate(
      data.created_at,
    )}`;
    this.display.bioSmall.innerText = data.bio;
    this.display.bioLarge.innerText = data.bio;
    this.display.repos.innerText = data.public_repos;
    this.display.followers.innerText = data.followers;
    this.display.following.innerText = data.following;
    this.display.location.innerText = data.location;
    this.display.blog.innerText = data.blog;
    this.display.twitter.innerText = data.twitter_username;
    this.display.company.innerText = data.company;
  }

  validateData() {
    const dataToValidate = Object.values(this.display);
    dataToValidate.forEach((e) => {
      if (e.innerText === '' || !e.innerText) {
        e.innerText = 'Not Available';
        e.dataset.available = 'false';
        e.parentElement.dataset.availableParent = 'false';
      } else if (e.dataset.available === 'false') {
        e.dataset.available = 'true';
        e.parentElement.dataset.availableParent = 'true';
      }
    });
    if (this.display.bioSmall.innerText === 'Not Available') {
      this.display.bioSmall.innerText = 'This profile has no bio';
    }
    if (this.display.bioLarge.innerText === 'Not Available') {
      this.display.bioLarge.innerText = 'This profile has no bio';
    }
  }

  checkIfItsMe() {
    if (this.display.login.innerText.toLowerCase() === '@grzywn') {
      this.display.avatar.classList.add('golden');
      this.display.name.classList.add('golden');
      this.display.login.classList.add('golden');
      this.display.joined.classList.add('golden');
      this.display.bioSmall.innerText = 'Hope you enjoyed my project! Have a great day!';
      this.display.bioLarge.innerText = 'Hope you enjoyed my project! Have a great day!';
    } else {
      this.display.avatar.classList.remove('golden');
      this.display.name.classList.remove('golden');
      this.display.login.classList.remove('golden');
      this.display.joined.classList.remove('golden');
    }
  }

  setUpLinks(data) {
    this.display.login.href = `${this.githubTemplate}${data.login}`;
    if (this.display.location.dataset.available !== 'false') this.display.location.href = `${this.locationTemplate}${data.location}`.replace(/ /g, '%20');
    if (this.display.blog.dataset.available !== 'false') this.display.blog.href = data.blog;
    if (this.display.twitter.dataset.available !== 'false') this.display.twitter.href = `${this.twitterTemplate}${data.twitter_username}`;
    if (this.display.company.dataset.available !== 'false') {
      this.display.company.href = `${this.githubTemplate}${data.company.substr(
        1,
      )}`;
    }
  }
}
