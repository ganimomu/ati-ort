let sistema = new Sistema(); //Crea una nueva instancia de la clase "Sistema" y la asigna a la variable "sistema".
let pAuxDatos = document.querySelector("#pAuxDatos"); //Asigna el elemento HTML con el ID "pAuxDatos" a la variable pAuxDatos.
let login; // Variable que va guardar si el usuario que inicia sesión es censista o censado - login al ingresar pasa a ser un nuevo objeto.

document.querySelector("#logoff").addEventListener("click", logoff); // Agrega un evento de clic al elemento con el ID "logoff" y llama a la función logoff cuando se produce el clic.

function logoff() {
  login = null; // Establece la variable "login" como null, lo que indica que no hay ningún usuario autenticado.
  reloadLogin(); //Llama a la función "reloadLogin" para actualizar la interfaz de usuario después de cerrar sesión.
  limpiarMensajes(); //Llama a la función "limpiarMensajes" para eliminar cualquier mensaje de pantalla anterior.
  limpiarCampos(); //Llama a la función "limpiarCampos" para restablecer los campos de entrada del formulario.
}

function cargarDepartamentos() {
  let datos = document.querySelector("#slcDepartamento"); //Obtiene el elemento select con el ID "slcDepartamento" y lo asigna a la variable "datos".
  let grafico = document.querySelector("#slcEstadCensos"); //Obtiene el elemento select con el ID "slcEstadCensos" y lo asigna a la variable "grafico".
  for (let i = 0; i < sistema.departamentos.length; i++) { // Recorre los elementos del array "departamentos" del objeto "sistema".
    let departamento = sistema.departamentos[i]; //Obtiene el departamento actual del array departamentos y lo asigna a la variable "departamento".
    datos.innerHTML += `<option value=${departamento.codigo}>${departamento.nombre}</option>`; //Agrega una opción al elemento "datos" con el valor y nombre del departamento
    grafico.innerHTML += `<option value=${departamento.codigo}>${departamento.nombre}</option>`; //Agrega una opción al elemento "grafico" con el valor y nombre del departamento
  }
}
cargarDepartamentos(); // Llama a la función cargarDepartamentos para cargar los departamentos en los elementos select correspondientes.


function reloadLogin() {
  if (login) { //Verifica si hay una sesión de inicio de sesión activa.
    document.querySelector("#spanUsuario").innerHTML = `Ingreso como ${login.usuario}`; //Actualiza el contenido del elemento con el ID "spanUsuario" para mostrar el nombre de usuario del inicio de sesión.
    document.querySelector("#logoff").innerHTML = "Cerrar sesión"; //Actualiza el contenido del elemento con el ID "logoff" para mostrar el texto "Cerrar sesión"
  }
  if (!login) { //Verifica si no hay una sesión de inicio de sesión activa.
    document.querySelector("#spanUsuario").innerHTML = ""; //Borra el contenido del elemento con el ID "spanUsuario".
    document.querySelector("#logoff").innerHTML = ""; //Borra el contenido del elemento con el ID "logoff".
    mostrarBotones("inicio"); //Llama a una función "mostrarBotones" pasando el parámetro "inicio" para mostrar los botones correspondientes a la sección de inicio.
    cambiarSeccion("inicio"); //Llama a una función "cambiarSeccion" pasando el parámetro "inicio" para cambiar la sección mostrada en la interfaz.
  } else if (login.idCensistas >= 0) { //Verifica si el inicio de sesión pertenece a un censista.
    mostrarBotones("censista"); //Llama a una función "mostrarBotones" pasando el parámetro "censista" para mostrar los botones correspondientes a la sección de censista.
  } else { // Si no cumple ninguna de las condiciones anteriores, se trata de un inicio de sesión de un invitado.
    mostrarBotones("invitado"); //Llama a una función "mostrarBotones" pasando el parámetro "invitado" para mostrar los botones correspondientes a la sección de invitado.
  }
}

function verificarLogin(username, password) { //Funcion que recibe 2 parametros, usuario y contrsenia para verificar el ingreso de un censista.
  let usuario = false; //Variable que almacenará El resultado de la verificación de inicio de sesión, se inicializa variable usuario en false.
  for (let i = 0; i < sistema.censistas.length; i++) { //Recorre cada posicion del array censistas en el objeto sistema.
    let censista = sistema.censistas[i]; // A cada objeto cargado en el array censistas lo guarda en una variable censista.
    if (censista.usuario === username) { // Verifica si el usuario precargado en el objeto censista es igual al username ingresado.
      if (censista.contrasena === password) { //Compara la contraseña del censista con la contraseña ingresada.
        usuario = censista; //Establece el objeto censista como el resultado de la verificación de inicio de sesión.
        return usuario; //Retorna el objeto "censista".
      }
    }
  }
  return usuario; //Retorna false si no se encontró un censista con las credenciales ingresadas.
}

/* 
FUNCIONALIDAD PARA INGRESAR AL SISTEMA
*/


document.querySelector("#slcUser").addEventListener("change", mostrarIngreso); //Agrega un evento de cambio al elemento select con el ID "slcUser". Cuando se selecciona una opción, se llama a la función "mostrarIngreso".
document.querySelector("#btnLogin").addEventListener("click", ingresoSistema); //Al hacer clic en el boton con id:btnLogin se llama a la funcion igresoSistema.

function ingresoSistema() {
  let tipoUsuario = document.querySelector("#slcUser").value; //Variable tipoUsuario que guarda el valor de lo seleccionado en el combo desplegable (censista o invitado).
  let usuario = document.querySelector("#txtUsuario").value.toLowerCase(); //Variable usuario que guarda el nombre de usuario ingresado convertido a minusculas.
  let contrasenia = document.querySelector("#txtPassword").value; //Variable contrasenia que guarda la contrasaenia ingresada.
  mostrarIngreso();


  if (tipoUsuario === "u") { //compara si el tipo de usuario seleccionado en el slcUser es igual a "u" -> censista
    document.querySelector("#txtCedulaCenso").removeAttribute("disabled"); // le quita el disabled al campo de texto para ingresar una cedula para iniciar un censo
    if (validarCamposCompletados(usuario, contrasenia)) { // invoca a la funcion validarCamposCompletados y le pasa como parametro el usuario y la contrasenia ingresados, esta funcion va a devolver un true o false

      let loginValidado = verificarLogin(usuario, contrasenia) //si la funcion anterior devuelve un valor booleano true (osea los campos estan completados) llama a la función "verificarLogin"
      if (!loginValidado) { //Si el resultado de la verificación de inicio de sesión es false
        document.querySelector("#pMsj").innerHTML = "El nombre de usuario o la contraseña ingresada son incorrectas";

      } else {
        login = loginValidado //Establece el resultado de la verificación de inicio de sesión como el valor de la variable "login".
        cambiarSeccion("consultarCensos")
        cargarPendientes(); // Llama a la función "cargarPendientes" para cargar los censos pendientes.
        limpiarCampos()
      }
    } else {
      document.querySelector("#pMsj").innerHTML = "Debe completar todos los campos";
    }
  } else if (tipoUsuario === "i") { //inicia una condición alternativa que verifica si el valor de tipoUsuario es igual a "i" (que representa la opción de invitado en el elemento desplegable).
    cedula = stringifyCedula(usuario); //Llama a la función stringifyCedula pasando el valor de usuario como argumento y asigna el resultado a la variable cedula
    if (validarCamposCompletados(cedula)) { //Inicia una condición que verifica si la función validarCamposCompletados devuelve true cuando se le pasa cedula como argumento. 
      if (verificacionDeCI(cedula) && Number(cedula) !== 0) {
        login = { //Asigna un nuevo objeto a la variable login
          usuario: cedula, //propiedad usuario = cedula
          idCensistas: -1, //propiedad idCensistas = -1
          censado: false //propiedad censado = false
        }
        for (let i = 0; i < sistema.censos.length; i++) { // Inicia un bucle for que recorre los elementos del array censos del objeto sistema
          let censados = sistema.censos[i] //Asigna cada elemento del array censos a la variable censados.
          if (cedula === censados.cedula) { //Verifica si el valor de cedula es igual al valor de cedula en el objeto censados.Si son iguales, significa que la cédula ya ha sido registrada como censada.
            login.censado = true //Actualiza la propiedad censado del objeto login a true, indicando que la cédula está censada.
            document.querySelector("#txtCedulaCenso").setAttribute("disabled", "disabled"); //Establece el atributo disabled en el campo de texto con el id txtCedulaCenso, deshabilitando la interacción con el campo.
            document.querySelector("#txtCedulaCenso").value = `${cedula}`; //Establece el valor del campo de texto con el id txtCedulaCenso como cedula.
            break //sale del bucle for despues de encontrar coincidencia con la cedula
          }
        }
        cargarDatos(login.usuario) //Llama a la función cargarDatos pasando login.usuario como argumento. Esta función carga los datos correspondientes al usuario en el sistema.
        if (login.censado) {
          cambiarSeccion("postIngreso") // Si el usuario ha sido censado, cambia la sección mostrada en la interfaz a "postIngreso".
        } else {
          cambiarSeccion("datos") //De lo contrario, cambia la sección mostrada en la interfaz a "datos".
        }
        loginInvitado()
        //mostrarBotones("invitado")
      } else {
        document.querySelector("#pMsj").innerHTML = "Introduzca una cedula valida";
      }
    } else {
      document.querySelector("#pMsj").innerHTML = "Debe completar todos los campos";
    }
  }
  if (login) { //Inicia una condición que verifica si login existe 
    document.querySelector("#spanUsuario").innerHTML = `Ingreso como ${login.usuario}`; //Actualiza el contenido del elemento con el ID "spanUsuario" para mostrar el mensaje "Ingreso como [nombre de usuario]".
    reloadLogin() //Llama a la función "reloadLogin". Esta función actualiza la interfaz de acuerdo al estado de inicio de sesión.
    document.querySelector("#slcUser").value = "select"; //Restablece el valor del elemento select con el ID "slcUser" a "select" 
  }
  usuario.innerHTML = ""; //Limpia el contenido del elemento con ID usuario.
  tipoUsuario.innerHTML = ""; //Limpia el contenido del elemento con ID tipoUsuario.
  contrasenia.innerHTML = ""; //Limpia el contenido del elemento con ID contrasenia
}

function loginInvitado() {
  let pPostLogin = document.querySelector("#pPostIngreso"); //Obtiene el elemento con el ID "pPostIngreso" y lo asigna a la variable "pPostLogin".
  let hPostLogin = document.querySelector("#hPostIngreso"); //Obtiene el elemento con el ID "hPostIngreso" y lo asigna a la variable "hPostLogin".
  let censo = tomarCensoExistente(login.usuario) //Llama a la función "tomarCensoExistente" pasando como argumento "login.usuario" para obtener el censo existente correspondiente al usuario. lo gaurda en la variable censo.
  let censista = tomarCensista(censo.idCensistas) // Llama a la función "tomarCensista" pasando como argumento "censo.idCensistas" para obtener el censista correspondiente al censo.
  if (!censo.verificado) { //Verifica si el censo no está verificado
    document.querySelector("#btnPostIngreso").style.display = "block";
    hPostLogin.innerHTML = `¡Bienvenido ${censo.nombre}!`
    pPostLogin.innerHTML = `Usted ya ha completado los datos del censo. Puede modificar los datos en caso de que quiera corregirlos o eliminar el censo completamente. <br>Recuerde que su censo todavía esta pendiente de validación y se ha asignado al censista <strong>${censista.nombre}</strong> para visitarlo y validar los datos que ha ingresado`
    document.querySelector("#btnPostIngreso").addEventListener("click", () => cambiarSeccion("datos"))
  } else {
    hPostLogin.innerHTML = `¡Bienvenido ${censo.nombre}!`
    pPostLogin.innerHTML = `Su censo ya ha sido verificado por un censista. Agradecemos su cooperación. Ante cualquier duda, su censista de referencia es <strong>${censista.nombre}</strong>.<br>
    Sus datos quedaron validados por lo que no pueden ser modificados. Mientras tanto puede visualizar las estadisticas del censo en curso usando el botón correspondiente en el encabezado de la página.
    <br><strong>¡Muchas gracias!</strong>`
    document.querySelector("#btnPostIngreso").style.display = "none";
  }
}

function mostrarIngreso() {
  let value = document.querySelector("#slcUser").value; //Obtiene el valor seleccionado del elemento con el ID "slcUser" y lo asigna a la variable "value".
  let txtPassword = document.querySelector("#txtPassword");
  let labelPassword = document.querySelector("#lblPassword");
  let txtUsuario = document.querySelector("#txtUsuario");
  let labelUsuario = document.querySelector("#lblUsuario");

  document.querySelector("#login").style.display = "block";
  document.querySelector("#pMsj").innerHTML = "";
  if (value === "u") { // Comprueba si el valor seleccionado es igual a "u" (censista).
    document.querySelector("#btnLogin").style.display = "block"
    document.querySelector("#lblUsuario").innerHTML = `Ingrese su nombre de usuario:`;
    labelUsuario.style.display = "block"
    txtUsuario.style.display = "block"
    txtUsuario.setAttribute("placeholder", "Ingrese su nombre de usuario...")
    labelPassword.style.display = "block"
    txtPassword.style.display = "block"
  } else if (value === "i") { //Comprueba si el valor seleccionado es igual a "i" (invitado).
    document.querySelector("#btnLogin").style.display = "block"
    document.querySelector("#lblUsuario").innerHTML = `Ingrese su cédula:`;
    txtUsuario.setAttribute("placeholder", "Ingrese su cédula...")
    labelUsuario.style.display = "block"
    txtUsuario.style.display = "block"
    labelPassword.style.display = "none"
    txtPassword.style.display = "none"
  }
}

// INICIO LOGICA CARGA DE DATOS PARA CENSO


function cargarDatos(cedula) {
  desbloquearCampos(); //Llama a la función "desbloquearCampos" para desbloquear los campos de entrada de datos.
  let stringCedula = stringifyCedula(cedula) //Convierte la cédula recibida a una cadena y la asigna a la variable "stringCedula".
  limpiarCampos(); //Llama a la función "limpiarCampos" para limpiar los valores de los campos de entrada de datos.
  let censoEncontrado = null; //Inicializa la variable "censoEncontrado" como null.
  document.querySelector("#btnIngresarDatos").value = "Registrar censo"; //Actualiza el valor del botón con el ID "btnIngresarDatos" para que muestre "Registrar censo".
  document.querySelector("#btnEliminarDatos").style.display = "none"; //Oculta el botón con el ID "btnEliminarDatos".
  document.querySelector("#btnIngresarDatos").style.display = "block"; //Muestra el botón con el ID "btnIngresarDatos".
  for (let i = 0; i < sistema.censos.length; i++) { //Recorre todos los censos en el sistema.
    let persona = sistema.censos[i]; //Asigna el censo actual a la variable "persona".
    if (persona.cedula === stringCedula) { //Comprueba si la cédula del censo coincide con la cédula buscada
      if (login.idCensistas === -1) { //Comprueba si el ID del censista en el inicio de sesión es -1 (invitado).
        document.querySelector("#btnIngresarDatos").value = "Modificar censo"; //le aparece boton modificar censo
        document.querySelector("#btnEliminarDatos").style.display = "block"; //le aparece boton eliminar datos
      } else {
        document.querySelector("#btnIngresarDatos").value = "Validar censo";
        document.querySelector("#btnEliminarDatos").style.display = "none";
      }
      censoEncontrado = persona;
      document.querySelector("#txtNombre").value = persona.nombre;
      document.querySelector("#txtApellido").value = persona.apellido;
      document.querySelector("#txtEdad").value = persona.edad;
      document.querySelector("#slcDepartamento").value = persona.departamento;
      document.querySelector("#slcOcupacion").value = persona.ocupacion;
      break;
    }
  }
  document.querySelector("#txtCedulaCenso").value = `${stringCedula}`;

  if (censoEncontrado) {
    let censista = tomarCensista(censoEncontrado.idCensistas)
    document.querySelector("#txtCedulaCenso").setAttribute("disabled", "disabled");
    if (censoEncontrado.verificado) {
      bloquearCampos()
      document.querySelector("#pAuxDatos").innerHTML = `El censo para la cédula ${censoEncontrado.cedula} fue verificado por <strong>${censista.nombre}</strong>. Se ha deshabilitado el ingreso de datos o modificación de los ya existentes <br>      `
      document.querySelector("#btnIngresarDatos").style.display = "none";
      document.querySelector("#btnEliminarDatos").style.display = "none";
    }
  }
  cambiarSeccion("datos")
}

// FIN LÓGICA CARGA DE DATOS



document.querySelector("#btnConsultaCensos").addEventListener("click", consultarCensos);
document.querySelector("#btnConsultarCensos").addEventListener("click", cargarPendientes)

function cargarPendientes() {
  let slcPendiente = document.querySelector("#slcPendiente")
  document.querySelector("#pCedula").innerHTML = "";
  slcPendiente.innerHTML = `<option value="select" selected>Seleccionar...</option>`
  for (let i = 0; i < sistema.censos.length; i++) { //recorrer los elementos del array censos del objeto sistema
    let censo = sistema.censos[i]; //Asigna cada elemento del array censos a la variable censo
    if (censo.idCensistas === login.idCensistas && !censo.verificado) { //Verificar si el censista coincide y el censo no está verificado
      slcPendiente.innerHTML += `<option value="${censo.cedula}">${censo.cedula} - ${censo.nombre} ${censo.apellido}</option>`
    }
  }
}
document.querySelector("#slcPendiente").addEventListener("change", () => document.querySelector("#txtCedula").value = document.querySelector("#slcPendiente").value);

function consultarCensos() {
  let cedula = stringifyCedula(document.querySelector("#txtCedula").value); //Obtener el valor de la cédula del campo de texto y convertirlo a formato válido
  if (!validarCamposCompletados(cedula)) { //Verificar si se han completado todos los campos
    document.querySelector("#pCedula").innerHTML = "Debe completar todos los campos";
  } else {
    if (!verificacionDeCI(cedula) && Number(cedula) !== 0) { //Verificar si la cédula no es válida y no es igual a cero
      document.querySelector("#pCedula").innerHTML = "Debe ingresar una cedula valida";
    } else {
      cargarDatos(cedula)
      cambiarSeccion("datos")
    }
  }
}


//---------------------------------------------------------------------------------------
//Funcionalidad para registrar un nuevo censista

document.querySelector("#btnRegistrar").addEventListener("click", registrarCensista);

function verificarNombreUsuarioUnico(nombreUsuario) {
  let existe = false; //Variable para indicar si el nombre de usuario existe o no
  for (let i = 0; i < sistema.censistas.length; i++) { //Recorrer los elementos en el array censistas del objeto sistema
    let censista = sistema.censistas[i]; // cada objeto censista del array censistas lo almaceno en la variable censista
    if (censista.usuario.toLowerCase() === nombreUsuario.toLowerCase()) { //verificar si el nombre de usuario del censista ingresado ya coincide con algun otro nombre de usuario de censista
      existe = true; //si ya existe el nombre de usuario devuelve true
    }
  }
  return existe;
}

function registrarCensista() {
  // Obtener los valores de los campos de texto y eliminar los espacios en blanco al principio y al final
  let nombreUsuario = document.querySelector("#txtNombreDeUsuarioRegistro").value.trim();
  let nombre = document.querySelector("#txtNombreRegistro").value.trim();
  let contra = document.querySelector("#txtContraRegistro").value;

  // Verificar si todos los campos están completados
  if (!validarCamposCompletados(nombreUsuario, nombre, contra)) {
    document.querySelector("#pMensajes").innerHTML =
      "Debe llenar todos los campos";
    return; //Salir de la función en caso de que no se completen todos los campos
  }

  if (verificarNombreUsuarioUnico(nombreUsuario)) { //// Verificar si el nombre de usuario ya existe en otros censistas
    document.querySelector("#pMensajes").innerHTML =
      "Ya existe otro usuario con el mismo nombre de usuario";
    return; //Salir de la función si el nombre de usuario no es único
  }

  if (!verificarFormatoContrasena(contra)) { //Verificar si el formato de la contraseña no cumple con los requisitos
    document.querySelector("#pMensajes").innerHTML =
      "La contraseña debe tener como minimo 5 caracteres y debe incluir una minuscula, una mayuscula y un numero";
    return; //Salir de la función si el formato de la contraseña no es válido
  }

  //Crear un nuevo objeto Censista con los datos proporcionados
  let censista = new Censista(nombreUsuario, nombre, contra);
  sistema.registrarCensista(censista);
  login = tomarCensista(censista.idCensistas)
  //mostrarBotones("censista")
  cambiarSeccion("consultarCensos")
  cargarPendientes()
  reloadLogin()
  limpiarCampos()

  document.querySelector("#pMensajes").innerHTML = "Registro exitoso";
}

//------------------------------------------------------------------------

//funcion para acumular los datos de una nueva persona

function tomarDatosCenso() {
  let cedula = document.querySelector("#txtCedulaCenso").value; //guarda el valor ingresado en el campo de texto con id txtCedulaCenso y lo guarda en la variable cedula.
  let nuevaCedula = stringifyCedula(cedula); // Llama a la función stringifyCedula para convertir la cédula en un string  y guarda el resultado en la variable nuevaCedula.
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


document.querySelector("#btnIngresarDatos").addEventListener("click", ingresarDatosPersona);

function ingresarDatosPersona() {
  pAuxDatos.innerHTML = ""; //Limpia el contenido del elemento pAuxDatos
  let datos = tomarDatosCenso() //Obtiene los datos del censo utilizando la función tomarDatosCenso y los guarda en la variable datos.
  if (!validarCamposCompletados( //verifica que todos los campos hayan sido completados
      datos.cedula,
      datos.nombre,
      datos.apellido,
      datos.edad,
      datos.departamento,
      datos.ocupacion
    )) {
    pAuxDatos.innerHTML = "Debe completar todos los campos";
    return;
  }
  if (!verificarEdad(datos.edad)) { //verifica que la edad ingresada se encuentre en un rango especifico
    pAuxDatos.innerHTML = "Edad invalida. (No puede ser menor que 0 ni mayor que 130";
    return;
  }

  let censoExistente = false //inicializa la variable censoExistente en false
  for (let i = 0; i < sistema.censos.length; i++) { //recorre el array de censos del objeto sistema
    let censo = sistema.censos[i] //a cada objeto en la posicion del array censos le asigna la variable censo
    if (datos.cedula === censo.cedula) { //verifica si la cedula ingresada ya existe en el array
      censoExistente = censo
    }
  }

  if (!censoExistente) { //si el censo no existe
    let nuevoCenso = new Censo(datos.cedula, datos.nombre, datos.apellido, datos.edad, datos.departamento, datos.ocupacion) //se crea un nuevo objeto censo con los datos proporcionados
    sistema.guardarCenso(nuevoCenso) //guarda el nuevo censo en el objeto sistema
    let censo = tomarCensoExistente(datos.cedula)
    pAuxDatos.innerHTML = "Se han ingresado los datos del censo correctamente"
    if (login.idCensistas !== -1) {
      censo.verificado = true
      censo.idCensistas = login.idCensistas
      cargarDatos(censo.cedula)
      pAuxDatos.innerHTML = `Se ha registrado y validado el censo para la cédula ${censo.cedula} correctamente. `
    } else {
      let idAsignar = numeroAleatorio(sistema.censistas.length) //genera un numeroAleatorio para asignar el censo a un censista
      censo.idCensistas = idAsignar;
      let censista = tomarCensista(idAsignar)
      cargarDatos(datos.cedula)
      document.querySelector("#postCenso").innerHTML = `<h3>¡Felicidades!</h3><p>Gracias <strong>${censo.nombre} ${censo.apellido}</strong> por completar el censo!</p><p id="pPostCenso"></p>`;
      document.querySelector("#pPostCenso").innerHTML = `Se han ingresado correctamente los datos del censo. El censista que pasará por su casa a validar su censo se llama: <strong>${censista.nombre}</strong>`
      return cambiarSeccion("postCenso")
    }
  } else {
    censoExistente.nombre = datos.nombre
    censoExistente.apellido = datos.apellido
    censoExistente.edad = datos.edad
    censoExistente.departamento = datos.departamento
    censoExistente.ocupacion = datos.ocupacion
    if (login.idCensistas !== -1) {
      //let censo = tomarCensoExistente(datos.cedula)
      censoExistente.verificado = true
      censoExistente.idCensistas = login.idCensistas
    } else {
      pAuxDatos.innerHTML = "Se han modificado los datos del censo correctamente"
    }
    cargarDatos(datos.cedula)
  }
}



// LÓGICA ELIMINAR CENSO
document.querySelector("#btnEliminarDatos").addEventListener("click", eliminarCenso);

function eliminarCenso() { // Función para eliminar un censo.
  let datos = tomarDatosCenso(); // Obtiene los datos del censo utilizando la función tomarDatosCenso().
  let censo = tomarCensoExistente(datos.cedula); // Obtiene el censo existente basado en la cédula obtenida anteriormente.
  if (!censo.verificado) { // Verifica si el censo no ha sido verificado.
    sistema.borrarCenso(datos.cedula) // Borra el censo del sistema utilizando la función sistema.borrarCenso().
    document.querySelector("#btnIngresarDatos").value = "Registrar censo";
    document.querySelector("#pMsj").innerHTML = "<strong>Se ha eliminado el censo del sistema</strong>"
    login = null // Reinicia la variable de inicio de sesión (login) a null.
    reloadLogin() // Recarga la sección de inicio de sesión.
    cambiarSeccion("ingreso")
    limpiarCampos()
  }
  desbloquearCampos()
}

/** LÓGICA REASIGNAR CENSISTA
 * Lógica encargada de permitir a un censista no solo revisar los censos que tiene pendientes por validar si no que también a que censista le puede asignar uno de sus censos. Maneja manipulación de datos directamente en el Array que contiene los Censos y manipula el documento HTML en sección #reasignar
 * 
 * #btnReasignar escucha eventos de click para llamar a la función leerDatosReasignacion()
 * #btnReasignacion escucha eventos de click para llamar a función reasignarCensista()
 * 
 * leerDatosReasignacion(): Toma parte del documento HTML; Recorre Array de Censos y Censista y manipula la sección correspondiente en el HTML para cargar Censos no validados asignados al usuario loggeado y Censistas disponibles excluyendo al loggeado.
 * 
 * reasignarCensista(): Toma el valor de los datos en el select cargado con la función anterior y modifica en el Array de Censos, al censo correspondiente al primer valor, para asignar en la propiedad ``idCensistas`` el id del Censista correspondiente al segundo valor obtenido. 
 */
document.querySelector("#btnReasignar").addEventListener("click", leerDatosReasignacion)

function leerDatosReasignacion() {
  document.querySelector("#pReasignacion").innerHTML = ``;
  let slcPersonasPendientes = document.querySelector("#slcPersonasPendientes");
  let slcCensistasDisponibles = document.querySelector("#slcCensista");
  let idCensista = login.idCensistas // Obtiene el ID del censista actualmente logueado (login.idCensistas).
  slcPersonasPendientes.innerHTML = `<option value="select" selected disabled >Seleccionar...</option>`
  slcCensistasDisponibles.innerHTML = `<option value="select" selected disabled>Seleccionar...</option>`
  for (let i = 0; i < sistema.censistas.length; i++) { //recorre el array de censistas
    let censista = sistema.censistas[i]
    if (censista.idCensistas !== idCensista) { //Verifica si el ID del censista actual no coincide con el ID del censista actualmente logueado.
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

/** LÓGICA DE ESTADISTICAS
 * visualizarInfoEstadistica(): Se encarga de generar en el documento HTML la información estadistica del Censo global con respecto a la base de datos.
 * Esta función tiene en cuenta el login del usuario (Invitado o Censista) y genera el documento con la información adecuada para mostrarle al usuario en cuestion
 * Invoca a: reiniciarContadores(): medida Low-Cost y un poco ineficiente para que las tablas no aumenten valores indefinidamente
 *
 * Invoca a: recorrerCensos(): ajusta los contadores para mostrar las estadisticas precisas. 
 * 
 * Genera parte del documento HTML desde cero para la sección #visualizarEstadisticas
 */
document.querySelector("#btnVisualizarEstadisticas").addEventListener("click", visualizarInfoEstadistica);

function visualizarInfoEstadistica() {
  sistema.reiniciarContadores()
  recorrerCensos()
  let totalCensados = personasCensadas()
  if (login.idCensistas === -1) {
    document.querySelector("#visualizarEstadisticas").innerHTML = `
    <h3> Listado de censados </h3>
    <span><strong> Total personas censadas: ${totalCensados}</strong> <br> </span>
    <table>
            <thead>
              <tr>
                <th>Departamento</th>
                <th>Estudian</th>
                <th>No trabajan</th>
                <th>Dependientes o independientes</th>
                <th>% sobre total de censados</th>
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
        <td> ${Math.floor((departamento.censados*100)/totalCensados)}% </td>
        `
      }
    }
  } else {
    document.querySelector("#visualizarEstadisticas").innerHTML = `
    <h3> Estadisticas al momento </h3>
    <span><strong> Total personas censadas: ${totalCensados}<strong> </span><br>
    <table>
    <thead>
      <tr>
        <th>Departamento</th>
        <th>Censados totales</th>
        <th>% de censos sin validar</th>
      </tr>
    </thead>
    <tbody id="estadisticasCensista">
    </tbody>
    </table><br>
    `
    for (let i = 0; i < sistema.departamentos.length; i++) {
      let noValidados = 0;
      let departamento = sistema.departamentos[i]
      if (departamento.censados > 0) {
        for (let i = 0; i < sistema.censos.length; i++) {

          const censo = sistema.censos[i];
          if (censo.departamento === departamento.codigo) {
            if (!censo.verificado) {
              ++noValidados
            }
          }
        }
        let porcentajeNoValidados = Math.floor((noValidados * 100) / departamento.censados)
        document.querySelector("#estadisticasCensista").innerHTML += `<tr>
        <td>${departamento.nombre}</td>
        <td>${departamento.censados}</td>
        <td>${porcentajeNoValidados}</td>
        </tr>`
      }
    }
    document.querySelector("#visualizarEstadisticas").innerHTML += `<label for="slcEdades">Censados por departamento según edad:</label><br><select id="slcEdades"><option value="select" selected disabled>Seleccionar...</option></select><p id="pEdades"></p>`
    for (let i = 0; i < sistema.departamentos.length; i++) {
      let departamento = sistema.departamentos[i];
      document.querySelector("#slcEdades").innerHTML += `<option value="${departamento.codigo}">${departamento.nombre}</option>`
    }
    document.querySelector("#slcEdades").addEventListener("change", () => {
      let slcEdades = document.querySelector("#slcEdades").value
      let dept
      let menores = 0
      let mayores = 0
      for (let i = 0; i < sistema.censos.length; i++) {
        const censo = sistema.censos[i];
        for (let f = 0; f < sistema.departamentos.length; f++) {
          const departamento = sistema.departamentos[f];
          if (departamento.codigo === slcEdades) {
            dept = departamento
            if (censo.departamento === departamento.codigo) {
              if (censo.edad >= 18) {
                ++mayores
              } else {
                ++menores
              }
            }
            break
          }

        }
      }
      if (mayores > 0 || menores > 0) {
        document.querySelector("#pEdades").innerHTML = `<strong>Para el departamento de ${dept.nombre}</strong>: <br>Censados menores de edad: ${menores*100/dept.censados}%<br>Censados mayores de edad: ${mayores*100/dept.censados}%`
      } else {
        document.querySelector("#pEdades").innerHTML = `<strong>No se han encontrado censos registrados en ${dept.nombre}</strong>`
      }
    })
  }
}

/**
 * recorrerCensos(): Cumple la exclusiva función de recorrer el Array respectivo a los censos en la base de datos y sumar según corresponda a las respectivas propiedades internas de los Deparmantos para después ser usado en la visualización de estadisticas
 */
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


/** asignarCensistaAlCargar: Función que asigna aleatoriamente censistas a censos sin validar y sin un censista asignado
 * 
 * Esta función solo cumple su función para los censos pre-cargados ya que estos inicializan con idCensistas===-1.
 */
function asignarCensistaAlCargar() {
  for (let i = 0; i < sistema.censos.length; i++) {
    let censo = sistema.censos[i]
    if (censo.idCensistas === -1) {
      censo.idCensistas = numeroAleatorio(sistema.censistas.length)
    }
  }
}
asignarCensistaAlCargar()

function personasCensadas() {
  return sistema.censos.length;
}

/**
 * cantCensadosDept(): Actualiza el contador `censados` para cada objeto del Array Departamentos
 */

function cantCensadosDept() {
  for (let i = 0; i < sistema.censos.length; i++) {
    for (let y = 0; y < sistema.departamentos.length; y++) {
      if (sistema.censos[i].departamento === sistema.departamentos[y].codigo) {
        sistema.departamentos[y].censados++
      }
    }
  }

}
//---------------------------------------------------------------------------


ocultarSecciones(); // Oculta todas las secciones al inicio
cambiarSeccion("inicio");
mostrarBotones("inicio") // HABILITAR ESTA LLAMADA PARA OCULTAR BOTONES AL INICIO

sistema.verificarCensos()

//------------------------------------