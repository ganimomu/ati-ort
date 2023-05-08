document.querySelector("#btnFunc").addEventListener("click", appFunction);

/* function calcularPotencia(base, exp) {
  let resultado = base;
  for (let index = 1; index < exp; index++) {
    resultado *= base;
  }
  return resultado;
} */

function calcularPotencia(base, exp) {
  return base ** exp;
}

function appFunction() {
  let base = Number(document.querySelector("#numBase").value);
  let exp = Number(document.querySelector("#numExp").value);
  console.log(exp);
  console.log(Math.abs(exp));
  document.querySelector("#pAux").innerHTML = `${calcularPotencia(
    base,
    exp
  )}<br>${base}<sup>${exp}</sup> = `;

  for (let index = 1; index <= exp; index++) {
    if (index < parseInt(exp, 10)) {
      document.querySelector("#pAux").innerHTML += `${base} x `;
    } else {
      document.querySelector("#pAux").innerHTML += `${base}`;
    }
  }
  if (exp === parseInt(exp, 10)) {
    document.querySelector(
      "#pAux"
    ).innerHTML += `<br>La base fue multiplicada por si misma ${exp} veces.`;
  }
}
