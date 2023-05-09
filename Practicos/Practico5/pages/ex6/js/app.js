document.querySelector("#btnFunc").addEventListener("click", substringChecker);
let mensaje = "";

function substringCheck(string, subtext) {
  for (i = 0; i < string.length; i++) {
    if (string.substring(i, i + subtext.length) === subtext) {
      mensaje = `${subtext} es subcadena de ${string}`;
      break;
    } else {
      mensaje = `${subtext} <strong>no</strong> esta presente en ${string}`;
    }
  }
  return mensaje;
}

function substringChecker() {
  let texto = document.querySelector("#txtText").value;
  let checkText = document.querySelector("#txtCheckText").value;
  document.querySelector("#pAux").innerHTML = "";
  substringCheck(texto, checkText);
  document.querySelector("#pAux").innerHTML = `${mensaje}`;
}
