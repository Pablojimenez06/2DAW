"use strict";

/////////////////
///FUNCIONES
////////////////

//1.Preguntar por un número al usuario 
const numero = Number(prompt("De que número quieres ver la tabla de multiplicar?" ));

//2.Seleccionar el div donde se mostrará la tabla 
const tablaMultiplicar = document.querySelector("#tablaMultiplicar");

//3. Bucle para crear la tabla del 1 al 10
for(let i = 1; i <= 10 ; i++){
    const p = document.createElement("p");//Crea un párrafo
    p.textContent = numero + " x " +  i  +" = " +(numero*i);//Texto del párrafo
    tablaMultiplicar.appendChild(p);//Añadir al div

}


////////////////
///MAIN
////////////////
