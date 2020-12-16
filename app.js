let httpRequest;

function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert("There was an error with the XMLHttp request")
        return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open("GET", "")
}

function alertContents() {

}