const requestUrl = "https://raw.githubusercontent.com/joshron/kana/master/kanas.json";
const request = new XMLHttpRequest();

let json;

request.open("GET", requestUrl);
request.responseType = "json";
request.send();
request.onload = () => {
    console.log("json request success");
    json = request.response;
}

