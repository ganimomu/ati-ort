class Agua {
    constructor(id, nombre, tipo, tope, ingredientes) {
        this.id = id;
        this.nombre = nombre,
            this.tipo = tipo,
            this.tope = tope;
        this.ingredientes = ingredientes
    }
}

class Sistema {
    constructor() {
        this.listaDeAguas = [
            new Agua(1, "Sirte", "con gas", 30, "calcio, magnesio, blablabla"),
            new Agua(3, "Sirte", "con gas", 30, "calci, magnesio, blablabla"),
            new Agua(2, "Salus", "sin gas", 20, "calcio, magnesio, blablabla")
        ]
        this.listaDeVentas = []
    }
    existeVenta(cliente, agua) {
        let existe = false
        for (let i = 0; i < this.listaDeVentas.length; i++) {
            const venta = this.listaDeVentas[i]
            if (venta.cliente === cliente) {
                if (venta.agua === agua) {
                    existe = true
                    break;
                }
            }
        }
        return existe;
    }
    encontrarAgua(id) {
        console.log(id);
        for (let i = 0; i < this.listaDeAguas.length; i++) {
            const agua = this.listaDeAguas[i]
            console.log(agua);
            if (agua.id === id) {
                return agua
            }
        }
        return false;
    }
    obtenerCantidadAguasVendidas(id) {
        let contador = 0
        for (let i = 0; i < this.listaDeVentas.length; i++) {
            let venta = this.listaDeVentas[i]
            if (venta.agua === id) {
                contador += venta.cantidad;
            }
        }
        return contador;
    }
    obtenerSimilares(ing) {
        let similares = []
        for (let i = 0; i < this.listaDeAguas.length; i++) {
            const agua = this.listaDeAguas[i]
            const ingredientes = agua.ingredientes
            for (let j = 0; j < ingredientes.length; j++) {
                let comparativo = ingredientes.substring(j, j + ing.length)
                if (comparativo === ing) {
                    similares.push(agua)
                }
            }
        }
        return similares;
    }
    registrarVenta(cliente, agua, cantidad) {
        this.listaDeVentas.push(new Venta(cliente, agua, cantidad));
    }
}

idVenta = 0;
class Venta {
    constructor(cliente, agua, cantidad) {
        this.id = ++idVenta
        this.cliente = cliente;
        this.agua = agua;
        this.cantidad = cantidad;

    }
}
let sistema = new Sistema()
let txtCliente = document.querySelector("#txtCliente");
let slcAgua = document.querySelector("#slcAgua");
let txtQty = document.querySelector("#txtQty");
let btnCompra = document.querySelector("#btnCompra");
let pAux = document.querySelector("#pAux");

function cargarAguas() {
    slcAgua.innerHTML = `<option value="x" selected disabled>Seleccionar...</option>`
    for (let i = 0; i < sistema.listaDeAguas.length; i++) {
        const agua = sistema.listaDeAguas[i]
        slcAgua.innerHTML += `<option value="${agua.id}">${agua.nombre}</option>`

    }
}
cargarAguas()

btnCompra.addEventListener("click", procesarCompra)

function procesarCompra() {
    pAux.innerHTML = ""
    let cliente = Number(txtCliente.value)
    let idAgua = Number(slcAgua.value)
    console.log(idAgua);
    let aguaElegida = sistema.encontrarAgua(idAgua)
    let cantidad = Number(txtQty.value)
    if (sistema.existeVenta(cliente, idAgua)) {
        return pAux.innerHTML = "Usted ya ha comprado una funda de esta marca de agua."
    }
    if (cantidad > aguaElegida.tope) {
        return pAux.innerHTML = "Ha pedido más fundas de las que se permite para esta marca"
    }
    sistema.registrarVenta(cliente, idAgua, cantidad)
    generarTabla()
}

function generarTabla() {
    let tabla = document.querySelector("#tblVenta");
    tabla.innerHTML = `
    <thead><th>Agua</th><th>Cantidad de fundas vendidas</th></thead>
    <tbody id="tblBody"></tbody>    
    `
    let tblBody = document.querySelector("#tblBody");
    for (let i = 0; i < sistema.listaDeAguas.length; i++) {
        let agua = sistema.listaDeAguas[i]
        let cantidad = sistema.obtenerCantidadAguasVendidas(agua.id)
        tblBody.innerHTML += `
        <td>${agua.nombre}</td><td>${cantidad}</td>        
        `
    }


}