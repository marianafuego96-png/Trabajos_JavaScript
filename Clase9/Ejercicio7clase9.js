// Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra 
//el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462) 
const prompt = require ("prompt-sync") ({siginit :true});
let pesokg = parseFloat(prompt("Por favor ingresa tu peso en KG: "));
let pista = 2.20462
console.log(pesokg * pista); // cuenta 
console.log ("Su peso en libras es: "+ pesokg * pista); // mensaje de resultado

