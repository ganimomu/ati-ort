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
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = Number(edad);
    this.departamento = departamento;
    this.ocupacion = ocupacion;
    this.idCensistas = -1;
    this.verificado = false;
  }
}

class Sistema {
  constructor() {
    this.censos = [
      new Censo("51474238", "Gabriel", "Moreno", 21, "S", "dep"),
      new Censo("11111111", "Lucas", "Alfaro", 21, "C", "des"),
      new Censo("22222222", "Pablo", "Moreno", 52, "A", "est"),
      new Censo("52985167", "Franco", "Notte", 20, "S", "est"),
      new Censo("12345678", "Julieta", "Rovetta", 20, "S", "est"),
      new Censo("91233223", "Marcos", "Romero", 12, "S", "dep"),
      new Censo("41421421", "Lucas", "Gargiulo", 31, "S", "dep"),
      new Censo("14124124", "Juan", "Pablo", 32, "S", "est"),
      new Censo("53534543", "Diego", "Forlan", 45, "S", ""),
      new Censo("45354553", "Ernesto", "Buysan", 23, "S", "des"),
      new Censo("32432332", "Maria", "Rawr", 21, "S", "des"),
      new Censo("12332213", "Antonella", "Mollo", 21, "S", "des"),
      new Censo("24214124", "Nacho", "Rodriguez", 23, "S", "est"),
      new Censo("45454343", "Martin", "Chaia", 23, "S", "ind"),
      new Censo("52356565", "Eric", "Galli", 19, "S", "est"),
      new Censo("29657754", "Jose", "Artigas", 78, "S", "des"),
      new Censo("34565532", "Adrian", "Ramos", 23, "S", "est"),
      new Censo("43523534", "Adriana", "Pintos", 44, "S", "ind"),
      new Censo("35255332", "Rosina", "Santos", 25, "S", "ind"),
      new Censo("12341111", "Rocio", "Lujan", 18, "S", "est"),
      new Censo("22221113", "Esther", "Esposito", 15, "S", "est"),
      new Censo("33322211", "Gian", "Colman", 23, "S", "est"),
      new Censo("44433322", "Santiago", "Fagnoni", 40, "S", "dep"),
      new Censo("55544433", "Isak", "Alexander", 40, "S", "dep"),
      new Censo("66655544", "Ivan", "Rustik", 70, "S", "ind"),
      new Censo("77766655", "Tomas", "Vino", 24, "S", "est"),
      new Censo("33222666", "Lucia", "Casanova", 20, "S", "dep"),
      new Censo("66666666", "Carolina", "Robaina", 22, "S", "ind"),
      new Censo("69696969", "Berta", "Paquita", 110, "S", "des"),
      new Censo("42069133", "Josefina", "Color", 1, "S", "ind")
    ];
    this.censistas = [new Censista("ganimomu", "Gabriel", "1Abc2"), new Censista("nico", "Nicolas", "1Abc2"), new Censista("juan", "Juan", "1Abc2")];
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
    this.censos[1].verificado = true
    this.censos[1].censista = 0

  }
  borrarCenso(cedula) {
    for (let i = 0; i < this.censos.length; i++) {
      let censo = this.censos[i]
      if (cedula === censo.cedula) {
        this.censos.splice(censo, 1)
        break
      }
    }
  }
}