import fetchAll from "./Fetchall";
import postLike from "./likesApi";



const liking = async () => {
    const allMovies = await fetchAll();

    const likesBtn = document.querySelectorAll('.likeBtn');
    let spans =document.querySelectorAll('span')
    console.log(likesBtn);
    likesBtn.forEach((a, i) => {
        let h = spans[i].innerHTML
        
        a.addEventListener('click', () => {
            console.log(allMovies[i].name)
            postLike(allMovies[i].name)
        
        h++;
        console.log(h);
        spans[i].innerHTML=h
  
      })
    })
}
  
export default liking