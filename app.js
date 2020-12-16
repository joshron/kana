const requestUrl = "https://raw.githubusercontent.com/joshron/kana/master/kanas.json";
const request = new XMLHttpRequest();
const activeArea = document.getElementById("main");
let json;

request.open("GET", requestUrl);
request.responseType = "json";
request.send();
request.onload = () => {
    console.log("json request success");
    json = request.response;
    testFunc();
}

function testFunc() {
    const div = document.createElement("div");
    const text = document.createTextNode(json.hiragana.sa.shi.hiragana);
    div.append(text);
    activeArea.append(div);
}