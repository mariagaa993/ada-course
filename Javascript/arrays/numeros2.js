// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
Eliminar el primer elemento, y agregarlo al final del array.
Mostrar el resultado final.
Resultado esperado
[1, 2, 3, 4, 5, 6]
*/

const numeros = [6, 1, 2, 3, 4, 5];

const eliminado1 = numeros.shift();

numeros.push(eliminado1);

console.log(numeros);