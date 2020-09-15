// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 
Pedir un día de la semana por prompt en texto (ej: "Lunes"). Devolver el número 
del día (ej: 2). En caso de que el día ingresado no exista, tirar un error y 
agarrarlo, e imprimirlo. 
*/

let dia = prompt("Dime un día de la semana");

try {
    switch (dia)  {
        case "domingo":
            dia = 1;
            break;
        case "lunes":
            dia = 2;
            break;
        case "martes":
            dia = 3;
            break;
        case "miercoles":
            dia = 4;
            break;
        case "jueves":
            dia = 5;
            break;
        case "viernes":
            dia = 6;
            break;
        case "sabado":
            dia = 7;
            break;
        default:
            throw new Error("Lo ingresado no corresponde a un día");
    }
    alert(`${dia}`);
}
catch (err){
    alert(err);
}