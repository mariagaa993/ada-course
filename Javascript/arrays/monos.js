// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). 
Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay 
suficientes bananas para cada mono. Ejemplo:
Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
Cuántas bananas come un mono?: 2
¡Oh no!¡No hay suficientes bananas para los monos! 😭
*/ 

const monoBanana = prompt("Ingresar monos y bananas").split(" ");
let ordenado = monoBanana.sort();
const cantidad = monoBanana.reduce((contador, animalFruta) => {
    contador[animalFruta] = (contador[animalFruta] || 0) + 1; // preguntarle a Fede
    return contador;
}, {});

let bananas = parseInt(prompt("Cuántas bananas come cada mono?"));



if (Object.values(cantidad)[1] > Object.values(cantidad)[0]) {
    console.log("¡Oh no!¡No hay suficientes bananas para los monos! 😭");
} else if (Object.values(cantidad)[1] === Object.values(cantidad)[0]) {
    if (bananas === 1) {
        console.log("Hay suficientes bananas para los monos!");
    } else {
        console.log("¡Oh no!¡No hay suficientes bananas para los monos! 😭");
    }
} else if (Object.values(cantidad)[0] > Object.values(cantidad)[1]) {
    let resultado = parseInt(Object.values(cantidad)[0] / Object.values(cantidad)[1]);
    if (resultado >= bananas) {
        console.log("Hay suficientes bananas para los monos!");
    } else {
        console.log("¡Oh no!¡No hay suficientes bananas para los monos! 😭");
    }
} else {
    console.log("No ingreso nada");
}