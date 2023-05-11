document.querySelector("#btnFunc").addEventListener("click", dataGrabber);

function exCode(string) {
  /* let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.toLowerCase().charAt(i) === string.toLowerCase().charAt(0)) {
      ++counter;
    }
  }
  return counter; */
  return charCounter(string, string.toLowerCase().charAt(0));
}

function dataGrabber() {
  let texto = document.querySelector("#txtText").value;
  document.querySelector(
    "#pAux"
  ).innerHTML = `Para la palabra ${texto}, la primer letra se repite ${exCode(
    texto
  )} veces`;
}
