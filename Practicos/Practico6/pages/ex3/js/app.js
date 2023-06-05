let funcBtn = document.querySelector("#btnFunc");
let endBtn = document.querySelector("#btnEnd");
let textField = document.querySelector("#pAux");

funcBtn.addEventListener("click", exFunction);
endBtn.addEventListener("click", endButton);
let strings = new Array();

function exFunction() {
  textField.innerHTML = "";
  let cadena = document.querySelector("#txtString").value;
  document.querySelector("#txtString").value = "";
  document.querySelector("#txtString").focus();
  // for (let index = 0; index < strings.length; index++) {
  strings.push(cadena);
  console.log(strings);
  //}
}

function endButton() {
  funcBtn.setAttribute("disabled", "disabled");
  document.querySelector("#txtString").setAttribute("disabled", "disabled");
  for (let i = 0; i < strings.length; i++) {
    textField.innerHTML += `- ${strings[i]}<br>`;
  }
}
