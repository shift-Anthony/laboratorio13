function invertirMap(map) {
    let mapaInvertido = new Map();
    map.forEach(function (valor, clave) {
        mapaInvertido.set(valor, clave);
    });
    return mapaInvertido;
}
function mostrarResultado(map1){
    texto = "";
    map1.forEach(function (valor, clave) {
        texto += `${clave} => ${valor}\n`;
    });
    return texto;
}

//Ejecucion del Codigo
let capitales = new Map([["Peru", "Lima"], ["Chile", "Santiago"], ["Colombia", "Bogotá"], ["Argentina", "Buenos Aires"], ["Uruguay", "Montevideo"]]);
alert(`Map Original:\n\n${mostrarResultado(capitales)}`);
alert(`Map Invertido:\n\n${mostrarResultado(invertirMap(capitales))}`);