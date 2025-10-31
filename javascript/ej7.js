function tieneDuplicados(array) {
    const conjunto = new Set(array);
    return conjunto.size !== array.length;
}
const prueba1 = ["Tom", "Ana", "Diego", "Juan", "Diego", "Ana", "Pedro", "Maria", "Juan", "Ana"];
const prueba2 = [1, 2, 3, 4, "a,b,c", 5, 6, 7, 8, 9, 10];
alert(`El array [${prueba1}] tiene duplicados \n True or False: ${tieneDuplicados(prueba1)}`);
alert(`El array [${prueba2}] tiene duplicados \n True or False: ${tieneDuplicados(prueba2)}`);
