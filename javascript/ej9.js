function contarPalabras(texto) {
    let contar = new Map(), resultado = "";
    palabras = texto.split(" ");
    for (palabra of palabras) {
        if (contar.has(palabra)) contar.set(palabra, contar.get(palabra) + 1);
        else contar.set(palabra, 1);
    }
    contar.forEach(function (cantidad, palabra) { resultado += `${palabra} => ${cantidad}\n` })
    return resultado;
}
//Ejecucion del Codigo
const oracion = "hola mundo hola universo mundo hola";
const oracion2 = "sol luna sol sol estrella luna";
alert(`Texto Ingresado: ${oracion}\n\nEl map retorna:\n${contarPalabras(oracion)}`);
alert(`Texto Ingresado: ${oracion2}\n\nEl map retorna:\n${contarPalabras(oracion2)}`);