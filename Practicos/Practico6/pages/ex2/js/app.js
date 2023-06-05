let funcBtn = document.querySelector("#btnFunc");
let textField = document.querySelector("#pAux");

funcBtn.addEventListener("click", exFunction);
let numbers = new Array();
let maxNumber = 0;

function exFunction() {
  let cadena = Number(document.querySelector("#txtString").value);
  document.querySelector("#txtString").value = "";
  document.querySelector("#txtString").focus();
  // for (let index = 0; index < numbers.length; index++) {
  numbers.push(cadena);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  //}
  textField.innerHTML = `${maxNumber}`;
  textField.innerHTML += `<br>For reference, array numbers = [${numbers}]`;
}
