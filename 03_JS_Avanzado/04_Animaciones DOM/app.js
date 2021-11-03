var x = document.getElementById("miAnimacion");

// Iniciar la animacion con JS
function animacion () {
    x.style.webkitAnimation = "mymove 4s 2"; // Es para Chrome, Safari y Opera
    x.style.animation = "mymove 4s 2"; // Esto es para Mozilla
}

// Como iniciar la animacion en Chrome, Safari y Opera
x.addEventListener("webkitAnimationStart", myStarFunction);
x.addEventListener("webkitAnimationInteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Sintaxis standard (Para firefox y derivados)
x.addEventListener("animationstar", myStarFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStarFunction () {
    this.innerHTML = "animation event ocurred - La animacion comenzo"
    this.style.backgroundColor = "pink";
}

function myRepeatFunction () {
    this.innerHTML = "animationiteration event ocurred - La animacion itero";
    this.style.backgroundColor = "lightblue";
}

function myEndFunction () {
    this.innerHTML = "animationiteration event ocurred - La animacion fue completada"
    this.style.backgroundColor = "lightgray";
}