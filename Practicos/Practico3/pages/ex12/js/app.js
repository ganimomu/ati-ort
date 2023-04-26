document.querySelector("#btnIngreso").addEventListener("click", multiplicar);

function multiplicar() {
  let number1 = Number(document.querySelector("#txtNumber1").value);
  let resultado = 1;

  document.querySelector("#pNumbers").innerHTML = `${number1}! = ${resultado}`;

  for (let i = 1; i <= number1; i++) {
    resultado *= i;
    if (i !== 1) {
      //cheating
      document.querySelector("#pNumbers").innerHTML += ` x ${i} `;
    }
  }
  document.querySelector("#pNumbers").innerHTML += `= ${resultado}`;
}
