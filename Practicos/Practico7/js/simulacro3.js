function textConversion(string, number) {
  let newString = ``;
  for (i = 0; i < string.length; i++) {
    if (i % number === 0) {
      newString += string.charAt(i);
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
function arrayChecker(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 1) {
      return `${array[i]} <br>`;
    }
  }
}

let textos = [];

let funcButton = document.querySelector("#funcButton");
let textField = document.querySelector("#pAux");

funcButton.addEventListener("click", converter);

function converter() {
  textField.innerHTML = "";
  let texto = document.querySelector("#txtString").value;
  let numero = Number(document.querySelector("#txtNumber").value);
  if (existanceCheck(textos, texto)) {
    textField.innerHTML += `Esta combinación ya existe en la base de datos`;
  } else {
    textos.push(textConversion(texto, numero));
  }
  textField.innerHTML += `<hr>`;
  /*  for (let i = 0; i < textos.length; i++) {
    if (textos[i].length > 1) {
      textField.innerHTML += `${textos[i]}<br>`;
    }
  } */
  textField.innerHTML += `${arrayChecker(textos)}`;
}
