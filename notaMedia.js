"use strict";

//notas del alumno 
const notas=[4 , 8 , 9 , 2 , 7 ,6 ];

//calcular la suma de las notas
let suma= 0; 
for ( let i = 0 ; i < notas.length ; i++){
    suma += notas[i];
}

//calcular la media 
const media = suma / notas.length;

//mostrar el resultado por la consola
console.log("El resultado de la nota media es de:"+media) 