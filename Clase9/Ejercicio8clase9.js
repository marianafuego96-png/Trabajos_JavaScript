//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga 
//sobre los triángulos para determinar la formula)
// MUY DIFICIL PROFE!

const prompt= require ("prompt-sync") ({siginit : true});
let lado1 = parseFloat(prompt("Ingresa la longitud del primer lado del triangulo: "));
let lado2 = parseFloat(prompt("Genial, ahora ingresa el segundo valor de la long del triangulo: "));
let lado3 = parseFloat(prompt("Perfecto, vamos por el ultimo valor del trinagulo: "));

// Nota: Todos los lados iguales son equilatero
// Nota: Todos los lados distintos son escaleno
// Nota: Dos lados iguales es isoceles

if (lado1 === lado2 && lado2 === lado3){
    console.log ("Su triangulo es Equilatero"); 
}
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log ("Su triangulo es Isoceles");
} else {
    console.log ("Su triangulo es escaleno");
}



    