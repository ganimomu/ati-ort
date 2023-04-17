document.querySelector("#btnValueCheck").addEventListener("click", valueCheck);

function valueCheck() {
  let number = Number(document.querySelector("#numFirstVal").value);
  let txtField = document.querySelector("#pExtra");
  console.log(number);
  if (number > 10 && number < 20) {
    txtField.innerHTML = `${number} es mayor que 10 y menor que 20`;
  } else {
    txtField.innerHTML = `${number} no es ni mayor que 10 ni menor que 20`
  }  
}
