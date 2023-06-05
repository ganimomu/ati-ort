let btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", movieIngest);
let database = [];

let checkExists = (array, prop, check) => {
  let exists = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i][prop] === check) exists = true;
    break;
  }
  return exists;
};

function movieIngest() {
  let title = document.querySelector("#txtTitle").value;
  let year = Number(document.querySelector("#txtYear").value);
  let genre = document.querySelector("#slcGenre").value;
  switch (genre) {
    case "com":
      genre = "Comedia";
      break;
    case "dra":
      genre = "Drama";
      break;
    case "sci":
      genre = "Ciencia ficción";
      break;
    case "select":
      genre = null;
      break;
  }
  let reviewers = Number(document.querySelector("#txtReviewers").value);
  let totalPoints = Number(document.querySelector("#txtPoints").value);
  let movie;
  if (
    !checkExists(database, `title`, title) &&
    !isNaN(year) &&
    !isNaN(reviewers) &&
    !isNaN(totalPoints) &&
    genre !== null
  ) {
    document.querySelector("#pAux") = "";
    movie = new Movie(title, year, genre, reviewers, totalPoints);
    console.log(movie);
  } else if (isNaN(year) || isNaN(totalPoints) || isNaN(reviewers)) {
    document.querySelector(
      "#pAux"
    ).innerHTML += `Año/votantes/puntos debe ser un número<br>`;
  } else if(genre === null) {
    document.querySelector("#pAux").innerHTML += `Debe seleccionar un genero<br>`
    
  } else {
    document.querySelector(
      "#pAux"
    ).innerHTML += `La pelicula ya esta en la base de datos<br>`;
  }
}
