// FUNCIÓN PEDIDA POR EL EJERCICIO

function esBisiesto(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// CÓDIGO PARA FACILITAR CONTROL

let ourButton = document.querySelector("#btnFunc");
let textField = document.querySelector("#pAux");

ourButton.addEventListener("click", showNumber);

function showNumber() {
  let number1 = Number(document.querySelector("#txtNumber1").value);

  textField.innerHTML = esBisiesto(number1) + "<br>";
}
