// FUNCIÓN PEDIDA POR EL EJERCICIO

function esMayor(edad, tope) {
  return edad > tope;
}
/* Versión redundante
function esMayor(edad, tope) {
  if (edad > tope) {
    return true;
  } else {
    return false;
  }
}
 */
// CÓDIGO PARA FACILITAR CONTROL

let ourButton = document.querySelector("#btnFunc");
let textField = document.querySelector("#pAux");

ourButton.addEventListener("click", showNumber);

function showNumber() {
  let number1 = Number(document.querySelector("#txtNumber1").value);
  let number2 = Number(document.querySelector("#txtNumber2").value);
  if (esMayor(number1, number2)) {
    textField.innerHTML = "Es mayor";
  } else {
    textField.innerHTML = "No es mayor";
  }

  //  textField.innerHTML = esMayor(number1, number2) + "<br>";
}
