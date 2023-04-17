document.querySelector("#btnCharCheck").addEventListener("click", charCheck);
let txtField = document.querySelector("#pExtra");

function charCheck() {
  let charToCheck = document.querySelector("#txtChar").value;
  if (
    charToCheck.toUpperCase() == "A" ||
    charToCheck.toUpperCase() == "E" ||
    charToCheck.toUpperCase() == "I" ||
    charToCheck.toUpperCase() == "O" ||
    charToCheck.toUpperCase() == "U"
  ) {
    txtField.innerHTML = `${charToCheck} es vocal`;
  } else {
    txtField.innerHTML = `${charToCheck} no es vocal`;
  }
}
