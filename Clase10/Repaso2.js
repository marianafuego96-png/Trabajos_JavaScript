// Ejercicio 4 – Tipo de Datos: Declarar 4 variables utilizando la palabra reservada
//let y asignarles valores según el tipo de dato que sugiera su nombre. Además,
// realizar operaciones y validaciones adicionales sobre estos valores.

const prompt= require("prompt-sync")({siginit: true});
let texto = prompt("Hola, estoy programando") // variable tipo texto
let numero = 30; // numerico
let nada = null; // vacio
console.log( numero + 10 ); // suma 30 (es decir valor de vb mas los 10 = 40

let verdadero = true; // booleano

if (verdadero === true){
    console.log("El valor de la variable es True")
}
else if (verdadero != true) {
    console.log("El valor de la variable es false");
}

if (nada === null) {
    console.log("El valor de la variable es null")
}
else if (nada != null) {
    console.log ("El valor no es null");
}

