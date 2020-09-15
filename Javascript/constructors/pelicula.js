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
    this.agregar = (nombre, director, año, genero, estado) => {
        this.validarPelicula(nombre);
        const pelicula = new Pelicula (
            nombre, 
            director, 
            año, 
            genero, 
            estado
        );
        this.lista.push(pelicula);
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
const pelisDeJose = new InfoPeliculas();