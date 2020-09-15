// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
*/

const imprimir = (param1) => {
    const miArray= param1.split('');
    const miArrayOrdenado = miArray.sort();
    const Respuesta = miArrayOrdenado.join('');
    console.log(Respuesta);
};
imprimir("supercalifragilisticoespiralidoso");