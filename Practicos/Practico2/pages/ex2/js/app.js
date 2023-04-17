document.querySelector("#btnValueCheck").addEventListener("click", valueCheck);

function valueCheck() {
  let number = Number(document.querySelector("#numFirstVal").value);
  let txtField = document.querySelector("#pExtra");
  console.log(number);
  if (number > 10) {
    alert(`mayor que diez`);
  }
  if (number <= 10) {
    alert(`${number}`);
  }
}
