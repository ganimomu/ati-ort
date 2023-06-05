function textConversion(string) {
  let newString = string;
  if (string.charAt(string.length - 1).toLowerCase() === "a") {
    newString = string.substring(0, string.length - 1);
  } else if (string.charAt(string.length - 1).toLowerCase() === "o") {
    newString = ``;
    for (let index = 0; index < string.length; index++) {
      newString += string.charAt(index);
      if (index % 2 === 0) {
        newString += string.charAt(index);
      }
    }
  }
  return newString;
}
function existanceCheck(array, object) {
  let exists = false;
  for (let i = 0; i < array.length; i++) {
    if (object === array[i]) {
      exists = true;
      break;
    }
  }
  return exists;
}

let textos = [];

let funcButton = document.querySelector("#funcButton");
let textField = document.querySelector("#pAux");

funcButton.addEventListener("click", converter);

function converter() {
  textField.innerHTML = "";
  let texto = document.querySelector("#txtString").value;
  if (existanceCheck(textos, texto)) {
    textField.innerHTML += `El texto ya existe en la base de datos`;
  } else if (texto.length < 3) {
    textField.innerHTML = `El texto debe tener al menos 3 carácteres`;
  } else {
    textos.push(textConversion(texto));
  }
  textField.innerHTML += `<hr>`;
  for (let i = 0; i < textos.length; i++) {
    textField.innerHTML += `${textos[i]}<br>`;
  }
}
