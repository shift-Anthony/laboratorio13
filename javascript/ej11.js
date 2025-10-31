let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    mostrarDetalles: function() {return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;}
}
alert(auto.mostrarDetalles());