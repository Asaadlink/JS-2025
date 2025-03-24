// ANAGRAMAS
// Dos palabras son anagramas si utilizan 
// las mismas letras en orden diferente. Por ejemplo:
// amor ramo 

let palabra1 = "amor"
let palabra2 = "ramo"
let palabra3 = "patata"
let palabra4 = "omar"

// Obtener esta salida
// Las palabras "amor" y "ramo" son anagramas
// Las palabras "amor" y "patata" no son anagramas

palabra1 = palabra1.split("").sort().join("")
console.log(palabra1);

palabra2 = palabra2.split("").sort().join("")
console.log(palabra2);

palabra3 = palabra3.split("").sort().join("")
console.log(palabra3);

palabra4 = palabra4.split("").sort().join("")
console.log(palabra4);

if (plabra1Ordenada == palabra2Ordenada){
    console.log(`Las palabras `)
}