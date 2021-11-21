let planetHttpRequest = new XMLHttpRequest();
    planetHttpRequest.onreadystatechange = function() {
        if (planetHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (planetHttpRequest.status === 200) {
                let response = JSON.parse(planetHttpRequest.responseText);
                console.log(response);
            }
        }
    }
    planetHttpRequest.open("GET", "https://swapi.dev/api/planets/");
    planetHttpRequest.send();