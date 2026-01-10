// Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. 
//Muestra un mensaje personalizado según el caso
const prompt = require ("prompt-sync") ({siginit: true});
let edad = parseFloat(prompt("Buenos dias, ingresa tu edad por favor: "));
if (edad >= 18){
    console.log("Sos mayor de edad, felicidades")
}
else if (edad <18) {
    console.log("Sos menor de edad, aun no podes beber alcohol");
}
