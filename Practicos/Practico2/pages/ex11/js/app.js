document.querySelector("#btnCalc").addEventListener("click", doCalc);
let txtField = document.querySelector("#pExtra");
let number;

function doCalc() {
  let firstNumber = Number(document.querySelector("#numFirstVal").value);
  let secondNumber = Number(document.querySelector("#numSecondVal").value);
  let selectorValue = document.querySelector("#selOp").value;
  console.log(firstNumber)
  console.log(secondNumber)
  if (selectorValue == "S") {
    number = firstNumber + secondNumber;
  } else if (selectorValue == "R") {
    number = firstNumber - secondNumber;
  } else if (selectorValue == "M") {
    number = firstNumber*secondNumber;
  } else if (selectorValue == "D") {
    number = firstNumber/secondNumber;
  }
  console.log(number);
  txtField.innerHTML = `El resultado es ${number}`;
}