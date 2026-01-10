const prompt = require ("prompt-sync")({signit: true});
let valorA = parseFloat (prompt ("Por favor, ingrese el primer valor: ")); // se solicita valor al user
let valorB = parseFloat (prompt ("Por favor, ingresa el segundo valor: ")); // se solicita el segundo valor al user 
console.log (valorA + valorB); // se realiza suma
let resultado = (valorA + valorB); // se guarda el resultado en una variable
console.log ("Su resultado es: "+ resultado) // log del resultado




