// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Mostrar en consola la suma parcial de todos los 
enúmeros impares que van desde 0 hasta 1000 utilizando la estructura while.
*/

let numero = 0;
let i = 1;

while (i <= 1000) {
  console.log(numero);
  numero += i;
  i += 2;
}