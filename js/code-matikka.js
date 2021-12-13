/**
 * Tekijä: Aleksi Viitanen
 */


// Tarkistusluvun osoittama arvo kertoo onko tarkistustoimintoa käytetty jo
let tarkistusLuku = 0;

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

// Funktio luo laskut satunnaisgeneraattoria käyttäen
function matikkaToteutus()  {

    let kaikkiLaskut = new Array;
    let laskuM = document.querySelector("#laskuM");
    let lukujenM = document.querySelector("#lukujenM");
    let vaihteluMin = Number(document.querySelector("#vaihteluMin").value);
    let vaihteluMax = Number(document.querySelector("#vaihteluMax").value);
    let plus = document.querySelector("#plusBox").checked;
    let miinus = document.querySelector("#miinusBox").checked;
    let kerto = document.querySelector("#kertoBox").checked;
    let jako = document.querySelector("#jakoBox").checked;
    let vMerkit = [];
    let maxPisteet = 0;

    // Tyhjentää laskuille tarkoitetun kentän
    document.querySelector("#laskut").textContent = "";
    

    // Tarkistetaan onko asetuksiin syötetyistä luvuista kumpikaan liian suuri tai pieni
    if(vaihteluMax < -998) {
        vaihteluMax = -998;
    }
    if(vaihteluMax > 999) {
        vaihteluMax = 999;
    }
    if(vaihteluMin < -999) {
        vaihteluMin = -999;
    }
    if(vaihteluMin > 998) {
        vaihteluMin = 998;
    }

    // Lisätään välimerkit (vMerkit) taulukkoon, joiden checkbox on rastitettu
    if(plus) {
        vMerkit.push("+");
    }
    if(miinus) {
        vMerkit.push("-");
    }
    if(kerto) {
        vMerkit.push("*");
    }
    if(jako) {
        vMerkit.push("/");
    }
    // Looppi tekee niin monta laskua, kuin asetuksissa on toivottu (oletus 5)
    for(i = 0; i < laskuM.value; i++) {

        // laskunPituus on sattumanvarainen luku 2 ja käyttäjän määrittämän luvun välillä. Oletus on 3, minimi 2 ja maximi 10.
        let laskunPituus = Number(getRndInteger(1, lukujenM.value -1));
        // Laskuun lisätään ensimmäinen luku erikseen, koska alla oleva looppi lisää aina välimerkin eteen
        let lukuJono = Number(getRndInteger(vaihteluMin, vaihteluMax));
        for(j = 0; j < laskunPituus; j++) {
            lukuJono += " " + vMerkit[getRndInteger(0, vMerkit.length - 1)] + " " + getRndInteger(vaihteluMin, vaihteluMax);
        }
        kaikkiLaskut.push(lukuJono);
        maxPisteet++;
        
    }
    let row = document.createElement("div");
    row.classList.add("row");

    for(l = 0; l < kaikkiLaskut.length; l++) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let span = document.createElement("span");
        let span2 = document.createElement("span");
        let yhtkMerkki = document.createElement("span");
        let numInput = document.createElement("input");
        
        div3.classList.add("col-4")
        span.classList.add("luotuLasku");
        span2.classList.add("oikeaVastaus", "tyhj");
        numInput.classList.add("vastaus");
        numInput.type="number";

        span.textContent = kaikkiLaskut[l];
        span2.textContent = "Hups mitäs kurkit sieltä O_O";
        yhtkMerkki.textContent = " = ";

        div.append(span, yhtkMerkki, numInput);
        div2.append(span2);

        div3.append(div, div2);
        
        row.append(div3);

        

        
        // document.querySelector("#laskut").innerHTML += "<div><span class='luotuLasku col-4'>" + kaikkiLaskut[l] + '</span> = <input type="number"><br><span class="oikeaVastaus">&nbsp</span> </div>';
    }
    document.querySelector("#laskut").append(row);
    
    document.querySelector("#maxPisteet").textContent = maxPisteet;
    
    tarkistusLuku = 0;
}


// Funktio muuttaa laskut tekstistä koodiksi ja tarkistaa niiden oikean vastauksen. Funktio sitten tarkistaa onko käyttäjä saanut saman tuloksen.
function tarkistaLaskut() {
    let kaikkiLaskut = document.querySelectorAll("span.luotuLasku");
    let tarkistuskohta = document.querySelectorAll("span.oikeaVastaus");
    let vastaajanVastaukset = document.querySelectorAll("input.vastaus");
    let pisteet = 0;


    if(tarkistusLuku == 1) {
        return alert("Tehtävät on jo tarkistettu");
    }

    for(i = 0; i < kaikkiLaskut.length; i++) {
        let tulos = eval(kaikkiLaskut[i].textContent);
        if(tulos % 1 !== 0) {
            tulos = Number(tulos).toFixed(2);
        }
        if(vastaajanVastaukset[i].value === ""){
            tarkistuskohta[i].textContent = " Et vastannut! Oikea vastaus on " + tulos;
            tarkistuskohta[i].classList.add("virhe");
        } else if(Number(vastaajanVastaukset[i].value) == tulos) {
            tarkistuskohta[i].textContent = " Oikein! ";
            tarkistuskohta[i].classList.add("oikeinVastattu");
            pisteet++;
        } else {
            tarkistuskohta[i].textContent = " Väärin! Oikea vastaus on " + tulos;
            tarkistuskohta[i].classList.add("virhe");
        }
    }

    document.querySelector("#pisteet").textContent = pisteet;
    tarkistusLuku = 1;
}


// Funktio laajentaa näyttää asetusikkunan
function asetuksetToggle() {
    document.querySelector(".asetukset").classList.toggle("hidden")
}


// Lisään nappeihin funktiot
document.querySelector("#teeLaskut").addEventListener("click", matikkaToteutus);
document.querySelector("#tarkistaLaskutButton").addEventListener("click", tarkistaLaskut);
document.querySelector(".asetuksetToggle").addEventListener("click", asetuksetToggle);

matikkaToteutus();

