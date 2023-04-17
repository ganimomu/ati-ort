let funcButton = document.querySelector("#btnCalcular");
let textField = document.querySelector("#pInformation");
let nightlyCost = 40;
funcButton.addEventListener("click", reservedTime);

function reservedTime() {
  let requestedNights = Number(document.querySelector("#txtNight").value);
  let paymentMethod = document.querySelector("#slcPayment").value;
  let finalStay = requestedNights;
  let nightPromo = `No aplica promoción por reserva`;
  let paymentPromo = `No aplica promoción por método de pago`;

  if (paymentMethod === "disabled" || requestedNights <= 0) {
    textField.innerHTML = `Por favor complete todos los campos`;
    return 0;
  }
  if (requestedNights >= 7) {
    finalStay += 2;
    nightPromo = `Aplica promoción de reserva por 7 noches o más`;
  } else if (requestedNights >= 3) {
    finalStay += 1;
    nightPromo = `Aplica promoción de reserva por 3 noches o más`;
  }
  let stayCost = requestedNights * nightlyCost;

  if (paymentMethod === "card" && requestedNights >= 2) {
    ++finalStay;
    paymentPromo = `Aplica promoción por pagar con tarjeta de crédito`;
  }

  textField.innerHTML = `En base a las noches pedidas de alojamiento (${requestedNights}), usted podra alojarse un total de ${finalStay} noches con un costo final de ${stayCost}<br>
  ${nightPromo}<br>${paymentPromo}`;
}
