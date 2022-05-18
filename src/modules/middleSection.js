let arr = [];
let count = 0;
const counter = document.getElementById('count');
const middleSection = document.getElementById('middle');
const fetchAll = async () => {
  await fetch('https://api.tvmaze.com/shows?page=1').then((response) => response.json()).then((response) => {
    arr = response;
  });
};
const movies = async () => {
  await fetchAll();
  arr.forEach((movie) => {
    middleSection.innerHTML += `<article id="${arr.indexOf(movie)}"><img src="${movie.image.medium}"><h5>${movie.name}<h5/><button>comments</button><button>reservations</button><p>${movie.summary}</p></article>`;
    count += 1;
  });
  counter.innerText = `[${count}]`;
  counter.style.color = 'blue';
};

export default movies;