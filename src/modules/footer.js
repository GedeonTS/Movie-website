import './footer.css';

const body = document.querySelector('body');
const footer = document.createElement('footer');
body.append(footer);

footer.innerHTML = '<h4>Created by Microverse under the CC license</h4>';

export default footer;