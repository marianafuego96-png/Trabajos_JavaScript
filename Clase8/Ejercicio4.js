const prompt = require ("prompt-sync")({siginit: true});
let Numero = parseFloat (prompt("Por favor, ingresa un valor numerico entero: "));

if (Numero % 2 === 0 ){
    console.log ("Su numero es PAR");
}
else  {
    console.log ("Su numero es IMPAR");}
    

