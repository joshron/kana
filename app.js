let httpRequest;

function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert("There was an error with the XMLHttp request")
        return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open("GET", "https://raw.githubusercontent.com/joshron/kana/master/kanas.json");
    httpRequest.send();
}

function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            alert(httpRequest.hiragana.a.ka.romaji);
        } else {
            alert("There was a problem with the request");
        }
    }
}