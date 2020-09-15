// https://github.com/fedm4/js-course

// Ejercicio:

/* -------------------------------  
Crear un programa que pregunte por el día, el mes, y 
el hemisferio (norte/sur) y devuelva la estación del año correspondiente.
*/

let hemisferio = {
    "norte" : {
        "enero"      : "invierno",
        "febrero"    : "invierno",
        "marzo"      : "primavera",
        "abril"      : "primavera",
        "mayo"       : "primavera",
        "junio"      : "verano",
        "julio"      : "verano",
        "agosto"     : "verano",
        "septiembre" : "otoño",
        "octubre"    : "otoño",
        "noviembre"  : "otoño",
        "diciembre"  : "invierno"
    },
    "sur" : {
        "enero"      : "verano",
        "febrero"    : "verano",
        "marzo"      : "otoño",
        "abril"      : "otoño",
        "mayo"       : "otoño",
        "junio"      : "invierno",
        "julio"      : "invierno",
        "agosto"     : "invierno",
        "septiembre" : "primavera",
        "octubre"    : "primavera",
        "noviembre"  : "primavera",
        "diciembre"  : "verano"
    }
}

let resultado;
// let prueba;


let day = parseInt(prompt("Qué día es hoy?"));
let month = prompt("Qué mes esta transcurriendo?");
let hemis = prompt("En cuál hemisferio te encuentras? (norte/sur)");

if (hemisferio[hemis]) {
    resultado = hemisferio[hemis];
    
    let prueba = (resultado[month]) ? `El día de hoy es ${day} de ${month} y tu 
    estas ubicado en el hemisferio ${hemis}, por lo tanto, te encuentras en 
    ${resultado[month]}` : "Lo ingresado no es un mes válido";
    alert(prueba);

} else {
    alert("No eres terricola!");
}

// ------------------------------- or

let day = parseInt(prompt("Qué día es hoy?"));
let month = prompt("Qué mes esta transcurriendo?");
let hemis = prompt("En cuál hemisferio te encuentras? (norte/sur)");

// SUR
if (hemis === "sur") {
    if (day >= 21 && month === "diciembre" || month === "enero" || month === "febrero" || day < 21 && month === "marzo") {
        alert("Tu estas en verano");
    } else if (day >= 21 && month === "marzo" || month === "abril" || month === "mayo" || day < 21 && month === "junio") {
        alert("Tu estas en otoño");
    } else if (day >= 21 && month === "junio" || month === "julio" || month === "agosto" || day < 21 && month === "septiembre") {
        alert("Tu estas en invierno");
    } else if (day >= 21 && month === "septiembre" || month === "octubre" || month === "noviembre" || day < 21 && month === "diciembre") {
        alert("Tu estas en primevera");
    } else {
        alert("Lo ingresado no es un mes válido");
    }

// NORTE   
} else if (hemis === "norte") {
    if (day >= 21 && month === "diciembre" || month === "enero" || month === "febrero" || day < 21 && month === "marzo") {
        alert("Tu estas en invierno");
    } else if (day >= 21 && month === "marzo" || month === "abril" || month === "mayo" || day < 21 && month === "junio") {
        alert("Tu estas en primavera");
    } else if (day >= 21 && month === "junio" || month === "julio" || month === "agosto" || day < 21 && month === "septiembre") {
        alert("Tu estas en verano");
    } else if (day >= 21 && month === "septiembre" || month === "octubre" || month === "noviembre" || day < 21 && month === "diciembre") {
        alert("Tu estas en otoño");
    } else {
        alert("Lo ingresado no es un mes válido");
    }

// SI NO ES SUR O NORTE   
} else {
    alert("No eres terricola"); 
}