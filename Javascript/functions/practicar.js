let array = [];

const agregar = () => {
   let nombre = prompt("Agregar un nombre");
    try {
        if (array.indexOf(nombre) === -1) {
            array.push(nombre);
        } else {
            throw new Error("Repetido");
        }
    } catch (err) {
        console.log(err);
    }
} 
agregar();
agregar(); 
agregar(); 
agregar(); 
agregar(); 
agregar(); 
console.log(array);

for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]}`);
}

// Este lo hice para prácticar.