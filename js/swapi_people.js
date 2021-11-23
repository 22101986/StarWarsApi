let peopleHttpRequest = new XMLHttpRequest();
    peopleHttpRequest.onreadystatechange = function() {
        if (peopleHttpRequest.readyState === XMLHttpRequest.DONE) {
            if (peopleHttpRequest.status === 200) {
                let response = JSON.parse(peopleHttpRequest.responseText);
                let ul = document.getElementById("people");
                    for(people of response.results) {
                        ul.innerHTML += `<li class="text-info">Name: ${people.name}</li>`
                    }

                console.log(response);
            }
        }
    }
    peopleHttpRequest.open("GET", "https://swapi.dev/api/people/");
    peopleHttpRequest.send();