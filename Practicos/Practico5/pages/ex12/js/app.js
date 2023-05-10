document
  .querySelector("#btnFunc")
  .addEventListener("click", noMoreNamesRemaining);

function charCounter(string) {
  let upperCaseCounter = 0;
  let lowerCaseCounter = 0;
  for (i = 0; i < string.length; i++) {
    if (
      (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) ||
      (string.charCodeAt(i) >= 192 && string.charCodeAt(i) <= 223)
    ) {
      ++upperCaseCounter;
    }
    if (
      (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) ||
      (string.charCodeAt(i) >= 224 && string.charCodeAt(i) <= 255)
    ) {
      ++lowerCaseCounter;
    }
  }
  return `En la cadenad de texto presentada hay ${upperCaseCounter} mayúsculas y ${lowerCaseCounter} minúsculas`;
}

function noMoreNamesRemaining() {
  let texto = document.querySelector("#txtText").value;
  document.querySelector("#pAux").innerHTML = `${charCounter(texto)}`;
}
