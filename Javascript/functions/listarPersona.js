// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
1. Hacer una función que guarde una persona
en una lista de listas de datos de personas.
Es decir, una lista con varias listas adentro.
Deberia guardar por cada persona, una lista de datos
que incluyan el nombre completo, la edad y 
la dirección de email.

1b. Al ingresar nueva persona, validar que no 
exista en la lista. Si existe, tirar
un error. (Usar funcion distinta para validar
y llamar dentro de la funcion de guardar persona).

2. Hacer una función que me devuelva la lista
completa de personas.

3. Hacer una función que me permita encontrar
una persona por email.

4. Hacer una función que me permita encontrar 
personas por nombre o parte del nombre.

5. Hacer una función para borrar personas por mail.

6. Hacer una funcion que permita modificar nombre
buscando por mail.

7. Hacer una funcion que permita modificar edad 
buscando por mail.

Observaciones: 
Pensar en arrays dentro de arrays variable = [ ['dato1', 2, true], [], [] ]
Utilizar funciones de los arrays, find (o findIndex), map o for of
Utilizar nombres de variables y funciones representativas
*/

const listado = [];

const validar = (persona) => {
    listado.forEach(datos => {
        if (persona[0] === datos[0]) { 
            throw new Error ("persona repetida");
        }
    }); 
}

const guardarPersona = () => {
        const persona = prompt("ingrese su nombre, edad y email separados por comas").split(', ');
        validar(persona);
        listado.push(persona);
        alert("Se ha ingresado correctamente!");
}
guardarPersona();
guardarPersona();
console.log(listado);


const preguntarEmail = prompt("Cuál es su E-mail:");
const email = listado.findIndex(buscar => buscar[2] === preguntarEmail);

console.log(listado[email]);

const borrar = listado[email].splice(0,3);
console.log(borrar);
console.log(listado);










const preguntarNombre = prompt("Cuál es su E-mail:");
const nombre = listado.findIndex(buscar => buscar[0] === preguntarNombre);

console.log(listado[nombre]);


/*
const preguntarEmail = prompt("Cuál es su E-mail:");
const mostrar = listado.findIndex(buscar => {
    if (buscar[0] === preguntarEmail) {
        alert("la persona es:" + ' ' + listado)
    }
}); */


/*
const mostrar = (preguntarEmail) => {
    listado.findIndex(buscar => {
        if (buscar[2] === preguntarEmail) {
            return listado[mostrar];
        }
    }); 
}
mostrar(preguntarEmail);*/