// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un programa que pida ingresar nombres separados por espacios y
devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:}
Ingrese nombres: Ada Greta Grace
¡Hola Ada!
¡Hola Greta!
¡Hola Grace!
*/

const nombre = prompt("Quiénes están? Ingresar nombres").split(" ");

for (let i = 0; i < nombre.length; i++) {
    console.log(`Hola ${nombre[i]}!`);
}

// for para recorrer el array