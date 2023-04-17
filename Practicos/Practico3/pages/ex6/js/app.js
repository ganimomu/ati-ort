for (let i = -33; i <= 230; i++) {
  if (i % 4 === 0) {
    document.querySelector("#pNumbers").innerHTML += `${i}<br>`;
  }
}
