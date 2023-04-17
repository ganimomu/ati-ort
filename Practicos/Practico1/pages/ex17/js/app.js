document.querySelector("#btnTempCalc").addEventListener("click", tempCalc);

function tempCalc() {
    let chirridos = Number(document.querySelector("#numChirridos").value)
    let tempF = 50 + (((chirridos)-40)/4)
    console.log(tempF);
    let tempC = (tempF - 32)/1.8;
    console.log(tempC);
    let conversion = 10 + (((chirridos)-40)/7)
    console.log(conversion);
    return document.querySelector("#pTempResult").innerHTML = `La temperatura actual es de ${tempF} °F, el equivalente en Celsius es de ${tempC} °C`
}