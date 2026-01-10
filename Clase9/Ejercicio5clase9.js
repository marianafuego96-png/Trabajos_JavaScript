// Escribe un programa que pida al usuario que ingrese tres números y determine 
//cuál es el mayor de los tres. 

const prompt = require ("prompt-sync") ({siginit : true});
let Valor1 = Number(prompt("Por favor ingrese primer valor: "));
let Valor2 = Number(prompt("Ingrese segundo valor: "));
let Valor3 = Number(prompt("Ingrese tercer valor: "));

if (Valor1 >= Valor2 && Valor1 >= Valor3) {
    console.log ("El numero mayor es: "+ Valor1);
}
else if (Valor2 >= Valor1 && Valor2 >= Valor3) {
    console.log ("El numero mayor es: "+ Valor2);
}
else {
    console.log ("El numero mayor es: "+ Valor3);
}



