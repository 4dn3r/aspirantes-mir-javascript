let receta = {
    nombre: "Sandwich",
    ingredientes: [
        {nombre:"pan", cantidad: 2},
        {nombre: "Queso", cantidad: 1}
    ]
}
console.log(receta.ingredientes[0].nombre);

let cantidad = 0
for (let i = 0; i < receta.ingredientes.length; i++) {
    cantidad = cantidad + receta.ingredientes[i].cantidad;    
}
console.log(cantidad);
