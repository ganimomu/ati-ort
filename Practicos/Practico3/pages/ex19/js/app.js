let funcButton = document.querySelector("#btnCalendar");
let resetButton = document.querySelector("#btnReset");
funcButton.addEventListener("click", calendarCreation);

function calendarCreation() {
  let month = document.querySelector("#slcMonth").value;
  let weekday = document.querySelector("#slcWeekday");
  let year = new Date().getFullYear;
  let days;

  switch (month) {
    case JAN:
    case MAR:
    case MAY:
    case JUL:
    case AUG:
    case OCT:
    case DEC:
      days = 31;
      break;
    case APR:
    case JUN:
    case SEP:
    case NOV:
      days = 30;
      break;
    case FEB:
      days = 28;
    default:
      alert("Algo salió mal.");
      break;
  }
}
