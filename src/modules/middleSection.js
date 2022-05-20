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

const appId = 'jQcwh1wRBsAT8XgABb4X';
const invUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const fetchComments = async (itemId) => {
  try {
    const comments = await fetch(`${invUrl}?item_id=${itemId}`);
    const data = await comments.json();
    if (data.length > 0) {
      const commentList = document.querySelector('.comment-list');
      commentList.innerHTML = '';
      data.forEach((comm) => {
        const commentItem = `
        <span class="comment-list">${comm.creation_date} ${comm.username}: ${comm.comment}</span>
        <hr>
      `;
        commentList.innerHTML += commentItem;
      });
    }
  } catch (err) {
    throw new Error('Request error: ', err);
  }
};

const postComment = async (itemId) => {
  const username = document.querySelector('.nameInput');
  const comment = document.querySelector('.commentInput');

  if (username.value !== '' || comment.value !== '') {
    try {
      const response = await fetch(invUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ item_id: itemId, username: username.value, comment: comment.value }),
      });
      const data = response.json();
      if (response.ok) {
        username.value = '';
        comment.value = '';
        fetchComments(itemId);
        return data;
      }
    } catch (err) {
      throw new Error('Request error: ', err);
    }
    return true;
  }
  return false;
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
    const btnId = commentBtn.getAttribute('id');
    const movieDetails = arr[btnId];
    commentBtn.addEventListener('click', () => {
      fetchComments(btnId);
      const modal = `
        <div class="header-container">
          <div class="img-container">
            <img src="${movieDetails.image.medium}" class="mov-img" alt="Movie Image">
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

          <div class="comments">
            <h3 class="comm-header">Comments</h3>
            <div class="comment-list"></div>
          </div>

          <div class="add-comment">
            <h3 class="add-comm-header">Add Comment</h3>
            <div class="comment-input-container">
              <input type="text" class="nameInput" size="30" placeholder="Your name">
              <br>
              <textarea class="commentInput" rows="5" cols="30" placeholder="Your insights"></textarea>
              <br>
              <button class="sub-comment-btn" id="${btnId}" type="button">Comment</button>
            </div>
          </div>
      `;

      if (commentModal.classList.contains('hide-modal')) {
        commentModal.classList.remove('hide-modal');
        commentModal.innerHTML = modal;
      }
      const cmntBtn = document.querySelector('.sub-comment-btn');
      cmntBtn.addEventListener('click', () => {
        postComment(btnId);
      });
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