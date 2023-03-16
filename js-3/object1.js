let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre);
    }
}

console.log(pedro.edad);

pedro.estatura = 1.8;
delete pedro.activo;

for (let i in pedro) {
    console.log( i + ":", pedro[i] );
}

let llaves = Object.keys(pedro);
for (let i=0; i < llaves.length; i++) {
    let llave = llaves[i];
    console.log(llave + ": " + pedro[llave]);
}

pedro.saludar();