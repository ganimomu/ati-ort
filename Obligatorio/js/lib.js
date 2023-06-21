// Libreria armada en función a los códigos trabajados en el momento.
// Códigos en ejercicios son primeras versiones de los presentes en la libreria

function charReplacer(string, char, replacingChar = "") {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.toLowerCase().charAt(i) === char.toLowerCase()) {
      newString += replacingChar;
    } else {
      newString += string.charAt(i);
    }
  }
  return newString;
}

function charCounter(string, char) {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      ++contador;
    }
  }
  return contador;
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

function tomarCensista(idCensista) {
  let censista = false
  for (let i = 0; i < sistema.censistas.length; i++) {
    if (sistema.censistas[i].idCensistas === idCensista) {
      return censista = sistema.censistas[i]
    }
  }
  return censista
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

function validarCamposCompletados(...campos) { //funcion que recibe como parametro diferentes parametros
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
  document.querySelector("#pConsultaCensos").innerHTML = ""
  document.querySelector("#pAuxDatos").innerHTML = ""
  document.querySelector("#pCedula").innerHTML = ""
  document.querySelector("#pReasignacion").innerHTML = ""
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
  document.querySelector("#slcDepartamento").value = "";
  document.querySelector("#slcOcupacion").value = "";
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