document.querySelector("#btnValueCheck").addEventListener("click", valueCheck);

function valueCheck() {
  let number = Number(document.querySelector("#numFirstVal").value);
  let txtField = document.querySelector("#pExtra");
  console.log(number);
  if (number < -20 || number > 20) {
    txtField.innerHTML = `CUMPLE`;
  } else {
    txtField.innerHTML = `NO CUMPLE`
  }
}
