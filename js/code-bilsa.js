// Eläinten tulosten tyhjennys
document.getElementById('result1').innerHTML = '';
document.getElementById('result2').innerHTML = '';
document.getElementById('result3').innerHTML = '';
document.getElementById('result4').innerHTML = '';
document.getElementById('result5').innerHTML = '';

// Kasvien tulosten tyhjennys
document.getElementById('result6').innerHTML = '';
document.getElementById('result7').innerHTML = '';
document.getElementById('result8').innerHTML = '';
document.getElementById('result9').innerHTML = '';
document.getElementById('result0').innerHTML = '';

// Eläin tehtävien funktiot, joissa tarkistetaan vastaus
// Jos vastaus oikein isolla tai pienellä alkukirjaimella, tulosta Oikein!
// Jos jotain muuta, tulosta Väärin!
function checkEtana() {
  let etana = document.getElementById('etana').value;

  if (etana == 'Etana') {
    document.getElementById('result1').innerHTML = 'Oikein!';
  } else if (etana == 'etana') {
    document.getElementById('result1').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result1').innerHTML = 'Väärin!';
  }
}

function checkKoira() {
  let koira = document.getElementById('koira').value;

  if (koira == 'Koira') {
    document.getElementById('result2').innerHTML = 'Oikein!';
  } else if (koira == 'koira') {
    document.getElementById('result2').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result2').innerHTML = 'Väärin!';
  }
}

function checkKani() {
  let kani = document.getElementById('kani').value;

  if (kani == 'Kani') {
    document.getElementById('result3').innerHTML = 'Oikein!';
  } else if (kani == 'kani') {
    document.getElementById('result3').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result3').innerHTML = 'Väärin!';
  }
}

function checkKirahvi() {
  let kirahvi = document.getElementById('kirahvi').value;

  if (kirahvi == 'Kirahvi') {
    document.getElementById('result4').innerHTML = 'Oikein!';
  } else if (kirahvi == 'kirahvi') {
    document.getElementById('result4').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result4').innerHTML = 'Väärin!';
  }
}

function checkTiikeri() {
  let tiikeri = document.getElementById('tiikeri').value;

  if (tiikeri == 'Tiikeri') {
    document.getElementById('result5').innerHTML = 'Oikein!';
  } else if (tiikeri == 'tiikeri') {
    document.getElementById('result5').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result5').innerHTML = 'Väärin!';
  }
}

// Kasvi tehtävien funktiot, joissa tarkistetaan vastaus
// Jos vastaus oikein isolla tai pienellä alkukirjaimella, tulosta Oikein!
// Jos jotain muuta, tulosta Väärin!
function checkSunflower() {
  let kukka = document.getElementById('sunflower').value;

  if (kukka == 'Auringonkukka') {
    document.getElementById('result6').innerHTML = 'Oikein!';
  } else if (kukka == 'auringonkukka') {
    document.getElementById('result6').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result6').innerHTML = 'Väärin!';
  }
}

function checkMansikka() {
  let mansikka = document.getElementById('mansikka').value;

  if (mansikka == 'Mansikka') {
    document.getElementById('result7').innerHTML = 'Oikein!';
  } else if (mansikka == 'mansikka') {
    document.getElementById('result7').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result7').innerHTML = 'Väärin!';
  }
}

function checkPeruna() {
  let peruna = document.getElementById('peruna').value;

  if (peruna == 'Peruna') {
    document.getElementById('result8').innerHTML = 'Oikein!';
  } else if (peruna == 'peruna') {
    document.getElementById('result8').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result8').innerHTML = 'Väärin!';
  }
}

function checkKaktus() {
  let kaktus = document.getElementById('kaktus').value;

  if (kaktus == 'Kaktus') {
    document.getElementById('result9').innerHTML = 'Oikein!';
  } else if (kaktus == 'kaktus') {
    document.getElementById('result9').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result9').innerHTML = 'Väärin!';
  }
}

function checkPalmu() {
  let palmu = document.getElementById('palmu').value;

  if (palmu == 'Palmu') {
    document.getElementById('result0').innerHTML = 'Oikein!';
  } else if (palmu == 'palmu') {
    document.getElementById('result0').innerHTML = 'Oikein!';
  } else {
    document.getElementById('result0').innerHTML = 'Väärin!';
  }
}