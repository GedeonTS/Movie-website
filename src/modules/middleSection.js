const commentModal = document.getElementById('commentModal');
let arr = [];
let count = 0;
const counter = document.getElementById('count');
const middleSection = document.getElementById('middle');
const fetchAll = async () => {
  await fetch('https://api.tvmaze.com/shows?page=1').then((response) => response.json()).then((response) => {
    arr = response;
  });
};

const closePopupModal = () => {
  const closeIcon = document.querySelector('.close-icon');
  closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (!commentModal.classList.contains('hide-modal')) {
      commentModal.classList.add('hide-modal');
    }
  });
};

const showCommentModal = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((commentBtn) => {
    commentBtn.addEventListener('click', () => {
      const btnId = commentBtn.getAttribute('id');
      const movieDetails = arr[btnId];

      const modal = `
        <div class="header-container">
          <div class="img-container">
            <img src="${movieDetails.image.original}" class="mov-img" alt="Movie Image">
          </div>
          <i class="close-icon fa-solid fa-xmark fa-5x"></i>
        </div>
        <h3 class="movie-name">${movieDetails.name}</h3>
        <div class="details">
          <div class="detail-item">${movieDetails.summary}</div>
          <div class="detail-item">
            Laguage: ${movieDetails.language} <br/>
            Premiered: ${movieDetails.premiered} <br/>
            Genre: ${movieDetails.genres[0]}
           </div>
        </div>
      `;

      if (commentModal.classList.contains('hide-modal')) {
        commentModal.classList.remove('hide-modal');
        commentModal.innerHTML = modal;
      }
      closePopupModal();
    });
  });
};

const movies = async () => {
  await fetchAll();
  arr.forEach((movie) => {
    middleSection.innerHTML += `
      <article id="${arr.indexOf(movie)}">
        <img src="${movie.image.medium}" alt="${movie.name}">
        <h5>${movie.name}<h5/>
        <button class="comment-btn" type="button" id="${arr.indexOf(movie)}">comments</button>
        <button type="button">reservations</button>
        <p>${movie.summary}</p>
      </article>
    `;
    count += 1;
  });
  counter.innerText = `[${count}]`;
  counter.style.color = 'blue';
  showCommentModal();
};

export default movies;