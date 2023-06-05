let btnBuy = document.querySelector("#btnBuy");
btnBuy.addEventListener("click", orderIngest);
let btnSold = document.querySelector("#btnSold");
btnSold.addEventListener("click", netWorthCalc);
document.querySelector("#btnTable").addEventListener("click", tableGen);
let database = [];
let sistema = new Sistema();

function armarListado(HTMLElement) {
  for (let i = 0; i < sistema.guitarras.length; i++) {
    document.querySelector(
      HTMLElement
    ).innerHTML += `<option value=${sistema.guitarras[i].tipo}>${sistema.guitarras[i].nombre}</option>`;
  }
}
armarListado("#slcType");
armarListado("#slcSold");

let checkExists = (array, prop, check) => {
  let exists = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i][prop] === check) exists = true;
    break;
  }
  return exists;
};

function orderIngest() {
  let tipoGuitarra = Number(document.querySelector("#slcType").value);
  document.querySelector("#slcType").value = "select";
  let cantidadGuitarras = Number(document.querySelector("#txtQty").value);
  document.querySelector("#txtQty").value = "";
  if (!isNaN(cantidadGuitarras) && tipoGuitarra !== "select") {
    let order = new Venta(tipoGuitarra, cantidadGuitarras);
    sistema.guardarVenta(order);
  }
}

function netWorthCalc() {
  let tipo = Number(document.querySelector("#slcSold").value);
  document.querySelector("#pSold").innerHTML = `${sistema.totalNet(tipo)}`;
}

function tableGen() {
  let tblGuitarra = document.querySelector("#tblGuitarra");
  tblGuitarra.innerHTML = "";

  for (let i = 0; i < sistema.guitarras.length; i++) {
    const objGuitarras = sistema.guitarras[i];
    tblGuitarra.innerHTML += `
    <tr>
      <td>
        ${objGuitarras.nombre}
      </td>
      <td>
        ${sistema.totalNet(objGuitarras.tipo)}
      </td>
    </tr>    
    `;
  }
}
/* function movieIngest() {
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
} */

/* updateSelect(); */
