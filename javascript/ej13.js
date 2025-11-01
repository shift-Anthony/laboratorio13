function combinarCatalogos(tiendaA, tiendaB) {
    const catalogoFinal = { ...tiendaA };
    for (const producto in tiendaB) {
        if (producto in catalogoFinal) catalogoFinal[producto] = Math.min(catalogoFinal[producto], tiendaB[producto]);
        else catalogoFinal[producto] = tiendaB[producto];
    }
    for (const producto in catalogoFinal) catalogoFinal[producto] = parseFloat(catalogoFinal[producto].toFixed(2));
    return catalogoFinal;
}
function leerObjeto(objeto) {
    let texto = "";
    for (let propiedad in objeto) texto += propiedad + ": " + objeto[propiedad] + "\n";
    return texto;
}

//Ejecucion del Codigo
const tienda1 = {
    laptop: 3500.5,
    mouse: 100.35,
    teclado: 250.9
};
const tienda2 = {
    mouse: 95.2,
    monitor: 720.457,
    teclado: 260.1
};
alert(`Catalogo 1:\n${leerObjeto(tienda1)}\Catalogo 2:\n${leerObjeto(tienda2)}`);
alert(`Catalogo Combinado:\n${leerObjeto(combinarCatalogos(tienda1, tienda2))}`);
