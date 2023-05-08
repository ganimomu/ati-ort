document.querySelector("#btnFunc").addEventListener("click", appFunction);

function calcularAreaRectangulo(b, h) {
  if (!isNaN(b) && !isNaN(h)) {
    if (b < 0 || h < 0) {
      return -1;
    }
    return b * h;
  }
}

function appFunction() {
  let base = Number(document.querySelector("#txtBase").value);
  let height = Number(document.querySelector("#txtHeight").value);
  document.querySelector(
    "#pAux"
  ).innerHTML = `El área del rectangulo es: ${calcularAreaRectangulo(
    base,
    height
  )}`;
}
