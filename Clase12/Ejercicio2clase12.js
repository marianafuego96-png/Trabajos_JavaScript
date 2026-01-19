/* Ejercicio 2: Do While 
Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la 
correcta. La contraseña correcta es "1234". */

const prompt = require  ("prompt-sync")({sigint: true});
let password;
do {
    password = prompt("Por favor ingrese su clave, en caso que sea erronea se le pedira devuelta: "); // solicita clave al user
    }
while (password !== "1234"); // si password no es igual a 1234, debe seguir reintentando.
console.log ("Su clave es correcta.") // log porque el usuario coloco bien la clave



