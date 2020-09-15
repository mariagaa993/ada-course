// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear una clase Ropa, con propiedades
que me permitan definir sus 
caracteristicas basicas (nombre,
tipo, medidas, y pensar otras), y me permita 
hacer metodos para "ponerme" la ropa.
De esta forma, yo deberia poder
tener, por ejemplo, un metodo
"calzar" que no funcione si 
es una pollera, pero si 
funcione si es una zapatilla.
Crear varios tipos distintos de ropa.
*/

/// ---------------- Primera manera

class Ropa {
    constructor(nombre, tipo, medida, color) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.medida = medida;
        this.color = color;
        Ropa.validarTipoDeRopa(tipo);
    };
    calzar() {
        if(this.tipo !== "calzado") throw new Error('Esta prenda no se puede calzar.');
        return `Esas ${this.nombre} te quedan muy bien.`;
    };
    vestirArriba() {
        if(this.tipo !== "camisa" || this.tipo !== "blusa") throw new Error('Esta prenda no se puede colocar arriba.');
        return `Esa ${this.nombre} te hace ver bien!`;
    };
    vestirAbajo() {
        if(this.tipo !== "pantalon" || this.tipo !== "jean") throw new Error('Esta prenda no se puede colocar abajo.');
        return `Esa ${this.nombre} te hace ver bien!`;
    }
    accesorio() {
        if(this.tipo !== "accesorio") throw new Error('Esto no es un accesorio.');
        return `Ese ${this.nombre} te queda increíble!`;
    }
    static listarTipoDeRopa() {
        return [
            "camisa",
            "blusa",
            "pantalon",
            "jean",
            "calzado",
            "accesorio"
        ];
    };
    static validarTipoDeRopa(tipo) {
        if(Ropa.listarTipoDeRopa().indexOf(tipo) === -1) throw new Error("El tipo de ropa no existe.");
    }
};


/// ---------------- Segunda manera

class Ropa {
    constructor(nombre, tipo, medida, color) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.medida = medida;
        this.color = color;
        Ropa.validarTipoDeRopa(tipo);
    };
    calzar() {
        if(this.tipo !== "calzado") throw new Error('Esta prenda no se puede calzar.');
        return `Esas ${this.nombre} te quedan muy bien.`;
    };
    vestir() {
        if(this.tipo !== "vestimenta") throw new Error('Esta prenda no se puede vestir.');
        return `Esa ${this.nombre} te hace ver bien!`;
    };
    accesorio() {
        if(this.tipo !== "accesorio") throw new Error('Esto no es un accesorio.');
        return `Ese ${this.nombre} te queda increíble!`;
    };
    static listarTipoDeRopa() {
        return [
            "calzar",
            "vestir",
            "accesorio",
        ];
    };
    static validarTipoDeRopa(tipo) {
        if(Ropa.listarTipoDeRopa().indexOf(tipo) === -1) throw new Error("El tipo de ropa no existe.");
    }
};

/*
Coloque como tipo = vestimenta.
Vestimenta corresponde a toda la ropa en general: pantalon, jean, pollera, blusa, camisa.
Todo aquella que se pueda vestir.
Coloque accesorios (él dice ropa, pero calzado no es ropa, así
que, decidí colocar accesorios) = lentes, cartera, pulseras...
*/


/// ---------------- Tercera manera

class Ropa {
    constructor(nombre, tipo, medida, color) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.medida = medida;
        this.color = color;
        Ropa.validarTipoDeRopa(tipo);
    };
    calzar() {
        if(this.tipo !== "calzado") throw new Error('Esta prenda no se puede calzar.');
        return `Esas ${this.nombre} te quedan muy bien.`;
    };
    vestir() {
        if(this.tipo !== "formal" && this.tipo !== "informal" && this.tipo !== "deportiva") throw new Error('Esta prenda no se puede vestir.');
        return `Esa ${this.nombre} te hace ver bien!`;
    };
    accesorio() {
        if(this.tipo !== "accesorio") throw new Error('Esto no es un accesorio.');
        return `Ese ${this.nombre} te queda increíble!`;
    };
    static listarTipoDeRopa() {
        return [
            "formal",
            "informal",
            "deportiva",
            "calzado",
            "accesorio",
        ];
    };
    static validarTipoDeRopa(tipo) {
        if(Ropa.listarTipoDeRopa().indexOf(tipo) === -1) throw new Error("El tipo de ropa no existe.");
    }
};

/*
Coloque como tipo: formal, informal, deportiva. 
Se pueden colocar más.
formal = blazer, camisa, pantalon...
informal = camiseta, pollera, jeans...
deportiva = campera...
*/

// métodos y propiedades.
// clases: métodos estáticos. No son de las instancias. Ejemplo: Ropa.static();
// clase: define lo que va a hacer el objeto resultante.

class Ropa {
    constructor(nombre, tipo, medida, color) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.medida = medida;
        this.color = color;
        Ropa.validarTipoDeRopa(tipo);
    };
    calzar() {
        if(this.tipo !== "calzado") throw new Error('Esta prenda no se puede calzar.');
        return `Esas ${this.nombre} te quedan muy bien.`;
    };
    vestir() {
        if(this.tipo !== "formal" && this.tipo !== "informal" && this.tipo !== "deportiva") throw new Error('Esta prenda no se puede vestir.');
        return `Esa ${this.nombre} te hace ver bien!`;
    };
    accesorio() {
        if(this.tipo !== "accesorio") throw new Error('Esto no es un accesorio.');
        return `Ese ${this.nombre} te queda increíble!`;
    };
    static listarTipoDeRopa() {
        return [
            "formal",
            "informal",
            "deportiva",
            "calzado",
            "accesorio",
        ];
    };
    static validarTipoDeRopa(tipo) {
        if(Ropa.listarTipoDeRopa().indexOf(tipo) === -1) throw new Error("El tipo de ropa no existe.");
    }
};

class Formal extends Ropa {
    constructor(nombre, tipo, medida, color, precio, calzar) {
        super(nombre, tipo, medida, color, precio, calzar());
        this.precio = precio;
        this.tipo = tipo;
    };
    formal() {
        if(this.tipo !== "formal") throw new Error('No puedes ir a la entrevista de trabajo.');
        return 'Estas linda para la entrevista de trabajo.'
    };
    costo() {
        if(this.precio >= 20) throw new Error('Ese blazer te costo carísimo!');
        return 'Ah! Ese blazer tiene un precio accesible.' 
    };
};
const formal = new Formal("blazer", "formal", "m", "negro");

class Informal extends Ropa {
    constructor() {
        super("short", "informal", "m", "negra")
    };
};
const informal = new Informal();

class Deportiva extends Ropa {
    constructor() {
        super("campera", "deportiva", "m", "negra")
    };
};
const deportiva = new Deportiva();

class Calzado extends Ropa {
    constructor() {
        super("zapatillas", "calzado", "36", "negra")
    };
};
const calzado = new Calzado();

class Accesorio extends Ropa {
    constructor() {
        super("anillo", "accesorio", "m", "dorado")
    };
};
const accesorio = new Accesorio();


// ---------------------- Con las chicas

class Ropa {
    constructor(nombre, tipo, talle, material, color, precio) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.talle = talle;
        this.material = material;
        this.color = color;
        this.precio = precio;
        this.puesto = false;
    };
    calzar() {
        if(this.tipo !== "calzado") throw new Error ("Esta prenda no se puede calzar.");
        this.puesto = true;
        console.log("Que lindo calzado tienes puesto!")
    };
    vestir() {
        if(this.tipo === "calzado") throw new Error ("Esta prenda no se puede vestir.");
        this.puesto = true;
        console.log("Estas pipi cucu!")
    };
    abrochar() {
        if(this.tipo !== "camisa" && this.tipo !== "pantalon") throw new Error ("Esta prenda no se puede abrochar(");
        this.puesto = true;
        console.log("Estas re abrochado!")
    };
    static listarTiposDePrendas() {
        return [
        "calzado",
        "pantalon",
        "remera",
        "camisa",
        "campera",
        "sombrero"
        ];
    };
};

class Pantalon extends Ropa {
    constructor (nombre, talle, material, color, precio) {
        super (nombre, 'pantalon', talle, material, color, precio);
    };
    maquinaDeLavar() {
        if (this.material !== 'jean' && this.material !== 'gabardina') throw new Error ("no puedes ingresarlo a la lavadora");
        console.log("metelo en la lavadora, lavado corto, el planeta esta muriendo");
    };
    chequearColorParaLavar() {
        if (this.color === 'blanco') throw new Error ('Solo lavar con ropa blanca');
        console.log ("perdon, mala mia, segui lavando");
    };
    
};

class Camisa extends Ropa {
    constructor (nombre, talle, material, color, precio, estilo) {
        super (nombre, 'camisa', talle, material, color, precio);
        this.estilo = estilo;
        this.planchado = false;
    };
    get temporada() {
        if (this.estilo === 'manga corta') {
            return 'es para verano';
        } else if (this.estilo === 'manga larga') {
            return 'es para invierno';
        } else {
            throw new Error ("Esa no es una camisa, vuelve a intentarlo")
        }
    }; 
    planchar () {
        if(this.material === 'seda') throw new Error ("Por favor no planchar esta prenda");
        console.log("La puedes planchar sin problemas");
        this.planchado = true;
    };  
};

class Calzado extends Ropa {
    constructor(nombre, talle, material, color, precio) {
        super (nombre, 'calzado', talle, material, color, precio);
    };

};

class Zapatilla extends Calzado {
    constructor(nombre, talle, material, color, precio) {
        super (nombre, talle, material, color, precio);
    }
};

class Deportiva extends Zapatilla {
    constructor(talle, material, color, precio) {
        super ("deportiva", talle, material, color, precio);
    };
    paraEjercitarse() {
        if(this.nombre !== 'deportiva') throw new Error('El tipo de zapatilla no es apta para hacer deporte.');
        console.log('Lista para hacer ejercicios.')
    };
    get climaLluvioso() {
       if(this.color === "blanco") throw new Error('No es conveniente colocarte zapatillas blancas mientras llueve.');
        console.log('Puedes salir a correr mientras llueve!');
    };
};