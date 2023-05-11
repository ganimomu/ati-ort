document.querySelector("#btnFunc").addEventListener("click", palindromo);

function checker(string) {
  let tildes = "áéíóúäëïöüàèìòùâêîôû";
  let puntuacion = ".,|?!¡¿-/";
  let vocales = "aeiou";
  let newString = charReplacer(string, " ", "");
  for (i = 0; i < puntuacion.length; i++) {
    newString = charReplacer(newString, puntuacion.charAt(i), "");
  }
  for (i = 0; i < tildes.length; i++) {
    let aux = i;
    if (aux >= vocales.length) {
      aux = aux - vocales.length;
    }
    newString = charReplacer(newString, tildes.charAt(i), vocales.charAt(aux));
  }
  let stringReverse = invertText(newString);
  console.log(string + " " + newString + " " + stringReverse);
  if (stringReverse.toLowerCase() === newString.toLowerCase()) {
    return `"<strong>${string}</strong>" es palindromo`;
  } else {
    return `<strong>${string}</strong> no es palindromo`;
  }
}

function palindromo() {
  let texto = document.querySelector("#txtText").value;
  document.querySelector("#pAux").innerHTML = `${checker(texto)}`;
}
