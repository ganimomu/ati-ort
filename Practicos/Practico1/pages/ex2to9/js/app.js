document.querySelector("#calcSum2").addEventListener("click", sumValues);
document.querySelector("#calcSum3").addEventListener("click", sumValue3);
document.querySelector("#calcValues4").addEventListener("click", calc4);
document.querySelector("#squareCalc5").addEventListener("click", squareArea);
document.querySelector("#exchangeCalc6").addEventListener("click", exchangeCalc);
document.querySelector("#modCalc7").addEventListener("click", modulusCalc);
document.querySelector("#calcSum8").addEventListener("click", sumValue8);
document.querySelector("#calc9").addEventListener("click", calcVal9);


function sumValues() {
  let value1 = Number(document.querySelector("#numFirstValue").value);
  console.log(value1);
  let value2 = Number(document.querySelector("#numSecondValue").value);
  console.log(value2);
  document.querySelector("#sum2Result").innerHTML = value1 + value2;
}

/* function sumValues() {
    return document.querySelector("#sumResult").innerHTML = Number(document.querySelector("#numFirstValue").value) + Number(document.querySelector("#numSecondValue").value);
} */

function sumValue3() {
  return (document.querySelector("#sum3Result").innerHTML =
    Number(document.querySelector("#numFirstVal3").value) +
    Number(document.querySelector("#numSecondVal3").value) +
    Number(document.querySelector("#numThirdVal3").value));
}

function calc4() {
  let value1 = Number(document.querySelector("#numFirstVal4").value);
  let value2 = Number(document.querySelector("#numSecondVal4").value);
  let suma = value1 + value2;
  let multiply = value1 * value2;

  document.querySelector(
    "#sum4Result"
  ).innerHTML = `Suma de ambos números = ${suma}`;
  document.querySelector(
    "#mul4Result"
  ).innerHTML = `Multiplicación de ambos números = ${multiply}`;
}

function squareArea() {
    let value = Number(document.querySelector("#numSquareSide5").value);
    document.querySelector("#squareArea5").innerHTML = "El área del cuadrado es: " + value*value ;
}

function exchangeCalc() {
    let exchangeRate = 40.20;
    return document.querySelector("#exchangeResult6").innerHTML = "El equivalente en dólares es: " + Number(document.querySelector("#numMoneyQty6").value)/exchangeRate;
}

function modulusCalc() {
    let value1 = Number(document.querySelector("#numFirstVal7").value)
    let value2 = Number(document.querySelector("#numSecondVal7").value)
    return document.querySelector("#modResult7").innerHTML = "El resto de la división de " + value1 + " entre " + value2 + " es: " + value1%value2;
}

function sumValue8() {
    let value1 = Number(document.querySelector("#numFirstVal8").value);
    let value2 = Number(document.querySelector("#numSecondVal8").value);
    let value3 = Number(document.querySelector("#numThirdVal8").value);
    let result = (value1 + value2) - value3;
    return document.querySelector("#sum8Result").innerHTML = `El resultado es: ${result}`;
}

function calcVal9() {
    let value1 = Number(document.querySelector("#numFirstVal9").value);
    let value2 = Number(document.querySelector("#numSecondVal9").value);
    let value3 = Number(document.querySelector("#numThirdVal9").value);
    let result = (value1*value1) - (value2+value3);
    return document.querySelector("#calc9Result").innerHTML = `El resultado es ${result}`;
}