//Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que 
// ingrese dos valores booleanos (true o false) y muestra el resultado de diversas 
// combinaciones lógicas. 

const prompt = require("prompt-sync")({siginit:true});
let condicion1 = prompt("Ingrese primer valor booleano (true o false): ") === 'true';
let condicion2 = prompt("Ingrese segundo valor booleano (true o false): ") === 'true';
console.log("--- resultados logicos---");
console.log("AND (&&): " + (condicion1 && condicion2)); // debe ser verdaderas
console.log("OR (||): " + (condicion1 || condicion2 )); // una debe ser verdadera
console.log ("NOT condicion1 (!): " + (!condicion1));

