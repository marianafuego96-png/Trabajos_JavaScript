// Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese 
// dos números y muestra cuál es mayor o si son iguales. 
const prompt = require("prompt-sync")({siginit: true});
let  numero1 = parseFloat(prompt("Ingrese un numero: "));
let  numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

if (numero1 > numero2){
    console.log ("El primer numero (" + numero1 + ") es mayor que el segundo numero."
     );
} else if (numero2 > numero1){
    console.log ("El segundo numero (" + numero2 + ") es mayor que el primer numero.");
} else {
    console.log ("Ambos numeros son iguales");
}


