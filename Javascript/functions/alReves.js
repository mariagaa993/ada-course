// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Escribir una función que reciba como parámetro
un número e imprima ese número al revés.
reverse() 
*/

const imprimir = (param1) => {
    const miArray= String(param1).split('');
    const miArrayReverse = miArray.reverse();
    const Respuesta = miArrayReverse.join('');
    console.log(Respuesta)
};
imprimir(85);