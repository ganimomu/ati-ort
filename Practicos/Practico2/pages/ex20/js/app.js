let btnFuncional = document
  .querySelector("#btnRecipeCalc")
  .addEventListener("click", recipeCalculation);
let textField = document.querySelector("#pRecipes");

function recipeCalculation() {
  let sugar = Math.floor(Number(document.querySelector("#txtSugar").value));
  let flour = Math.floor(
    Number(document.querySelector("#txtFlour").value / 100)
  );
  let oil = Math.floor(Number(document.querySelector("#txtOil").value));
  let water = Math.floor(Number(document.querySelector("#txtWater").value));
  let recetas = Math.min(sugar, flour, oil, water);
  console.log(`${sugar} ${flour} ${oil} ${water} ${recetas}`);

  if (recetas >= 1) {
    textField.innerHTML = `Se pueden realizar ${recetas} recetas de galletas con los ingredientes disponibles`;
  } else {
    textField.innerHTML = `No dispone de los ingredientes necesarios para realizar una receta.`;
  }
}
