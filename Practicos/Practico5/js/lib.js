// Libreria armada en función a los códigos trabajados en el momento.
// Códigos en ejercicios son primeras versiones de los presentes en la libreria

function vowelCounter(string) {
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
}

function charCounter(string, char) {
  for (let index = 0; index < string.length; index++) {
    if (string.charAt(index) === char) {
      ++contador;
    }
  }
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
}
