let funcBtn = document.querySelector("#btnFunc");
let textField = document.querySelector("#pAux");

funcBtn.addEventListener("click", exFunction);
let strings = new Array();

function exFunction() {
  let cadena = document.querySelector("#txtString").value;
  document.querySelector("#txtString").value = "";
  document.querySelector("#txtString").focus();
  // for (let index = 0; index < strings.length; index++) {
  strings.push(cadena.length);
  //}
  textField.innerHTML = `${strings}`;
}
