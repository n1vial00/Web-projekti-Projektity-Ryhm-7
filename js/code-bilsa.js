document.getElementById('koira').addEventListener('click', guessEtana)
document.getElementById('etana').addEventListener('click', guessEtana)
document.getElementById('kirahvi').addEventListener('click', guessEtana)
document.getElementById('karpanen').addEventListener('click', guessEtana)

let etana = document.getElementById('etana')
let koira = document.getElementById('koira')
let kirahvi = document.getElementById('kirahvi')
let karpanen = document.getElementById('karpanen')

function guessEtana() {
  if (etana) {
    console.log('oikein');
  } else if(koira){
    console.log('väärin');
  }
}