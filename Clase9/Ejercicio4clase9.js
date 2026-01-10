// Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si 
// el nombre ingresado es igual a tu nombre.

const prompt = require ("prompt-sync") ({siginit: true});
let nombre = prompt("Buenos dias, ingresa tu nombre por favor: "); // solicita nombre y tambien da valor a vb
if (nombre === "Mariana") // si nombre es igual a mariana (los 3 signos igual devuelve true)
{
console.log ("Tu nombre es igual al mio"); // muestra el siguiente log 
} else {
console.log ("Tu nombre no es igual al mio");} // sino es falso y muestra el siguiente log




