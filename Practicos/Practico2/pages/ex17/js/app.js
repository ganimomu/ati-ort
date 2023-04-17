document.querySelector("#btnShow").addEventListener("click", isInRange);

function isInRange() {
  let firstValue = Number(document.querySelector("#numValue").value);
  console.log(firstValue);
  if (firstValue < 0 || firstValue > 10) {
    document.querySelector(
      "#parrafo"
    ).innerHTML = `${firstValue} esta fuera de rango`;
  }
}
