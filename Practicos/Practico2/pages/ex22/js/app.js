document.querySelector("#btnCalcular").addEventListener("click", absCalc);
let textField = document.querySelector("#pExtra");

function absCalc() {
  let price = Number(document.querySelector("#txtPrice").value);
  let paymentMethod = document.querySelector("#slcPaymentMethod").value;
  console.log(price);
  console.log(paymentMethod);

  if (paymentMethod === "card" && price < 10000) {
    price = (price * 0.96).toFixed(2); //no redondea
    textField.innerHTML = `El costo final es de $${price}`;
  } else {
    textField.innerHTML = `El costo final es de $${price}`;
  }
  if (paymentMethod === "disabled") {
    textField.innerHTML = `Por favor seleccione un método de pago`;
  }
}
