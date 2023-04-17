let btnFuncional = document
  .querySelector("#btnCalcular")
  .addEventListener("click", addWage);

let textField = document.querySelector("#pExtra");
let minimumWage;
let workers = 0;
let totalWages = 0;

function addWage() {
  let wageValue = Number(document.querySelector("#txtWage").value);

  if (typeof minimumWage === "number") {
    if (wageValue < minimumWage) {
      minimumWage = wageValue;
    }
  } else {
    minimumWage = wageValue;
  }

  ++workers;
  totalWages += wageValue;

  textField.innerHTML = `Cantidad de empleados a pagarn: ${workers}<br>
  Sueldo más bajo = $${minimumWage} <br>
  Suma total de sueldos: $${totalWages}`;
}
