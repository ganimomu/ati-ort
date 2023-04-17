document.querySelector("#btnValueCheck").addEventListener("click", valueCheck)

function valueCheck() {
    let number = Number(document.querySelector("#numFirstVal").value);
    let txtField = document.querySelector("#pNumberCheck");
    console.log(number);
    if (number >= 0) {
        txtField.innerHTML = `${number} es número positivo`
    } else {
        txtField.innerHTML = `${number} es número negativo`
    }
}