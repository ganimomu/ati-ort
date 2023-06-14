class Guitarra {
  constructor(tipo, nombre, precio) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Sistema {
  constructor() {
    this.guitarras = [
      new Guitarra(1, "clásica", 2000),
      new Guitarra(2, "eléctrica", 2500),
      new Guitarra(3, "electroacústica", 2300),
    ];
    this.ventas = [];
  }
  guardarVenta(venta) {
    this.ventas.push(venta);
  }
  totalNet(tipo) {
    let netWorth;
    let cantidadGuitarras = 0;
    let precioGuitarra;
    for (let i = 0; i < this.ventas.length; i++) {
      const order = this.ventas[i];
      if (order.tipo === tipo) {
        cantidadGuitarras += order.cantidad;
      }
    }
    for (let i = 0; i < this.guitarras.length; i++) {
      const element = this.guitarras[i];
      if (element.tipo === tipo) {
        precioGuitarra = element.precio;
        break;
      }
    }
    netWorth = cantidadGuitarras * precioGuitarra;

    return netWorth;
  }
}
class Venta {
  constructor(tipo, cantidad) {
    this.tipo = tipo;
    this.cantidad = cantidad;
  }
}
