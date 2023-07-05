// DADO POR EL EJERCICIo

class Funcionario {
    constructor(id, nombre, apellido, tel, activo) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tel = tel;
        this.activo = activo;
    }
}

class Sistema {
    constructor() {
        this.funcionarios = [
            new Funcionario(10, "Darwin", "Núñez", "099 111 111", 1),
            new Funcionario(11, "Luis", "Suárez", "094 222 222", 1),
            new Funcionario(12, "Antonio", "Pacheco", "096 333 333", 0)
        ];
        this.marcas = [];
    }
    // CODIGO AGREGADO
    encontrarFuncionario(idFuncionario) {
        for (let i = 0; i < this.funcionarios.length; i++) {
            let funcionario = this.funcionarios[i]
            if (idFuncionario === funcionario.id) {
                return funcionario
            }
        }
        return false
    }
    funcionarioEstaActivo(idFuncionario) {
        let funcionario = this.encontrarFuncionario(idFuncionario)
        if (funcionario.id === idFuncionario) {
            if (funcionario.activo) {
                return true
            }
        }
        return false
    }
    obtenerMarcasDeFuncionario(id) {
        console.log(id);
        let stamps = [];
        let funcionario = this.encontrarFuncionario(id)
        for (let j = 0; j < this.marcas.length; j++) {
            let marca = this.marcas[j]
            console.log(marca);
            console.log(funcionario);
            if (funcionario.id == marca.idFuncionario) {
                stamps.push(marca)
            }
        }
        return stamps
    }
    funcionarioEstaTrabajando(id) {
        let funcionario = this.encontrarFuncionario(id)
        let marcas = this.obtenerMarcasDeFuncionario(id)
        if (marcas[marcas.length].type === "in" && funcionario.activo === 1) {
            return true
        } else return false
    }
    // FIN CODIGO AGREGADO
}