let kaikkiLaskut = new Array;

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
    let div = document.createElement("div");

    let laskuM = document.querySelector("#laskuM");
    let lukujenM = document.querySelector("#lukujenM");
    let vaihteluMin = Number(document.querySelector("#vaihteluMin").value);
    let vaihteluMax = Number(document.querySelector("#vaihteluMax").value);
    let plus = document.querySelector("#plusBox").checked;
    let miinus = document.querySelector("#miinusBox").checked;
    let kerto = document.querySelector("#kertoBox").checked;
    let vMerkit = [];
    
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
        let randomLuku = getRndInteger(0, lukujenM - 1);
        let lukuJono = getRndInteger(vaihteluMin, vaihteluMax);
        for(j = 0; j < randomLuku; j++) {
            lukuJono += vMerkit[getRndInteger(0, vMerkit.length)] + " " + getRndInteger(vaihteluMin, vaihteluMax);
        }
        kaikkiLaskut.push(lukuJono);
    }

}


document.querySelector("#teeLaskut").addEventListener("click",matikkaToteutus)

