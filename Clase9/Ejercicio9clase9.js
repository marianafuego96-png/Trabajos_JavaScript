// Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el
// radio de un círculo y calcula su área y perímetro utilizando la constante PI

const prompt = require ("prompt-sync") ({siginit : true});
const PI = 3.1416;

let radio = parseFloat(prompt("Por favor ingresa el radio: "))
let area = PI * Math.pow(radio, 2);
let perimetro = 2 * PI * radio;

console.log("Área del círculo:", area);
console.log("Perímetro del círculo:", perimetro);

// Aca dejo el ejercicio 10 tambien
// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana
// correspondiente. Si el número no está dentro de ese rango, muestra un mensaje
// de error.

let semana = parseInt(prompt("Por favor, ingresa un numero del 1 al 7: "));

switch (semana) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Error: el número debe estar entre 1 y 7");
}


