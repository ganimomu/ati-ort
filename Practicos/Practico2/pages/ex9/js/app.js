document.querySelector("#btnGetRoutine").addEventListener("click", valueCheck);

function valueCheck() {
  let temp = Number(document.querySelector("#numTemp").value);
  let day = document.querySelector("#selDay").value;
  let dayRoutine;
  let tempRoutine;
  let txtField = document.querySelector("#pRoutine");
  console.log(temp);
  console.log(day);
  if (day === "su") {
    dayRoutine = `Quedarese en casa, hoy no trabaja`;
  } else {
    dayRoutine = `Ir al trabajo`;
  };
  console.log(dayRoutine);
  if (temp < 10) {
    tempRoutine = `Abrigarse mucho`;
  } else if (temp > 20) {
    tempRoutine = `Ponerse ropa cómoda`;
  } else {
    tempRoutine = `Abrigo moderado`;
  };
  console.log(tempRoutine);
  txtField.innerHTML = `Levantarse <br> ${tempRoutine} <br> ${dayRoutine}`;
}
