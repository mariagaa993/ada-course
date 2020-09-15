// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un programa que pida ingresar números separados por espacios y
devuelva un mensaje con la suma de todos los números. Ejemplo:
Ingrese números: 5 7 10 12 24
La suma de todos los números es: 58
*/

const num = prompt("Ingresa los números que deseas sumar").split(" ");
const arregloNum = Array.from(num, Number);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(`La suma de todos los números es: ${arregloNum.reduce(reducer)}`);

// .reduce() reduce el valor del array en 1 solo valor