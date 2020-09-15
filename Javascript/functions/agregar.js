// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
*/

let array = [];
function agregar () {
    let dato = prompt("Agregar cualquier elemento");
    array.push(dato);
} 
agregar();
agregar();
agregar();

function ultimo() {
    let ultimoDato = array[array.length - 1];
    console.log("El último elemento del array es: " + ultimoDato);
}
ultimo();

function imprimir() {
    console.log(array);
}
imprimir();