// https://github.com/fedm4/js-course

// Ejercicios: 

/* -------------------------------
Crear una función que devuelva el volumen de una caja cuando se le pase 
un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo.
El volumen se calcula multiplicando entre sí dichos valores.
*/

const size = { width: 2, length: 5, height: 1 }
const getBoxVolume = size => {
  return size.width * size.length * size.height;
}
getBoxVolume(size) // returns 10


/*-------------------------------
Hacer una función que dado un número, devuelva un objeto con el número 
redondeado hacia abajo (Math.floor), hacia arriba (Math.ceil) y dependiendo 
de su punto flotante (Math.round)
*/

const round = round => {
  let objeto;
  return objeto = {
    floor: Math.floor(round),
    ceil: Math.ceil(round),
    round: Math.round(round)
  };
}
round(13.3) //  returns { floor: 13, ceil: 14, round: 13 }


/*-------------------------------
Crear una función que dos objetos como argumentos, y devuelva un objeto que sea 
la unión de ambos. Es decir, debe contener las propiedades de ambos objetos. 
Para aquellas propiedades que están compartidas entre ambos, como un objeto 
no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.
*/

const info1 = {a: 1, b: 2, c: 3}
const info2 = {d: 4, b: 5}

const merge = (info1, info2) => {
  
}
merge(info1, info2) // returns {a: 1, b: 2, c: 3, d: 4}