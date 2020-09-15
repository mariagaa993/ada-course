// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Mostrar en consola el siguiente dibujo utilizando la estructura for:
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

for(let ramasArbol = 0; ramasArbol < 13; ramasArbol++) {
    arbol+= "*"
    console.log(arbol);
}