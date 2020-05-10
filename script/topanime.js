const base_url = "https://api.jikan.moe/v3";


function requestTopAnime(url, onComplete, onError) {

    const form = new FormData(this);

    fetch(`${base_url}/top/anime?q=favorite`)
        .then((res) => res.json())
        .then(updateDom)
        .catch(err=>console.warn(err.message));
}

