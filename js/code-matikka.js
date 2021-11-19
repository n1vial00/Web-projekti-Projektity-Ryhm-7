

class Lasku {


    constructor(lukujenM, plus, miinus, kerto) {
        this.lukujenM = lukujenM;
        this.plus = plus;
        this.miinus = miinus;
        this.kerto = kerto;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Tämä funktio lisää sattumanvaraisen numeron laskuihin
function vaihdaMatikka() {
    let allNumbers = document.querySelectorAll(".changingNR");
    let vaihteluMin = Number(document.querySelector("#vaihteluMin").value);
    let vaihteluMax = Number(document.querySelector("#vaihteluMax").value);
    for(i = 0; i < allNumbers.length; i++) {
        let randomNumber = getRndInteger(vaihteluMin,vaihteluMax);
        allNumbers[i].textContent = randomNumber;
    }
}

// Tämä funktio tarkistaa ovatko käyttäjän antamat vastaukset oikein
function matikkaTarkistus()  {
    let number1 = document.querySelector("#addNumber1")
    let number2 = document.querySelector("#addNumber2")
    
    
}


document.querySelector("#addButton").addEventListener("click",matikkaTarkistus)
document.querySelector("#vaihdaMatikkaButton").addEventListener("click",vaihdaMatikka);

