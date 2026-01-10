const prompt = require("prompt-sync")({siginit: true});
let valor = parseFloat(prompt("Ingrese un valor numerico, por favor: ")); // Se solicita al usuario un valor

if (valor > 0) {
    console.log ("El numero es Positivo") // Verificacion positiva
}
else if (valor < 0) {
    console.log ("El numero es Negativo") // Verficacion negativa
}
else {
    console.log ("El numero es Cero");} // creo que es neutral y un caso excepcional






