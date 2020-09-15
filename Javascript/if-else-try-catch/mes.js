// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 

Pedir un mes del año por prompt en números (ej: 12) Devolver el mes del año 
en texto (ej: "Diciembre") con IF-ELSE IF-ELSE.
*/

let mes = Number(prompt("Dime un mes del año (en número)"));

if (mes === 1) {
    alert("Enero");
}
else if (mes === 2) {
    alert("Febrero");
}
else if (mes === 3) {
    alert("Marzo");
}
else if (mes === 4) {
    alert("Abril");
}
else if (mes === 5) {
    alert("Mayo");
}
else if(mes === 6) {
    alert("Junio");
}
else if(mes === 7) {
    alert("Julio");
}
else if(mes === 8) {
    alert("Agosto");
}
else if(mes === 9) {
    alert("Septiembre");
}
else if(mes === 10) {
    alert("Octubre");
}
else if(mes === 11) {
    alert("Noviembre");
}
else if(mes === 12) {
    alert("Diciembre");
}
else {
    alert("Mes inválido");
}