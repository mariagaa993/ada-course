// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Mostrar en consola la suma parcial de todos los números 
que van desde 0 hasta 1000 utilizando la estructura while.
*/

let i = 0;
let numero = 0;

while (i <= 1000) {
    numero = numero + i;
    console.log(numero);
    i++
}