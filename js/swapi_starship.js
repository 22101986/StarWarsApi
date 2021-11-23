let starshipHttpRequest = new XMLHttpRequest();
    starshipHttpRequest.onreadystatechange = function() {
        if (starshipHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (starshipHttpRequest.status === 200) {
                let response = JSON.parse(starshipHttpRequest.responseText);
                let ul = document.getElementById("starship");
                    for(starship of response.results) {
                        ul.innerHTML += `<li class="text-light">Name: ${starship.name}</li>`
                    }
            }
        }
    }
    starshipHttpRequest.open("GET", "https://swapi.dev/api/starships/");
    starshipHttpRequest.send();