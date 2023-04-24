let funcButton = document.querySelector("#btnFunctional");
let textField = document.querySelector("#pAux");
funcButton.addEventListener("click", digitQty);

function digitQty() {
  let userNumber = Number(document.querySelector("#txtNumber").value);
  console.log(userNumber);
  textField.innerHTML = ``;

  for (let index = 30; index < 200; index++) {
    if (index % 2 === 0 && index % userNumber === 0) {
      textField.innerHTML += `${index} es múltiplo de ${userNumber} y número par en simultaneo<br>`;
    }
  }
}
