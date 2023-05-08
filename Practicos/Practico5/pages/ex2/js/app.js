document.querySelector("#btnFunc").addEventListener("click", charRepInString);
let contador = 0;

function charCounter(string, char) {
  for (let index = 0; index < string.length; index++) {
    if (string.charAt(index) === char) {
      ++contador;
    }
  }
}

function charRepInString() {
  contador = 0;
  let texto = document.querySelector("#txtText").value;
  let letra = document.querySelector("#txtLetra").value;
  charCounter(texto.toLowerCase(), letra.toLowerCase());
  document.querySelector(
    "#pAux"
  ).innerHTML = `En la palabra especificada, hay ${contador} letras "${letra}"`;
}
