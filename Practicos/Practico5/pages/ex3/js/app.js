document.querySelector("#btnFunc").addEventListener("click", charRepInString);
let contador = 0;

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

function charRepInString() {
  contador = 0;
  let text = document.querySelector("#txtText").value;
  vowelCounter(text);
  document.querySelector(
    "#pAux"
  ).innerHTML = `La cantidad de vocales en el texto ingresado es: ${contador}`;
}
