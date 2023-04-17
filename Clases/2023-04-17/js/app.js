let contador = 0;
for (let i = 0; i < 5; i++) {
  ++contador;
  document.querySelector(
    "#pTextFor"
  ).innerHTML += `Suma: ${contador}. Contador: ${i} <br>`;
}
