let peopleHttpRequest = new XMLHttpRequest();
    peopleHttpRequest.onreadystatechange = function() {
        if (peopleHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (peopleHttpRequest.status === 200) {
                let response = JSON.parse(peopleHttpRequest.responseText);
                console.log(response);
            }
        }
    }
    peopleHttpRequest.open("GET", "https://swapi.dev/api/people/");
    peopleHttpRequest.send();