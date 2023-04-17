document.querySelector("#btnValueCheck").addEventListener("click", valueCheck);

function valueCheck() {
  let number = Number(document.querySelector("#numFirstVal").value);
  let txtField = document.querySelector("#pExtra");
  console.log(number);
  if (number < 0) {
    number = number * -1;
  }
  console.log(number);
  txtField.innerHTML = `${number}`;
}
