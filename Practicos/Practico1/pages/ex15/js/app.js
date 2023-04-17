let storage = 0;
document.querySelector("#btnStorageSum").addEventListener("click", storageSum);
console.log(storage);

document
  .querySelector("#btnStorageResult")
  .addEventListener("click", storageResult);

function storageSum() {
  storage += Number(document.querySelector("#txtNumberStorage").value);
  console.log(storage);
  return storage;
}

function storageResult() {
  return (document.querySelector(
    "#pStorageShow"
  ).innerHTML = `El total sumado hasta ahora es ${storage}`);
}
