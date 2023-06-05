// Libreria armada en función a los códigos trabajados en el momento.
// Códigos en ejercicios son primeras versiones de los presentes en la libreria

function vowelCounter(string) {
  let contador = 0;
  for (let index = 0; index < string.length; index++) {
    if (
      string.charAt(index).toLowerCase() === "a" ||
      string.charAt(index).toLowerCase() === "e" ||
      string.charAt(index).toLowerCase() === "i" ||
      string.charAt(index).toLowerCase() === "o" ||
      string.charAt(index).toLowerCase() === "u"
    ) {
      ++contador;
    }
  }
  return contador;
}
function charReplacer(string, char, replacingChar = "*") {
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

function invertText(texto) {
  let invertedText = "";
  for (let index = texto.length - 1; index >= 0; index--) {
    invertedText += texto.charAt(index);
  }
  return invertedText;
}

function isGreater(input, comparison) {
  return input > comparison;
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
}

function checkExistence(array, prop, value) {
  let exists = false;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element[prop] === value) {
      exists = true;
      break;
    }
  }
  return exists;
}

function getElement(array, prop, value) {
  let obj = null;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element[prop] === value) {
      obj = element;
      break;
    }
  }
  return obj;
}

function addToArray(array, ...prop) {
  array.push(prop);
}
