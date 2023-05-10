document.querySelector("#btnFunc").addEventListener("click", capitalizator);

function wordCapitalizer(string) {
  return string.charAt(0).toUpperCase() + string.substring(1, string.length);
}

function capitalizator() {
  let texto = document.querySelector("#txtText").value;
  document.querySelector("#pAux").innerHTML = `${wordCapitalizer(texto)}`;
}
