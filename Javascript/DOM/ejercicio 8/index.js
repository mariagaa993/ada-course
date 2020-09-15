// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
CrearClase una lista con varios elementos.
CrearClase una funcion que asigne la clase
"active" a uno de estos elementos seleccionados.
Ademas al mismo tiempo tiene que eliminar
la clase "active" del resto de los elementos.
Asignarle algun estilo para diferenciar la clase
"active" de cuando no se encuentra la misma.
*/

const list = document.querySelectorAll('li');

// Dinámico
const crearClase = (elementoList, nombre) => {
    elementoList.forEach(listaNombres => {
        if(listaNombres.innerText === nombre) {
            listaNombres.classList.toggle('active') ? listaNombres.style.color = "red" : listaNombres.style.color = "#000000";           
        };
    });
};

// Anidando operadores ternarios - Dinámico
const crearClase = (elementoList, nombre) => {
    elementoList.forEach(listaNombres => {
        listaNombres.innerText === nombre ? listaNombres.classList.toggle('active') ? listaNombres.style.color = "red" : listaNombres.style.color = "#000000" : console.log();               
    });
};

// NO dinámico
const crearClase = elementoList => {
    elementoList[1].classList.toggle('active') ? elementoList[1].style.color = "red" : elementoList[1].style.color = "#000000";
};