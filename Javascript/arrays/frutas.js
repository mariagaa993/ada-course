// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un programa que pida ingresar "manzana", "pera"y "durazno" y devuelva un mensaje 
con la cantidad que hay de cada una. Ejemplo:
Ingrese frutas: manzana manzana pera durazno pera durazno manzana
Hay 3 🍎, 2 🍐 y 2 🍑
*/

// keys - dibujo
const num = prompt("Ingresar manzanas, peras y duraznos").split(" ");

let contador = {}
const arregloFrutas = num.reduce((contador, frutas) => {
    contador[frutas] = (contador[frutas] || 0) + 1; // preguntarle a Fede
    return contador;
}, {});

for (let [key, value] of Object.entries(arregloFrutas)) {
    if (key === "manzana") {
        console.log(`Hay ${value} 🍎`);
    } else if (key === "pera") {
        console.log(`Hay ${value} 🍐`);
    } else if (key === "durazno") {
        console.log(`Hay ${value} 🍑`);
    } else {
        alert("nooooo");
    }
}

// Keys - letras 

const num = prompt("Ingresar manzanas, peras y duraznos").split(" ");

let contador = {}
const arregloFrutas = num.reduce((contador, frutas) => {
    contador[frutas] = (contador[frutas] || 0) + 1;
    return contador;
}, {});

for (let [key, value] of Object.entries(arregloFrutas)) {
    console.log(`Hay ${value} ${key}`); 

}

/*
    num.splice(0, 1, '🍎');
    num.splice(1, 2, '🍐');
    num.splice(2, 3, '🍑');
*/