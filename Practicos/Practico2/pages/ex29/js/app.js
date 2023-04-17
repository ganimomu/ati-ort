let turn = 0;
let secondPlayerIMG = "imgs/circulo.png";
let firstPlayerIMG = "imgs/cruz.png";
let blankIMG = "imgs/blanco.png";
let winCond;
let mensaje;
let textField = document.querySelector("#pExtra");
document.querySelector("#row1col1").addEventListener("click", row1col1);
document.querySelector("#row1col2").addEventListener("click", row1col2);
document.querySelector("#row1col3").addEventListener("click", row1col3);
document.querySelector("#row2col1").addEventListener("click", row2col1);
document.querySelector("#row2col2").addEventListener("click", row2col2);
document.querySelector("#row2col3").addEventListener("click", row2col3);
document.querySelector("#row3col1").addEventListener("click", row3col1);
document.querySelector("#row3col2").addEventListener("click", row3col2);
document.querySelector("#row3col3").addEventListener("click", row3col3);

function imagePlacement(square) {
  if (
    document.querySelector(square).getAttribute("src") === "imgs/blanco.png"
  ) {
    if (turn % 2 === 0) {
      document.querySelector(square).setAttribute("src", firstPlayerIMG);
    } else {
      document.querySelector(square).setAttribute("src", secondPlayerIMG);
    }
  }
}

function checkWinCondition() {
  let sqwr1c1 = document.querySelector("#row1col1").getAttribute("src");
  let sqwr1c2 = document.querySelector("#row1col2").getAttribute("src");
  let sqwr1c3 = document.querySelector("#row1col3").getAttribute("src");

  let sqwr2c1 = document.querySelector("#row2col1").getAttribute("src");
  let sqwr2c2 = document.querySelector("#row2col2").getAttribute("src");
  let sqwr2c3 = document.querySelector("#row2col3").getAttribute("src");

  let sqwr3c1 = document.querySelector("#row3col1").getAttribute("src");
  let sqwr3c2 = document.querySelector("#row3col2").getAttribute("src");
  let sqwr3c3 = document.querySelector("#row3col3").getAttribute("src");

  if (sqwr1c1 === sqwr1c2 && sqwr1c1 === sqwr1c3 && sqwr1c1 !== blankIMG) {
    //winCond = `Gano por tres en linea en fila 1`;
    winCond = 1;
  }
  if (sqwr2c1 == sqwr2c2 && sqwr2c1 == sqwr2c3 && sqwr2c2 !== blankIMG) {
    //winCond = "Gano por tres en linea en fila 2";
    winCond = 2;
  }

  if (sqwr3c1 == sqwr3c2 && sqwr3c1 == sqwr3c3 && sqwr3c1 !== blankIMG) {
    //winCond = `Gano por tres en linea en fila 3`;
    winCond = 3;
  }

  if (sqwr1c1 === sqwr2c1 && sqwr1c1 == sqwr3c1 && sqwr1c1 !== blankIMG) {
    //winCond = `Gano por tres en linea en columna 1`;
    winCond = 4;
  }
  if (sqwr1c2 == sqwr2c2 && sqwr1c2 == sqwr3c2 && sqwr1c2 !== blankIMG) {
    //winCond = `Gano por tres en linea en columna 2`;
    winCond = 5;
  }

  if (sqwr1c3 == sqwr2c3 && sqwr1c3 == sqwr3c3 && sqwr1c3 !== blankIMG) {
    //winCond = `Gano por tres en linea en columna 3`;
    winCond = 6;
  }

  if (sqwr3c1 == sqwr2c2 && sqwr3c1 == sqwr1c3 && sqwr3c1 !== blankIMG) {
    //winCond = `Gano por diagonal de A3 - C1`;
    winCond = 7;
  }
  if (sqwr1c1 === sqwr2c2 && sqwr1c1 === sqwr3c3 && sqwr1c1 !== blankIMG) {
    //winCond = `Gano por tres en linea en diagonal A1 - C3`;
    winCond = 8;
  }

  if (winCond > 0) {
    win();
  }
}

function win() {
  switch (winCond) {
    case 1:
      mensaje = "Gano por tres en linea en fila 1";
      break;
    case 2:
      mensaje = "Gano por tres en linea en fila 2";
      break;
    case 3:
      mensaje = "Gano por tres en linea en fila 3";
      break;
    case 4:
      mensaje = "Gano por tres en linea en columna 1";
      break;
    case 5:
      mensaje = "Gano por tres en linea en columna 2";
      break;
    case 6:
      mensaje = "Gano por tres en linea en columna 3";
      break;
    case 7:
      mensaje = "Gano por tres en linea en diagonal de A3 - C1";
      break;
    case 8:
      mensaje = "Gano por tres en linea en diagonal A1 - C3";
      break;
  }
  if (turn % 2 !== 0) {
    textField.innerHTML = `La partida ha finalizado. Jugador 1 es el ganador <br> ${mensaje}`;
  } else {
    textField.innerHTML = `La partida ha finalizado. Jugador 2 es el ganador <br> ${mensaje}`;
  }
  document.querySelector("#row1col1").removeEventListener("click", row1col1);
  document.querySelector("#row1col2").removeEventListener("click", row1col2);
  document.querySelector("#row1col3").removeEventListener("click", row1col3);
  document.querySelector("#row2col1").removeEventListener("click", row2col1);
  document.querySelector("#row2col2").removeEventListener("click", row2col2);
  document.querySelector("#row2col3").removeEventListener("click", row2col3);
  document.querySelector("#row3col1").removeEventListener("click", row3col1);
  document.querySelector("#row3col2").removeEventListener("click", row3col2);
  document.querySelector("#row3col3").removeEventListener("click", row3col3);
}

function row1col1() {
  imagePlacement("#row1col1");
  ++turn;
  checkWinCondition();
}

function row1col2() {
  imagePlacement("#row1col2");
  ++turn;
  checkWinCondition();
}

function row1col3() {
  imagePlacement("#row1col3");
  ++turn;
  checkWinCondition();
}

function row2col1() {
  imagePlacement("#row2col1");
  ++turn;
  checkWinCondition();
}

function row2col2() {
  imagePlacement("#row2col2");
  ++turn;
  checkWinCondition();
}

function row2col3() {
  imagePlacement("#row2col3");
  ++turn;
  checkWinCondition();
}

function row3col1() {
  imagePlacement("#row3col1");
  ++turn;
  checkWinCondition();
}

function row3col2() {
  imagePlacement("#row3col2");
  ++turn;
  checkWinCondition();
}

function row3col3() {
  imagePlacement("#row3col3");
  ++turn;
  checkWinCondition();
}
