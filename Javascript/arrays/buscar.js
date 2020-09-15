// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un programa que permite ingresar valores separados por espacios, y 
luego preguntar qué valor se desea averiguar si existe. El programa debe 
devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores 
originales o no. Ejemplo:
Ingrese valores: 5 7 99 34 54 2 12
Ingrese valor a buscar: 54
El valor 54 se encuentra entre los valores originales
*/

const num = prompt("Ingresa varios números").split(" ");
const arregloNum = Array.from(num, Number);

const buscarNum = parseInt(prompt("Coloca un número a ver si esta en los números anteriores"));

if (arregloNum.includes(buscarNum)) {
    console.log(`El valor ${buscarNum} se encuentra entre los valores originales`);
} else {
    console.log(`El valor ingresado no se encuentra entre los valores originales`);
}

// .includes() me indica si un determinado elemento se encuentra en el array