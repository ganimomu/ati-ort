document.querySelector("#btnIMCCalc").addEventListener("click", calcIMC);

function calcIMC() {
    let weight = Number(document.querySelector("#numWeight").value);
    let height = Number(document.querySelector("#numHeight").value);
    let IMC = weight / (height*height);

    return document.querySelector("#sumIMCResult").innerHTML = `El IMC calculado con los datos es: ${IMC}`;
}