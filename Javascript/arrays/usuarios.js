// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 
Crear un programa que dado una lista de nombres de usuarias separadas por 
espacios, muestre un mensaje con el status del chat. Las reglas son:
Para una usuaria, debe mostrar: nombre usuaria + está conectada
Para dos usuarias, debe mostrar: nombre usuaria 1 + y + nombre usuaria 2 + están conectadas
Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre 
usuaria 2 + y X persona(s) más están conectadas.
Ejemplo:
Ingrese nombres de usuarias: Ada
Ada está conectada
Ingrese nombres de usuarias: Ada Grace
Ada y Grace están conectadas
Ingrese nombres de usuarias: Ada Grace Marie
Ada, Grace y 1 persona(s) más están conectadas
*/

const user = prompt("Quién esta conectada?").split(" ");

if (Object.keys(user).length == 1) {
    console.log(`${Object.values(user)[0]} esta conectada`);
} else if (Object.keys(user).length == 2) {
    console.log(`${Object.values(user)[0]} y ${Object.values(user)[1]} estan conectadas`);
} else if (Object.keys(user).length > 2){
    let resta = user.length - 2;
    console.log(`${Object.values(user)[0]}, ${Object.values(user)[1]} y ${resta} persona(s) estan conectadas`);
} else {
    alert("cool");
}