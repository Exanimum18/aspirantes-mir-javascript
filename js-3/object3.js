let receta = {

}

receta.nombre = "Sandwich";
receta.ingredientes = [{nombre: "Pan", cantidad: 2}];
receta.ingredientes.push({nombre: "Queso", cantidad: 1})

console.log(receta.ingredientes[0].nombre);

let resultado = 0
for (let i = 0; i < receta.ingredientes.length; i++) {
    const cantidad = receta.ingredientes[i].cantidad;
    resultado += cantidad
}

console.log(resultado);