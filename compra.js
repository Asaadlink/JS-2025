1  //vamos a comprar una determinada cantidad de un articulo y sabemos el precio de cada uno 
2 // Queremos obtener la cantidad total a pagar
const bricksleche = 3
const precioBrickLeche = 1.25

const precioTotal = (bricksleche * precioBrickLeche)
console.log(`El importe a pagar son`, precioTotal);

const articulo = [bricksleche, precioBrickLeche]

console.log(`El importe a pagar son ${(articulo[0] * articulo[1])}`)

const articulos = ["leche", "huevos", "sal", "harina"]
const cantidad = [2, 1, 1, 3]
const precios = [1.25, 3.25, .9, .78]


// Queremos obtener algo parecido a un recibo, asi:
// Leche: 2 x 1.25 = 2.50

for (let i = 0; i < articulos.length; i++) {
    const item = articulos[i];
    const quantity = cantidad[i];
    const price = precios[i];
    const total = quantity * price;

    let allTotal = 0
    allTotal += total;  
    console.log(`${item}: ${quantity} x ${price} = ${total}`);
    console.log(`Total: ${allTotal}`);
}


