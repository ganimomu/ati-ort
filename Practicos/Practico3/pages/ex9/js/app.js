document.querySelector("#btnIngreso").addEventListener("click", multiplicar);

function multiplicar() {
  let number1 = Number(document.querySelector("#txtNumber1").value);
  let number2 = Number(document.querySelector("#txtNumber2").value);
  let resultado = 0;

  document.querySelector("#pNumbers").innerHTML = "";

  for (let i = 0; i < number2; i++) {
    resultado += number1;
    document.querySelector(
      "#pNumbers"
    ).innerHTML = `Resultado: ${resultado} <br>`;
  }
}
