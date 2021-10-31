//Variables

//La vieja forma de declarar variables
//var miPrimerVariable;

//Las nuevas formas de declarar variables (ES6)

//let miSegundaVariable;       //scope local
//const otraFormaDeVariable;  //scope mixto (global y local segun donde se declare)

//Suma
var primerNumero=2;
var segundoNumero=3;
var resultado=primerNumero + segundoNumero;
console.log("Tu resultado es:" + resultado);

//Nombre
var primerNombre= "Juan";
var segundoNombre= "Ignacio";
var nombreCompleto= primerNombre + " " + segundoNombre;
console.log(nombreCompleto);

miPrimerBooleano = True; // Esto significa que esta variable es igual a 1
otroBooleano = False; // Esto significa que es igual 0

//Tipos de datos
/*
Numericos: INT(Enteros) = 1 o FLOAT (Flotantes) = 1.5
Texto: Strings (Alfanumericas) = "Esto es un texto", ""
*/

/*Booleanas:
    - 0 o 1
    - True or False
*/

//Operadores Aritmeticos
/*
+ = Suma
- = Resta
/ = Division
* = Multiplicacion
*/

//Operadores extendidos
/*
% = Resto
%% = Modulo
*/


//Funcion Math
var numeroExperimental=7;
console.log(Math.pow( numeroExperimental ,3));
console.log(Math.round(1.777777777777));

//Numeros 
function numeroAleatorioVectorizado(min, max){
    console.log(Math.round((Math.random() * (max - min) + min))) 

}
numeroAleatorioVectorizado(10, 100);