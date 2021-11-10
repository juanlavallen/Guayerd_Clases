/********* VALIDACION PARA CAMPOS DE TEXTO *********/
function validateform() {
    let x = document.forms["myForm"]["nombre"].value;
    if(x == '') {
        document.getElementById("validacion").innerHTML = "Es necesario completar tu nombre";
        return false;
    }
}

