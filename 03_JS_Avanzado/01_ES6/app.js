// La declaracion de variables, se dejo de lado VAR para usar let LET y CONST

// Antes
var x = 10;

// ES6+
let x = 10;
const x = 10;

// Funciones en ES6

// Antes
var x = function(x, y) {
    return x * y;
}

// ES6+
// Las arrow function no poseen .this, no son buenas para ser utilizadas con objetos, no pueden hacer hosting y por lo tanto deben ser definidas antes de ser utilizadas.
const x = (x, y) => x * y;
const x = (x, y) => {return x * y};
const x = (x, y) => {
    return x * y;
}

// Arrays

// Antes
var nombres = ["Juan", "Lucas", "Ezequiel"];

// ES6
const nombres = ["Juan", "Lucas", "Ezequiel"];

// For loop

// Antes
for(var i = 0; i < 10; i++) {
    alert("Hola");
}

// ES6+
let texto = "";
for(let x of nombres){
    texto += x + "";
}

let lenguaje = "Javascript";
let texto = "";
for(let x of lenguaje) {
    texto += x + " ";
    console.log(texto);
}

// Map
const manzana = {nombre: 'Manzanas'}
const naranjas = {nombre: 'Naranjas'}

// Creamos un nuevo mapa y nos evitamos hacer Arrays multidimensionales
const frutas = new Map();

frutas.set(manzana, 500)
frutas.set(naranjas, 1000)

console.log(frutas);

for(let x of frutas) {
    manzana += x + " ";
    if(frutas.manzana >= 500) {
        console.log("No tienes suficientes manzanas");
    }
}

// Queda pendiente: Objetos, clases, constructor