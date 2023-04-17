document.querySelector("#btnValueCheck").addEventListener("click", valueCheck);

function valueCheck() {
  let firstNumber = Number(document.querySelector("#numFirstVal").value);
  let secondNumber = Number(document.querySelector("#numSecondVal").value);
  let txtField = document.querySelector("#pExtra");
  console.log(firstNumber);
  console.log(secondNumber);
  console.log();
  if (secondNumber % firstNumber == 0) {
    txtField.innerHTML = `${firstNumber} es múltiplo de ${secondNumber}.`;
  } else {
    txtField.innerHTML = `${firstNumber} no es múltiplo de ${secondNumber}`;
  }
}
