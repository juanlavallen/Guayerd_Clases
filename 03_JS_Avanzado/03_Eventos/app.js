// Evento 


function mostrarPosicion (event) {
    var x = event.screenX;
    var y = event.screenY;
    var coords = `X coords: ${x}, Y coords: ${y}`
    document.getElementById("demo").innerHTML = coords
}