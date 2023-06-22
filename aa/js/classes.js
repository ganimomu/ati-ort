idCensistas = 0

class Departamento {
  // Clase para componer la lista de departamentos. I Idealmente se compararia código de departamento (departamento.codigo) contra un objeto de la clase y retornar departamento.nombre donde corresponda
  constructor(nombre, codigo) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.censados = 0;
    this.estudiantes = 0;
    this.dependientes = 0;
    this.independientes = 0;
    this.noTrabajan = 0;
  }
}
class Censista {
  constructor(usuario, nombre, contrasena) {
    this.idCensistas = idCensistas++
    this.usuario = usuario;
    this.nombre = nombre;
    this.contrasena = contrasena;
  }
}

class Censo {
  constructor(cedula, nombre, apellido, edad, departamento, ocupacion) {
    this.idCensistas = -1;
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = Number(edad);
    this.departamento = departamento;
    this.ocupacion = ocupacion;
    this.verificado = false;
  }
}

class Sistema {
  constructor() {
    this.censos = [
      new Censo("51474238", "Gabriel", "Moreno", 21, "A", "dep"),
      new Censo("11111111", "Lucas", "Alfaro", 21, "B", "des"),
      new Censo("22222222", "Pablo", "Moreno", 52, "C", "est"),
      new Censo("33333333", "Franco", "Notte", 20, "D", "est"),
      new Censo("44444444", "Julieta", "Rovetta", 20, "E", "est"),
      new Censo("55555555", "Marcos", "Romero", 12, "F", "dep"),
      new Censo("66666666", "Lucas", "Gargiulo", 31, "F", "dep"),
      new Censo("77777777", "Juan", "Pablo", 32, "G", "est"),
      new Censo("88888888", "Diego", "Forlan", 45, "H", "ind"),
      new Censo("99999999", "Ernesto", "Buysan", 23, "I", "des"),
      new Censo("10101010", "Maria", "Rawr", 21, "J", "des"),
      new Censo("20202020", "Antonella", "Mollo", 21, "K", "des"),
      new Censo("30303030", "Nacho", "Rodriguez", 23, "L", "est"),
      new Censo("40404040", "Martin", "Chaia", 23, "M", "ind"),
      new Censo("50505050", "Eric", "Galli", 19, "N", "est"),
      new Censo("60606060", "Jose", "Artigas", 78, "O", "des"),
      new Censo("70707070", "Adrian", "Ramos", 23, "P", "est"),
      new Censo("80808080", "Adriana", "Pintos", 44, "Q", "ind"),
      new Censo("90909090", "Rosina", "Santos", 25, "R", "ind"),
      new Censo("12121212", "Rocio", "Lujan", 18, "S", "est"),
      new Censo("21212121", "Esther", "Esposito", 15, "S", "est"),
      new Censo("13131313", "Gian", "Colman", 23, "R", "est"),
      new Censo("31313131", "Santiago", "Fagundez", 40, "Q", "dep"),
      new Censo("41414141", "Isak", "Alexander", 40, "P", "dep"),
      new Censo("14141414", "Ivan", "Rustik", 70, "O", "ind"),
      new Censo("51515151", "Tomas", "Vino", 24, "N", "est"),
      new Censo("61616161", "Lucia", "Casanova", 20, "M", "dep"),
      new Censo("16161616", "Carolina", "Robaina", 22, "L", "ind"),
      new Censo("15151515", "Berta", "Paquita", 110, "K", "des"),
      new Censo("42069133", "Josefina", "Color", 1, "J", "ind")
    ];
    this.censistas = [
      new Censista("ganimomu", "Gabriel", "1Abc2"),
      new Censista("nico", "Nicolas", "1Abc2"),
      new Censista("juan", "Juan", "1Abc2")
    ];
    this.departamentos = [
      new Departamento("Artigas", "G"),
      new Departamento("Canelones", "A"),
      new Departamento("Cerro Largo", "E"),
      new Departamento("Colonia", "L"),
      new Departamento("Durazno", "Q"),
      new Departamento("Flores", "N"),
      new Departamento("Florida", "O"),
      new Departamento("Lavalleja", "P"),
      new Departamento("Maldonado", "B"),
      new Departamento("Montevideo", "S"),
      new Departamento("Paysandú", "I"),
      new Departamento("Rio Negro", "J"),
      new Departamento("Rivera", "F"),
      new Departamento("Rocha", "C"),
      new Departamento("Salto", "H"),
      new Departamento("San José", "M"),
      new Departamento("Soriano", "K"),
      new Departamento("Tacuarembo", "R"),
      new Departamento("Treinta y Tres", "D"),
    ];
  }
  guardarCenso(censo) {
    this.censos.push(censo);
  }
  registrarCensista(registro) {
    this.censistas.push(registro);
  }
  verificarCensos() {
    for (let i = 0; i < this.censos.length; i++) {
      let censo = this.censos[i]
      let rng = numeroAleatorio(100)
      let censista = this.censistas[numeroAleatorio(this.censistas.length)];
      censo.idCensistas = censista.idCensistas
      if (rng % 3 === 0) {
        censo.verificado = true
        console.log(`Censo pre-verificado: ${censo.cedula}`)
      }
    }

  }
  borrarCenso(cedula) {
    for (let i = 0; i < this.censos.length; i++) {
      let censo = this.censos[i]
      if (cedula === censo.cedula) {
        this.censos.splice(i, 1)
        break
      }
    }
  }
  reiniciarContadores() {
    for (let f = 0; f < sistema.departamentos.length; f++) {
      let departamento = sistema.departamentos[f]
      departamento.censados = 0
      departamento.dependientes = 0
      departamento.independientes = 0;
      departamento.estudiantes = 0;
      departamento.noTrabajan = 0;
    }
  }
}