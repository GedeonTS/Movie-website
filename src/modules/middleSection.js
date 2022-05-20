import fetchAll from "./Fetchall";
import fetchLikes from "./fecthLikes";

const commentModal = document.getElementById('commentModal');
let count = 0;
const counter = document.getElementById('count');
const middleSection = document.getElementById('middle');
let currentValue = 0;

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
            Laguage: ${movieDetails.language}<br/>
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
  let arr = await fetchAll();
  console.log(arr)
  arr.slice(0, 20).forEach((movie, i) => {
    fetchLikes().then(res => {
      currentValue = res;
      let assignLike = 0;

      const like = currentValue.filter((elmt) => elmt.item_id === movie.name);
      if (like.length === 0) {
        assignLike = 0;
      } else {
        assignLike=like[0].likes
      }
      console.log("likelike", like)
      middleSection.innerHTML += ` 
      <article id="${arr.indexOf(movie)}">
        <img src="${movie.image.medium}" alt="${movie.name}">
        <h5>${movie.name}<h5/>
        <a class="likes"><img class="likeBtn" src="https://img.icons8.com/material-outlined/24/000000/filled-like.png" >
          <p><span>${assignLike}</span>likes</p>
        </a>
        <button class="comment-btn" type="button" id="${arr.indexOf(movie)}">comments</button>
        <button type="button">reservations</button>
        <p>${movie.summary}</p>
      </article>
    `;
    })

    count += 1;

  });
 
  counter.innerText = `[${count}]`;
  counter.style.color = 'blue';
  showCommentModal();
};

export default movies;