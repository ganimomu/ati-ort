document.querySelector("#btnTest").addEventListener("click", showExP);
document.querySelector("#numFirst").value = 5;
document.querySelector("#numSecond").value = 3;
document.querySelector("#numThird").value = 2;
showExP();
alert(
  "Los valores asignados de antemano son a modo de ejemplo. El botón es funcional a modo de probar más rápido con otros valores"
);

function showExP() {
  let firstValue = Number(document.querySelector("#numFirst").value);
  let secondValue = Number(document.querySelector("#numSecond").value);
  let thirdValue = Number(document.querySelector("#numThird").value);
  console.log(`Primer número: ${firstValue}
  Segundo número: ${secondValue}
  Tercer número: ${thirdValue}`);
  if (firstValue > secondValue && firstValue > thirdValue) {
    document.querySelector(
      "#parrafo"
    ).innerHTML = `${firstValue} es el mayor de los 3 números`;
  } else {
    document.querySelector(
      "#parrafo"
    ).innerHTML = `${firstValue} no es el mayor de los 3 números`;
  }
}
