function guessEtana() {
  let etana = document.getElementById('etana');
  let text = etana.textContent || etana.innerHTML
  alert(text)

  if (text === 'Etana') {
      console.log('Oikein');
  } else {
      console.log('Väärin');
  }
}
