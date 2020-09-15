// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 
Crea un programa que pida al usuario el diámetro de una rueda y su grosor 
(en metros) y a través de condicionales if realice las siguientes operaciones:

Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para 
un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse 
el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las 
condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un
vehículo pequeño”.

Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro 
es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá 
mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”. 
*/

let diametro = Number(prompt("Cuál es el diámetro de su rueda en metros?"));
let grosor = Number(prompt("Ahora, cuál es su grosor en metros"));

if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
    alert("El grosor para esta rueda es inferior al recomendado");
} else {
    if (diametro > 1.4) {
        alert("La rueda es para un vehículo grande y su grosor es el recomendado");
    } else if (diametro <= 1.4 && diametro > 0.8) {
        alert("La rueda es para un vehículo mediano y su grosor es el recomendado");
    } else {
        alert("La rueda es para un vehículo pequeño");
    }
}