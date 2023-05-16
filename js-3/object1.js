let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    estatura: 1.8,
    hobbies: ["programar", " squash", " piano"]
};
  
for (let propiedad in pedro) {
    console.log(propiedad + ": " + pedro[propiedad]);
}

let  saluda = {
    nombre: "Pedro Perez",
    di: function (){
        console.log("Hola, me llamo " + this.nombre);
    }
}
saluda.di();

//el valor de la propiedad de un objeto puede ser una función.
//A una función de un objeto se le llama método.

