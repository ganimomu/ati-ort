document.querySelector("#btnFunc").addEventListener("click", deptCheck);
let textField = document.querySelector("#pAux");
let mensaje = `Ingrese una matricula correcta. (Formato: ABC-1234)`;

function plateCheck(string) {
  if (string.length !== 8) {
    return mensaje;
  }
  switch (string.charAt(0).toUpperCase()) {
    case "A":
      return `La matricula corresponde al departamento de: <strong>Canelones</strong>`;
      break;
    case "B":
      return `La matricula corresponde al departamento de: <strong>Maldonado</strong>`;
      break;
    case "C":
      return `La matricula corresponde al departamento de: <strong>Rocha</strong>`;
      break;
    case "D":
      return `La matricula corresponde al departamento de: <strong>Treinta y Tres</strong>`;
      break;
    case "E":
      return `La matricula corresponde al departamento de: <strong>Cerro Largo</strong>`;
      break;
    case "F":
      return `La matricula corresponde al departamento de: <strong>Rivera</strong>`;
      break;
    case "G":
      return `La matricula corresponde al departamento de: <strong>Artigas</strong>`;
      break;
    case "H":
      return `La matricula corresponde al departamento de: <strong>Salto</strong>`;
      break;
    case "I":
      return `La matricula corresponde al departamento de: <strong>Paysandú</strong>`;
      break;
    case "J":
      return `La matricula corresponde al departamento de: <strong>Rio Negro</strong>`;
      break;
    case "K":
      return `La matricula corresponde al departamento de: <strong>Soriano</strong>`;
      break;
    case "L":
      return `La matricula corresponde al departamento de: <strong>Colonia</strong>`;
      break;
    case "M":
      return `La matricula corresponde al departamento de: <strong>San José</strong>`;
      break;
    case "N":
      return `La matricula corresponde al departamento de: <strong>Flores</strong>`;
      break;
    case "O":
      return `La matricula corresponde al departamento de: <strong>Florida</strong>`;
      break;
    case "P":
      return `La matricula corresponde al departamento de: <strong>Lavalleja</strong>`;
      break;
    case "Q":
      return `La matricula corresponde al departamento de: <strong>Durazno</strong>`;
      break;
    case "R":
      return `La matricula corresponde al departamento de: <strong>Tacuarembó</strong>`;
      break;
    case "S":
      return `La matricula corresponde al departamento de: <strong>Montevideo</strong>`;
      break;
  }
}

function plateValidation(plate) {
  if (plate.length === 8) {
    for (i = 0; i < plate; i++) {
      if (i >= 0 && i < 3) {
        if (!isNaN(plate.charAt(i))) {
          return mensaje;
        }
      } else if (i > 3) {
        {
          if (isNaN(Number(plate.charAt(i)))) {
            return mensaje;
          }
        }
      }
    }
  }
  return plate;
}

function deptCheck() {
  let plate = document.querySelector("#txtText").value.trim();
  let validatedPlate = plateValidation(plate);
  console.log(validatedPlate);
  textField.innerHTML = `${plateCheck(validatedPlate)}`;
}
