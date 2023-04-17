document.querySelector("#btnIngreso").addEventListener("click", multiplicar);

function multiplicar() {
  let number1 = Number(document.querySelector("#txtNumber1").value);
  let number2 = Number(document.querySelector("#txtNumber2").value);
  let resultado = 0;

  document.querySelector("#pNumbers").innerHTML = "";

  if (number1 < number2) {
    for (let i = 1; i <= number2; i++) {
      resultado += number1;
      document.querySelector(
        "#pNumbers"
      ).innerHTML += `Para i=${i} el resultado de ${number1} * ${i} es ${resultado} <br>`;
    }
  } else {
    document.querySelector("#pNumbers").innerHTML = "foobar";
  }
}
