document.querySelector("#btnFunc").addEventListener("click", textToInvert);

/* function invertirTexto(texto, htmlDOMID) {
  for (let index = texto.length - 1; index >= 0; index--) {
    invertedText += texto.charAt(index);
    htmlDOMID.innerHTML += `${texto.charAt(index)}`;
  }
} */
function invertirTexto(texto) {
  let invertedText = "";
  for (let index = texto.length - 1; index >= 0; index--) {
    invertedText += texto.charAt(index);
  }
  return invertedText;
}

/* function textToInvert() {
  let texto = document.querySelector("#txtText").value;
  let parrafo = document.querySelector("#pAux");
  parrafo.innerHTML = "";
  invertirTexto(texto, parrafo);
  //parrafo.innerHTML = `${invertirTexto(texto)}`;
} */
function textToInvert() {
  let texto = document.querySelector("#txtText").value;
  let parrafo = document.querySelector("#pAux");
  //parrafo.innerHTML = "";
  parrafo.innerHTML = `${invertirTexto(texto)}`;
}
