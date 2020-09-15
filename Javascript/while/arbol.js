// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Mostrar en consola el siguiente dibujo utilizando la estructura while:
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
*/

let arbol = "";
let ramasArbol = 0;

while (ramasArbol < 13) {
    arbol += "*";
    console.log(arbol);
    ramasArbol++;
}