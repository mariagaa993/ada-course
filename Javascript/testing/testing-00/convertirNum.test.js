// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Desarrollar una función que convierta
de minutos a segundos. Pasar minutos por parámetro
y devolver los segundos.
Comenzar por los casos de test, y luego hacer la 
función. Recordar tirar errores y testearlos.
*/

test('test: pasando de minutos a segundos y tirando el error', () => {
    const convertir = minuto => {
        if(typeof minuto !== "number") throw new Error("Debe ingresar un número");
            return minuto * 60;
    };
    expect(convertir(6)).toBe(360);
    expect(() => convertir("hola")).toThrow("Debe ingresar un número");
});