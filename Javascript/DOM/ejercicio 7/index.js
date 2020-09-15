// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Escribir una funcion que nos permita pasarle un elemento 
y un color, y  le cambie el color de fondo al elemento.
*/

const elemento = document.querySelector("#ej001 > h1");

const cambiarColor = (elemento, color) => {
    elemento.style.backgroundColor = color;
};

/* -------------------------------
Modificar la funcion previa para que, si no se recibe
un color por parametro, se busque un color de forma
azarosamente.
*/

const elemento = document.querySelector("#ej001 > h1");
    const cambiarColor = (elemento, color) => {
        if(color) {
            elemento.style.backgroundColor = color;
        }
        else {
        elemento.style.backgroundColor = 
        "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
    };   
};