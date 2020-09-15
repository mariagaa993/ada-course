// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 
Crear un programa que permita saber si Sam y Frodo están juntos. El programa 
debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje 
si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:
Ingresar nombres: Sam Frodo Legolas
Sam y Frodo están juntos, ¡Frodo está a salvo!
Ingresar nombres: Sam Orco Frodo
Sam y Frodo están separados, ¡Frodo está en peligro!
*/

const nombres = prompt ("Ingrese participantes del senor de los anillos").split(" ");
const posicionSam = nombres.indexOf("sam");
const posicionFrodo = nombres.indexOf("frodo");

if (posicionSam === (posicionFrodo + 1) || posicionFrodo === (posicionSam - 1)){
  alert("Sam y Frodo están juntos, ¡Frodo está a salvo!");
}
else {
  alert("Sam y Frodo están separados, ¡Frodo está en peligro!");
}

// .indexOf(); muestra la posición el elemento en el array.