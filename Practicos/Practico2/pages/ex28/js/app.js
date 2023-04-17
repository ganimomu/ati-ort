let funcButton = document.querySelector("#btnAnotar");
let textField = document.querySelector("#pPoints");
let scoreTeamOne = 0;
let scoreTeamTwo = 0;
funcButton.addEventListener("click", scoringSystem);

function scoringSystem() {
  let teamOnePoints = document.querySelector("#numTeamOne");
  let teamTwoPoints = document.querySelector("#numTeamTwo");
  if (scoreTeamOne < 30 && scoreTeamTwo < 30) {
    scoreTeamOne += Number(teamOnePoints.value);
    scoreTeamTwo += Number(teamTwoPoints.value);
    console.log(`Equipo1:${Number(teamOnePoints.value)}
    Equipo2:${Number(teamTwoPoints.value)}`);
    textField.innerHTML = `El global de puntajes hasta el momento es:<br>
    Equipo 1: ${scoreTeamOne}<br>
    Equipo 2: ${scoreTeamTwo}`;
    teamOnePoints.value = "";
    teamTwoPoints.value = "";
  }

  if (scoreTeamOne >= 30 || scoreTeamTwo >= 30) {
    funcButton.setAttribute("disabled", "disabled");
    textField.innerHTML = `El juego ha finalizado. `;
    if (scoreTeamOne > scoreTeamTwo) {
      textField.innerHTML += `El ganador del juego fue el equipo 1 con ${scoreTeamOne} puntos. <br> El equipo 2 ha quedado con ${scoreTeamTwo} puntos.`;
    } else if (scoreTeamTwo > scoreTeamOne) {
      textField.innerHTML += `El ganador del juego fue el equipo 2  con ${scoreTeamTwo} puntos. <br> El equipo 1 ha quedado con ${scoreTeamOne} puntos.`;
    } else {
      textField.innerHTML += `El juego ha terminado en un empate. Ambos equipos consiguieron sumar ${scoreTeamOne} puntos`;
    }
  }
}
