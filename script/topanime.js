const base_url = "https://api.jikan.moe/v3";
const end_point = "https://api.jikan.moe/v3/top/"


function requestTopAnime(url, onComplete, onError) {

    const form = new FormData(this);

    fetch(`${base_url}/top/anime?q=favorite`)
        .then((res) => res.json())
        .then(updateDom)
        .catch(err=>console.warn(err.message));
}

function generateAnimeUrl(path) {
    const url = `${MOVIE_DB_ENDPOINT}anime?q=favorite`;
    return url;
}
function getTopRatedMovies() {
    const url = generateAnimeUrl;
    requestTopAnime(url, render, handleGeneralError);
}


