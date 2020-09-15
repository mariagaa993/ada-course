// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 
Pedir un día de la semana por prompt en texto (ej: "Lunes"). Devolver el número 
del día (ej: 2). En caso de que el día ingresado no exista, tirar un error y 
agarrarlo, e imprimirlo. 
*/

let dia = prompt("Dime un día de la semana");

try {
    if (dia === "domingo")  {
        alert("1");
    } else if(dia === "lunes") {
        alert("2");
    } else if(dia === "martes") {
        alert("3");
    } else if(dia === "miercoles") {
        alert("4");
    } else if(dia === "jueves") {
        alert("5");
    } else if(dia === "viernes") {
        alert("6");
    } else if(dia === "sábado") {
        alert("7");
    } else {
        throw new Error("Día inválido");
    }
} catch (err){
    alert(err);
}