function loadContent(){
    var url = "https://api.jikan.moe/v3/top/anime/1/upcoming";
    fetch(url).then(response => response.json())
        .then(function(data){
            var template = data.map(post => {
                return `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
                `;
            });

            document.getElementById("hasil").innerHTML = template.join('<br>');
        }).catch(function(e){
            alert("gagal mengambil data");
        });
}


