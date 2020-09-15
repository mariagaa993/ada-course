// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Una funcion que reciba o un numero o un string
correspondiente a un mes, y devuelva el opuesto.
(Si recibe 12, devuelve Diciembre, si recibe Diciembre, devuelve 12).
Comenzar por los tests, recordar tirar errores y testearlos.
*/

const obtenerMes = (mes) => {
    switch (mes) {
        case 'enero':
        case 1:
            return mes === 'enero' ? 1 :  mes === 1 ? 'enero' : "no existe";
        case 'febrero':
        case 2:
            return mes === 'febrero' ? 2 :  mes === 2 ? 'febrero' : "no existe";
        case 'marzo':
        case 3:
            return mes === 'marzo' ? 3 : mes === 3 ? 'marzo' : "no existe";
        case 'abril':
        case 4:
            return mes === 'abril' ? 4 : mes === 4 ? 'abril' : "no existe";
        case 'mayo':
        case 5:
            return mes === 'mayo' ? 5 : mes === 5 ? 'mayo' : "no existe";
        case 'junio':
        case 6:
            return mes === 'junio' ? 6 : mes === 6 ? 'junio' : "no existe";
        case 'julio':
        case 7:
            return mes === 'julio' ? 7 : mes === 7 ? 'julio' : "no existe";
        case 'agosto':
        case 8:
            return mes === 'agosto' ? 8 : mes === 8 ? 'agosto' : "no existe";
        case 'septiembre':
        case 9:
            return mes === 'septiembre' ? 9 : mes === 9 ? 'septiembre' : "no existe";
        case 'octubre':
        case 10:
            return mes === 'octubre' ? 10 : mes === 10 ? 'octubre' : "no existe";
        case 'noviembre':
        case 11:
            return mes === 'noviembre' ? 11 : mes === 11 ? 'noviembre' : "no existe";
        case 'diciembre':
        case 12:
            return mes === 'diciembre' ? 9 : mes === 9 ? 'diciembre' : "no existe";
        default:
            throw new Error ("No es un mes.");
    }
}

// TEST
test('1 Test: Si ingresamos 1 devuelve enero', () => {
    expect(obtenerMes(1)).toBe('enero'); 
});

test('2 Test: Si ingresamos febrero devuelve 2', () => {
    expect(obtenerMes('febrero')).toBe(2);
});

test('3 Test: Probando el error cuando ingresamos un mes que no existe', () => {
    expect(() => obtenerMes("ener").toThrow('No es un mes.'));
});