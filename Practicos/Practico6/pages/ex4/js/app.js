let funcBtn = document.querySelector("#btnFunc");
let endBtn = document.querySelector("#btnEnd");
let textField = document.querySelector("#pAux");

funcBtn.addEventListener("click", exFunction);
endBtn.addEventListener("click", endButton);
let numbers = new Array();

function exFunction() {
  textField.innerHTML = "";
  let cadena = Number(document.querySelector("#txtString").value);
  // for (let index = 0; index < numbers.length; index++) {
  numbers.push(cadena);
  console.log(numbers);
  //}
}

function endButton() {
  let promedio = 0;
  let contador = 0;
  funcBtn.setAttribute("disabled", "disabled");
  document.querySelector("#txtString").setAttribute("disabled", "disabled");
  for (let i = 0; i < numbers.length; i++) {
    promedio += numbers[i];
    ++contador;
    console.log(`Promedio: ${promedio}\nAcumulador: ${contador}`);
  }
  textField.innerHTML = `${promedio / contador}`;
}
