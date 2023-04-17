document.querySelector("#btnValueCheck").addEventListener("click", valueCheck);

function valueCheck() {
  let number = Number(document.querySelector("#numFirstVal").value);
  let txtField = document.querySelector("#pExtra");
  console.log(number);
  if (number > 30) {
    txtField.innerHTML = `es mayor que treinta`;
  } else if (number < 10) {
    txtField.innerHTML = `menor que 10`;
  } else {
    txtField.innerHTML = `Entre diez y treinta`;
  }
}
