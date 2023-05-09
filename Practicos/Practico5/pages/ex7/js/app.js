document.querySelector("#btnFunc").addEventListener("click", wordCount);
let contador = 0;

function wordCounter(string) {
  if (string && string !== " ") {
    ++contador;
  }
  for (i = 0; i < string.length; i++) {
    if (
      string.charAt(i) === " " &&
      string.charAt(i + 1) !== " " &&
      string.charAt(i + 1) !== ""
    ) {
      contador++;
    }
  }
}

function wordCount() {
  contador = 0;
  let string = document.querySelector("#txtText").value;
  wordCounter(string);
  document.querySelector(
    "#pAux"
  ).innerHTML = `La cantidad de palabras en total es: ${contador}`;
}
