
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Tämä funktio lisää sattumanvaraisen numeron laskuihin
function vaihdaMatikka() {
    let allNumbers = document.querySelectorAll(".changingNR");

    for(i = 0; i < allNumbers.length; i++) {
        let randomNumber = getRndInteger(vaihteluMin,vaihteluMax);
        allNumbers[i].textContent = randomNumber;
    }
}


function matikkaToteutus()  {

    let kaikkiLaskut = new Array;
    let laskuM = document.querySelector("#laskuM");
    let lukujenM = document.querySelector("#lukujenM");
    let vaihteluMin = Number(document.querySelector("#vaihteluMin").value);
    let vaihteluMax = Number(document.querySelector("#vaihteluMax").value);
    let plus = document.querySelector("#plusBox").checked;
    let miinus = document.querySelector("#miinusBox").checked;
    let kerto = document.querySelector("#kertoBox").checked;
    let vMerkit = [];

    // Tyhjentää laskuille tarkoitetun kentän
    document.querySelector("#laskut").textContent = "";

    if(vaihteluMin > 998 && vaihteluMax > 999) {

    }
    
    if(plus) {
        vMerkit.push("+");
    }
    if(miinus) {
        vMerkit.push("-");
    }
    if(kerto) {
        vMerkit.push("*");
    }

    for(i = 0; i < laskuM.value; i++) {
        let randomLuku = Number(getRndInteger(1, lukujenM.value -1));
        let lukuJono = Number(getRndInteger(vaihteluMin, vaihteluMax));
        for(j = 0; j < randomLuku; j++) {
            lukuJono += " " + vMerkit[getRndInteger(0, vMerkit.length - 1)] + " " + getRndInteger(vaihteluMin, vaihteluMax);
        }
        kaikkiLaskut.push(lukuJono);
        
    }
    for(l = 0; l < kaikkiLaskut.length; l++) {
        document.querySelector("#laskut").innerHTML += "<div><span class='luotuLasku'>" + kaikkiLaskut[l] + '</span> = <input type="number"><span class="oikeaVastaus"></span> </div>';
    }

}

function tarkistaLaskut() {
    let kaikkiLaskut = document.querySelectorAll("div#laskut>div>span.luotuLasku");
    let tarkistuskohta = document.querySelectorAll("div#laskut>div>span.oikeaVastaus");
    let vastaajanVastaukset = document.querySelectorAll("div#laskut>div>input");

    for(i = 0; i < kaikkiLaskut.length; i++) {
        let tulos = eval(kaikkiLaskut[i].textContent);
        if(vastaajanVastaukset[i].value === ""){
            tarkistuskohta[i].textContent = " Et vastannut! Oikea vastaus on " + tulos;
        } else if(Number(vastaajanVastaukset[i].value) === tulos) {
            tarkistuskohta[i].textContent = " Oikein! ";
        } else {
            tarkistuskohta[i].textContent = " Väärin! Oikea vastaus on " + tulos;
        }
    }

}

document.querySelector("#teeLaskut").addEventListener("click", matikkaToteutus);
document.querySelector("#tarkistaLaskutButton").addEventListener("click", tarkistaLaskut);


matikkaToteutus();