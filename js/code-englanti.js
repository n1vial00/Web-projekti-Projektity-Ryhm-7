// JavaScript-tiedosto enkku.html sivulle
// Luonut Toni Jukkola
// TIK21SP
// Projektiryhmä 7



// Tarkistus funktiot.

//Tehtävä 1.
function tarkista1() {
    let selectedValue1 = document.getElementById("list1").value;
        console.log(selectedValue1);

    // Ehtolauseet
    if (selectedValue1 == "cat") {
        document.getElementById("answer1").innerHTML = "Vastauksesi on <h3> oikein! </h3>"
    } else {
        document.getElementById("answer1").innerHTML = " Vastauksesi on <h3>väärin!</h3> Yritä uudelleen. "
    }
    if (selectedValue1 == "valitse") {
        document.getElementById("answer1").innerHTML = "Sinun täytyy valita yksi vaihtoehdoista.";
    } 
}
    // Tehtävä 2.
function tarkista2() {
    let selectedValue2 = document.getElementById("list2").value;
    console.log(selectedValue2);
    
    // Ehtolauseet
    if (selectedValue2 == "i'm sorry") {
        document.getElementById("answer2").innerHTML = "Vastauksesi on <h3> oikein! </h3>"
    } else {
        document.getElementById("answer2").innerHTML = " Vastauksesi on <h3>väärin!</h3> Yritä uudelleen. "
    }
    if (selectedValue2 == "valitse") {
        document.getElementById("answer2").innerHTML = "Sinun täytyy valita yksi vaihtoehdoista.";
    }
}
    // Tehtävä 3.
function tarkista3() {
    let selectedValue3 = document.getElementById("list3").value;
    console.log(selectedValue3);
    
    // Ehtolauseet.
    if (selectedValue3 == "where is the school?") {
        document.getElementById("answer3").innerHTML = "Vastauksesi on <h3> oikein! </h3>"
    } else {
        document.getElementById("answer3").innerHTML = " Vastauksesi on <h3>väärin!</h3> Yritä uudelleen. "
    }
    if (selectedValue3 == "valitse") {
        document.getElementById("answer3").innerHTML = "Sinun täytyy valita yksi vaihtoehdoista.";
    }
}
    // Tehtävä 4.
function tarkista4() {
    let selectedValue4 = document.getElementById("list4").value;
    console.log(selectedValue4);
    
    // Ehtolauseet.
    if (selectedValue4 == "rainforest") {
        document.getElementById("answer4").innerHTML = "Vastauksesi on <h3> oikein! </h3>"
    } else {
        document.getElementById("answer4").innerHTML = " Vastauksesi on <h3> väärin! </h3> Yritä uudelleen. "
    }
    if (selectedValue4 == "valitse") {
        document.getElementById("answer4").innerHTML = "Sinun täytyy valita yksi vaihtoehdoista.";
    }
}
    // Tehtävä 5.
function tarkista5() {
    let selectedValue5 = document.getElementById("list5").value;
    console.log(selectedValue5);
    
    // Ehtolauseet.
    if (selectedValue5 == "snowflake") {
        document.getElementById("answer5").innerHTML = "Vastauksesi on <h3> oikein! </h3>"
    } else {
        document.getElementById("answer5").innerHTML = " Vastauksesi on <h3> väärin! </h3> Yritä uudelleen. "
    }
    if (selectedValue5 == "valitse") {
        document.getElementById("answer5").innerHTML = "Sinun täytyy valita yksi vaihtoehdoista.";
    }
}
    // Tehtävä 6.
function tarkista6() {
    let selectedValue6 = document.getElementById("list6").value;
    console.log(selectedValue6);
    
    // Ehtolauseet.
    if (selectedValue6 == "spacestation") {
        document.getElementById("answer6").innerHTML = "Vastauksesi on <h3> oikein! </h3>"
    } else {
        document.getElementById("answer6").innerHTML = " Vastauksesi on <h3> väärin! </h3> Yritä uudelleen. "
    }
    if (selectedValue6 == "valitse") {
        document.getElementById("answer6").innerHTML = "Sinun täytyy valita yksi vaihtoehdoista.";
    }
}



    