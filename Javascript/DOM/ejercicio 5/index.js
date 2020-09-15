// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Escribir un HTML con un div.
Luego, por ID, modificar el contenido del DIV
agregando una lista de 5 elementos.
Una vez agregada la lista, agregar 
programaticamente un numero a cada elemento
por ejemplo, si son 5 elementos deberia verse:
1
2
3
4
5
*/

const crearLista = document.querySelector('div');
crearLista.id = "list";


crearLista.innerHTML += `<ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>`
    console.log(crearLista.innerText);


const list = document.querySelectorAll("li");
list.forEach((list, index) => {
    list.innerHTML = index+1;
});