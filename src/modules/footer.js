import './footer.css';

const body = document.querySelector('body');
const footer = document.createElement('footer');
body.append(footer);

footer.innerHTML = '<div class="license">© Copyrights 2022, Created by <a href="https://github.com/GedeonTS">Gedeon</a> and <a href="https://github.com/Lembani">Lembani</a> under the MIT license</div>';

export default footer;