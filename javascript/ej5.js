function reordenarPalabras(oracion) {
    const palabras = oracion.split(' ');
    const palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());
    palabrasMayusculas.sort();
    return palabrasMayusculas;
}
// Ejecucion del codigo
const cadena = "sol luna estrella planeta";
alert(`La cadena: "${cadena}", luego de la funcion reordenarPalabras ahora es: [${reordenarPalabras(cadena)}]`); // Muestra ["ESTRELLA", "LUNA", "PLANETA", "SOL"]