// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un objeto que sea un libro, con todos 
sus detalles (nombre, autor, año, isbn). Ademas
de esto, deberá tener una lista de reviews, y cada
review deberá tener un formato de 
{nombre, review, valoracion(entre 1 y 5)}.
 
Deberemos crear una funcion para promediar esta 
valoracion. 
Tambien, tendremos que crear un getter para 
obtener el nombre, el autor y el isbn juntos 
en un formato legible (libro [por] autor - isbn).
Por último tendremos que crear una funcion que nos
permita agregar nuevas reviews al libro.
*/

const libro = {
    nombre: "El amor en los tiempos del cólera",
    autor: "Gabriel García Márquez",
    año: 1985,
    isbn: 15454-0,
    reviews: [],
    agregarReviews: function(nombre, review, valoracion) {
        if(valoracion < 1 || valoracion > 5) {
            throw new Error ("La valoración debe ser entre 1 - 5");
        }
        const listaReview = {
            nombre, 
            review,
            valoracion,
        };
        this.reviews.push(listaReview);
    },
    get libro() {
        return `${this.nombre} escrito por ${this.autor} - ${this.isbn}`;
    },
    get promediarValoracion() {
        return this.reviews.reduce((acumulador, listaReviews) => acumulador + listaReviews.valoracion / this.reviews.length, 0);
    }, 
};