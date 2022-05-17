let arr = [];
const middleSection = document.getElementById('middle');
const fetchAll = async () => {
  await fetch('https://api.tvmaze.com/shows?page=1').then((response) => response.json()).then((response) => {
    arr = response;
  });
};
const movies = async () => {
  await fetchAll();
  const arr1 = arr.filter((x) => arr.indexOf(x) < 30);
  arr1.forEach((movie) => {
    middleSection.innerHTML += `<article id="${arr1.indexOf(movie)}"><img src="${movie.image.medium}"><h5>${movie.name}<h5/><button>comments</button><button>reservations</button><p>${movie.summary}</p></article>`;
  });
};

export default movies;