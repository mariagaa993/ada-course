// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un programa que permita elegir entre las operaciones: SUMA, RESTA,
DIVISIÓN y MULTIPLICACIÓN, y luego de elegida, ingresar dos números y hacer 
dicha operación con ella. 
*/

let calculo = prompt("Qué operación matemática quieres hacer?");
let valor1 = Number(prompt("Entendido! Por favor ingresar el primer valor"));
let valor2 = Number(prompt("Ahora, ingresa el segundo valor"));

try {
    switch (calculo) {
        case "suma":
            calculo = valor1 + valor2;
            break;
        case "resta":
            calculo = valor1 - valor2;
            break;
        case "multiplicacion":
            calculo = valor1 * valor2;
            break;
        case "division":
                calculo = valor1 / valor2;
            break; 
        default: 
        throw new Error("No se puede realizar esta operación");
    }
    alert(`El resultado de su operación es: ${calculo}`);
}
catch (err) {
    alert(err);
}