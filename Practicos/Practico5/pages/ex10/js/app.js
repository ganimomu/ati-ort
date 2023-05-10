document.querySelector("#btnFunc").addEventListener("click", charReplacement);

function charReplacer(string, char) {
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    if (string.toLowerCase().charAt(index) === char.toLowerCase()) {
      newString += "*";
    } else {
      newString += string.charAt(index);
    }
  }
  return newString;
}

function charReplacement() {
  contador = 0;
  let texto = document.querySelector("#txtText").value;
  let letra = document.querySelector("#txtLetra").value;
  document.querySelector("#pAux").innerHTML = `${charReplacer(texto, letra)}`;
}
