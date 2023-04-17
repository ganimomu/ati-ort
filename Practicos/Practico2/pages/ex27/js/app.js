let funcButton = document.querySelector("#btnPlay");
let guessButton = document.querySelector("#btnGuess");
let textField = document.querySelector("#pHints");
let playerTurn = document.querySelector("#lblNumber");
let toGuessNumber = Number.NEGATIVE_INFINITY;
let attemptCounter;
funcButton.addEventListener("click", startGame);
guessButton.addEventListener("click", guessGame);

function guessGame() {
  let userNumber = Number(document.querySelector("#txtSecondPlayer").value);
  ++attemptCounter;
  textField.innerHTML = `Hasta ahora se han realizado ${attemptCounter} intentos de adivinar.`;
  let numberDifference = Math.abs(toGuessNumber - userNumber);
  if (userNumber === toGuessNumber) {
    guessButton.setAttribute("disabled", "disabled");
    textField.innerHTML += `<br>Has adivinado el número!`;
    document
      .querySelector("#txtSecondPlayer")
      .setAttribute("disabled", "disabled");
  } else if (numberDifference > 15) {
    textField.innerHTML += `<br>Estas lejos!`;
  } else if (numberDifference >= 10) {
    textField.innerHTML += `<br>Te estás acercando!`;
  } else if (numberDifference >= 5) {
    textField.innerHTML += `<br>Cada vez más cerca!`;
  } else if (numberDifference >= 1) {
    textField.innerHTML += `<br>Muy pero muy cerca!`;
  }
}

function startGame() {
  let userNumber = Number(document.querySelector("#txtNumber").value);
  if (userNumber < 1 || userNumber > 100) {
    textField.innerHTML = `Por favor ingrese un número entre 1 y 100`;
    return 0;
  }
  toGuessNumber = userNumber;
  document.querySelector("#divStart").setAttribute("hidden", "hidden");
  document.querySelector("#divGame").removeAttribute("hidden");
  attemptCounter = 0;
}
