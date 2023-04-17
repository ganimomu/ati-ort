document.querySelector("#finalCalc").addEventListener("click", finalValue);
document.querySelector("#totalCalc").addEventListener("click", totalQtyCalc);

function finalValue() {
    let value = Number(document.querySelector("#numInitialValue").value);
    let tax = 1 + Number(document.querySelector("#numTax").value)/100;
    console.log(tax);
    return document.querySelector("#finalResult").innerHTML = "La cantidad final es: " + value*tax;
}

function totalQtyCalc() {
    let subtotal = Number(document.querySelector("#numSubTotal").value);
    const iva = 1.22;
    let total = subtotal*iva;
    return document.querySelector("#totalResult").innerHTML = `El total es $${total}`
}