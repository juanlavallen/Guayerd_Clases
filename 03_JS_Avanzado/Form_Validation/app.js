/********* VALIDACION PARA CAMPOS DE TEXTO *********/
function validateform() {
    let x = document.forms["myForm"]["nombre"].value;
    if(x == '') {
        document.getElementById("validacion").innerHTML = "Es necesario completar tu nombre";
        return false;
    }
}

/******* VALIDACION DE CAMPOS NUMERICOS *******/
function numbers() {
    let x = document.getElementById("number").value;
    let text;
    if(isNaN(x) || x < 1 || x > 10) {
        text = "El input no esta OK";
    } else {
        text = "El input esta OK";
    }
    document.getElementById("validacionNumero").innerHTML = text;
}