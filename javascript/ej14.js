function gestionarEmpleados(empleados) {
    const areas = {};
    for (const empleado of empleados) {
        const area = empleado.area;
        if (!areas[area]) {
            areas[area] = {
                empleados: [],
                totalSalario: 0,
                cantidad: 0
            };
        }
        areas[area].empleados.push(empleado.nombre);
        areas[area].totalSalario += empleado.salario;
        areas[area].cantidad += 1;
    }
    const resultadoFinal = {};
    for (const area in areas) {
        const datosArea = areas[area];
        const promedio = datosArea.totalSalario / datosArea.cantidad;

        resultadoFinal[area] = {
            empleados: datosArea.empleados,
            promedio: promedio
        };
    }
    return resultadoFinal;
}


function leerObjeto(resultado) {
    let reporte = "";
    for (const area in resultado) {
        const datosArea = resultado[area];
        reporte += `${area}:`;
        reporte += ` [empleados: ${datosArea.empleados.join(", ")}]`;
        reporte += ` [promedio: ${datosArea.promedio}]\n\n`;
    }
    return reporte;
}
// Ejecucion del Codigo
const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

alert(leerObjeto(gestionarEmpleados(listaEmpleados)));