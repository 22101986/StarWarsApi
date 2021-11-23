let planetHttpRequest = new XMLHttpRequest();
    planetHttpRequest.onreadystatechange = function() {
        if (planetHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (planetHttpRequest.status === 200) {
                let response = JSON.parse(planetHttpRequest.responseText);
                let ul = document.getElementById("planet")
                    for(planet of response.results) {
                        ul.innerHTML += `<li class="list-group-item list-group-item-warning"><h2 class="text-dark p-2">Planet:</h2> <h1 class="text-danger"><strong>${planet.name}</strong></h1></li>`
                        ul.innerHTML += `<li class="list-group-item list-group-item-warning"><p style="color:blue"><h3><p class="text-danger p-2">Diameter: <p><strong>${planet.diameter}</strong></p> </p><p class="text-danger">Climate:</p><p> <strong>${planet.climate}</strong></p></h3></li>`
                    }
            }
        }
    }
    planetHttpRequest.open("GET", "https://swapi.dev/api/planets/");
    planetHttpRequest.send();