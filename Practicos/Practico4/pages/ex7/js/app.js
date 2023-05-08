document.querySelector("#btnFunc").addEventListener("click", appFunction);
document.querySelector("#slcUnit").addEventListener("click", buttonName);

function fahrenheitToUnit(temp, unit) {
  switch (unit) {
    case "C":
      return (temp - 32) / 1.8;
    case "K":
      return (temp + 459.67) / 1.8;
    case "Ra":
      return temp + 459.67;
    case "Re":
      return (temp - 32) / 2.25;
    default:
      return "Parametros invalidos";
  }
}

function appFunction() {
  let temp = Number(document.querySelector("#txtTemp").value);
  let unit = document.querySelector("#slcUnit").value;
  document.querySelector(
    "#pAux"
  ).innerHTML = `La temperatura es: ${fahrenheitToUnit(temp, unit)} ${
    unit === "C" ? "°C" : unit
  }`;
}


function buttonName() {
  let unit = document.querySelector("#slcUnit").value;
  document.querySelector("#btnFunc").innerHTML = `Convertir a ${unit}`;
}
