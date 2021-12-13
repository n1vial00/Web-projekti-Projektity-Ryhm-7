/* 
-- js.tiedosto äidinkielen osuudelle
-- luonut Tiina Pelimanni, 11–12/2021
-- Web-projekti, ryhmä 7
*/

/* --- GLOBAALIT MUUTTUJAT */
const MAIN = document.getElementById("main-content");
const BUTTONS = MAIN.getElementsByTagName("button");
const ALERTS = document.querySelectorAll(".alert");
const CORRECT_ANSWERS = [];

let numberOfCorrectAnswers = 0;
let answeredQuestions = 0;

BUTTONS[0].addEventListener("click", checkAnswers1);
BUTTONS[1].addEventListener("click", checkAnswers2);

/* --- VASTAUSTEN TYHJENNYS */
const ALL_INPUTS = document.querySelectorAll("input");
ALL_INPUTS.forEach(input => {
    input.value = "";
});

const ALL_SELECTS = document.querySelectorAll("select");
ALL_SELECTS.forEach(select => {
    select.selectedIndex = 0;
});


/* --- BUTTONIEN FUNKTIOT */

/**
 * Kysymys #1
 */
function checkAnswers1() {
    CORRECT_ANSWERS.length = 0;
    CORRECT_ANSWERS.push("substantiivi", "verbi", "adjektiivi", "numeraali", "pronomini");
    const CORRECT_INDEXES = ["2", "1", "3", "4", "5"];

    const SELECTS = document.getElementById("q1").getElementsByTagName("select");
    const RESULTS = document.getElementById("q1").getElementsByClassName("result");

    answeredQuestions = 0;

    // Tarkistetaan onko kysymykseen vastattu
    for (let i = 0; i < SELECTS.length; i++) {
        let message = "";
        if (SELECTS[i].selectedIndex == 0) {
            message = "Vastaus puuttuu!";
            ALERTS[0].textContent = "Vastaathan kaikkiin kohtiin ennen vastausten tarkistamista.";
            ALERTS[0].classList.add("visible");
        } else {
            message = "";
            SELECTS[i].disabled = true;
            answeredQuestions++;
        }
        RESULTS[i].textContent = message;
    }

    // Tarkistetaan vastaukset ja annetaan palaute
    if (answeredQuestions == SELECTS.length) {
        for (let i = 0; i < SELECTS.length; i++) {
            if (SELECTS[i].selectedIndex == CORRECT_INDEXES[i]) {
                correctAnswer(RESULTS[i]);
            } else {
                wrongAnswer(RESULTS[i], CORRECT_ANSWERS[i]);
            }
        }
        disableButton(0);
        giveFeedbackToTheUser(ALERTS[0], SELECTS);
        numberOfCorrectAnswers = 0;
    }
}

/**
 * Kysymys #2
 */
function checkAnswers2() {
    CORRECT_ANSWERS.length = 0;
    CORRECT_ANSWERS.push("laulatte", "laulan", "laulaa", "laulamme", "laulat");
    const INPUTS = document.getElementById("q2").getElementsByTagName("input");
    const RESULTS = document.getElementById("q2").getElementsByClassName("result");

    answeredQuestions = 0;

    let message = "";
    for (let i = 0; i < INPUTS.length; i++) {
        if (INPUTS[i].value.length < 1) {
            message = "Vastaus puuttuu!";
            ALERTS[1].textContent = "Vastaathan kaikkiin kohtiin ennen vastausten tarkistamista.";
            ALERTS[1].classList.add("visible");
        } else {
            message = "";
            INPUTS[i].disabled = true;
            answeredQuestions++;
        }
        RESULTS[i].textContent = message;
    }

    // Tarkistetaan vastaukset ja annetaan palaute
    if (answeredQuestions == INPUTS.length) {
        for (let i = 0; i < INPUTS.length; i++) {
            if (INPUTS[i].value == CORRECT_ANSWERS[i]) {
                correctAnswer(RESULTS[i]);
            } else {
                wrongAnswer(RESULTS[i], CORRECT_ANSWERS[i]);
            }
        }
        disableButton(1);
        giveFeedbackToTheUser(ALERTS[1], INPUTS);
        numberOfCorrectAnswers = 0;
    }
}

/** --- APUFUNKTIOT */

/**
 * Lisää uuden Font Awesome -ikonin oikealle vastaukselle
 * @param {Array} resultLocation    mistä taulukosta ja indeksistä tuloksen tulostuselementti otetaan
 */
function correctAnswer(resultLocation) {
    let newIcon = document.createElement("i");
    newIcon.classList.add("fas", "fa-check-circle", "correct");
    resultLocation.appendChild(newIcon);
    numberOfCorrectAnswers++;
}

/**
 * Lisää uuden Font Awesome -ikonin ja näyttää oikean vastauksen, jos vastaus on väärin
 * @param {Array} resultLocation    mistä taulukosta ja indeksistä tuloksen tulostuselementti otetaan
 * @param {Array} answersLocation   mistä taulukosta oikeat vastaukset otetaan
 */
function wrongAnswer(resultLocation, answersLocation) {
    let newIcon = document.createElement("i");
    newIcon.classList.add("fas", "fa-times-circle", "wrong");
    newIcon.textContent = " " + answersLocation;
    resultLocation.appendChild(newIcon);
}

/**
 * Poistaa "Tarkista vastaukset" -buttonin käytöstä, kun vastaukset on tarkistettu
 * @param {Number} indexOfButton    buttonin indeksi BUTTONS-taulukossa
 */
function disableButton(indexOfButton) {
    BUTTONS[indexOfButton].classList.remove("btn-primary");
    BUTTONS[indexOfButton].classList.add("btn-secondary");
    BUTTONS[indexOfButton].disabled = true;
}

/**
 * Tarkistaa oikeiden vastausten määrän ja antaa niiden perusteella palautteen käyttäjälle
 * @param {*} alertElement      kysymykselle kuuluvan alert-elementin sijainti muuttujassa
 * @param {*} questionsArray    taulukko tai kokoelma, jonka pituudesta lasketaan kysymysten kokonaismäärä
 */
function giveFeedbackToTheUser(alertElement, questionsArray) {
    if (!alertElement.classList.contains("visible")) {
        alertElement.classList.add("visible");
    }

    let alertContent = numberOfCorrectAnswers + "/" + questionsArray.length;
    switch (numberOfCorrectAnswers) {
        case 0:
        case 1:
            alertElement.classList.add("alert-danger");
            break;
        case 2:
        case 3:
            alertElement.classList.add("alert-warning");
        case 4:
        case 5:
            alertElement.classList.add("alert-success");
    }

    alertElement.textContent = alertContent;
}