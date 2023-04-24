let funcButton = document.querySelector("#btnFunctional");
let textField = document.querySelector("#pAux");
funcButton.addEventListener("click", digitQty);

function digitQty() {
  let userNumber = Number(document.querySelector("#txtNumber").value);
  console.log(userNumber);
  textField.innerHTML = ``;

  if (userNumber <= 2000) {
    textField.innerHTML = `Ingrese número mayor a 2000`;
    return;
  }

  /*  for (let i = 0; user < 1; i -= resultado) {
    console.log(resultado);
    resultado = resultado / 10;
    console.log(resultado);
    ++digits;
  } */

  while (userNumber > 100) {
    textField.innerHTML += `${userNumber} / 20 = `;
    userNumber /= 20;
    textField.innerHTML += `${userNumber}<br>`;
  }
}
