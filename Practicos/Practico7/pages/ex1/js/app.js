let funcBtn = document.querySelector("#btnFunc");
let overAgeBtn = document.querySelector("#btnOverAge");
let tableArrayGeneral = document.querySelector("#divGeneralTable");
let tableOverAge = document.querySelector("#divOverAgeTable");
let dataOverAge = document.querySelector("#tableDataOver");
let dataGeneral = document.querySelector("#tableDataGeneral");

funcBtn.addEventListener("click", dataIngest);
overAgeBtn.addEventListener("click", showOverAge);
let people = [];

function dataIngest() {
  tableArrayGeneral.removeAttribute("hidden");
  let name = document.querySelector("#txtName").value;
  document.querySelector("#txtName").value = "";
  let age = Number(document.querySelector("#txtAge").value);
  document.querySelector("#txtAge").value = "";
  let nationality = document.querySelector("#txtNationality").value;
  document.querySelector("#txtNationality").value = "";
  if (name.trim() === "" || isNaN(age) || nationality.trim() === "") {
    return (document.querySelector(
      "#pGAux"
    ).innerHTML = `Por favor verifique que haya ingresado todos los campos correctamente`);
  }
  document.querySelector("#pGAux").innerHTML = "";
  let persona = new Person(name, age, nationality);
  let checkExists = (array, prop) => {
    let exists = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i][prop] === name) exists = true;
      break;
    }
    return exists;
  };

  dataGeneral.innerHTML += `<tr><td>${persona.name}</td><td>${persona.age}</td><td>${persona.nationality}</td></tr>`;
  people.push(persona);
}

function showOverAge() {
  tableOverAge.removeAttribute("hidden");
  for (let i = 0; i < people.length; i++) {
    const element = people[i];
    if (element.age >= 18) {
      dataOverAge.innerHTML += `<tr><td>${element.name}</td><td>${element.age}</td><td>${element.nationality}</td></tr>`;
    }
  }
}
