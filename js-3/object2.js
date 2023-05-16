let persona = {
    nombre: "Adner",
    edad: 17,
    ciudad: "Bogotá",
    profesion: "Programador en formación",
    hobbies: ["Leer", "Aprender a programar"],
};
for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}
function presentacion(persona) {
    return "Mi nombre es " + persona.nombre + " tengo " + persona.edad + " años y vivo en " + persona.ciudad + "."; 
} 
let mensaje = presentacion(persona);
console.log(mensaje);