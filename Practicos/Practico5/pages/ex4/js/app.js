document.querySelector("#btnFunc").addEventListener("click", idkWhyIExist);

function norDoI(string) {
  return string.toLowerCase();
}

function idkWhyIExist() {
  let text = document.querySelector("#txtText").value;
  norDoI(text);
  document.querySelector("#pAux").innerHTML = `${norDoI(text)}`;
}
