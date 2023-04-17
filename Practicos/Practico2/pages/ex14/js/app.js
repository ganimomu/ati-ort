document
  .querySelector("#btnShowTrips")
  .addEventListener("click", pointsRewards);
let textField = document.querySelector("#pExtra");

function pointsRewards() {
  let points = Number(document.querySelector("#numMillas").value);
  console.log(points);
  let member = document.querySelector("#selMembership").value;
  console.log(member);

  if (member == "s") {
    points = points * 2;
  }
  console.log(
    `La cantidad de puntos después del calculo por mwmbresia es: ${points}`
  );

  if (points >= 60000) {
    textField.innerHTML = `El destino más lejano al que puede viajar es: <strong>Europa</strong>`;
  } else if (points >= 30000) {
    textField.innerHTML = `El destino más lejano al que puede viajar es: <strong>América del Norte</strong>`;
  } else if (points >= 15000) {
    textField.innerHTML = `El destino más lejano al que puede viajar es: <strong>América del Sur</strong>`;
  } else {
    textField.innerHTML = `La cantida de millas disponibles no alcanza para canjear ningún viaje de la lista.`;
  }
}
