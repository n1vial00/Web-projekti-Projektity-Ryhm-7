// JavaScript-tiedosto enkku.html sivulle
// Luonut Toni Jukkola
// TIK21SP
// Projektiryhmä 7



// Funktio jolla saadaan vastausvaihtoehto klikkauksella napin otsikoksi
function getSelectValue1() {

    let selectedValue1 = document.getElementById("list1").value;
    console.log(selectedValue1)
    alert(selectedValue1);
} 
function getSelectValue2() {
    let selectedValue2 = document.getElementById("list2").value;
    console.log(selectedValue2)
    alert(selectedValue2);
}
function getSelectValue3() {
    let selectedValue3 = document.getElementById("list3").value;
    console.log(selectedValue3)
    alert(selectedValue3);
}
function getSelectValue4() {
    let selectedValue4 = document.getElementById("list4").value;
    console.log(selectedValue4)
    alert(selectedValue4);
}
function getSelectValue5() {
    let selectedValue5 = document.getElementById("list5").value;
    console.log(selectedValue5)
    alert(selectedValue5);
}
function getSelectValue6() {
    let selectedValue6 = document.getElementById("list6").value;
    console.log(selectedValue6)
    alert(selectedValue6);
}
// Kysymykset
const questions = [
    {
        question1: "Mikä on kissa englanniksi?",
        answers: [
            { text: "Lion", correct: false},
            { text: "Cat", correct: true},
            { text: "Mouse", correct: false}
        ],
    },
    {
        question2: "Miten pyydät anteeksi englanniksi?",
        answers: [
            { text: "I'm sorry", correct: true},
            { text: "I'm blurry", correct: false},
            { text: "I'm curry", correct: false}
        ],
    },
    {
        question3: "Olet kysymässä koulun sijaintia, miten sanot?",
        answers: [
            { text: "Where is the shop?", correct: false},
            { text: "Where is the bank?", correct: false},
            { text: "Where is the school?", correct: true}
        ],
    },
    {
        question4: "Mikä on sademetsä englanniksi?",
        answers: [
            { text: "Swamp", correct: false},
            { text: "Rainforest", correct: true},
            { text: "Lapland", correct: false},
            { text: "Grainforest", correct: false}
        ],
    },
    {
        question5: "Mikä on lumihiutale englanniksi?",
        answers: [
            { text: "Snowflake", correct: true},
            { text: "Outflake", correct: false},
            { text: "Cornflake", correct: false}
        ],
    },
    {
        question6: "Mikä on avaruusalus englanniksi?",
        answers: [
            { text: "Play station", correct: false},
            { text: "Work station", correct: false},
            { text: "Space station", correct: true},
            { text: "Train station", correct: false}
        ],
    },
    
];

//Tarkista - funktio
function tarkista() {
    let answers = questions.value;

    if (getSelectValue1.answers == true)
    document.getElementById("answer").innerHTML = " Vastauksesi on <h3>oikein!<h3> ";
    else {
        document.getElementById("answer").innerHTML = " Vastauksesi on <h3>väärin!<h3> ";
    }
    
}