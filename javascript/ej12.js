function contarLetras(texto) {
    const conteo = {};
    for (let letra of texto.toLowerCase()) if (letra !== " ") if (conteo[letra] === undefined) conteo[letra] = 1;
    else conteo[letra] = conteo[letra] + 1;
    return conteo;
}
//Ejecucion del codigo
let a = "";
const cadena = "banana"
let resultado = contarLetras(cadena)
for (let k in resultado) a = a + `${k} => ${resultado[k]}\n`
alert(`Cadena ingresada: "${cadena}"\nletras:\n${a}`);