let starshipHttpRequest = new XMLHttpRequest();
    starshipHttpRequest.onreadystatechange = function() {
        if (starshipHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (starshipHttpRequest.status === 200) {
                let response = JSON.parse(starshipHttpRequest.responseText);
                console.log(response);
            }
        }
    }
    starshipHttpRequest.open("GET", "https://swapi.dev/api/starships/");
    starshipHttpRequest.send();