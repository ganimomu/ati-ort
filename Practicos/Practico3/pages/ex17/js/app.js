document.querySelector("#btnIngreso").addEventListener("click", multiplicar);
let textField = document.querySelector("#pNumbers");

function multiplicar() {
  let dividendo = Number(document.querySelector("#txtNumber1").value);
  let divisor = Number(document.querySelector("#txtNumber2").value);
  let cociente = 0;
  let resto = dividendo;

  while (resto >= divisor) {
    ++cociente;
    resto -= divisor;
  }
  textField.innerHTML = `${dividendo} / ${divisor} = ${cociente} con resto ${resto}`;
}
