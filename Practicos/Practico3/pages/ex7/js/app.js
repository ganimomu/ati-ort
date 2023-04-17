document.querySelector("#btnIngreso").addEventListener("click", dibujarLineas);

function dibujarLineas() {
  let number = Number(document.querySelector("#txtNumber").value);

  if (number < 2 || number > 50) {
    document.querySelector(
      "#pNumbers"
    ).innerHTML = `Por favor ingrese un número entre 2 y 50`;
    return;
  }

  document.querySelector("#pNumbers").innerHTML = "";

  for (let i = 0; (i < number) & (i < 50); i++) {
    document.querySelector("#pNumbers").innerHTML += "-";
  }
}
