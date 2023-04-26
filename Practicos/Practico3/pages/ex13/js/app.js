document.querySelector("#btnIngreso").addEventListener("click", multiplicar);

function multiplicar() {
  let height = Number(document.querySelector("#txtHeight").value);
  let width = Number(document.querySelector("#txtWidth").value);

  document.querySelector("#pNumbers").innerHTML = "";

  for (let i = 1; i <= height; i++) {
    document.querySelector("#pNumbers").innerHTML += `<br>`;
    for (let y = 1; y <= width; y++) {
      document.querySelector("#pNumbers").innerHTML += `⊠`;
    }
  }
}
