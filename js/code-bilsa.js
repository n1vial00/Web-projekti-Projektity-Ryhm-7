let etana = document.getElementById('etana');

for (let i = 0; i < etana.length; i++) {
  etana[i].onclick = guessEtana;
}

function guessEtana() {
  let etana = document.getElementById('etana');
  if (etana.textContent == 'Etana') {
      document.getElementById('result').innerHTML = 'Oikein!'
  } else {
      document.getElementById('result').innerHTML = 'Väärin!'
  }
}
