let user = {
    id: 1,
    name: "chancho",
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ["chancho", "dragon", "gato"];

for (let indice in animales) {
    console.log(indice, animales[indice]);
}

// usarlo para acceder a propiedades del elemento de un array