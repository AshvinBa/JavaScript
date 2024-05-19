const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// searches most popular movies.

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// get searched movies.

const moiveBox = document.querySelector("#movie-box");

const getMovies = async (api) => {
        const response = await fetch(api); // await is used to wait for a time.
        const data = await response.json(); // Corrected the JSON method
        console.log(data);
        showMovies(data.results);
}

getMovies(APIURL);

const showMovies = (data) => {
    console.log(data);
}
















