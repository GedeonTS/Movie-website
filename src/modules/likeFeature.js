import fetchAll from './Fetchall.js';
import postLike from './likesApi.js';

const liking = async () => {
  const allMovies = await fetchAll();

  const likesBtn = document.querySelectorAll('.likeBtn');
  const spans = document.querySelectorAll('#likes-status');
  likesBtn.forEach((a, i) => {
    let h = JSON.parse(spans[i].innerHTML);

    a.addEventListener('click', () => {
      postLike(allMovies[i].name);
      h += 1;
      spans[i].innerHTML = h;
    });
  });
};

export default liking;