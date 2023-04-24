document.querySelector("#btnIngreso").addEventListener("click", multiplicar);
let textField = document.querySelector("#pNumbers");

function multiplicar() {
  let number1 = Number(document.querySelector("#txtNumber1").value);
  let number2 = Number(document.querySelector("#txtNumber2").value);
  let minNumber = Math.min(number1, number2);
  let maxNumber = Math.max(number1, number2);
  let resultado = 0;
  let resto = 0;

  document.querySelector("#pNumbers").innerHTML = "";
  for (let i = number1; i <= number2; i++) {
    resto = i;

    if (resto % 4 === 0 && resto % 6 === 0) {
      resultado = i;
      break;
    }
  }
  textField.innerHTML = `El primer número entre ${minNumber} y ${maxNumber} que es múltiplo de 4 y 6 en simultaneo es: ${resultado}`;
}
