const prompt = require("prompt-sync")({ sigint: true}); 
let producto = parseFloat (prompt("Ingrese precio actual de Producto: "));
let descuento = parseFloat(prompt ("Ingrese descuento del producto: ")); 

let preciocondescuento = (producto * descuento) / 100;
let precioFinal = producto - preciocondescuento;
console.log ("Le termina quedando en: " + precioFinal);


// Ejercicio de calcular el doble de un numero
let valor = parseFloat (prompt( "Por favor, ingresar un valor numerico: ")); // Se le pide al usuario un valor numerico
let doble = 2 // Se declara la variable
console.log (valor * doble); // Se realiza la cuenta 
let resultado =  (valor * doble); // Evidencia del resultado del paso anterior 
console.log ("Su respuesta es:" + resultado); // Brindamos respuesta al usuario.




