// JavaScript-tiedosto enkku.html sivulle
// Luonut Toni Jukkola
// TIK21SP
// Projektiryhmä 7


//Tarkista - funktio
function tarkista() {
    alert("Good job kiddo!");
}
// Funktio jolla saadaan vastausvaihtoehto klikkauksella napin otsikoksi
function getSelectValue() {
    let selectedValue = document.getElementsByClassName("dropdown-menu").value;
    console.log(selectedValue);
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
    
]

