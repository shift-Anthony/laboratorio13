//Ejecucion del Codigo
let mercado = new Map([["tomate", 2.5], ["lechuga", 1], ["pan", 3.2], ["huevos", 10], ["manzanas", 6.1]]);
let total = 0;
let texto = "Lista de compras y precios:\n";
mercado.forEach(function (precio, articulo) {
    texto += `${articulo} - Precio: $${precio}\n`;
    total += precio;
});
alert(texto);
alert(`El precio total de la compra es: $${total.toFixed(2)}`);