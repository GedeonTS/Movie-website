import './index.css';
import nav from './modules/header.js';
import footer from './modules/footer.js';

const body = document.querySelector('body');
nav();

body.append(footer);
