let addBtn = document.querySelector("#btnAdd");
let replaceBtn = document.querySelector("#btnReplacer");
let pushField = document.querySelector("#pAux");
let replaceField = document.querySelector("#pReplacer");

addBtn.addEventListener("click", pushFunction);
replaceBtn.addEventListener("click", replacerFunction);
let strings = ["Gabriel", "Jose", "Pepito"];
document.querySelector(
  "#pPrompt"
).innerHTML += `<br>El array precargado consta de: [${strings}]`;

function pushFunction() {
  pushField.innerHTML = "";
  let cadena = document.querySelector("#txtString").value;
  strings.push(cadena);

  for (let i = 0; i < strings.length; i++) {
    pushField.innerHTML += `${strings[i]}<br>`;
  }
  document.querySelector("#txtString").focus();
}

function replacerFunction() {
  let toReplace = document.querySelector("#txtString").value;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] === toReplace) {
      strings.splice(i, 1);
      replaceField.innerHTML = `Se ha eliminado ${toReplace} del array<hr>`;
      break;
    } else {
      replaceField.innerHTML = `No se han encontrado ocurrencias de "${toReplace}" en la lista, por ende no se ha reemplazado nada.<hr>`;
    }
  }
  pushField.innerHTML = "";
  for (let i = 0; i < strings.length; i++) {
    pushField.innerHTML += `${strings[i]}<br>`;
  }
}
