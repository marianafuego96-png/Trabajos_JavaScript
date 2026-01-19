//Crea un programa que le pida al usuario un número y luego imprima su tabla de 
// multiplicar desde el 1 hasta el 10. Usa un ciclo for. //


const prompt = require("prompt-sync")({ sigint: true }); // prompt

let numero = parseInt(prompt("Ingresa un número: ")); // se solicita datos de entrada

if (isNaN(numero)) {
    console.log("Eso no es un número. Intenta de nuevo, por favor: "); // en caso que el user coloque cualquier cosa
} else { // a partir de aca si es valido el numero, suceden cosas:
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);  // número que ingresó el usuario
    }
}

