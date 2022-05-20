const fetchAll = async () => {
  let arr = [];
  await fetch('https://api.tvmaze.com/shows?page=1').then((response) => response.json()).then((response) => {
    arr = response;
  });
  return arr;
};

export default fetchAll;