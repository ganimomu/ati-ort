document.querySelector("#btnResult").addEventListener("click", dptCode);
let textField = document.querySelector("#pExtra");

function dptCode() {
  let selectionCode = document.querySelector("#selDptCode").value;
  console.log(selectionCode);
  switch (selectionCode) {
    case "A":
      textField.innerHTML = `El código corresponde al departamento de <strong>Canelones</strong>`;
      break;
    case "B":
      textField.innerHTML = `El código corresponde al departamento de <strong>Maldonado</strong>`;
      break;
    case "C":
      textField.innerHTML = `El código corresponde al departamento de <strong>Rocha</strong>`;
      break;
    case "D":
      textField.innerHTML = `El código corresponde al departamento de <strong>Treinta y Tres</strong>`;
      break;
    case "E":
      textField.innerHTML = `El código corresponde al departamento de <strong>Cerro Largo</strong>`;
      break;
    case "F":
      textField.innerHTML = `El código corresponde al departamento de <strong>Rivera</strong>`;
      break;
    case "G":
      textField.innerHTML = `El código corresponde al departamento de <strong>Artigas</strong>`;
      break;
    case "H":
      textField.innerHTML = `El código corresponde al departamento de <strong>Salto</strong>`;
      break;
    case "I":
      textField.innerHTML = `El código corresponde al departamento de <strong>Paysandú</strong>`;
      break;
    case "J":
      textField.innerHTML = `El código corresponde al departamento de <strong>Rio Negro</strong>`;
      break;
    case "K":
      textField.innerHTML = `El código corresponde al departamento de <strong>Soriano</strong>`;
      break;
    case "L":
      textField.innerHTML = `El código corresponde al departamento de <strong>Colonia</strong>`;
      break;
    case "M":
      textField.innerHTML = `El código corresponde al departamento de <strong>San José</strong>`;
      break;
    case "N":
      textField.innerHTML = `El código corresponde al departamento de <strong>Flores</strong>`;
      break;
    case "O":
      textField.innerHTML = `El código corresponde al departamento de <strong>Florida</strong>`;
      break;
    case "P":
      textField.innerHTML = `El código corresponde al departamento de <strong>Lavalleja</strong>`;
      break;
    case "Q":
      textField.innerHTML = `El código corresponde al departamento de <strong>Durazno</strong>`;
      break;
    case "R":
      textField.innerHTML = `El código corresponde al departamento de <strong>Tacuarembó</strong>`;
      break;
    case "S":
      textField.innerHTML = `El código corresponde al departamento de <strong>Montevideo</strong>`;
      break;

    default:
      textField.innerHTML =
        "No se ha seleccionado ningún código de departamento";
      break;
  }
}
