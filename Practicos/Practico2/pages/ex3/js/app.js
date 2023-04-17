document.querySelector("#btnValueCheck").addEventListener("click", valueCheck)

function valueCheck() {
    let number = Number(document.querySelector("#numFirstVal").value);
    let txtField = document.querySelector("#pExtra")
    console.log(number);
    if (number > 20) {
        txtField.innerHTML = `${number} es mayor a 20`
    } else {
        txtField.innerHTML = `${number} es menor o igual a 20`;
    }
}