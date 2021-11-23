let planetHttpRequest = new XMLHttpRequest();
    planetHttpRequest.onreadystatechange = function() {
        if (planetHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (planetHttpRequest.status === 200) {
                let response = JSON.parse(planetHttpRequest.responseText);
                let ul = document.getElementById("planet")
                    for(planet of response.results) {
                        ul.innerHTML += `<li class="list-group-item list-group-item-warning">Planet: ${planet.name}</li>`
                    }
            }
        }
    }
    planetHttpRequest.open("GET", "https://swapi.dev/api/planets/");
    planetHttpRequest.send();