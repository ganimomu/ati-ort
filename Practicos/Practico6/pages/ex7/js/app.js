let addBtn = document.querySelector("#btnAdd");
let searchBtn = document.querySelector("#btnPos");
let replaceBtn = document.querySelector("#btnReplacer");
let pushField = document.querySelector("#pAux");
let searchField = document.querySelector("#pPos");
let replaceField = document.querySelector("#pReplacer");

addBtn.addEventListener("click", pushFunction);
searchBtn.addEventListener("click", searchFunction);
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

function searchFunction() {
  let position = Number(document.querySelector("#txtPos").value);
  console.log(position);
  searchField.innerHTML = `El elemento en posicion ${position} es: "${strings[position]}"`;
}

function replacerFunction() {
  let toReplace = document.querySelector("#txtSearch").value;
  let replaceWith = document.querySelector("#txtReplace").value;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] === toReplace) {
      strings[i] = replaceWith;
      replaceField.innerHTML = `Se ha reemplazado en la lista ${toReplace} por ${replaceWith}`;
      break;
    } else {
      replaceField.innerHTML = `No se han encontrado ocurrencias de "${toReplace}" en la lista, por ende no se ha reemplazado nada.`;
    }
  }
  pushField.innerHTML = "";
  for (let i = 0; i < strings.length; i++) {
    pushField.innerHTML += `${strings[i]}<br>`;
  }
}
