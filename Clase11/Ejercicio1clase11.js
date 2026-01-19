/* ¿Positivo, negativo o cero? 
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida 
al usuario un número cualquiera. El programa deberá analizar si el número ingresado es 
positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje 
explicativo en cada caso.*/

const prompt= require("prompt-sync")({sigint: true});

let numero = parseFloat(prompt("Sr Usuario, por favor ingresar un numero: ")) // parsefloat porque evita texto

if ( numero  > 0 ) {
    console.log("Su numero es positivo");
} 
else if  ( numero < 0 ) {
    console.log("Tu numero es negativo");
}
else {
    console.log("Tu numero es cero.");
}
//  Aca tuve error al principio, si colocaba 10, me decia que era positivo pero tambien que era cero..
// lo solcucione, pero costo profe jaja


