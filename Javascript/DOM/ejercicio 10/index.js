// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear una lista que contenga imagenes, de las 
cuales se va a mostrar solo una.
Crear una funcion que me permita ir cambiando
de imagen cada vez que la ejecuto, segun el orden
en que estan declaradas.
*/



let cont = 1;
const mostrarImg = () => {
    const perritos = document.querySelectorAll("li");
   
    if(cont === 1) {
        perritos[0].style.display = "none"; 
        perritos[1].style.display = "block"; 
    } else if(cont === 2) {
        perritos[1].style.display = "none";
        perritos[2].style.display = "block";
    } else if(cont === 3) {
        perritos[2].style.display = "none";
        perritos[3].style.display = "block";
    } else if(cont === perritos.length) {
        cont = 1;
    }
    cont++;
};
