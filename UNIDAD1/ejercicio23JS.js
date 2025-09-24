"use strict";

/////////////////////
//FUNCIONES
/////////////////////


/**
 * Calcula el volumen de una Esfera
 * @param {Number} radio 
 * @returns Number
 */
function calcularVolumenDeEsfera(radio){
    return 4/3 * Math.PI * (radio**3);
}


/**
 * Recupera los datos necesarios para calcular el volumen de la esfera y presentar el resultado 
 */
function recuperarDatosyCalacular(){
    //1. Recuperamos el input donde el usuario ha escrito el radio
    const txtRadio = document.querySelector("#txtRadio");

    //2. Recuperamos el valor del input 
    const radio = txtRadio.valueAsNumber;

    //3. Calculamos el volumen de la esfera´
    const volumenEsfera = calcularVolumenDeEsfera(radio);

    //4. Presentamos el resultcalculaelVolumenDeEsferado al usuario
    alert(volumenEsfera);
}



////////////////
///MAIN
///////////////


//1. Recuperamos el boton del HTML 
const btnCalcular = document.querySelector("#btnCalcular");

//2. Añadimos funcionalidad al botón

btnCalcular.addEventListener("click" , recuperarDatosyCalacular);
