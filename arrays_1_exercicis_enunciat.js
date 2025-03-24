// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna función matemática
// Crea el código necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
// o cualquier otro array solo con números

// 1) Mostrar por consola la suma de todos los valores
let sum1 = 0
let sum2 = 0
let i
for (i = 0; i < arrayNumeros1.length; i++) {
  sum1 += arrayNumeros1[i];
}
console.log(sum1)

for (i = 0; i < arrayNumeros2.length; i++) {
  sum2 += arrayNumeros2[i];
}
console.log(sum2)
// 2) Mostrar por consola el promedio
let promedio1 = sum1 / arrayNumeros1.length;

console.log(promedio1); 

let promedio2 = sum2 / arrayNumeros1.length;

console.log(promedio2);



// 3) Encontrar los valores máximo y mínimo
function MaxMin(array) {
    let max = array[0]; 
    let min = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; 
        }
        if (array[i] < min) {
            min = array[i]; 
        }
    }

    return { max, min };
}
console.log(MaxMin(arrayNumeros1))
console.log(MaxMin(arrayNumeros2))
// 4) Sumar los valores con índice par y restar los impares
let impares1 = 0

for (i = 0; i < arrayNumeros1.length; i++){
    if ( i % 2 == 0){
        impares1 += arrayNumeros1[i]
    } else {
        impares1 -= arrayNumeros1[i]
    }
}

let impares2 = 0

for (i = 0; i < arrayNumeros2.length; i++){
    if ( i % 2 == 0){
        impares2 += arrayNumeros2[i]
    } else {
        impares2 -= arrayNumeros2[i]
    }
}

// Hay que mostrar por consola cada resultado

console.log("Resultado de Array 1 :", impares1);
console.log("Resultado de Array 2:", impares2);


// Para este array:
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]

// 5) Programa el código para encontrar el elemento con el texto más largo
// y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.
let TextoMasLargo = "";
let arrayMasLargos = [];

for (let i = 0; i < arrayNombres2.length; i++) {
    if (arrayNombres2[i].length > TextoMasLargo.length) {
        TextoMasLargo = arrayNombres2[i];
        arrayMasLargos = [arrayNombres2[i]];
    } else if (arrayNombres2[i].length == TextoMasLargo.length) {
        arrayMasLargos.push(arrayNombres2[i]);
    }
}

console.log("Texto Mas largo es:", TextoMasLargo);
console.log("Array del Texto mas largo es:", arrayMasLargos);

// 6) Lo mismo para el texto más corto.
let TextoCorto = arrayNombres2[0];
let arrayCorto = [];

for (let i = 0; i < arrayNombres2.length; i++) {
    if (arrayNombres2[i].length < TextoCorto.length) {
        TextoCorto = arrayNombres2[i];
        arrayCorto = [arrayNombres2[i]];
    } else if (arrayNombres2[i].length === TextoCorto.length) {
        arrayCorto.push(arrayNombres2[i]);
    }
}

console.log("el textto corto es:", TextoCorto);
console.log("array cortos son:", arrayCorto);

// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 5, 6, 5, etc.

let longitudNombres = [];

for (let i = 0; i < arrayNombres2.length; i++) {
    longitudNombres.push(arrayNombres2[i].length);
}

console.log("tamaño del nombres es:", longitudNombres);

// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

let arrayNombresConI = [];

for (let i = 0; i < arrayNombres2.length; i++) {
    if (arrayNombres2[i].includes('i')) {
        arrayNombresConI.push(arrayNombres2[i]);
    }
}

console.log("Nombres con I son:", arrayNombresConI);

// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

let arrayBidimensional = [];

for (let i = 0; i < arrayMixto.length; i += 2) {
    arrayBidimensional.push([arrayMixto[i], arrayMixto[i + 1]]);
}

console.log("2D Array:", arrayBidimensional);

// 10) Este array incluye una operación de compra:
const compra = [
    ["Leche", 1.2, 2],
    ["Pan", 0.8, 3],
    ["Huevos", 2.5, 1],
    ["Café", 5.2, 0.5]
]
// Se muestra el nombre del artículo, su precio y la cantidad comprada.
// Debes obtener la cantidad de artículos comprados (no de cada tipo) y el importe total.
// Por ejemplo: "Has comprado 4 artículos y el importe total es de 12.7 euros"

// Después añade otro articulo al array anterior y muestra de nuevo el mensaje informativo con los nuevos datos.

let totalItems = 0;
let totalCost = 0;

for (let i = 0; i < compra.length; i++) {
    totalItems += compra[i][2];
    totalCost += compra[i][1] * compra[i][2];
}

console.log(`Has comprado ${totalItems} artículos y el importe total es de ${totalCost} euros`);


compra.push(["Azúcar", 1.5, 2]);

totalItems = 0;
totalCost = 0;

for (let i = 0; i < compra.length; i++) {
    totalItems += compra[i][2];
    totalCost += compra[i][1] * compra[i][2];
}

console.log(`Has comprado ${totalItems} artículos y el importe total es de ${totalCost} euros`);