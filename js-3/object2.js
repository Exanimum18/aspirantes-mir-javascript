let persona = {
    nombre: "Santiago",
    edad: 28,
    ciudad: "Medellin",
    profesion: "Ing. Biomédico",
}

function presentacion() {
    return ( "Hola me llamo " + persona.nombre + " vivo en " + persona.ciudad + " y tengo " + persona.edad + " años");
}
console.log(persona);
let mensaje = presentacion(persona);

console.log(mensaje);
persona.hobbie = ["programar", "squash", "piano"]


console.log("Mis hobbies son: ");   
for (let i = 0; i < persona.hobbie.length; i++) {
    console.log("*", persona.hobbie[i]);
}
