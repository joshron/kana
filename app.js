const requestUrl = "https://raw.githubusercontent.com/joshron/kana/master/kanas.json";
const request = new XMLHttpRequest();
const activeArea = document.getElementById("main");
const hiddenDiv = document.getElementById("hidden-div");
const studyContainer = document.getElementById("study-container");
const studyCardsContainer = document.getElementById("study-cards-container");

//All buttons
const buttonContainer = document.getElementById("button-container");
const studyButton = document.getElementById("study-button");
const practiceButton = document.getElementById("practice-button");
const chartButton = document.getElementById("chart-button");
const closeButton = document.getElementById("close-button");
const baseHiraganaButton = document.getElementById("base-hiragana-button");
const modifiedHiraganaButton = document.getElementById("modified-hiragana-button");
const allHiraganaButton = document.getElementById("all-hiragana-button");

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
    hiddenDiv.append(buttonContainer);
    activeArea.append(hiraganaTable);
    activeArea.append(closeButton);    
});

closeButton.addEventListener("click", () => {
    hiddenDiv.append(closeButton);
    activeArea.append(buttonContainer);
    if (activeArea.firstElementChild === hiraganaTable) {
        hiddenDiv.append(hiraganaTable);
    } else if (activeArea.firstElementChild === studyContainer) {
        hiddenDiv.append(studyContainer);
    }
});

studyButton.addEventListener("click", () => {
    hiddenDiv.append(buttonContainer);
    activeArea.append(studyContainer);
    activeArea.append(closeButton);
})

baseHiraganaButton.addEventListener("click", () => {studyCards(baseHiraganaArray)});
modifiedHiraganaButton.addEventListener("click", () => {studyCards(modifiedHiraganaArray)});
allHiraganaButton.addEventListener("click", () => {studyCards(allHiraganaArray)});

class StudyCardElement {
    constructor(romaji, hiragana) {
        this.romaji = romaji;
        this.hiragana = hiragana;
    }
    buildCard(appendLocation) {
        const div = document.createElement("div");
        const english = document.createElement("p");
        const japanese = document.createElement("p");
        english.innerText = this.romaji;
        japanese.innerText = this.hiragana;
        div.append(japanese);
        div.append(english);
        div.className = "cardClass";
        appendLocation.append(div);
    }
}

const baseHiraganaArray = ["a", "ka", "sa", "ta", "na", "ha", "ma", "ya", "ra", "wa"];
const modifiedHiraganaArray = ["ga", "za", "da", "ba", "pa"];
const allHiraganaArray = baseHiraganaArray.concat(modifiedHiraganaArray);
function studyCards(someArray) {
    studyCardsContainer.innerHTML = "";
    for (i = 0; i < someArray.length; i++) {
        const rowArray = Object.keys(json.hiragana[someArray[i]]);
        console.log(rowArray);
        for (j = 0; j < rowArray.length; j++) {
            const target = json.hiragana[someArray[i]][rowArray[j]];
            const card = new StudyCardElement(target.romaji, target.hiragana);
            card.buildCard(studyCardsContainer);
        }
    }
    //Append first card to container
    studyContainer.append(studyCardsContainer.firstElementChild);    
}
