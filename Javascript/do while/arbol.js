// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Mostrar en consola el siguiente dibujo utilizando la estructura do while:
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

do {
    arbol += "*";
    console.log(arbol);
    ramasArbol++;
}
while (ramasArbol < 13);