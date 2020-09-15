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

function Review(nombre, opinion, valoracion) {
    this.nombre = nombre;
    this.opinion = opinion;
    this.valoracion = valoracion;
};
  
function Libro(nombre, autor, anio, isbn) {
    this.nombre = nombre;
    this.autor = autor;
    this.anio = anio;
    this.isbn = isbn;
  
    this.reviews = [];
  
    this.agregarReview = (nombre, opinion, valoracion) => {
        const review = new Review(nombre, opinion, valoracion);
        this.reviews.push(review);
    };
  
    this.promediarReviews = () => {
      let valoracion = this.reviews.reduce((acc, review) => acc + review.valoracion, 0);
      valoracion = valoracion / this.reviews.length;
      return valoracion;
    };
};
  
function CatalogoDeLibracos() {
    this.lista = [];
    this.buscarIndiceDeLibro = nombre => this.lista.findIndex(libro => libro.nombre === nombre);   
    this.agregar = (nombre, autor, anio, isbn) => {
      const libraco = new Libro(nombre, autor, anio, isbn);
      this.lista.push(libraco);
    };
    this.validarIndice = (indice) => {
      if(indice === -1) throw new Error("Te equivocaste");
    };
    this.agregarReviewPorLibro = (nombreLibro, usuario, opinion, valoracion) => {
      const indice = this.buscarIndiceDeLibro(nombreLibro);
      this.validarIndice(indice);
      this.lista[indice].agregarReview(usuario, opinion, valoracion);
      //const review = new Review(nombre, opinion, valoracion);
      //this.lista[indice].reviews.push(review);
    };
    this.verPromedioDeLibro = (nombreLibro) => {
      const indice = buscarIndiceDeLibro(nombreLibro);
      this.validarIndice(indice);
      return this.lista[indice].promediarReviews();
    }
};

const librosDeFede = new CatalogoDeLibracos();

/* Si sustituimos this."" por const ocultamos la funcionalidad.
const lista = [];
this.mostrarLibros = () => {
    lista.forEach(libro => {
        console.log(`${libro.nombre} por ${libro.autor}`);
    });
};
*/