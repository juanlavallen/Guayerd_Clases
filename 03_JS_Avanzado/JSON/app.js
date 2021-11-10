/*
Bicicleta:
    - 1 Manubrio
    - 2 Pedales
    - 1 Asiento
    - 1 Cuadro
    - 2 Ruedas
    - Color
    - Frenos
    - 1 Cadena
    - Rayos en las ruedas
    - Marca
*/

// JSON = El formato de objetos de Javascript
// Objeto Json Bicicleta
const bicicleta = {
    rodado: "28",
    color: "Verde",
    marca: "KTM"
}

document.getElementById("valoresBici").innerHTML = bicicleta.marca;