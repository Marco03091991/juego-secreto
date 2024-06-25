let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = []; //lista que guarda los numeros que ya se jugaron
let numeroMaximo = 10; // numero maximo de intentos en el juego

    function asignarElementoTexto(elemento, texto){ // recibe 2 parmetros la etiqueta y el texto a midificar
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; // se pone como buena práctica aunque la función no retorne nada     
    }

    function verificarInternto(){ 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //input es el nombre de la etiqueta de la caja de texto, en este caso la vamos atraer por id
    console.log(intentos);
    if(numeroSecreto===numeroDeUsuario){ 

    asignarElementoTexto('p', `Acertaste, el número es: ${numeroDeUsuario} lo hiciste en ${intentos} ${intentos == 1 ?'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled'); //desactivams atraves de códico el desabled que está en el html

    } else { 
    // el usuario no acertó
    limpiarCaja();
    if(numeroDeUsuario < numeroSecreto){
    asignarElementoTexto('p', 'El número es MAYOR'); 
    }else {
    asignarElementoTexto('p', 'El número es MENOR');
    }
    intentos ++;
    }
    //alert('vas bien nene');
    return;
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumeroSorteados);
//preguntamos si ya soreamos todos los numero
if(listaNumeroSorteados.length == numeroMaximo){

    asignarElementoTexto('p','Ya se sortearon todos lo numeros')

} else {

//si el numero generado está incluido en la lita
if(listaNumeroSorteados.includes(numeroGenerado)) {
return generarNumeroSecreto();

} else {
listaNumeroSorteados.push(numeroGenerado) //agrega el numero a lalista
return numeroGenerado;
}
}
}

function limpiarCaja() {
//1 traemos la caja donde se digita el número, se puede de dos maneras por document.getElementById() óóó document.querySelector(
//manera 1:
//let valorCaja =document.querySelector('#valorUsuario');
//valorCaja.value = '';
//manera 2
document.querySelector('#valorUsuario').value='';
}

function codicionesInicialesEnCero() {
asignarElementoTexto('h1', 'Juego del número secreto');
asignarElementoTexto('p', `Indica un número del 1 al ${numeroMaximo} `);
// generar el número aleatorrio
numeroSecreto = generarNumeroSecreto();
// inicializar los intentos
intentos = 1
}

function reiniciarJuego() {

//limpiar caja
limpiarCaja();
//menssaje, contador y aleatorio en ceros  
codicionesInicialesEnCero();
// deshabilitar el boton de nuevo juego
document.getElementById('reiniciar').setAttribute('disabled','true');

}

codicionesInicialesEnCero();




//= comillas invertidas ``
//> <
//{ }
//console.log(variable); imprime en consola del navegador
// console.log(typeof(variable)); devuelve el tipo de variavle