let sistema = new Sistema();
let login; // Variable que va guardar si el usuario que inicia sesión es censista o censado

function cargarDepartamentos() {
  let datos = document.querySelector("#slcDepartamento");
  let grafico = document.querySelector("#slcEstadCensos");
  for (let i = 0; i < sistema.departamentos.length; i++) {
    let departamento = sistema.departamentos[i];
    datos.innerHTML += `<option value=${departamento.codigo}>${departamento.nombre}</option>`;
    grafico.innerHTML += `<option value=${departamento.codigo}>${departamento.nombre}</option>`;
  }
}
cargarDepartamentos();

/* 
FUNCIONALIDAD PARA INGRESAR AL SISTEMA
*/

document.querySelector("#slcUser").addEventListener("change", mostrarIngreso);
document.querySelector("#btnLogin").addEventListener("click", ingresoSistema);

function ingresoSistema() {
  let tipoUsuario = document.querySelector("#slcUser").value
  let username = document.querySelector("#txtUsuario").value.toLowerCase();
  let password = document.querySelector("#txtPassword").value;


  if (tipoUsuario === "u") {
    document.querySelector("#txtCedulaCenso").removeAttribute("disabled");
    if (validarCamposCompletados(username, password)) {

      let verificarLogin = (username, password) => {
        for (let i = 0; i < sistema.censistas.length; i++) {
          let censista = sistema.censistas[i]
          if (censista.usuario === username) {
            return password === censista.contrasena
          }
        }
      }
      if (verificarLogin(username, password)) {
        login = {
          user: username,
          tipo: "censista",
        }
        limpiarCampos()
        document.querySelector("#pMsj").innerHTML = "Ingreso correctamente al sistema";
        cambiarSeccion("iniciarCenso")

      } else {
        document.querySelector("#pMsj").innerHTML = "El nombre de usuario o la contraseña ingresada son incorrectas";
      }

    } else {

      document.querySelector("#pMsj").innerHTML = "Debe completar todos los campos";
    }
  } else if (tipoUsuario === "i") {
    cedula = stringifyCedula(username)
    if (validarCamposCompletados(cedula)) {

      if (verificacionDeCI(cedula)) {

        login = {
          user: cedula,
          tipo: "invitado",
          censado: false
        }
        for (let i = 0; i < sistema.censos.length; i++) {
          let censados = sistema.censos[i]
          if (cedula === censados.cedula) {
            document.querySelector("#pMsj").innerHTML = "Cedula encontrada";
            login.censado = true
          }
          document.querySelector("#txtCedulaCenso").setAttribute("disabled", "disabled");
          document.querySelector("#txtCedulaCenso").value = `${cedula}`;
          break
        }
        cargarDatos(login.user)
        cambiarSeccion("datos")
        /* mostrarBotones("invitado") */
      } else {
        document.querySelector("#pMsj").innerHTML = "Debe completar todos los campos";
      }
    } else {
      document.querySelector("#pMsj").innerHTML = "Introduzca una cedula valida";
    }
  }
  if (login) {
    document.querySelector("#spanUsuario").innerHTML = `Ingreso como ${login.user}`;

  }
  tipoUsuario.innerHTML = ""
  password.innerHTML = ""
  username.innerHTML = ""
}

function mostrarIngreso() {
  let value = document.querySelector("#slcUser").value;
  let txtPassword = document.querySelector("#txtPassword");
  let labelPassword = document.querySelector("#lblPassword");
  let txtUsuario = document.querySelector("#txtUsuario");
  let labelUsuario = document.querySelector("#lblUsuario");

  document.querySelector("#login").style.display = "block";
  document.querySelector("#pMsj").innerHTML = "";
  if (value === "u") {
    document.querySelector(
      "#lblUsuario"
    ).innerHTML = `Ingrese su nombre de usuario:`;
    labelUsuario.style.display = "block"
    txtUsuario.style.display = "block"
    labelPassword.style.display = "block"
    txtPassword.style.display = "block"
  } else if (value === "i") {
    document.querySelector("#lblUsuario").innerHTML = `Ingrese su cédula:`;
    labelUsuario.style.display = "block"
    txtUsuario.style.display = "block"
    labelPassword.style.display = "none"
    txtPassword.style.display = "none"
  }
}

function verificacionDeCI(cedula) {
  let CI = cedula
  if (CI.length === 7) {
    CI = "0" + CI;
  }
  let codigo = "2987634";
  let acumulador = 0;
  let digitoVerificar = CI.charAt(CI.length - 1);
  for (let i = 0; i < CI.length - 1; i++) {
    acumulador += Number(CI.charAt(i)) * Number(codigo.charAt(i))
  }
  let digitoVerificador = (10 - (acumulador % 10)) % 10;
  return Number(digitoVerificar) === digitoVerificador
}

// FIN LÓGICA INGRESO

document.querySelector("#btnIniciarCenso").addEventListener("click", censoByCensista);

function censoByCensista() {
  let cedula = stringifyCedula(document.querySelector("#txtCedulaPre").value)
  cargarDatos(cedula)
  cambiarSeccion("datos")
}


// INICIO LOGICA CARGA DE DATOS PARA CENSO


function cargarDatos(cedula) {
  let stringCedula = stringifyCedula(cedula)
  limpiarCampos()
  let censoEncontrado = null;
  document.querySelector("#btnIngresarDatos").value = "Registrar censo";
  for (let i = 0; i < sistema.censos.length; i++) {
    let persona = sistema.censos[i];
    if (persona.cedula === stringCedula) {
      if (login.tipo === "invitado") {
        document.querySelector("#btnIngresarDatos").value = "Modificar censo";
      } else {
        document.querySelector("#btnIngresarDatos").value = "Validar censo";
      }
      censoEncontrado = persona;
      document.querySelector("#txtNombre").value = persona.nombre;
      document.querySelector("#txtApellido").value = persona.apellido;
      document.querySelector("#txtEdad").value = persona.edad;
      document.querySelector("#slcDepartamento").value = persona.departamento;
      document.querySelector("#slcOcupacion").value = persona.ocupacion;
      document.querySelector("#btnEliminarDatos").style.display = "block";
      break;
    }
  }
  document.querySelector("#txtCedulaCenso").value = `${stringCedula}`;

  if (censoEncontrado) {
    document.querySelector("#pMsj").innerHTML = "Censo encontrado";
    document.querySelector("#txtCedulaCenso").setAttribute("disabled", "disabled");
  } else {
    document.querySelector("#pMsj").innerHTML =
      "No se ha encontrado censo pre-cargado para la cédula ingresada";
  }
  cambiarSeccion("datos")
}

// FIN LÓGICA CARGA DE DATOS



document.querySelector("#btnConsultaCensos").addEventListener("click", consultarCensos);

function consultarCensos() {
  let cedula = document.querySelector("#txtCedula").value;
  cargarDatos(cedula)
  cambiarSeccion("datos")
}


//---------------------------------------------------------------------------------------
//funcionalidad para registrar un nuevo censista

document
  .querySelector("#btnRegistrar")
  .addEventListener("click", registrarCensista);


function verificarNombreUsuarioUnico(nombreUsuario) {
  let existe = false;
  for (let i = 0; i < sistema.censistas.length; i++) {
    let censista = sistema.censistas[i];
    if (censista.usuario.toLowerCase() === nombreUsuario.toLowerCase()) {
      existe = true;
    }
  }
  return existe;
}

function registrarCensista() {
  let nombreUsuario = document.querySelector("#txtNombreDeUsuarioRegistro").value;
  let nombre = document.querySelector("#txtNombreRegistro").value;
  let contra = document.querySelector("#txtContraRegistro").value;

  if (!validarCamposCompletados(nombreUsuario, nombre, contra)) {
    document.querySelector("#pMensajes").innerHTML =
      "Debe llenar todos los campos";
    return;
  }

  if (verificarNombreUsuarioUnico(nombreUsuario)) {
    document.querySelector("#pMensajes").innerHTML =
      "Ya existe otro usuario con el mismo nombre de usuario";
    return;
  }

  if (!verificarFormatoContrasena(contra)) {
    document.querySelector("#pMensajes").innerHTML =
      "La contraseña debe tener como minimo 5 caracteres y debe incluir una minuscula, una mayuscula y un numero";
    return;
  }

  let censista = new Censista(nombreUsuario, nombre, contra);
  sistema.registrarCensista(censista);

  document.querySelector("#pMensajes").innerHTML = "Registro exitoso";
}

//------------------------------------------------------------------------

//funcion para acumular los datos de una nueva persona

document
  .querySelector("#btnIngresarDatos")
  .addEventListener("click", ingresarDatosPersona);

function ingresarDatosPersona() {
  let parrafo = document.querySelector("#pAuxDatos");
  parrafo.innerHTML = "";
  let cedula = document.querySelector("#txtCedulaCenso").value;
  let nuevaCedula = stringifyCedula(cedula);
  let nombre = document.querySelector("#txtNombre").value;
  let apellido = document.querySelector("#txtApellido").value;
  let edad = document.querySelector("#txtEdad").value;
  let departamento = document.querySelector("#slcDepartamento").value;
  let ocupacion = document.querySelector("#slcOcupacion").value;

  if (!validarCamposCompletados(
      nuevaCedula,
      nombre,
      apellido,
      edad,
      departamento,
      ocupacion
    )) {
    document.querySelector("#pAuxDatos").innerHTML = "Debe completar todos los campos";
    return;
  }
  if (!verificarEdad(edad)) {
    document.querySelector("#pAuxDatos").innerHTML = "Edad invalida. (No puede ser menor que 0 ni mayor que 130";
    return;
  }

  let censoExiste = false
  let censoExistente
  for (let i = 0; i < sistema.censos.length; i++) {
    let censo = sistema.censos[i]
    if (nuevaCedula === censo.cedula) {
      censoExiste = true
      censoExistente = censo
    }
  }
  console.log(censoExistente);
  console.log(censoExiste);
  if (!censoExiste) {
    let censo = new Censo(nuevaCedula, nombre, apellido, edad, departamento, ocupacion)
    sistema.guardarCenso(censo)
    parrafo.innerHTML = "Se han ingresado los datos del censo correctamente"
  } else {
    censoExistente.nombre = nombre
    censoExistente.apellido = apellido
    censoExistente.edad = edad
    censoExistente.departamento = departamento
    censoExistente.ocupacion = ocupacion
    parrafo.innerHTML = "Se han modificado los datos del censo correctamente"

  }
}

function stringifyCedula(cedula) {
  let newCedula = ""; // Variable guardada como string así al sumar en la verificación arroja el string entero y no suma los números
  for (let i = 0; i < cedula.length; i++) {
    let digito = cedula.charAt(i);
    if (!isNaN(digito)) {
      newCedula += digito;
    }
  }
  return newCedula;
}

function verificarEdad(edad) {
  return (Number(edad) > 0 && Number(edad) < 130);
}


//info estadistica
function visualizarInfoEstadistica() {


}


function personasCensadas() {
  let contadorPersonas = sistema.censos.length;
  return contadorPersonas;
}

function cantCensadosDept() {
  sistema.censos[0].departamento
  for (let i = 0; i < sistema.censos.length; i++) {
    sistema.censos[i].departamento
    for (let y = 0; y < sistema.departamentos.length; y++) {
      if (sistema.censos[i].departamento === sistema.departamentos[y].codigo) {
        sistema.departamentos[y].censados++
      }
    }
  }

}

function usuarioVerificado() {
  //buscar la cedula
  //si la cedula fue verificada cambiar el verificado a true
}



function verificarCamposCompletados() {
  if (
    cedula === "" ||
    nombre === "" ||
    apellido === "" ||
    isNaN(edad) ||
    departamento === "" ||
    ocupacion === ""
  ) {
    mostrarMensaje("Por favor, ingrese todos los datos correspondientes.");
    return false;
  }
  return true;
}

function limpiarCampos() {
  document.querySelector("#txtPassword").value = "";
  document.querySelector("#txtNombreDeUsuarioRegistro").value = "";
  document.querySelector("#txtContraRegistro").value = "";
  document.querySelector("#txtNombreRegistro").value = "";
  document.querySelector("#txtUsuario").value = "";
  document.querySelector("#txtCedula").value = "";
  document.querySelector("#txtNombre").value = "";
  document.querySelector("#txtApellido").value = "";
  document.querySelector("#txtEdad").value = "";
  document.querySelector("#slcDepartamento").value = "";
  document.querySelector("#slcOcupacion").value = "";
}

function mostrarMensaje(mensaje) {
  document.querySelector("#pMensaje").innerHTML = mensaje;
}

//---------------------------------------------------------------------------

function ocultarSecciones() {
  let secciones = document.querySelectorAll(".seccion"); //.seccion hablo del atributo class
  for (let i = 0; i < secciones.length; i++) {
    //secciones va a ser un array de elementos html
    const seccion = secciones[i];
    seccion.style.display = "none";
  }
}

function mostrarBotones(tipo) {
  let botones = document.querySelectorAll(".btn");
  for (let i = 0; i < botones.length; i++) {
    const boton = botones[i];
    boton.style.display = "none";
  }

  let botonesMostrar = document.querySelectorAll("." + tipo);
  for (let i = 0; i < botonesMostrar.length; i++) {
    const botonMostrar = botonesMostrar[i];
    botonMostrar.style.display = "block";
  }
}


let botones = document.querySelectorAll(".btn");
for (let i = 0; i < botones.length; i++) {
  const boton = botones[i];
  boton.addEventListener("click", mostrarSeccion);
}

function mostrarSeccion() {
  let idBoton = this.getAttribute("id");
  let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.substring(4);
  cambiarSeccion(idSeccion);
}


function cambiarSeccion(nuevaSeccion) {
  ocultarSecciones();
  document.querySelector("#" + nuevaSeccion).style.display = "block";
}
ocultarSecciones(); // Oculta todas las secciones al inicio
cambiarSeccion("ingreso");
// mostrarBotones("inicio") HABILITAR ESTA LLAMADA PARA OCULTAR BOTONES AL INICIO



//------------------------------------