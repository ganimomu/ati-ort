let magicButton = document.querySelector("#btnMagic");
let pushField = document.querySelector("#pAux");

magicButton.addEventListener("click", wannaSeeAMagicTrick);
let fibonacci = [1, 1];

function wannaSeeAMagicTrick() {
  pushField.innerHTML = "";

  for (let i = 1; fibonacci[i] < 1000; i++) {
    let value = fibonacci[i] + fibonacci[i - 1];
    fibonacci.push(value);
  }

  for (let i = 0; i < fibonacci.length; i++) {
    pushField.innerHTML += `Array[${i}]: ${fibonacci[i]}<br>`;
  }
}
