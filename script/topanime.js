const top_url = "https://api.jikan.moe/v3";

function TopAnime(url, onComplete, onError){

    fetch(`${top_url}/top/anime?q/favorite`)
    .then(res=>res.json())
    .then(onComplete)
    .catch(onError);
}

const renderResult = results => {
    topListElement.innerHTML = "";
    results.forEach(top => {
        const { title, image_url, rating } = top;
        const topElement = document.createElement("div");
        topElement.setAttribute("class", "top");

    topElement.innerHTML =
 
    `<div class="card">
                        <div class="card-image">
                            <img src="${top.image_url}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${top.title}</span>
                            <h5>${top.rating}</h5>
                        </div>
                        <div class="card-action">
                            <a href="${top.url}">Find out more</a>
                        </div>
                    </div>
                `
    ;
topListElement.appendChild(topElement);
    })
};

function getTopAnime() {
    const url = `${top_url}/top/anime/1/favorite`
    const render = renderResult.bind({ title: 'Recomendation' })
    TopAnime(url, onComplete, onError);
}