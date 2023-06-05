let funcBtn = document.querySelector("#btnFunc");
let endBtn = document.querySelector("#btnEnd");
let textField = document.querySelector("#pAux");

funcBtn.addEventListener("click", exFunction);
endBtn.addEventListener("click", endButton);
let numbers = [2, 4, 5, 8, 23];
textField.innerHTML = `Actualmente el array esta precargado con el siguiente arreglo [${numbers}]<br>Para agregar más valores ingrese un número en el campo y use el botón correspondiente`;

function exFunction() {
  let cadena = Number(document.querySelector("#txtString").value);
  numbers.push(cadena);
  textField.innerHTML = `Actualmente el array esta cargado con el siguiente arreglo [${numbers}]<br>Para agregar más valores ingrese un número en el campo y use el botón correspondiente`;
}

function greaterThanTwenty(array) {
  let verified = new Array();
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 20) {
      verified.push(array[i]);
    }
  }
  return verified;
}

function endButton() {
  funcBtn.setAttribute("disabled", "disabled");
  document.querySelector("#txtString").setAttribute("disabled", "disabled");
  textField.innerHTML = `[${greaterThanTwenty(numbers)}]`;
}
