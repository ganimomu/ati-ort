let numbers = 0;
for (let i = 0; i < 1000; i++) {
  ++numbers;
  document.querySelector("#pNumbers").innerHTML += `${numbers}<br>`;
}
