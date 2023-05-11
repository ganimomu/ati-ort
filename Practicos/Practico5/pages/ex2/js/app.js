document.querySelector("#btnFunc").addEventListener("click", charRepInString);

function charCounter(string, char) {
  let contador = 0;
  for (let index = 0; index < string.length; index++) {
    if (string.charAt(index) === char) {
      ++contador;
    }
  }
  return contador;
}

function charRepInString() {
  let texto = document.querySelector("#txtText").value;
  let letra = document.querySelector("#txtLetra").value;
  document.querySelector(
    "#pAux"
  ).innerHTML = `En la palabra especificada, hay ${charCounter(
    texto.toLowerCase(),
    letra.toLowerCase()
  )} letras "${letra}"`;
}
