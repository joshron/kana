const requestUrl = "https://raw.githubusercontent.com/joshron/kana/master/kanas.json";
const request = new XMLHttpRequest();
const activeArea = document.getElementById("main");
const hiddenDiv = document.getElementById("hidden-div");

const studyButton = document.getElementById("study-button");
const practiceButton = document.getElementById("practice-button");
const chartButton = document.getElementById("chart-button");

const hiraganaTable = document.getElementById("hiragana-table");
let json;

request.open("GET", requestUrl);
request.responseType = "json";
request.send();
request.onload = () => {
    console.log("json request success");
    json = request.response;
}

chartButton.addEventListener("click", () => {
    activeArea.innerHTML = "";
    activeArea.append(hiraganaTable);    
});