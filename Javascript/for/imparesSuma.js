// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Mostrar en consola la suma parcial de todos los 
enúmeros impares que van desde 0 hasta 1000 utilizando la estructura for.
*/

let numero = 0;

for(let i = 1; i <= 1000; i+=2) {
    console.log(numero);
    numero += i;
}