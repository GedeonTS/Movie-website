const headerElement = document.querySelector('.header');
const nav = () => {
  const navElement = `
  <nav class="main-nav">
    <a class="brand" href="#">Movie Website</a>
    <ul class="nav-items">
      <li class="nav-item"><a href="#" class="navlink">Home</a></li>
      <li class="nav-item"><a href="#" class="navlink">Categories</a></li>
    </ul>
  </nav>
  `;
  headerElement.innerHTML = navElement;
  return headerElement;
};

export default nav;