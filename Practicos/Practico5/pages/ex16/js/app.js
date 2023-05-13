document.querySelector("#btnFunc").addEventListener("click", idChecker);
let textField = document.querySelector("#pAux");

function idValidator(civId) {
  let ci = civId;
  if (ci.length === 7) {
    ci = "0" + ci;
  }
  let modernValue = "2987634";
  let acumulador = 0;
  let verNumber = Number(ci.charAt(ci.length - 1));
  console.log(verNumber);
  for (i = 0; i < ci.length - 1; i++) {
    acumulador += Number(ci.charAt(i)) * Number(modernValue.charAt(i));
  }
  //let verificando = verNumber + 10 - (acumulador % 10);
  let verificando;
  if (acumulador % 10 === 0) {
    verificando = 0;
  } else {
    verificando = 10 - (acumulador % 10);
  }
  console.log(verificando);
  if (verificando === verNumber) {
    return `CI Valida`;
  } else {
    return `CI no valida`;
  }
}

function idChecker() {
  let spacers = "-., ";
  let identification = document.querySelector("#txtText").value;
  for (i = 0; i < spacers.length; i++) {
    identification = charReplacer(identification, spacers.charAt(i), "");
  }
  textField.innerHTML = `${idValidator(identification)}`;

  //textField.innerHTML = `${plateCheck(validatedPlate)}`;
}
