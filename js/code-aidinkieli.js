/* 
-- js.tiedosto äidinkielen osuudelle
-- luonut Tiina Pelimanni, 11–12/2021
-- Web-projekti, ryhmä 7
*/

/* --- GLOBAALIT VAKIOT JA MUUTTUJAT */
const MAIN = document.getElementById("main-content");
const BUTTONS = MAIN.getElementsByTagName("button");
const ALERTS = document.querySelectorAll(".alert");
const CORRECT_ANSWERS = [];
const WRAPPERS = document.getElementsByClassName("question-wrapper");

let errorMessage = "";
let numberOfCorrectAnswers = 0;
let totalNumberOfCorrectAnswers = 0;
let answeredQuestions = 0;

/* --- VASTAUSTEN TYHJENNYS */
const ALL_INPUTS = document.querySelectorAll("input");
ALL_INPUTS.forEach(input => {
    input.value = "";
});

const ALL_SELECTS = document.querySelectorAll("select");
ALL_SELECTS.forEach(select => {
    select.selectedIndex = 0;
});

/* --- TAPAHTUMAKÄSITTELIJÄT BUTTONEILLE */
BUTTONS[0].addEventListener("click", start);
BUTTONS[1].addEventListener("click", checkAnswers1);
BUTTONS[2].addEventListener("click", checkAnswers2);
BUTTONS[3].addEventListener("click", checkAnswers3);
BUTTONS[4].classList.add("hidden");


function start() {
    WRAPPERS[0].classList.add("d-none");
    WRAPPERS[1].classList.remove("d-none");
    WRAPPERS[1].classList.add("d-block");
}

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
        if (SELECTS[i].selectedIndex == 0) {
            inputsNotOk(0);
        } else {
            inputsOk();
            SELECTS[i].disabled = true;
        }
        RESULTS[i].textContent = errorMessage;
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
        finishExercise(0, SELECTS);
        moveToNextExercise(1, 1, 2);
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

    for (let i = 0; i < INPUTS.length; i++) {
        if (INPUTS[i].value.length < 1) {
            inputsNotOk(1);
        } else {
            inputsOk();
            INPUTS[i].disabled = true;
        }
        RESULTS[i].textContent = errorMessage;
    }

    // Tarkistetaan vastaukset ja annetaan palaute
    if (answeredQuestions == INPUTS.length) {
        for (let i = 0; i < INPUTS.length; i++) {
            if (INPUTS[i].value.toLowerCase() == CORRECT_ANSWERS[i]) {
                correctAnswer(RESULTS[i]);
            } else {
                wrongAnswer(RESULTS[i], CORRECT_ANSWERS[i]);
            }
        }
        finishExercise(1, INPUTS);
        moveToNextExercise(2, 2, 3);
    }
}

/**
 * Kysymys #3
 */
function checkAnswers3() {
    CORRECT_ANSWERS.length = 0;
    CORRECT_ANSWERS.push("suomalainen", "Marja-Liisa", "Pohjois-Suomi", "Oulun kaupunki", "pohjoispohjanmaalainen");
    CORRECT_IDS = ["3a-2", "3b-2", "3c-1", "3d-2", "3e-3"];
    EXPLANATIONS = ["Erisnimien johdokset kirjoitetaan pienellä alkukirjaimella. Esimerkiksi valtion nimestä Suomi johdettu kansallisuudelle sana suomalainen.", "Erisnimet kirjoitetaan isoilla alkukirjaimilla myös kaksiosaisissa nimissä.", "Kaksiosaisen paikannimen jälkiosa kirjoitetaan isolla alkukirjaimella, jos se on itsekin erisnimi. Yhdysmerkin sisältävissä paikannimissä alkuosa kirjoitetaan isolla kirjaimella, jos kokonaisuus tarkoittaa eri aluetta kuin nimen jälkiosa yksin. Vrt. Suomi – Pohjois-Suomi.", "Oulu on erisnimi, joten se kirjoitetaan isolla alkukirjaimella. Yleisnimi kaupunki kirjoitetaan pienellä kirjaimella.", "Nimistä muodostetut adjektiivit ja johdokset, kuten asukkaannimet, kirjoitetaan pienellä alkukirjaimella. Rinnasteisten eli samanarvoisten yhdysosien välissä ei yleensä käytetä yhdysviivaa."];

    const FORMS = document.getElementById("q3").getElementsByTagName("form");
    const RESULTS = document.getElementById("q3").getElementsByClassName("result");

    answeredQuestions = 0;

    // Tarkistetaan onko kysymykseen vastattu
    let radiosChecked = 0;
    for (let i = 0; i < FORMS.length; i++) {
        const RADIOS = FORMS[i].querySelectorAll("input[type=radio]");
        RADIOS.forEach(radio => {
            if (radio.checked) {
                radiosChecked++;
            }
        });
        if (radiosChecked == 0) {
            inputsNotOk(2);
        } else if (radiosChecked == 1) {
            inputsOk();
            RADIOS.forEach(radio => { radio.disabled = true; });
        }
        RESULTS[i].textContent = errorMessage;
        radiosChecked = 0;
    }

    if (answeredQuestions == FORMS.length) {
        // Tarkistetaan oikeat vastaukset ja annetaan palaute
        for (let i = 0; i < FORMS.length; i++) {
            const RADIOS = FORMS[i].querySelectorAll("input[type=radio]");
            RADIOS.forEach(radio => {
                if (radio.checked && radio.id != CORRECT_IDS[i]) {
                    wrongAnswer(RESULTS[i], CORRECT_ANSWERS[i], EXPLANATIONS[i]);
                } else if (radio.checked && radio.id == CORRECT_IDS[i]) {
                    correctAnswer(RESULTS[i]);
                }
            });
        }
        finishExercise(2, FORMS);
    }
}

BUTTONS[4].addEventListener("click", function () {
    document.getElementById("testi").innerHTML = calculateTotal();
})

/** --- APUFUNKTIOT */

/**
 * Kun kaikkiin kysymyksen kohtiin on vastattu > poistaa tarkistusnapin käytöstä, antaa käyttäjälle palautteen suorituksesta, lisää tehtävästä saadut pisteet kokonaispistemäärään ja nollaa tehtäväkohtaisen pistelaskurin
 * @param {Integer} buttonIndex     missä indeksissä suljettava button sijaitsee BUTTONS-taulukossa
 * @param {Integer} alertIndex      missä indeksissä alert sijaitsee ALERTS-taulukossa
 * @param {Array} lengthSource      minkä taulukon pituudesta lasketaan vastausten kokonaismäärä
 */
function finishExercise(alertIndex, lengthSource) {
    giveFeedbackToTheUser(ALERTS[alertIndex], lengthSource);
    totalNumberOfCorrectAnswers += numberOfCorrectAnswers;
    numberOfCorrectAnswers = 0;
}

/**
 * Piilottaa tarkistupainikkeen, tuo esiin siirtymispainikkeen. Siirtymispainiketta klikatessa näkyvillä oleva tehtävä vaihtuu
 * @param {Integer} buttonIndex     käsiteltävän buttonin indeksi BUTTONS-taulukossa
 * @param {Integer} questionToHide  piilotettavan tehtävän wrapperin indeksi WRAPPERS-taulukossa
 * @param {Integer} questionToShow  esiin tuotavan tehtävän wrapperin indeksi -||-
 */
function moveToNextExercise(buttonIndex, questionToHide, questionToShow) {
    BUTTONS[buttonIndex].textContent = "Siirry seuraavaan tehtävään";
    BUTTONS[buttonIndex].addEventListener("click", function () {
        WRAPPERS[questionToHide].classList.add("d-none");
        WRAPPERS[questionToShow].classList.remove("d-none");
    });
}

/**
 * Laskee ja palauttaa kokonaispistemäärän
 */
function calculateTotal() {
    return totalNumberOfCorrectAnswers + "/15";
}

/**
 * Päivittää virheilmoituksen, jos käyttäjä ei ole vastannut kaikkiin kohtiin
 * @param {Integer} alertIndex      missä indeksissä muutosten kohteena oleva alert-elementti sijaitsee ALERTS-taulukossa 
 */
function inputsNotOk(alertIndex) {
    errorMessage = "Vastaus puuttuu!";
    ALERTS[alertIndex].textContent = "Vastaathan kaikkiin kohtiin ennen vastausten tarkistamista.";
    ALERTS[alertIndex].classList.remove("alert-secondary");
    ALERTS[alertIndex].classList.add("alert-primary");
}

/**
 * Tyhjentää virheilmoituksen ja merkitsee kohdan vastatuksi, kun käyttäjä on vastannut siihen
 */
function inputsOk() {
    errorMessage = "";
    answeredQuestions++;
}

/**
 * Lisää uuden Font Awesome -ikonin oikealle vastaukselle
 * @param {Array} resultLocation    mistä taulukosta ja indeksistä tuloksen tulostuselementti otetaan
 */
function correctAnswer(resultLocation) {
    let newIcon = document.createElement("i");
    newIcon.classList.add("fas", "fa-check-circle", "text-success");
    resultLocation.appendChild(newIcon);
    numberOfCorrectAnswers++;
}

/**
 * Lisää uuden Font Awesome -ikonin ja näyttää oikean vastauksen, jos vastaus on väärin
 * @param {Array} resultLocation    mistä taulukosta ja indeksistä tuloksen tulostuselementti otetaan
 * @param {Array} answersLocation   mistä taulukosta oikeat vastaukset otetaan
 */
function wrongAnswer(resultLocation, answersLocation, explanations) {
    let newIcon = document.createElement("i");
    newIcon.classList.add("fas", "fa-times-circle", "text-danger");
    let newText = document.createTextNode(" " + answersLocation);
    resultLocation.append(newIcon, newText);

    if (explanations) {
        let p = document.createElement("p");
        p.style.fontStyle = "italic";
        let explanation = document.createTextNode(explanations);
        p.appendChild(explanation);
        resultLocation.appendChild(p);
    }
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

    let alertMessage = "";
    alertElement.classList.remove("alert-secondary");
    alertElement.classList.remove("alert-primary");
    switch (numberOfCorrectAnswers) {
        case 0:
        case 1:
            alertElement.classList.add("alert-danger");
            alertMessage = "Nyt ei mennyt aivan nappiin. Tämä asia vaatii vielä lisää harjoittelua."
            break;
        case 2:
        case 3:
            alertElement.classList.add("alert-warning");
            alertMessage = "Kelpo suoritus. Hallitset tämän asian perusteet."
            break;
        case 4:
            alertElement.classList.add("alert-success");
            alertMessage = "Hyvää työtä! Melkein kaikki oikein."
            break;
        case 5:
            alertElement.classList.add("alert-success");
            alertMessage = "Erinomaista! Sinulla on homma hallussa."
    }

    let alertContent = numberOfCorrectAnswers + "/" + questionsArray.length + ". " + alertMessage;
    alertElement.textContent = alertContent;
}