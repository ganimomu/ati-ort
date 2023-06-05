let funcBtn = document.querySelector("#btnFunc");
let textField = document.querySelector("#pAux");

funcBtn.addEventListener("click", exFunction);
let strings = [];

function exFunction() {
  textField.innerHTML = "";
  let cadena = document.querySelector("#txtString").value;
  let found = false;
  for (let index = 0; index < strings.length; index++) {
    /*console.log("Entre al for");
    if (strings[index] === cadena) {
      console.log("Entre al if true");
      found = true;
      break;
    } else {
      console.log("Entre al if false");
      found = false;
    }
    */
    if (strings[index] === cadena) {
      found = true;
      textField.innerHTML = `<hr><strong>Por favor ingrese un usuario único</strong><hr>`;
      break;
    }
  }
  console.log(found);
  if (!found) {
    strings.push(cadena);
  }
  console.log(strings);

  for (let i = 0; i < strings.length; i++) {
    textField.innerHTML += `${strings[i]}<br>`;
  }
  document.querySelector("#txtString").focus();
}
