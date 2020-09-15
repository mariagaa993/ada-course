// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear una funcion que me devuelva un objeto
Este objeto va a permitirme guardar 
peliculas que quiera ver, haya visto, o este viendo
O  sea, tengo un objeto con una lista de peliculas,
cada pelicula tiene su nombre, su director, su año, 
su genero, y un estado que puede ser (pendiente, viendo, vista).
Lo que tengo que poder hacer es
1. Agregar peliculas
2. Cambiar el estado
3. Remover peliculas
4. Obtener una lista legible con console.log de peliculas 
por estado. Es decir, le pido un estado y me deuvelve las peliculas
correspondientes. (`nombre del año tanto, dirigida por quien`)
*/

function Pelicula(nombre, director, año, genero, estado) {
    this.nombre = nombre;
    this.director = director;
    this.año = año;
    this.genero = genero;
    this.estado = estado;
};

function InfoPeliculas () {
    this.lista = [];
    this.buscarPorNombre = nombre => this.lista.findIndex(pelicula => nombre === pelicula.nombre);    
    this.agregar = detallesPelicula => {
        if(!(detallesPelicula instanceof Pelicula)) throw new Error('El detalle de la pelicula debe ser de tipo Pelicula.');
        this.validarPelicula(detallesPelicula.nombre);
        this.lista.push(detallesPelicula);
    };
    this.validarPelicula = nombre => {
        const buscarPelicula = this.buscarPorNombre(nombre);
        if(buscarPelicula >= 0) throw new Error("La pelicula ya se encuentra en la lista.");
    };
    this.modificarEstado = (nombre, estado) => {
        const pepe = this.buscarPorNombre(nombre);
        this.lista[pepe].estado = estado;
    };
    this.remover = nombre => this.lista = this.lista.filter(pelicula => pelicula.nombre !== nombre);
    this.mostrarPorEstado = estado => {
        const listaPorEstado = this.lista.filter(pelicula => pelicula.estado === estado);
        listaPorEstado.forEach(pelicula => console.log(`${pelicula.nombre} del año ${pelicula.año} dirigida por ${pelicula.director}`));
    };
};

const pelisDeMaria = new InfoPeliculas();

/*
beforeEach(() => {
    pelisDeMaria.lista = [];
    pelisDeMaria.agregar(new Pelicula("Amor", "Maria", 2005, "Amor", "Viendo"));
    pelisDeMaria.agregar(new Pelicula("Amor 2", "Maria", 2010, "Amor", "Pendiente"));
    pelisDeMaria.agregar(new Pelicula("Amor 3", "Maria", 2015, "Amor", "Vista"));
}); 
Cuál es la diferencia de ponerlo aquí o dentro del describe? */

test('1 Test: Creacion de una pelicula', () => {
    expect(new Pelicula("Amor", "Maria", 2005, "Amor", "Vista")).toEqual({
        nombre: 'Amor',
        director: 'Maria',
        año: 2005,
        genero: 'Amor',
        estado: 'Vista'
    });
});

describe('2 Test: Probando los métodos', () => {
    beforeEach(() => {
        pelisDeMaria.lista = [];
        pelisDeMaria.agregar(new Pelicula("Amor", "Maria", 2005, "Amor", "Viendo"));
        pelisDeMaria.agregar(new Pelicula("Amor 2", "Maria", 2010, "Amor", "Pendiente"));
        pelisDeMaria.agregar(new Pelicula("Amor 3", "Maria", 2015, "Amor", "Vista"));
        
        test('2.1 Test: Agregar', () => {
            expect(pelisDeMaria.lista.length).toBe(3);
        });
        test('2.2 Test: Buscar', () => {
            expect(pelisDeMaria.buscarPorNombre("Amor")).toBe(0);
        });
        test('2.3 Test: Modificar estado', () => {
            pelisDeMaria.modificarEstado("Amor 2", "Viendo");
            expect(pelisDeMaria.lista[1]).toEqual({
                nombre: 'Amor 2',
                director: 'Maria',
                año: 2010,
                genero: 'Amor',
                estado: 'Viendo'
            });
        });
        test('Remover', () => {
            pelisDeMaria.remover("Amor 3");
            expect(pelisDeMaria.lista.length).toBe(2);
        });  
        test('Mostrar por estado', () => {
            pelisDeMaria.mostrarPorEstado("Vista"); // preguntar
        });
    });
});

describe('3 Test: Mostrando errores', () => {
    test('3.1 Test: No es de tipo Pelicula', () => {
        const pelicula = {
            nombre: 'Amor',
            director: 'Maria',
            año: 2005,
            genero: 'Amor',
            estado: 'Vista'
        }
        expect(() => pelisDeMaria.agregar(pelicula)).toThrow('El detalle de la pelicula debe ser de tipo Pelicula.');
    });
    test('3.2 Test: Ya existe la pelicula', () => {
        pelisDeMaria.agregar(new Pelicula("Amor", "Maria", 2005, "Amor", "Viendo"));
        expect(() => pelisDeMaria.validarPelicula("Amor")).toThrow("La pelicula ya se encuentra en la lista.");
    });
});