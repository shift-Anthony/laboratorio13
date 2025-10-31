const nombresRepetidos = ["Tom", "Ana", "Diego", "Juan", "Diego", "Ana", "Pedro", "Maria", "Juan", "Ana"];
const nombresUnicos = new Set(nombresRepetidos);
alert(`Nombres: [${nombresRepetidos}].
     en un Set ahora es [${Array.from(nombresUnicos).join(', ')}]`);
