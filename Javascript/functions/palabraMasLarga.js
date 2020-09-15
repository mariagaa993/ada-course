// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Escribir una función que reciba una frase
e imprima la palabra mas larga de la misma
array.reduce
*/

const reducir = () => {
    let palabraMasLarga = prompt("Da palabras").split(' ');
    return palabraMasLarga.reduce((index, palabra) => palabra.length > index.length ? palabra : index);
}
reducir();