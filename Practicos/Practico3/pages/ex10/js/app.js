document.querySelector("#btnIngreso").addEventListener("click", multiplicar);

function multiplicar() {
  let number1 = Number(document.querySelector("#txtNumber1").value);
  let number2 = Number(document.querySelector("#txtNumber2").value);
  let resultado = 1;

  document.querySelector("#pNumbers").innerHTML = "";

  if (number1 < number2) {
    for (let i = number1; i <= number2; i++) {
      document.querySelector("#pNumbers").innerHTML += `${resultado}*${i} = `;
      resultado = resultado * i;
      document.querySelector("#pNumbers").innerHTML += `${resultado} <br>`;
    }
  } else {
    document.querySelector("#pNumbers").innerHTML =
      "El primer número debe ser mayor al segundo";
  }
}
