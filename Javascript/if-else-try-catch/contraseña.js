// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 
Hacer un programa que permita cambiar la contraseña de usuario. 
Para eso tiene que responder las tres preguntas de seguridad. Si las 
tres preguntas son respondidas correctamente, tiene que pedir por la 
nueva contraseña y luego mostrar un mensaje que fue cambiada. En caso 
de que al menos alguna pregunta fue respondida incorrectamente debe mostrar 
un mensaje advirtiéndolo. Definir de antemano (hardcodear) preguntas y respuestas.
*/

let pregunta = prompt("Desea cambiar su contraseña?");
let respuesta1 = "perro";
let respuesta2 = "azul";
let respuesta3 = "arepa"

let pregunta1;
let pregunta2;
let pregunta3;

if (pregunta === "si") {
    alert("A continuación le mostraremos las preguntas de seguridad")
    pregunta1 = prompt("Animal favorito");
    pregunta2 = prompt("Color favorito");
    pregunta3 = prompt("Comida favorita");
    if (pregunta1 === respuesta1 && pregunta2 === respuesta2 && pregunta3 === respuesta3) {
        nueva = prompt("Ingrese su nueva contraseña");
        alert("Su contraseña ha sido cambiada exitosamente");
    } else {
        alert("Al menos una pregunta fue respondida incorrectamente. Vuelva a intentar. Tiene 2 oportunidades más.");
        pregunta1 = prompt("Animal favorito");
        pregunta2 = prompt("Color favorito");
        pregunta3 = prompt("Comida favorita");
        if (pregunta1 === respuesta1 && pregunta2 === respuesta2 && pregunta3 === respuesta3) {
            nueva = prompt("Ingrese su nueva contraseña");
            alert("Su contraseña ha sido cambiada exitosamente");
        } else {
            alert("Al menos una pregunta fue respondida incorrectamente. Vuelva a intentar. Tiene 1 oportunidades más.");
            pregunta1 = prompt("Animal favorito");
            pregunta2 = prompt("Color favorito");
            pregunta3 = prompt("Comida favorita");
            if (pregunta1 === respuesta1 && pregunta2 === respuesta2 && pregunta3 === respuesta3) {
                nueva = prompt("Ingrese su nueva contraseña");
                alert("Su contraseña ha sido cambiada exitosamente");
            } else {
                alert("Ha vencido todas las oportunidades por el día de hoy. Vuelva mañana");
            }
        }
    }
} else {
    alert("No se preocupe");
}