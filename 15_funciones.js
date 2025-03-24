// FUNCIONES

function sumar (num1, num2) {
    return (num1 + num2);
}

let resultado = sumar(3, 4)
console.log(resultado);
sumar(234, 567)
sumar(4566788, 98879797.889999)


let numeroString = "25"
let numeroString2 = "8"
console.log(numeroString - numeroString2);
let numeroInt = parseInt(numeroString)
let numeroResta = 8
console.log(numeroInt- numeroResta);
// Vamos a tener dos fechas: 
// Una será la de nacimiento de una persona p.e.: "13-03-2000"
// La fecha de referencia p.e.: "13-03-2025"
// La edad que tenía en esa fecha de referencia

const fechaNacimiento = "12-03-2026"
const fechaReferencia = "13-03-2025"

// Paso 1: obtener dia, mes año de cada fecha
const fechaNArray = fechaNacimiento.split("-")
const fechaRArray = fechaReferencia.split("-")

const diaFechaN = parseInt(fechaNArray[0])
const mesFechaN = parseInt(fechaNArray[1])
const anyoFechaN = parseInt(fechaNArray[2])

const diaFechaR = parseInt(fechaRArray[0])
const mesFechaR = parseInt(fechaRArray[1])
const anyoFechaR = parseInt(fechaRArray[2])

let edad = anyoFechaR - anyoFechaN
if (mesFechaR < mesFechaN) {
    edad -= 1
} else if ( mesFechaN == mesFechaR && diaFechaR < diaFechaN) {
    edad -= 1
} 

console.log(`Tu edad es ${edad}`);
    


let restar = function(num1, num2) {
    console.log(num1-num2);
}

restar(9, 7)
restar(34, 55)