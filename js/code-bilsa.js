let buttons = document.getElementsByClassName("btn btn-success");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = guessResult;
}

function guessResult() {
    let incorrect = document.getElementById('incorrect');
    let etana = incorrect.textContent
    console.log(etana);
}