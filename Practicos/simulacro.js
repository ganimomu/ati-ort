let funcBtn = document.querySelector("#btnCalc");
let textField = document.querySelector("#pExtra");

funcBtn.addEventListener("click", finalServicePrice);
function finalServicePrice() {
  let mileage = Number(document.querySelector("#txtKm").value);
  let carType = document.querySelector("#slcCarType").value;
  let servicePrice = Number(document.querySelector("#txtPrice").value);

  if (carType === "truck") {
    servicePrice *= 1.1;
  } else if (carType === "hatch") {
    servicePrice *= 1.05;
  }

  let mensaje;
  let serviceMileage = mileage / 10000;
  console.log(serviceMileage);
  console.log(Math.floor(serviceMileage));

  if (
    serviceMileage >= 1 &&
    serviceMileage <= Math.floor(serviceMileage) + 0.05
  ) {
    mensaje = `El service se realizo dentro del plazo estimado`;
  } else {
    mensaje = `El service se hizo fuera del plazo estimado`;
  }

  textField.innerHTML = `El costo final del service es de $${servicePrice}<br>
    ${mensaje}`;

  if (carType === "disabled") {
    textField.innerHTML = `Por favor elija un tipo de vehiculo`;
  }
}
