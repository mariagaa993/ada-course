// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un programa que permite ingresar valores separados por espacios, y 
luego preguntar qué valor se desea encontrar el índice. El programa debe 
devolver un mensaje con el índice del primer elemento que sea igual al 
buscado, o indicar si no se ha encontrado. Ejemplo:
Ingrese valores: 5 7 12 34 54 2 12
Ingrese valor a buscar: 12
El valor 12 se encuentra en el índice 12
*/

const num = prompt("Ingresa varios números").split(" ");
const arregloNum = Array.from(num, Number);

let buscarNum = parseInt(prompt("Coloca un número a ver si esta en los números anteriores"));

if (arregloNum.includes(buscarNum)) {
    let index = arregloNum.indexOf(buscarNum);
    console.log(`El valor ${buscarNum} se encuentra en el índice ${index}`);
} else {
    console.log(`El valor ingresado no se encuentra entre los valores originales`);
}

// .indexOf() muestra la posición (index) del elemento