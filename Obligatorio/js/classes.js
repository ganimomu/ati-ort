idCensistas = 0
class Departamento {
  // Clase para componer la lista de departamentos. I Idealmente se compararia código de departamento (departamento.codigo) contra un objeto de la clase y retornar departamento.nombre donde corresponda
  constructor(nombre, codigo) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.censados = 0
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
    this.edad = edad;
    this.departamento = departamento;
    this.ocupacion = ocupacion;
    this.censista;
    this.verificado = false;
  }
}

class Sistema {
  constructor() {
    this.censos = [new Censo("51474238", "Gabriel", "Moreno", 21, "S", "dep", false)];
    this.censistas = [new Censista("ganimomu", "Gabriel", "1Abc2"), new Censista("nmsa545", "Gabriel", "1Abc2")];
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
}