let receta = {

}

receta.nombre = "Sandwich";
receta.ingredientes = [{nombre: "Pan", cantidad: 2}];
receta.ingredientes.push({nombre: "Queso", cantidad: 1})

console.log(receta.ingredientes[0].nombre);
console.log(receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad);