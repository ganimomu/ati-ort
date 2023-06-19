let sistema = new Sistema();
let login; // Variable que va guardar si el usuario que inicia sesión es censista o censado //login al ingresar pasa a ser un nuevo objeto

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


function reloadLogin() { //funcion de prueba de mostrar secciones
  if (login.idCensistas > -1) {
    mostrarBotones("censista")
  } else {
    mostrarBotones("invitado")
  }
}

function verificarLogin(username, password) { //funcion que recibe 2 parametros, usuario y contrsenia para verificar el ingreso de un censista
  let usuario = false //se inicializa variable usuario en false
  for (let i = 0; i < sistema.censistas.length; i++) { //recorre cada posicion del array censistas en la clase sistema
    let censista = sistema.censistas[i] // a cada objeto cargado en el array censistas lo guarda en una variable censista
    if (censista.usuario === username) { // verifica si el usuario precargado en el objeto censista es igual al username ingresado
      usuario = censista //
      if (censista.contrasena === password) {
        return usuario
      }
    }
  }
  return usuario //porque retona 2 veces usuario?
}

/* 
FUNCIONALIDAD PARA INGRESAR AL SISTEMA
*/


document.querySelector("#slcUser").addEventListener("change", mostrarIngreso); //al seleccionar una opcion de un combo desplegable se llama a la funcion mostrarIngreso
document.querySelector("#btnLogin").addEventListener("click", ingresoSistema); //al hacer click en el boton con id:btnLogin se llama a la funcion igresoSistema

function ingresoSistema() {
  let tipoUsuario = document.querySelector("#slcUser").value //variable tipoUsuario que guarda el valor de lo seleccionado en el combo desplegable (censista o invitado)
  let usuario = document.querySelector("#txtUsuario").value.toLowerCase(); //variable usuario que guarda el nombre de usuario ingresado convertido a minusculas
  let contrasenia = document.querySelector("#txtPassword").value; ////variable contrasenia que guarda la contrasaenia ingresada


  if (tipoUsuario === "u") { //compara si el tipo de usuario seleccionado en el slcUser es igual a "u" -> censista
    document.querySelector("#txtCedulaCenso").removeAttribute("disabled"); // le quita el disabled al campo de texto para ingresar una cedula para iniciar un censo
    if (validarCamposCompletados(usuario, contrasenia)) { // invoca a la funcion validarCamposCompletados y le pasa como parametro el usuario y la contrasenia ingresados, esta funcion va a devolver un true o false

      let loginValidado = verificarLogin(usuario, contrasenia) //si la funcion anterior devuelve un valor booleano true (osea los campos estan completados)
      if (!loginValidado) { //
        document.querySelector("#pMsj").innerHTML = "El nombre de usuario o la contraseña ingresada son incorrectas";

      } else {
        login = loginValidado
        limpiarCampos()
        document.querySelector("#pMsj").innerHTML = "Ingreso correctamente al sistema";
        cambiarSeccion("iniciarCenso")
      }
    } else {
      document.querySelector("#pMsj").innerHTML = "Debe completar todos los campos";
    }
  } else if (tipoUsuario === "i") {
    cedula = stringifyCedula(usuario)
    if (validarCamposCompletados(cedula)) {

      if (verificacionDeCI(cedula)) {

        login = {
          usuario: cedula,
          tipo: "invitado",
          idCensistas: -1,
          censado: false
        }
        for (let i = 0; i < sistema.censos.length; i++) {
          let censados = sistema.censos[i]
          if (cedula === censados.cedula) {
            login.censado = true
          }
          document.querySelector("#txtCedulaCenso").setAttribute("disabled", "disabled");
          document.querySelector("#txtCedulaCenso").value = `${cedula}`;
          break
        }
        cargarDatos(login.usuario)
        cambiarSeccion("datos")
        mostrarBotones("invitado")
      } else {
        document.querySelector("#pMsj").innerHTML = "Introduzca una cedula valida";
      }
    } else {
      document.querySelector("#pMsj").innerHTML = "Debe completar todos los campos";
    }
  }
  if (login) {
    document.querySelector("#spanUsuario").innerHTML = `Ingreso como ${login.usuario}`;

  }
  tipoUsuario.innerHTML = ""
  contrasenia.innerHTML = ""
  usuario.innerHTML = ""
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
  if (!validarCamposCompletados(cedula)) {
    document.querySelector("#pConsultaCensos").innerHTML = "Debe completar todos los campos";
  } else {
    if (!verificacionDeCI(cedula)) {
      document.querySelector("#pConsultaCensos").innerHTML = "Debe ingresar una cedula valida";
    } else {
      cargarDatos(cedula)
      cambiarSeccion("datos")
    }
  }
}


// INICIO LOGICA CARGA DE DATOS PARA CENSO


function cargarDatos(cedula) {
  desbloquearCampos();
  let stringCedula = stringifyCedula(cedula)
  limpiarCampos()
  let censoEncontrado = null;
  document.querySelector("#btnIngresarDatos").value = "Registrar censo";
  document.querySelector("#btnIngresarDatos").style.display = "block";
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

  if (!censoEncontrado) {
    document.querySelector("#pMsj").innerHTML =
      "No se ha encontrado censo pre-cargado para la cédula ingresada";
  } else {
    document.querySelector("#txtCedulaCenso").setAttribute("disabled", "disabled");
    if (censoEncontrado.verificado) {
      bloquearCampos()
      document.querySelector("#pAuxDatos").innerHTML = `El censo para la cédula ${censoEncontrado.cedula} fue verificado por un censista. Se ha deshabilitado el ingreso de datos o modificación de los ya existentes <br>      `
      document.querySelector("#btnIngresarDatos").style.display = "none";
      document.querySelector("#btnEliminarDatos").style.display = "none";
    }
  }
  cambiarSeccion("datos")
}

// FIN LÓGICA CARGA DE DATOS



document.querySelector("#btnConsultaCensos").addEventListener("click", consultarCensos);

function consultarCensos() {
  let cedula = stringifyCedula(document.querySelector("#txtCedula").value);
  if (!validarCamposCompletados(cedula)) {
    document.querySelector("#pCedula").innerHTML = "Debe completar todos los campos";
  } else {
    if (!verificacionDeCI(cedula)) {
      document.querySelector("#pCedula").innerHTML = "Debe ingresar una cedula valida";
    } else {
      cargarDatos(cedula)
      cambiarSeccion("datos")
    }
  }
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

function tomarDatosCenso() {
  let cedula = document.querySelector("#txtCedulaCenso").value;
  let nuevaCedula = stringifyCedula(cedula);
  let nombre = document.querySelector("#txtNombre").value;
  let apellido = document.querySelector("#txtApellido").value;
  let edad = document.querySelector("#txtEdad").value;
  let departamento = document.querySelector("#slcDepartamento").value;
  let ocupacion = document.querySelector("#slcOcupacion").value;

  return {
    cedula: nuevaCedula,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    departamento: departamento,
    ocupacion: ocupacion
  }
}


document
  .querySelector("#btnIngresarDatos")
  .addEventListener("click", ingresarDatosPersona);

function ingresarDatosPersona() {
  let parrafo = document.querySelector("#pAuxDatos");
  parrafo.innerHTML = "";
  let datos = tomarDatosCenso()

  if (!validarCamposCompletados(
      datos.cedula,
      datos.nombre,
      datos.apellido,
      datos.edad,
      datos.departamento,
      datos.ocupacion
    )) {
    parrafo.innerHTML = "Debe completar todos los campos";
    return;
  }
  if (!verificarEdad(datos.edad)) {
    parrafo.innerHTML = "Edad invalida. (No puede ser menor que 0 ni mayor que 130";
    return;
  }

  let censoExistente = false
  for (let i = 0; i < sistema.censos.length; i++) {
    let censo = sistema.censos[i]
    if (datos.cedula === censo.cedula) {
      censoExistente = censo
    }
  }
  if (!censoExistente) {
    let censo = new Censo(datos.cedula, datos.nombre, datos.apellido, datos.edad, datos.departamento, datos.ocupacion)
    sistema.guardarCenso(censo)
    let toValidate = tomarCensoExistente(datos.cedula)
    parrafo.innerHTML = "Se han ingresado los datos del censo correctamente"
    if (login.idCensistas !== -1) {
      toValidate.verificado = true
      toValidate.censista = login.idCensistas
    } else {
      let idAsignar = numeroAleatorio(sistema.censistas.length)
      toValidate.idCensistas = idAsignar;
      let censista
      for (let i = 0; i < sistema.censistas.length; i++) {
        persona = sistema.censistas[i]
        if (persona.idCensistas === idAsignar) {
          censista = persona

        }
      }
      document.querySelector("#postCenso").innerHTML = `<h3>¡Felicidades!</h3><p>Gracias <strong>${toValidate.nombre} ${toValidate.apellido}</strong> por completar el censo!</p><p id="pPostCenso"></p>`;
      document.querySelector("#pPostCenso").innerHTML = `Se han ingresado correctamente los datos del censo. El censista que pasará por su casa a validar su censo se llama: ${censista.nombre}`
      return cambiarSeccion("postCenso")
    }
  } else {
    censoExistente.nombre = datos.nombre
    censoExistente.apellido = datos.apellido
    censoExistente.edad = datos.edad
    censoExistente.departamento = datos.departamento
    censoExistente.ocupacion = datos.ocupacion
    if (login.idCensistas !== -1) {
      let toValidate = tomarCensoExistente(datos.cedula)
      toValidate.verificado = true
      toValidate.censista = login.idCensistas
    }
    parrafo.innerHTML = "Se han modificado los datos del censo correctamente"
  }
  cargarDatos(datos.cedula)
}



// LÓGICA ELIMINAR CENSO
document.querySelector("#btnEliminarDatos").addEventListener("click", eliminarCenso);

function eliminarCenso() {
  let datos = tomarDatosCenso()
  let censo = tomarCensoExistente(datos.cedula)
  if (!censo.verificado) {
    sistema.borrarCenso(datos.cedula)
    document.querySelector("#btnIngresarDatos").value = "Registrar censo";
    document.querySelector("#pAuxDatos").innerHTML = "Se ha eliminado el censo del sistema"
    limpiarCampos()
  }
  desbloquearCampos()

}

// LÓGICA REASIGNAR CENSISTA
document.querySelector("#btnReasignar").addEventListener("click", leerDatosReasignacion)

function leerDatosReasignacion() {
  let slcPersonasPendientes = document.querySelector("#slcPersonasPendientes");
  let slcCensistasDisponibles = document.querySelector("#slcCensista");
  let idCensista = login.idCensistas
  slcPersonasPendientes.innerHTML = `<option value="select" selected disabled >Seleccionar...</option>`
  slcCensistasDisponibles.innerHTML = `<option value="select" selected disabled>Seleccionar...</option>`
  for (let i = 0; i < sistema.censistas.length; i++) {
    let censista = sistema.censistas[i]
    if (censista.idCensistas !== idCensista) {
      slcCensistasDisponibles.innerHTML += `<option value="${censista.idCensistas}">${censista.nombre} (${censista.usuario})</option>`
    }
  }
  for (let i = 0; i < sistema.censos.length; i++) {
    let censo = sistema.censos[i]
    if (censo.idCensistas === idCensista && !censo.verificado) {
      slcPersonasPendientes.innerHTML += `<option value="${censo.cedula}">${censo.cedula} - ${censo.nombre} ${censo.apellido}</option>`

    }
  }
}


document.querySelector("#btnReasignacion").addEventListener("click", reasignarCensista)

function reasignarCensista() {
  let slcPersonasPendientes = document.querySelector("#slcPersonasPendientes").value;
  let slcCensistasDisponibles = Number(document.querySelector("#slcCensista").value);
  let censo = tomarCensoExistente(slcPersonasPendientes)
  let censista = tomarCensista(slcCensistasDisponibles)
  censo.idCensistas = censista.idCensistas
  leerDatosReasignacion()
  document.querySelector("#pReasignacion").innerHTML = `Se ha reasignado la persona con cédula ${censo.cedula} al censista ${censista.nombre}`;

}

//info estadistica
document.querySelector("#btnVisualizarEstadisticas").addEventListener("click", visualizarInfoEstadistica);

function visualizarInfoEstadistica() {
  reiniciarEstadistica()
  recorrerCensos()
  let totalCensados = personasCensadas()
  if (login.idCensistas === -1) {
    document.querySelector("#visualizarEstadisticas").innerHTML = `
    <h3> Listado de censados </h3>
    <span> Total personas censadas: ${totalCensados} </span>
    <table>
            <thead>
              <tr>
                <th>Departamento</th>
                <th>Estudian</th>
                <th>No trabajan</th>
                <th>Dependientes o independientes</th>
                <th>% total de censados</th>
              </tr>
            </thead>
            <tbody id="estadisticasPublicas">
            </tbody>
          </table>
    `;
    for (let i = 0; i < sistema.departamentos.length; i++) {
      let departamento = sistema.departamentos[i]
      if (departamento.censados > 0) {

        document.querySelector("#estadisticasPublicas").innerHTML += `
        <tr>
        <td>${departamento.nombre}</td>
        <td>${departamento.estudiantes}</td>
        <td> ${departamento.noTrabajan} </td>
        <td> ${(departamento.dependientes)+(departamento.independientes)} </td>
        <td> ${Math.floor((departamento.censados*100)/totalCensados)} </td>
        `
      }
    }
  }
}

function recorrerCensos() {
  for (let i = 0; i < sistema.censos.length; i++) {
    let censo = sistema.censos[i]
    for (let f = 0; f < sistema.departamentos.length; f++) {
      let departamento = sistema.departamentos[f]
      if (censo.departamento === departamento.codigo) {
        ++departamento.censados
        switch (censo.ocupacion) {
          case "dep":

            ++departamento.dependientes
            break;
          case "ind":
            ++departamento.independientes;
            break;
          case "est":
            ++departamento.estudiantes;
            break;
          case "des":
            ++departamento.noTrabajan;
            break;
          default:
            break;
        }
      }
    }
  }
}

function reiniciarEstadistica() {
  for (let i = 0; i < sistema.censos.length; i++) {
    let censo = sistema.censos[i]
    for (let f = 0; f < sistema.departamentos.length; f++) {
      let departamento = sistema.departamentos[f]
      if (censo.departamento === departamento.codigo) {
        departamento.censados = 0
        switch (censo.ocupacion) {
          case "dep":

            departamento.dependientes = 0
            break;
          case "ind":
            departamento.independientes = 0;
            break;
          case "est":
            departamento.estudiantes = 0;
            break;
          case "des":
            departamento.noTrabajan = 0;
            break;
          default:
            break;
        }
      }
    }
  }

}

function asignarCensistaAleatorioOnStartup() {
  for (let i = 0; i < sistema.censos.length; i++) {
    let censo = sistema.censos[i]
    if (censo.idCensistas === -1) {
      censo.idCensistas = numeroAleatorio(sistema.censistas.length)
    }
  }
}
asignarCensistaAleatorioOnStartup()

function personasCensadas() {
  let contadorPersonas = 0
  contadorPersonas = sistema.censos.length;
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

function mostrarMensaje(mensaje) {
  document.querySelector("#pMensaje").innerHTML = mensaje;
}

//---------------------------------------------------------------------------


ocultarSecciones(); // Oculta todas las secciones al inicio
cambiarSeccion("inicio");
//mostrarBotones("inicio") // HABILITAR ESTA LLAMADA PARA OCULTAR BOTONES AL INICIO

sistema.verificarCensos()

//------------------------------------