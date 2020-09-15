// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Mostrar en consola los números desde el 1000 hasta el 0 utilizando la estructura for.
Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**
*/

for (let i = 1000; i >= 0; i--){
    if (i % 10 === 0) {
        console.log(`**${i}**`);
    }else {
    console.log(`${i}`);
    }
}