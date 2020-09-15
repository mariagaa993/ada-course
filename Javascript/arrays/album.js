// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un documento con el nombre arr_006.js
Declarar un array con el nombre discoNevermind y asignar los siguientes valores:
Smells Like Teen Spirit
In Bloom
Come As You Are
Immodium
Lithium
Polly
Territorial Pissings
Drain You
Lounge Act
Pay To Play
On a Plain
Tim
Reemplazar Immodium por Breed
Reemplazar Pay To Play por Stay Away
Reemplazar Tim por Something in the Way
Mostrar en consola la lista de canciones modificada
El resultado debería ser:
/*[
    "Smells Like Teen Spirit",
    "In Bloom",
    "Come As You Are",
    "Breed",
    "Lithium",
    "Polly",
    "Territorial Pissings",
    "Drain You",
    "Lounge Act",
    "Stay Away",
    "On a Plain",
    "Something in the Way"
] 
*/

const discoNevermind = [ 
    "Smells Like Teen Spirit",
    "In Bloom",
    "Come As You Are",
    "Immodium",
    "Lithium",
    "Polly",
    "Territorial Pissings",
    "Drain You",
    "Lounge Act",
    "Pay To Play",
    "On a Plain",
    "Tim"
]

discoNevermind.splice(3,1,"Breed");
discoNevermind.splice(9,1,"Stay Away");
discoNevermind.splice(11,1,"Something in the Way");

console.log(discoNevermind);

for(let i = 0; i < discoNevermind.length; i ++ ) {
    console.log(discoNevermind[i]); 
}