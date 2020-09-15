// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Ocurrencias en palabra
Crear una función que dado un string y un array de letras, /
devuelva un objeto con la cantidad de dichas letras que hay 
en cada palabra.La función debería tener un parámetro opcional que 
permite definir si va a ser sensible al caso o no(si "A" y "a" cuentan 
como dos letras distintas o no)
*/

///// v1 - Fede

const crearObjetitoDeLetrasYPalabras = (frase, letras) => {
    const arr = frase.split(" ");
    const obj = {};
    arr.forEach(palabra => {
        obj[palabra] = {}; // obj[propiedad-dinamica] -> obj[campo] = valor
        letras.forEach(letra => {
            const arrPal = palabra.split(""); //["A", "y"] -> ["s", "i"]
            obj[palabra][letra] = arrPal.reduce((acc, letraDePalabra) => {
                if (letraDePalabra.toLowerCase() === letra.toLowerCase()) {
                    acc = acc + 1;
                }
                return acc;
            }, 0);
        })
    });
    return obj;
};

///// v2 - Fede

const crearObjetitoDeLetrasYPalabras = (frase, letras) => {
    const arr = frase.split(" ");
    const obj = {};
    arr.forEach(palabra => {
        obj[palabra] = {};
        letras.forEach(letra => {
            const arrPal = palabra.toLowerCase().split("");
            letra = letra.toLowerCase();
            obj[palabra][letra] = arrPal.reduce((acc, letraDePalabra) => letraDePalabra === letra ? acc + 1 : acc, 0);
        })
    });
    return obj;
};

///// notas - Fede

const obj = crearObjetitoDeLetrasYPalabras(frase, letras); // se guarda en obj
crearObjetitoDeLetrasYPalabras(frase, letras);  // no se guarda y el return de la funcion se pierde en el eter

///// v - Maria

let oracion = "HolA estO es una pruebA".split(' ');
let letras = ["h", "A", "U", "b", "O", "t"];

const ocurrencies = (oracion, letras, sensible = true) => {  
    const obj = {};
    oracion.forEach(palabra => { // iterar cada palabra de la variable oracion
        let cantidad = 0;
        letras.forEach(letra => { // iterar cada letra de la variable letras
            let resultado = palabra.includes(letra);
                if(sensible === false) {
                    let letraTemporal = letra.toLowerCase();
                    let palabraTemporal = palabra.toLowerCase();
                    resultado = palabraTemporal.includes(letraTemporal);
                }
                if(resultado === true) { // si consigue coincidencia
                    cantidad ++
                }
            obj[palabra] = cantidad;
  
        });
    });
    console.log(obj);
} 
ocurrencies(oracion, letras);