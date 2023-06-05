let magicButton = document.querySelector("#btnMagic");
let pushField = document.querySelector("#pAux");

magicButton.addEventListener("click", wannaSeeAMagicTrick);

function wannaSeeAMagicTrick() {
  let strings = [1, 1];

  pushField.innerHTML = "";

  for (let i = 0; i < 19; i++) {
    let value = strings[i] + strings[i + 1];
    strings.push(value);
  }

  for (let i = 0; i < strings.length; i++) {
    pushField.innerHTML += `Array[${i}]: ${strings[i]}<br>`;
  }
}
