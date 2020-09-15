// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear una funcion para aumentar tamaño 
de un titulo y otra para reducirlo.
*/

const elemento = document.querySelector("#ej001 > h1");

const aumentarTamanio = elemento => {
    let fontSize = elemento.style.fontSize;
    fontSize = Number(fontSize.replace("px", ""));
    fontSize += 10;
    elemento.style.fontSize = fontSize + "px"; 
};

const reducirTamanio = elemento => {
    let fontSize = elemento.style.fontSize;
    fontSize = Number(fontSize.replace("px", ""));
    fontSize -= 10;
    elemento.style.fontSize = fontSize + "px"; 
};