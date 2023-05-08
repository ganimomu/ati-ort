let texto = "Hola a todos";

for (let index = 0; index < texto.length; index++) {
  document.querySelector("#pChain").innerHTML += `${texto.charAt(index)} <br>`;
}

texto.substring(1, 4);
