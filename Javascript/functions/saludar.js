// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Hacer una funcion llamada "saludo". Cada vez llamo la funcion me pide un 
nombre. Toma ese nombre y me dice "Hola <nombre>" en un alert.  
*/

const saludar = () => {
    let nombre = prompt("Diga su nombre");
    alert(`Hola ${nombre}`);
}
saludar();