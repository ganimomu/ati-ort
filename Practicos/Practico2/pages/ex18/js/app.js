let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", absCalc);
let textField = document.querySelector("#pResult");
let intCounter = 0;
let storage = 0;
let value;

function absCalc() {
  intCounter += 1;
  if (intCounter === 6) {
    btnCalcular.setAttribute("value", "Finalizado");
    btnCalcular.setAttribute("disabled", "disabled");
  }
  if (intCounter <= 6) {
    value = Number(document.querySelector("#txtValues").value);
    document.querySelector("#txtValues").value = "";
    console.log(value);
    if (value < 0) {
      value *= -1;
    }
    storage += value;
  }
  textField.innerHTML = `${storage}`;
}
