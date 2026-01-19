/*Ejercicio 4: ¿Es par o impar? 
Consigna: 
Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un 
número y determine si es par o impar. Muestra un mensaje explicativo indicando qué 
significa cada caso. */



const prompt= require("prompt-sync")({sigint: true}); // usamos promt 
let numero  = parseInt(prompt("Ingresa un número: ")); // necesite ayuda de chatgpt en ese caso 

if (isNaN(numero)) {
    console.log("Sr usuario, no es un numero.");
} else if (numero % 2 === 0) {
    console.log("Su numero es par");
} else {
    console.log("El número es impar");
}