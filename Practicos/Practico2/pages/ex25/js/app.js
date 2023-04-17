let funcButton = document.querySelector("#btnCalcular");
let stockBtn = document.querySelector("#btnStock");
let textField = document.querySelector("#pInformation");
let stockField = document.querySelector("#pStock");
let orderHistory = 0;
let stock;
let mostBuyed = Number.NEGATIVE_INFINITY;
let mvpCustomer;

funcButton.addEventListener("click", orderProcess);
stockBtn.addEventListener("click", stockAdd);

function stockAdd() {
  stock = Number(document.querySelector("#txtStock").value);
  document.querySelector("#divStock").setAttribute("hidden", "hidden");
  document.querySelector("#divClient").removeAttribute("hidden");
  stockField.innerHTML = `Stock disponible: ${stock}`;
}

function orderProcess() {
  let quantity = Number(document.querySelector("#txtOrderQty").value);
  let customerName = document.querySelector("#txtCustomerName").value;
  console.log(stock);

  console.log(`Stock antes de proceso: ${stock}`);

  if (stock && (!quantity || !customerName || quantity <= 0)) {
    textField.innerHTML = `No se puede procesar un pedido vacio`;
    if (orderHistory > 0) {
      textField.innerHTML += `<br>Hasta ahora el cliente que más cámaras ha comprado fue: ${mvpCustomer} (${mostBuyed})<br>La cantidad total de pedidos hasta el momento es de ${orderHistory}`;
    }
    return 0;
  }

  if (quantity > stock) {
    textField.innerHTML = `El pedido no fue procesado. La cantidad de cámaras pedidas excede el stock disponible`;
    if (orderHistory > 0) {
      textField.innerHTML += `<br>Hasta ahora el cliente que más cámaras ha comprado fue: ${mvpCustomer} (${mostBuyed})<br>La cantidad total de pedidos hasta el momento es de ${orderHistory}`;
    }
    return 0;
  }

  ++orderHistory;
  stock -= quantity;
  document.querySelector("#txtStock").value = stock;
  console.log(`Stock después de proceso: ${stock}`);

  if (quantity > mostBuyed) {
    mostBuyed = quantity;
    mvpCustomer = customerName;
  }

  if (stock === 0) {
    funcButton.setAttribute("disabled", "disabled");
  }

  textField.innerHTML = `Hasta ahora el cliente que más cámaras ha comprado fue: ${mvpCustomer} (${mostBuyed})<br>La cantidad total de pedidos hasta el momento es de ${orderHistory}`;
  stockField.innerHTML = `Stock disponible: ${stock}`;
}
