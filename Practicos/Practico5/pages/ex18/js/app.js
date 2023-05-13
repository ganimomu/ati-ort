document.querySelector("#btnFunc").addEventListener("click", deptCheck);
let textField = document.querySelector("#pAux");
let mensaje = `La matricula ingresada no es valida. Por favor verifique los datos ingresados.`;

function plateCheck(string) {
  if (string.length !== 7) {
    return mensaje;
  }
  switch (string.charAt(0)) {
    case "A":
      return `La matricula corresponde al departamento de: <strong>Canelones</strong>`;
    case "B":
      let verificando = 0;
      for (i = 1; i < string.length; i++) {
        verificando += Number(string.charAt(i));
      }
      if (isNaN(verificando)) {
        return mensaje;
      } else {
        return `La matricula corresponde al departamento de: <strong>Maldonado</strong>`;
      }
    case "C":
      return `La matricula corresponde al departamento de: <strong>Rocha</strong>`;
    case "D":
      return `La matricula corresponde al departamento de: <strong>Treinta y Tres</strong>`;
    case "E":
      return `La matricula corresponde al departamento de: <strong>Cerro Largo</strong>`;
    case "F":
      return `La matricula corresponde al departamento de: <strong>Rivera</strong>`;
    case "G":
      return `La matricula corresponde al departamento de: <strong>Artigas</strong>`;
    case "H":
      return `La matricula corresponde al departamento de: <strong>Salto</strong>`;
    case "I":
      return `La matricula corresponde al departamento de: <strong>Paysandú</strong>`;
    case "J":
      return `La matricula corresponde al departamento de: <strong>Rio Negro</strong>`;
    case "K":
      return `La matricula corresponde al departamento de: <strong>Soriano</strong>`;
    case "L":
      return `La matricula corresponde al departamento de: <strong>Colonia</strong>`;
    case "M":
      return `La matricula corresponde al departamento de: <strong>San José</strong>`;
    case "N":
      return `La matricula corresponde al departamento de: <strong>Flores</strong>`;
    case "O":
      return `La matricula corresponde al departamento de: <strong>Florida</strong>`;
    case "P":
      return `La matricula corresponde al departamento de: <strong>Lavalleja</strong>`;
    case "Q":
      return `La matricula corresponde al departamento de: <strong>Durazno</strong>`;
    case "R":
      return `La matricula corresponde al departamento de: <strong>Tacuarembó</strong>`;
    case "S":
      return `La matricula corresponde al departamento de: <strong>Montevideo</strong>`;
  }
}

function plateValidation(plate) {
  if (plate.length === 7) {
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
  let spacers = "-., ";
  let plate = document.querySelector("#txtText").value.trim().toUpperCase();
  for (i = 0; i < spacers.length; i++) {
    plate = charReplacer(plate, spacers.charAt(i), "");
  }
  let validatedPlate = plateValidation(plate);
  console.log(validatedPlate);
  textField.innerHTML = `${plateCheck(validatedPlate)}`;
}
