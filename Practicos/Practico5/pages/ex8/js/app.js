document.querySelector("#btnFunc").addEventListener("click", letterSnE);

function letterCheck(string) {
  if (
    string.charAt(0).toLowerCase() ===
    string.charAt(string.length - 1).toLowerCase()
  ) {
    return `La palabra comienza y termina con la letra "${string.charAt(0)}"`;
  } else {
    return `La palabra no empieza ni termina con la misma letra`;
  }
}

function letterSnE() {
  let string = document.querySelector("#txtText").value;
  letterCheck(string);
  document.querySelector("#pAux").innerHTML = `${letterCheck(string)}`;
}
