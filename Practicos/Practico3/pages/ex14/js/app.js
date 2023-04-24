let funcButton = document.querySelector("#btnFunctional");
let textField = document.querySelector("#pAux");
funcButton.addEventListener("click", digitQty);

function digitQty() {
  let userNumber = Number(document.querySelector("#txtNumber").value);
  console.log(userNumber);
  let digits = 0;
  textField.innerHTML = `La cantidad de digitos de ${userNumber} es: `;

  while (userNumber > 1) {
    userNumber /= 10;
    ++digits;
  }

  textField.innerHTML += `${digits}`;
}
