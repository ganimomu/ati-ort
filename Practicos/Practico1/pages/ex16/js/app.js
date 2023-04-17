document.querySelector("#btnScoreCalc").addEventListener("click", scoreCalc);

function scoreCalc() {
    let puntos = 0;
    puntos = (Number(document.querySelector("#numWins").value) * 3) + Number(document.querySelector("#numDraws").value);
    console.log(puntos);
    return document.querySelector("#pScoreResult").innerHTML= `Los puntos totales del equipo son: ${puntos}`
}