let funcButton = document.querySelector("#btnCalcular");
let textField = document.querySelector("#pExtra");
funcButton.addEventListener("click", calcular);

function calcular() {
  let km = Number(document.querySelector("#numKm").value);
  let time = Number(document.querySelector("#numTime").value);
  let finalSpeed = km / (time / 60);
  if (finalSpeed < 250) {
    textField.innerHTML = `La altura máxima permitida de vuelo para un avión desplazandosé a ${finalSpeed} es de 5000mts`;
  } else if (finalSpeed <= 800) {
    textField.innerHTML = `La altura máxima permitida de vuelo para un avión desplazandosé a ${finalSpeed} es de 9000mts`;
  } else {
    textField.innerHTML = `La altura máxima permitida de vuelo para un avión desplazandosé a ${finalSpeed} es de 12000mts`;
  }
}
