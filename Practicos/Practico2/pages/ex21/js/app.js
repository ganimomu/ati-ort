let funcButton = document.querySelector("#btnCalcular");
funcButton.addEventListener("click", installmentsCalc);

let textField = document.querySelector("#pExtra");

function installmentsCalc() {
  let workerEarnings = Number(document.querySelector("#txtEarnings").value);
  console.log(workerEarnings);
  let housePrice = Number(document.querySelector("#txtHousePrice").value);
  console.log(housePrice);
  let deadline;

  if (workerEarnings < 20000) {
    deadline = 84;
    let firstPayment = housePrice * 0.15;
    console.log(firstPayment);
    let installments = Math.round((housePrice * 0.85) / deadline);
    console.log(installments);
    textField.innerHTML = `Por concepto de primer pago, el trabajador debe pagar $${firstPayment}, quedando en un plazo a pagar por 84 meses en cuotas de $${installments}`;
  } else {
    deadline = 12;
    let firstPayment = housePrice * 0.3;
    console.log(firstPayment);
    let installments = Math.round((housePrice * 0.7) / deadline);
    console.log(installments);
    textField.innerHTML = `Por concepto de primer pago, el trabajador debe pagar $${firstPayment}, quedando en un plazo a pagar por 12 meses en cuotas de $${installments}`;
  }
}
