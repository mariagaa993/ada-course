// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 

Pedir un mes del año por prompt en números (ej: 12) Devolver el mes del año 
en texto (ej: "Diciembre") con SWITCH.
*/

let mes = Number(prompt("Dime un mes del año (en número)"));

switch (mes) {
    case 1:
        mes = "Enero";
        break;
    case 2:
        mes = "Febrero";
        break;
    case 3:
        mes = "Marzo";
        break;
    case 4:
        mes = "Abril";
        break;
    case 5:
        mes = "Mayo";
        break;
    case 6:
        mes = "Junio";
        break;  
    case 7:
        mes = "Julio";
        break;
    case 8:
        mes = "Agosto";
        break; 
    case 9:
        mes = "Septiembre";
        break;   
    case 10:
        mes = "Octubre";
        break;
    case 11:
        mes = "Noviembre";
        break;
    case 12:
        mes = "Diciembre";
        break;
    default: 
        mes = "Mes inválido";
}
alert(`Corresponde al mes ${mes}`);