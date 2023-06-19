// Libreria armada en función a los códigos trabajados en el momento.
// Códigos en ejercicios son primeras versiones de los presentes en la libreria

/* function charReplacer(string, char, replacingChar = "") {
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    if (string.toLowerCase().charAt(index) === char.toLowerCase()) {
      newString += replacingChar;
    } else {
      newString += string.charAt(index);
    }
  }
  return newString;
}

function charCounter(string, char) {
  let contador = 0;
  for (let index = 0; index < string.length; index++) {
    if (string.charAt(index) === char) {
      ++contador;
    }
  }
  return contador;
}

function wordCounter(string) {
  let contador = 0;
  if (string && string !== " ") {
    ++contador;
  }
  for (i = 0; i < string.length; i++) {
    if (
      string.charAt(i) === " " &&
      string.charAt(i + 1) !== "" &&
      string.charAt(i + 1) !== " "
    ) {
      contador++;
    }
  }
  return contador;
}*/

function verificarFormatoContrasena(contra) {
  let minuscula = false;
  let mayuscula = false;
  let numero = false;
  if (contra.length < 5) {
    return false;
  } else {
    for (let i = 0; i < contra.length; i++) {
      let letra = contra.charAt(i);
      if (letra === letra.toUpperCase() && isNaN(letra)) {
        mayuscula = true;
      }
      if (letra === letra.toLowerCase() && isNaN(letra)) {
        minuscula = true;
      }
      if (!isNaN(letra)) {
        numero = true;
      }
    }
  }
  return minuscula && mayuscula && numero;
}


function validarCamposCompletados(...campos) {
  for (let i = 0; i < campos.length; i++) {
    if (campos[i] === "") {
      return false;
    }
  }
  return true;
}




/*function validarCamposCompletados(...campo) { 
  let toValidate = [...campo] // [nombreUsuario, nombre, contraseña]
  let check = true
  for (let i = 0; i < toValidate.length; i++) {
    let campo = toValidate[i]
    if (campo === "") {
      check = false;
      break;
    }
  }
  return check
}*/