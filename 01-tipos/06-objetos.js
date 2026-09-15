let nombre = "goku";
let anime = "dragon ball";
let edad = 47;

let personaje = {
    nombre: "goku",
    anime: "dragon ball",
    edad: 47,
};

console.log (personaje);
console.log (personaje.nombre);
// console.log (personaje["anime"]);

personaje.edad = 48;
// personaje["edad"] = 49;

let llave = "edad";
personaje[llave] = 50;

delete personaje.anime;
console.log(personaje);