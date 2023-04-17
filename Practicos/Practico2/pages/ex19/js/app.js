let btnFuncional = document.querySelector("#btnCalcular");
btnFuncional.addEventListener("click", absCalc);
let textField = document.querySelector("#pAdicional");
let clickCounter = 0;
let multCounter = 0;
let overTwenty = 0;
let simultaneousCond = 0;

function absCalc() {
  let multiple;
  let greaterThanTwenty;
  ++clickCounter;
  if (clickCounter === 5) {
    btnFuncional.setAttribute("disabled", "disabled");
  }

  if (clickCounter <= 5) {
    document.querySelector("#txtValues").focus();
    let value = Number(document.querySelector("#txtValues").value);
    console.log(`Valor actual: ${value}`);
    if (value % 5 === 0) {
      ++multCounter;
      multiple = true;
    }
    if (value > 20) {
      ++overTwenty;
      greaterThanTwenty = true;
    }
    if (multiple && greaterThanTwenty) {
      ++simultaneousCond;
    }
    textField.innerHTML = `Se han ingresado ${clickCounter} números<br>Entre los números ingresados, ${multCounter} han sido múltiplos de 5, ${overTwenty} fueron mayores que 20 y ${simultaneousCond} coincidieron en ambas condiciones`;
  }
}
