document.querySelector("#btnValueCheck").addEventListener("click", valueCheck);

function valueCheck() {
  let firstNumber = Number(document.querySelector("#numFirstVal").value);
  let secondNumber = Number(document.querySelector("#numSecondVal").value);
  let txtField = document.querySelector("#pExtra");
  let number;
  if (firstNumber > secondNumber) {
    number = firstNumber - secondNumber;
  } else {
    number = secondNumber - firstNumber;
  }
  console.log(number);
  txtField.innerHTML = `El resultado es ${number}`;
}
