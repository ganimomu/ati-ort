document.querySelector("#btnCounter").addEventListener("click", counter);
document.querySelector("#btnTriple").addEventListener("click", tripleCounter);
let contador = 0;
let auxContador = 0;

function counter() {
    contador++;
    return document.querySelector("#pCounter").innerHTML = "Veces que se ha pulsado el bóton: " + contador;
}

function tripleCounter() {
    auxContador += 3;
    return document.querySelector("#pTripleCounter").innerHTML = "Contador actual: " + auxContador;
}