const btn = document.getElementById("get_movies");
const list = document.getElementById("movies");

function displayMovies(movies) {
    movies.forEach(movie => {
      const li = document.createElement("li");
      li.textContent = `${movie.title} by ${movie.director} - ${movie.releaseDate}`;
      list.appendChild(li);
    //   console.log(movie);
    });
}

function getMovies() {
  axios
    .get("http://localhost:3005")
    .then(res => {
      console.log(res);
      displayMovies(res.data);
    })
    .catch(err => {
      console.error(err);
    });
}

btn.onclick = getMovies;
