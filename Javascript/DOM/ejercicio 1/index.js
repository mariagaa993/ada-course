// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Imprimir en consola el texto de cada <li>
*/

const ul = document.querySelector('ul');
const lis = ul.children;
for (let li in lis) {
    console.log(li.innerText);
}

const list = document.querySelectorAll('li');
list.forEach(lista => console.log(lista.innerText));

// innerText: permite leer lo que tiene nuestro HTML.
// setAttribute: asigna un atributo o modifica