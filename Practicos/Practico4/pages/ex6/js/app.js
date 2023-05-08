document.querySelector("#btnFunc").addEventListener("click", appFunction);

function celsiusToF(temp) {
  return (temp * 9) / 5 + 32;
}

function appFunction() {
  let temp = Number(document.querySelector("#txtTemp").value);
  document.querySelector("#pAux").innerHTML = `La temperatura es: ${celsiusToF(
    temp
  )} F`;
}
