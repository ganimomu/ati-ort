let btnFuncional = document
  .querySelector("#btnCalcular")
  .addEventListener("click", agregarNotas);

let textField = document.querySelector("#pExtra");
let notaMinimo;
let notaMaxima;
let cantidadMuyBuenaNota = 0;
let cantidadAprobados = 0;
let cantidadReprobados = 0;
let cantidadAlumnos = 0;
let sumaDeNotas = 0;
let promedio;

function agregarNotas() {
  let notaIngresada = Number(document.querySelector("#txtNotas").value);
  if (typeof notaMaxima === "number") {
    if (notaIngresada > notaMaxima) {
      notaMaxima = notaIngresada;
    }
  } else {
    notaMaxima = notaIngresada;
  }

  if (typeof notaMinimo === "number") {
    if (notaIngresada < notaMinimo) {
      notaMinimo = notaIngresada;
    }
  } else {
    notaMinimo = notaIngresada;
  }

  if (notaIngresada >= 70) {
    ++cantidadAprobados;
    if (notaIngresada > 90) {
      ++cantidadMuyBuenaNota;
    }
  } else {
    ++cantidadReprobados;
  }

  ++cantidadAlumnos;
  sumaDeNotas += notaIngresada;

  promedio = sumaDeNotas / cantidadAlumnos;
  textField.innerHTML = `Salvaron: ${cantidadAprobados}<br>
  Muy buena nota: ${cantidadMuyBuenaNota}<br>
  Reprobados: ${cantidadReprobados}<br>
  Promedio: ${promedio}<br>
  Nota máxima = ${notaMaxima}<br>
  Nota minima = ${notaMinimo}`;
}
