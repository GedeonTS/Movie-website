import './index.css';
import nav from './modules/header.js';
import footer from './modules/footer.js';
import movies from './modules/middleSection.js';
import liking from './modules/likeFeature.js';

const body = document.querySelector('body');
nav();
movies();
body.append(footer);

body.addEventListener('click', () => {
  liking();
});
