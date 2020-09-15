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

//////// v - Maria

const listaPeliculas = () => {
    let misPeliculas = {
        lista: [],
        buscarPorNombre: function(nombre) {
            return this.lista.findIndex(pelicula => nombre === pelicula.nombre);
        },
        agregar: function(nombre, director, año, genero, estado) {
            this.validarPelicula(nombre);
            const pelicula = {
                nombre, 
                director, 
                año, 
                genero, 
                estado
            };
            this.lista.push(pelicula);
        },
        validarPelicula: function(nombre) {
            const buscarPelicula = this.buscarPorNombre(nombre);
            if(buscarPelicula >= 0) throw new Error("La pelicula ya se encuentra en la lista.");
        },
        modificarEstado: function(nombre, estado) {
            const pepe = this.buscarPorNombre(nombre);
            this.lista[pepe].estado = estado;
        },
        remover: function(nombre) {
            this.lista = this.lista.filter(pelicula => pelicula.nombre !== nombre);
        },
        mostrarPorEstado: function(estado) {
            let hola = this.lista.filter(pelicula => pelicula.estado === estado); {
                hola.forEach(mostrar => console.log(`${mostrar.nombre} del año ${mostrar.año} dirigida por ${mostrar.director}`));
            };
        }      
    }
    return misPeliculas;
};

// generador de simples objetos
const peliculasMaria = listaPeliculas();
const peliculasJose = listaPeliculas(); 