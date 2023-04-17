document.querySelector("#btnValueCheck").addEventListener("click", valueCheck);

function valueCheck() {
  let number = Number(document.querySelector("#numFirstVal").value);
  let txtField = document.querySelector("#pExtra");
  console.log(number);
  console.log(number%3)
  console.log(number%7)
  if (number%3 == 0 && number%7 == 0) {
    txtField.innerHTML = `${number} es múltiplo de 7 y 3 simultáneamente.`;
  } else {
    txtField.innerHTML = `${number} no es múltiplo de 7 y 3 en simultaneo`
  }
}
