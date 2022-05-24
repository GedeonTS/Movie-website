import logo from '../images/mov-logo.png';

const headerElement = document.querySelector('.header');
const nav = () => {
  const navElement = `
  <nav class="main-nav">
    <a class="brand" href="#">
    <img class="humburger" src="https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/64/000000/external-hamburger-ui-essential-febrian-hidayat-flat-febrian-hidayat.png"/>
    <img src="${logo}" class="img-brand" alt="Movie Website logo">
    </a>
    <ul class="nav-items">
      <li class="nav-item"><a href="#" class="navlink">Home</a></li>
      <li class="nav-item trending"><a href="#" class="navlink">Trending</a></li>
      <li class="nav-item"><a href="#" class="navlink">Categories</a></li>
    </ul>
    <input type="text" class="search-engine" placeholder="search.."><button class="search-btn" type="submit"><img src="https://img.icons8.com/material-sharp/24/000000/search.png"/></button>
  </nav>
  `;
  headerElement.innerHTML = navElement;
  return headerElement;
};

export default nav;