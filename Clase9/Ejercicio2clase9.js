// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores 
// numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está 
// dentro del rango definido por las constantes.

const prompt = require("prompt-sync")({siginit:true});
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 100;
let  numero = parseFloat (prompt("Por favor ingrese numero para verificar el rango: ")); 
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO){
    console.log("GENIAL! Estas dentro del rango");
} else {
    console.log ("No te preocupes! La proxima sera. El numero esta fuera del rango");
}
