// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 
Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los 
perros agrupados por un lado y los gatos por otro. Ejemplo:
Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
Resultado: 🐶🐶🐶🐶🐱🐱🐱
*/

const animales = prompt("Enter your name").split(" ");
let ordenado = animales.sort();
let alReves = ordenado.reverse();
console.log(alReves);

for (let i = 0; i < alReves.length; i++) {
    console.log(alReves[i])
}

// .reverse() invierte los elementos del array