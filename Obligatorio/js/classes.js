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
    this.censista = -1;
    this.verificado = false;
  }
}

class Sistema {
  constructor() {
    this.censos = [new Censo("51474238", "Gabriel", "Moreno", 21, "S", "dep", false), new Censo("11111111", "Lucas", "Alfaro", 21, "C", "des"), new Censo("22222222", "Pablo", "Moreno", 52, "A", "est")];
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