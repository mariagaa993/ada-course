// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Desarrollar una función que reciba por parámetro
un día de la semana y devuelva el número que 
le corresponde.
Comenzar por los casos de test, y luego hacer 
la función.
*/

const convertir = semana => {
    switch (semana) {
        case "lunes": 
            return 1;
        case "martes":
            return 2;
        case "miercoles":
            return 3;
        case "jueves": 
            return 4;
        case "viernes":
            return 5;
        case "sabado":
            return 6;
        case "domingo":
            return 7;
        default:
            throw new Error ("Lo ingresado no es un día");
    }
}

test('1 Test: Ingresamos martes y nos devuelve 2', () => {
    expect(convertir('martes')).toBe(2);
});

test('2 Test: probando el error', () => {
    expect(() => convertir('marte')).toThrow("Lo ingresado no es un día");
});