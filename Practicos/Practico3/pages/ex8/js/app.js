document.querySelector("#btnIngreso").addEventListener("click", dibujarLineas);

function dibujarLineas() {
  let number1 = Number(document.querySelector("#txtNumber1").value);
  let number2 = Number(document.querySelector("#txtNumber2").value);
  let compValueMax;
  let compValueMin;
  if (number1 > number2) {
    compValueMax = number1;
    compValueMin = number2;
  } else {
    compValueMax = number2;
    compValueMin = number1;
  }

  document.querySelector("#pNumbers").innerHTML = "";

  for (let i = compValueMin; i <= compValueMax; i++) {
    document.querySelector("#pNumbers").innerHTML += `${i} <br>`;
  }
}
