const API_KEY = "be79b43ec69576f02d2dc45af555daa9";
const API_URL_TRENDING = "https://api.themoviedb.org/3/trending/movie/day?api_key=be79b43ec69576f02d2dc45af555daa9";
const IMAGES = "https://image.tmdb.org/t/p/w500/";

// showMovies("/result_example.json");

// console.log(getTrending(API_URL_TRENDING));

// function getTrending(url) {

//     return fetch(url).then(res => {
//         return res.json();
//     })
// }

// async function getTrending(url) {

//     const resp = await fetch(url, {
//         headers: {
//             "Authorisation": API_KEY,
//             "Content-Type": "application/json;charset=utf-8",
//         }
//     });
//     const respData = await resp.json();
//     console.log(respData);
// }


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


readTextFile("/result_example.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    showMovies(data);
});

showMovies(parseResult);

function showMovies(data) {
    const moviesEl = document.querySelector(".main__movies");

    data.results.forEach((movie) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("main__movie");
        movieEl.innerHTML = `
        <div class="main__movie">
            <div class="movie__wrapper">
                <img src="/img/test_img.jpg" class="movie__wrapper-inner"/>
            </div>
        <div class="movie__settings">
        </div>
            <div class="movie__info">
                <div class="movie__rating movie__rating-green">${movie.vote_average}</div>
                <div class="movie__title">${movie.original_title}</div>
                <div class="movie__date">${movie.release_date}</div>
            </div>
        </div> 
        `;
        moviesEl.appendChild(movieEl);
    });
}