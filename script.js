const API_KEY = "bc10d90ff35baddc536b04072a5d0fc5";

let page = 1;

// Load movies when page opens
async function getMovies() {

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
    );

    const data = await response.json();

    displayMovies(data.results);
}

// Display movies on screen
function displayMovies(movies) {

    const container = document.getElementById("movies");

    movies.forEach(movie => {

        container.innerHTML += `
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>⭐ ${movie.vote_average}</p>
            </div>
        `;
    });
}

// Search movies
async function searchMovie() {

    const query = document.getElementById("search").value;

    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const data = await response.json();

    const container = document.getElementById("movies");
    container.innerHTML = "";

    displayMovies(data.results);
}

// Load more movies
async function loadMoreMovies() {

    page++;

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
    );

    const data = await response.json();

    displayMovies(data.results);
}

// Start website
getMovies();
