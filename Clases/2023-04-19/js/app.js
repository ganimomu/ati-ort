let textField = document.querySelector("#pExtra");

let numero = 0;

while (numero < 10) {
  ++numero;
  textField.innerHTML += `${numero} <br>`;
}

do {
  ++numero;
  textField.innerHTML += `${numero} <br>`;
} while (numero < 20);
