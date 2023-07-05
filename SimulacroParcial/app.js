let sistema = new Sistema()
let slcRegistro = document.querySelector("#slcRegistro")
let slcFuncionario = document.querySelector("#slcFuncionario")
let slcIngreso = document.querySelector("#slcRegistro")
let txtFecha = document.querySelector("#txtFecha")
let btnRegistro = document.querySelector("#btnIngreso")
let pAux = document.querySelector("#pAux")
let marcas = 0
let funcionarioIngresado


function cargarFuncionarios() {
    slcFuncionario.innerHTML = `<option value="select" selected disabled>Seleccionar...</option>`
    for (let i = 0; i < sistema.funcionarios.length; i++) {
        let funcionario = sistema.funcionarios[i]
        slcFuncionario.innerHTML += `<option value="${funcionario.id}">${funcionario.nombre} ${funcionario.apellido} (${funcionario.id})</option>`
    }
}

btnRegistro.addEventListener("click", registrarMarcaReloj)

function registrarMarcaReloj() {
    let idFuncionario = Number(slcFuncionario.value)
    funcionarioIngresado = sistema.encontrarFuncionario(idFuncionario)
    let timestamp = txtFecha.value
    let stampType = slcIngreso.value
    let stamp = {
        id: marcas,
        idFuncionario: idFuncionario,
        timestamp: timestamp,
        type: stampType
    }
    if (sistema.funcionarioEstaActivo(funcionarioIngresado.id)) {
        sistema.marcas.push(stamp)
            ++marcas
    } else {
        pAux.innerHTML = `El funcionario ingresado no se encuentra en actividad`
    }
    reporteFuncionariosActivos()
}

function reporteFuncionariosActivos() {
    let tabla = document.querySelector("#tblFuncionarios")
    let addTabla = tabla
    addTabla.innerHTML = ``
    for (let i = 0; i < sistema.funcionarios.length; i++) {
        let funcionario = sistema.funcionarios[i]
        let marcas = sistema.obtenerMarcasDeFuncionario(funcionario.id)
        addTabla.innerHTML += `<td><strong>ID Funcionario</strong></td> <td><strong>Nombre y apellido</strong></td> <td><strong>Teléfono</strong></td>`
        addTabla.innerHTML += `<td>${funcionario.id}</td><td>${funcionario.nombre} ${funcionario.apellido}</td><td>${funcionario.tel}</td>`
        addTabla.innerHTML += `<td><strong>ID Marca</strong></td> <td><strong>Fecha y hora</strong></td> <td><strong>Tipo</strong></td>`
        for (let j = 0; j < marcas.length; j++) {
            let marca = marcas[j]
            console.log(marca);
            if (marca.idFuncionario === funcionario.id) {
                let type
                switch (marca.type) {
                    case "in":
                        type = "ENTRADA"
                        break
                    case "out":
                        type = "SALIDA"
                        break
                }
                addTabla.innerHTML += `<td>${marca.id}</td><td>${marca.timestamp}</td><td>${type}</td>`
            }
        }

    }
}


cargarFuncionarios()