// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Obtener la lista de todos los elementos dentro del <div>
usando unicamente selector por ID 
*/

const spanId = document.querySelector('#spanId');
const parent = spanId.parentElement;
const ulContainer = parent.children[2];
const ulChildren = ulContainer.children;
for(let li of ulChildren) {
    console.log(li.ulChildren);
}

const elements = document.querySelector('div').children;
console.log(elements);

