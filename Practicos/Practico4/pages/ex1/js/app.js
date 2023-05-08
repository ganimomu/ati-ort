// FUNCIÓN PEDIDA POR EL EJERCICIO

function getEven(n1, n2) {
  let contador = 0;
  console.log(n1 + " " + n2);
  if (!isNaN(n1) && !isNaN(n2)) {
    //verificación de clase
    for (let i = n1; i <= n2; i++) {
      if (i % 2 === 0) {
        ++contador;
      }
    }
  } else {
    contador = -1;
  }
  return contador;
}

// CÓDIGO PARA FACILITAR CONTROL

let ourButton = document.querySelector("#btnFunc");
let textField = document.querySelector("#pAux");

ourButton.addEventListener("click", showNumber);

function showNumber() {
  let number1 = Number(document.querySelector("#txtNumber1").value);
  let number2 = Number(document.querySelector("#txtNumber2").value);

  textField.innerHTML =
    getEven(Math.min(number1, number2), Math.max(number1, number2)) + "<br>";
}
