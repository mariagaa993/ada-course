// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Escribir una función que reciba una frase
e imprima la misma con la primera letra de 
cada palabra en mayúsculas.
Join y split
*/

const imprimir = (param1) => {
    const miArray= param1.split(' ');
    console.log(miArray);
    for(let i=0; i < miArray.length; i++) {
        miArray[i] = miArray[i].charAt(0).toUpperCase() + miArray[i].slice(1);

    }
    console.log(miArray.join(' '));

};
imprimir("es muy temprano");

//slice(1) a partir del i=1 muestrame lo que continua