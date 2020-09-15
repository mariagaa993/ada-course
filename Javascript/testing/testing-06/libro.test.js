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

function Review(usuario, opinion, valoracion) {
    this.nombre = usuario;
    this.opinion = opinion;
    this.valoracion = valoracion;
};
  
function Libro(nombre, autor, año, isbn) {
    this.nombre = nombre;
    this.autor = autor;
    this.año = año;
    this.isbn = isbn;
  
    this.reviews = [];
  
    this.agregarReview = detalleReview => {
		if(!(detalleReview instanceof Review)) throw new Error("El review debe ser de tipo Review.");
		this.reviews.push(detalleReview);
	  };
  
    this.promediarReviews = () => {
      	let valoracion = this.reviews.reduce((acc, review) => acc + review.valoracion, 0);
      	valoracion = valoracion / this.reviews.length;
      	return valoracion;
    };
};
  
function CatalogoDeLibros() {
    this.lista = [];
    this.buscarIndiceDeLibro = nombre => this.lista.findIndex(libro => libro.nombre === nombre);   
    this.agregar = detallesLibro => {
		if(!(detallesLibro instanceof Libro)) throw new Error("El detalle del libro debe ser de tipo Libro.");
      	this.lista.push(detallesLibro);
    };
    this.validarIndice = (indice) => {
      	if(indice === -1) throw new Error("No existe el libro.");
    };
    this.agregarReviewPorLibro = (nombreLibro, detalleReview) => {
      	const indice = this.buscarIndiceDeLibro(nombreLibro);
      	this.validarIndice(indice);
      	this.lista[indice].agregarReview(detalleReview);
    };
    this.verPromedioDeLibro = (nombreLibro) => {
      	const indice = this.buscarIndiceDeLibro(nombreLibro);
      	this.validarIndice(indice);
      	return this.lista[indice].promediarReviews();
    }
};

/* Si sustituimos this."" por const ocultamos la funcionalidad.
const lista = [];
this.mostrarLibros = () => {
    lista.forEach(libro => {
        console.log(`${libro.nombre} por ${libro.autor}`);
    });
};
*/

const caracteristicasLibro = new Libro();
const librosDeFiccion = new CatalogoDeLibros();

beforeEach(() => { // Qué es mejor?
    caracteristicasLibro.reviews = [];
    caracteristicasLibro.agregarReview(new Review("Maria", "Muy buena", 4));
	caracteristicasLibro.agregarReview(new Review("Maria", "Muy buena", 5));

	librosDeFiccion.lista = [];
	librosDeFiccion.agregar(new Libro("100 años", "Gabriel", 2005, 123456));
	librosDeFiccion.agregar(new Libro("200 años", "Gabriel", 2005, 123456));
	librosDeFiccion.agregarReviewPorLibro("200 años", new Review("Jose", "todo bien", 4));
	librosDeFiccion.agregarReviewPorLibro("200 años", new Review("Maria", "todo bien", 5));
});

test("1 Test: Creación de review", () => {
    expect(new Review("Maria", "Muy buena", 4)).toEqual({ // Puede ser así?
		nombre: "Maria",
		opinion: "Muy buena",
		valoracion: 4
	});
});

test('2 Test: Buscando el indice del libro', () => {
	expect(librosDeFiccion.buscarIndiceDeLibro("200 años")).toBe(1);
});

describe('3 Test: Agregando', () => {
	test('3.1 Test: Review', () => {
		expect(caracteristicasLibro.reviews.length).toBe(2);
	});
	test('3.2 Test: Libro', () => {
		expect(librosDeFiccion.lista.length).toBe(2);
	});
	test('3.3 Test: Review por libro', () => {
		expect(librosDeFiccion.lista[1].reviews[0]).toEqual({
			nombre: 'Jose',
			opinion: 'todo bien',
			valoracion: 4
		}); 
	});
});

describe('4 Test: Promediar', () => {
	test("4.1 Test: Promedio constructor Libro", () => {	  
		expect(caracteristicasLibro.promediarReviews()).toBe(4.5);
	});
	test('4.2 Test: Promedio constructor CatalogoDeLibros', () => {
		expect(librosDeFiccion.verPromedioDeLibro("200 años")).toBe(4.5);
	});
});

describe('5 Test: Probando errores', () => {
	test("5.1 Test: Cuando no es de tipo Review", () => {
		const review = {
		  usuario: "Maria",
		  opinion: "Hola",
		  valoracion: 5,
		}; 
		expect(() => caracteristicasLibro.agregarReview(review)).toThrow("El review debe ser de tipo Review.");
	});
	test("5.2 Test: Cuando no es de tipo Libro", () => {
		const detallesLibro = {
			nombre: "100 años",
			autor: "Gabriel",
			año: 2005,
			isbn: 123456
		}; 
		expect(() => librosDeFiccion.agregar(detallesLibro)).toThrow("El detalle del libro debe ser de tipo Libro.");
	});
	test('5.3 Test: Cuando no existe el libro', () => {
		expect(() => librosDeFiccion.verPromedioDeLibro("200")).toThrow('No existe el libro.');
	});
});