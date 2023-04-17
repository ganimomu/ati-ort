document.querySelector("#btnIngreso").addEventListener("click", multiplicar);

function multiplicar() {
  let number1 = Number(document.querySelector("#txtNumber1").value);
  let number2 = Number(document.querySelector("#txtNumber2").value);
  let number3 = Number(document.querySelector("#txtNumber3").value);
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

  for (let i = 1; i <= compValueMax; i++) {
    let resto = i % 3;
    console.log(`${i}/3 me da resto=${resto}`);
    console.log(`Entre al for ${i}`);
    if (resto === 0 && i > compValueMin && i < compValueMax) {
      console.log(`Entre al if ${i}`);
      document.querySelector(
        "#pNumbers"
      ).innerHTML += `${i} es múltiplo de ${number3} comprendido entre ${number1} y ${number2} <br>`;
    }
  }
}
