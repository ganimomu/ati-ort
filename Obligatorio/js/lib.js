// Libreria armada en función a los códigos trabajados en el momento.
// Códigos en ejercicios son primeras versiones de los presentes en la libreria

function verificacionDeCI(cedula) { //funcion que verifica que la cedula tenga un formato correcto y sea valida
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

/**
 * verificarFormatoContrasena(): Recibe parametro contra
 * Basado en sistema de true/false, valida del parametro recibido: 
 * Longitud del parametro, si es menor a 5 retornara false. * 
 * Caracteres individuales en busca de coincidencias para: 1 número, 1 caracter en mayuscula, 1 caracter en minuscula
 */
function verificarFormatoContrasena(contra) {
  let minuscula = false;
  let mayuscula = false;
  let numero = false;
  if (contra.length < 5) {
    return false;
  } else {
    for (let i = 0; i < contra.length; i++) {
      let letra = contra.charAt(i);
      if (letra === letra.toUpperCase() && isNaN(letra)) {
        mayuscula = true;
      }
      if (letra === letra.toLowerCase() && isNaN(letra)) {
        minuscula = true;
      }
      if (!isNaN(letra)) {
        numero = true;
      }
    }
  }
  return minuscula && mayuscula && numero;
}

/**
 * numeroAleatorio(): Recibe 1 parametro: max
 * Genera un número aleatorio entre 0 y el parametro recibido no inclusive.
 * Ejemplo: max = 3 - Posible output: 0, 1, 2;
 */
function numeroAleatorio(max) {
  return Math.floor(Math.random() * max)
}

function tomarCensoExistente(cedula) {
  let censo = false
  for (let i = 0; i < sistema.censos.length; i++) {
    if (sistema.censos[i].cedula === cedula) {
      return censo = sistema.censos[i]
    }
  }
  return censo;
}
/**
 * tomarCensista(): Recibe un parametro
 * Recorre el Array Censistas en Sistema buscando coincidencia para el parametro recibido y el idCensista registrado en el sistema
 * Si encuentra coincidencia, retorna el objeto del Censista encontrado.
 * Por default retorna false
 */
function tomarCensista(idCensista) {
  let censista = false
  for (let i = 0; i < sistema.censistas.length; i++) {
    if (sistema.censistas[i].idCensistas === idCensista) {
      return censista = sistema.censistas[i]
    }
  }
  return censista
}


/** 
 * stringifyCedula(): Recibe un parametro
 * Recibe un string y toma los números del mismo para retornar un nuevo string concatenando unicamente digitos númericos.
 * Ejemplo: cedula = 5.147.423-8 - Output: 51474238
 */
function stringifyCedula(cedula) { //La función stringifyCedula elimina cualquier carácter no numérico del usuario ingresado.
  let newCedula = ""; // Variable guardada como string así al sumar en la verificación arroja el string entero y no suma los números
  for (let i = 0; i < cedula.length; i++) {
    let digito = cedula.charAt(i);
    if (!isNaN(digito)) {
      newCedula += digito;
    }
  }
  return newCedula;
}

function verificarEdad(edad) { //funcion que verifica que la edad ingresada este en un rango especifico entre 0 y 130.
  return (Number(edad) > 0 && Number(edad) < 130);
}

function validarCamposCompletados(...campos) { //La función validarCamposCompletados verifica si el campo de cédula está completo.
  for (let i = 0; i < campos.length; i++) { //recorre los parametros ingresados
    if (campos[i] === "") { //verifica si alguno de los campos ingresados esta vacio
      return false; //si alguno esta vacio retorna falso
    }
  }
  return true; //si estan completos retorna verdadero
}

function limpiarMensajes() {
  document.querySelector("#pMsj").innerHTML = ""
  document.querySelector("#pPostIngreso").innerHTML = ""
  document.querySelector("#pMensajes").innerHTML = ""
  document.querySelector("#pAuxDatos").innerHTML = ""
  document.querySelector("#pCedula").innerHTML = ""
  document.querySelector("#pReasignacion").innerHTML = ""
  document.querySelector("#txtPassword").style.display = "none";
  document.querySelector("#lblPassword").style.display = "none";
  document.querySelector("#txtUsuario").style.display = "none";
  document.querySelector("#lblUsuario").style.display = "none";
  document.querySelector("#btnLogin").style.display = "none"
}

function limpiarCampos() {
  document.querySelector("#txtPassword").value = "";
  document.querySelector("#txtNombreDeUsuarioRegistro").value = "";
  document.querySelector("#txtContraRegistro").value = "";
  document.querySelector("#txtNombreRegistro").value = "";
  document.querySelector("#txtUsuario").value = "";
  document.querySelector("#txtCedula").value = "";
  document.querySelector("#txtCedulaCenso").value = "";
  document.querySelector("#txtNombre").value = "";
  document.querySelector("#txtApellido").value = "";
  document.querySelector("#txtEdad").value = "";
  document.querySelector("#slcDepartamento").value = "select";
  document.querySelector("#slcOcupacion").value = "select";
  document.querySelector("#slcUser").value = "select";
}

function bloquearCampos() {
  document.querySelector("#txtCedulaCenso").setAttribute("disabled", "disabled");
  document.querySelector("#txtNombre").setAttribute("disabled", "disabled");
  document.querySelector("#txtApellido").setAttribute("disabled", "disabled");
  document.querySelector("#txtEdad").setAttribute("disabled", "disabled");
  document.querySelector("#slcDepartamento").setAttribute("disabled", "disabled");
  document.querySelector("#slcOcupacion").setAttribute("disabled", "disabled");
}

function desbloquearCampos() {
  document.querySelector("#txtCedulaCenso").removeAttribute("disabled");
  document.querySelector("#txtNombre").removeAttribute("disabled");
  document.querySelector("#txtApellido").removeAttribute("disabled");
  document.querySelector("#txtEdad").removeAttribute("disabled");
  document.querySelector("#slcDepartamento").removeAttribute("disabled");
  document.querySelector("#slcOcupacion").removeAttribute("disabled");
}

function ocultarSecciones() { //oculta todas las secciones al inicio de la aplicacion, que el la pagina prinicipal aparezca solo la foto
  let secciones = document.querySelectorAll(".seccion"); //.seccion hablo del atributo class
  for (let i = 0; i < secciones.length; i++) { // recorre cada elemento de la lista utilizando un bucle for, y para cada elemento, establece su propiedad style.display a "none". Esto hace que las secciones se oculten en la página, ya que "none" es un valor que indica que el elemento no se muestra.
    //secciones va a ser un array de elementos html
    const seccion = secciones[i];
    seccion.style.display = "none";
  }
}

function tomarUnDepartamento(codigo) {
  for (let i = 0; i < sistema.departamentos.length; i++) {
    const departamento = sistema.departamentos[i]
    if (departamento.codigo === codigo) {
      console.log(departamento)
      return departamento
    }
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
  limpiarMensajes()
  limpiarCampos()
}


function cambiarSeccion(nuevaSeccion) {
  ocultarSecciones();
  document.querySelector("#" + nuevaSeccion).style.display = "block";
}

/*function validarCamposCompletados(...campo) { 
  let toValidate = [...campo] // [nombreUsuario, nombre, contraseña]
  let check = true
  for (let i = 0; i < toValidate.length; i++) {
    let campo = toValidate[i]
    if (campo === "") {
      check = false;
      break;
    }
  }
  return check
}*/