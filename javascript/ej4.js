function filtrarYTransformar(arr) {
    let sumaTotal = 0;
    const cuadrados = arr
        .filter(num => num >= 0)
        .map(num => num * num);
    for (const cuadrado of cuadrados) sumaTotal += cuadrado;
    return [sumaTotal,cuadrados];
}

// Ejecucion del codigo
const miArreglo = [2, -3, 4, -1, 5];
alert(`El arreglo ${miArreglo} con la funcion filtrar y transformar ahora es [${filtrarYTransformar(miArreglo)[1]}].
La suma de los elementos es: ${filtrarYTransformar(miArreglo)[0]}`)